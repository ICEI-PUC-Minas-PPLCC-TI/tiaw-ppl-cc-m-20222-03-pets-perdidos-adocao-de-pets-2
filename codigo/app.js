// declara um conjunto inicial de contatos
var db_contatos_inicial = {
  "data": [
    {
      "id": 1,
    
      "sexo": "Macho",
      "nome": "Thor",
      "especie": "Cão",
      "raça": "Yorkshire",
      "categoria": "Perdido",
      "tamanho": "Pequeno",
      "comentario": "Adora brincar",
      "idade": "6",
      "telefone": "(31)98773-3477",
      "bairro": "Lourdes"
    },
    {
      "id": 2,
      
      "sexo": "Macho",
      "nome": "Max",
      "especie": "Cão",
      "raça": "Labrador",
      "categoria": "Em adoção",
      "tamanho": "Grande",
      "comentario": "Adora passear",
      "idade": "12",
      "telefone": "(31)98773-3477",
      "bairro": "Serra"
    },

    {
      "id": 3,
      
      "sexo": "Macho",
      "nome": "Pulga",
      "especie": "Cão",
      "raça": "Maltes",
      "categoria": "Em adoção",
      "tamanho": "Pequeno",
      "comentario": "Vacinado e castrado",
      "idade": "10",
      "telefone": "(31)98993-3477",
      "bairro": "Vila da Serra"
    }
  ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
  db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1;
  if (db.data.length != 0)
    novoId = db.data[db.data.length - 1].id + 1;
  let novoContato = {
    "id": novoId,
    
    "sexo": contato.sexo,
    "nome": contato.nome,
    "especie": contato.especie,
    "raça": contato.raça,
    "categoria": contato.categoria,
    "tamanho": contato.tamanho,
    "comentario": contato.comentario,
    "idade": contato.idade,
    "telefone": contato.telefone,
    "bairro": contato.bairro
  };

  // Insere o novo objeto no array
  db.data.push(novoContato);
  displayMessage("Pet inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map(obj => obj.id).indexOf(id);

  // Altera os dados do objeto no array
    db.data[index].sexo = contato.sexo,
    db.data[index].nome = contato.nome,
    db.data[index].especie = contato.especie,
    db.data[index].raça = contato.raça,
    db.data[index].categoria = contato.categoria,
    db.data[index].tamanho = contato.tamanho,
    db.data[index].comentario = contato.comentario,
    db.data[index].idade = contato.idade,
    db.data[index].telefone = contato.telefone,
    db.data[index].bairro = contato.bairro

  displayMessage("Pet alterado com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function(element) { return element.id != id });

  displayMessage("Pet removido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_contato', JSON.stringify(db));
}







































