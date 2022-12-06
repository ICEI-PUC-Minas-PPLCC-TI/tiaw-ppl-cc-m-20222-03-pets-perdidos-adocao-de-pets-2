<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Instituição</title>
    <script src="scripts/voltar.js"></script>
    <link rel="stylesheet" href="css/stylecadastrarinstituicao.css">
</head>

<header> 
    <a href="https://www.petz.com.br"><img  src="assets/logopetz.png" alt="" height="93px" width="104px"></a>
    <div class="logo2"><img src="assets/facebook.png"  height="50px" width="50px">
      <img src="assets/instagram.png" alt="" height="50px" width="50px">
      <img src="assets/twitter.png" alt="" height="50px" width="50px">
      <img src="assets/whatsapp.png" alt="" height="50px" width="50px">
    </div>
  </header>

<body>

    <form class="box" method="post" action="<?php echo $_SERVER['PHP_SELF'];?>"> 
        <h1>Cadastrar Instituição</h1>
        <input type="text" name="cnpj" id="cnpj" class="text-input"placeholder="CNPJ" >
        <input type="text" name="nome" placeholder="Nome" class="text-input" id="nome">
        <input type="password" name="senha" placeholder="Senha" class="text-input" id="criarsenha">
        <input type="password" name="confirmarsenha" placeholder="Confirmar Senha" class="text-input" id="confirmarsenha">
        <div><input type="submit" value="Cadastrar">
        <input type="button" name="voltar" value="Voltar" id="voltar" onclick="ftw()"></div>

     
    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST"){
            $cnpj = $_POST['cnpj'];
            $nome = $_POST['nome'];
            $senha = $_POST['senha'];
            $confirmarsenha = $_POST['confirmarsenha'];

            $verif = 0;
            $verifuser = 0; // Verifica se o usuário já existe no json

            if($senha == $confirmarsenha)
                $verif = 1;
            
            $arquivo = file_get_contents('arqJson/instituicoes.json');
            $dados = json_decode($arquivo, true);

            foreach($dados['cadastros'] as $cadastros){ // Verifica se o usuário já existe no json
                if($cadastros['cnpj'] == $cnpj)
                    $verifuser = 1;
            }

            if($verifuser == 1){
                echo '<script>alert("O CNPJ digitado já está cadastrado!")</script>';
            }else if($verif == 0){
                echo '<script>alert("As senhas não são equivalentes!")</script>';
            }else if($cnpj == '' || $nome == '' || $senha == ''){
                echo '<script>alert("Todos os campos devem estar preenchidos!")</script>';
            }else{
                
                $count=0;

                foreach($dados['cadastros'] as $cadastros){
                    $count++;
                }

                // adiciona dados
                $dados['cadastros'][$count] = array('cnpj'=>$cnpj, 'nome'=>$nome, 'senha'=>$senha);

                // encoda o json e salva no arquivo
                file_put_contents('arqJson/instituicoes.json', json_encode($dados));

                echo '<script>alert("Cadastro realizado com sucesso!")</script>';
                echo '<script>window.location.href = "index.html";</script>';
            }
        }
    ?>
    
</body>

</html>