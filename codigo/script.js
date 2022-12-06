function leDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  else {
    objDados = {
      contatos: [
        { opcao: "Ração", descriçao: "10kg de ração para cachorros de porte médio", telefone: "31-98795-5587", nome: "Lucas Rocha" },
        { opcao: "Remédios", descriçao: "Medicamento Otolin Ucb para Cães e Gatos (Trata infecções auriculares)", telefone: "31-98795-5587", nome: "João da Silva" },
        { opcao: "Brinquedos e camas", descriçao: "Cama rosa e roxa de tamanho médio", telefone: "31-98795-5547", nome: "Maria das Graças" },
        { opcao: "Coleiras", descriçao: "Coleira preta regulável para cachorros pequenos", telefone: "31-98795-6577", nome: "Pedro Gomes" }
      ]
    }
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados));
}

function incluirContato() {
  // Ler os dados do localStorage
  let objDados = leDados();

  // Incluir um novo contato
  let strOpcao = document.getElementById('campoOpcao').value;
  let strDescriçao = document.getElementById('campoDescriçao').value;
  let strTelefone = document.getElementById('campoTelefone').value;
  let strNome = document.getElementById('campoNome').value;
  let novoContato = {
    opcao: strOpcao,
    descriçao: strDescriçao,
    telefone: strTelefone,
    nome: strNome

  };
  objDados.contatos.push(novoContato);

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados();
}

function imprimeDados() {
  let tela1 = document.getElementById('tela1');
  let tela2 = document.getElementById('tela2');
  let tela3 = document.getElementById('tela3');
  let tela4 = document.getElementById('tela4');
  let strHtml1 = '';
  let strHtml2 = '';
  let strHtml3 = '';
  let strHtml4 = '';
  let objDados = leDados();

  for (i = 0; i < objDados.contatos.length; i++) {
    if (objDados.contatos[i].opcao == "Ração") {
      strHtml1 += `<p><li><b>Item</b>:${objDados.contatos[i].descriçao}<br><b>Contato</b>:${objDados.contatos[i].telefone} <br><b>Doador</b>:${objDados.contatos[i].nome}</p></li>`
    }
    else if (objDados.contatos[i].opcao == "Remédios") {
      strHtml2 += `<p><li><b>Item</b>:${objDados.contatos[i].descriçao}<br><b>Contato</b>:${objDados.contatos[i].telefone} <br><b>Doador</b>:${objDados.contatos[i].nome}</p></li>`
    }
    else if (objDados.contatos[i].opcao == "Brinquedos e camas") {
      strHtml3 += `<p><li><b>Item</b>:${objDados.contatos[i].descriçao}<br><b>Contato</b>:${objDados.contatos[i].telefone} <br><b>Doador</b>:${objDados.contatos[i].nome}</p></li>`
    }
    else if (objDados.contatos[i].opcao == "Coleiras") {
      strHtml4 += `<p><li><b>Item</b>:${objDados.contatos[i].descriçao}<br><b>Contato</b>:${objDados.contatos[i].telefone} <br><b>Doador</b>:${objDados.contatos[i].nome}</p></li>`
    }


  }

  tela1.innerHTML = strHtml1;
  tela2.innerHTML = strHtml2;
  tela3.innerHTML = strHtml3;
  tela4.innerHTML = strHtml4;
}

// Configura os botões
document.getElementById('btnCarregaDados').addEventListener('click', imprimeDados);
document.getElementById('btnIncluirContato').addEventListener('click', incluirContato);

