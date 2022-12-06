function incluir ()
{
    let dadosUser = ler(); 

    // Incluir novos dados e mensagem
    let strNome = document.getElementById ('campoNome').value;
    let strEmail = document.getElementById ('campoEmail').value;
    let strMensagem = document.getElementById ('campoMensagem').value;
    let novoContato = 
    {
        nome: strNome,
        email: strEmail,
        mensagem: strMensagem
    };
    
    dadosUser.contatos.push (novoContato); 
    
    // Salvar os dados no banco de dados
    salvar (dadosUser);
    //imprimeDados();
    window.alert("Obrigado pelo contato. Recebemos sua mensagem, retornaremos em breve!");
}
function ler () // Ler dados do LocalStorage
{
    let strDados = localStorage.getItem('TiawDb');
    let dadosUser = {};

    if (strDados)
    {
        dadosUser = JSON.parse(strDados);
    }
    else
    {
      dadosUser = 
      {
        contatos: 
        [
            {
                nome:"default", email:"default@a", mensagem:"default"
            }
        ]
      }
    } 
   
    return dadosUser;
}
function salvar(dados)   
{
    localStorage.setItem ('TiawDb',JSON.stringify(dados));
}

//botão enviar (deu erro e coloquei a função direto no html)
//document.getElementById('btnEnviar').addEventListener('click',incluir); 