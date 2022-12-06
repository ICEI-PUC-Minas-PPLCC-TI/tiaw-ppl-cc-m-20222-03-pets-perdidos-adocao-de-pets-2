# Informações do Projeto
`TÍTULO DO PROJETO`  

PETZ

`CURSO` 

Ciência da Computação

## Participantes

> Os membros do grupo são: 
> - Athus Wilke Souza
> - Bethania Alves Santos
> - Laura Rodrigues Portugal
> - Pedro Rocha Resende
> - Ronildo Bartolomeu Gonçalves
> - Tarcisio Ferraz Juste Silva

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

Nos dias atuais muitas pessoas possuem animais de estimação, sejam eles adotados,  resgatados ou comprados. Sendo assim, a demanda por animais domésticos está relativamente alta, acarretando na reprodução seletiva e as vezes descontrolada de tais animais. Por esses motivos, algumas pessoas ou instituições podem, às vezes, perder seus bichinhos, quando os mesmos fogem de casa, quando escapam da coleira ou de um parquinho, quando são roubados, ou, até mesmo, quando são abandonados. Isso gera também muitos cachorros e gatos de rua que se encontram vagando nas ruas sem um lar.

## Problema

O principal foco deste projeto é nos animais de estimação cão e gato. Abordando especificamente os problemas relacionados a perda ou abandono desses animais e aos animais de rua. As ruas estão cheias de cachorros e gatos de rua e tal situação é ruim não só para eles mas para as pessoas que passam pelas ruas.



## Objetivos

O projeto tem como objetivo facilitar o reencontro dos animais de estimação especificados com seus devidos donos ou instituições responsáveis, assim como a adoção de cães e gatos de rua e/ou abandonados.



## Justificativa

A principal motivação desse projeto é o desejo do grupo em ajudar pets abandonados, perdidos ou que fugiram de seus lares a se reencontrar com seus respectivos donos.

## Público-Alvo

O público-alvo são donos ou instituições que perderam seus animais de estimação, pessoas que desejam adotar cães ou gatos, instituições focadas no resgate de animais de estimação.
 
# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem trabalhados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas e Mapas de Empatia

As personas levantas durante o processo de entendimento do problema são apresentadas nas figuras que se seguem:


> **Exemplo de Persona**
 
 ![image](https://user-images.githubusercontent.com/113958847/205828028-38b1bcb9-4f5d-4ef9-97da-dd1ff73fa0c6.png)
 ![image](https://user-images.githubusercontent.com/113958847/205828094-1029796f-3f91-4655-af20-90c74bf98cac.png)





## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema/Gertrudes | Consiga ver lugares que normalmente se acham pets perdidos         | Conseguir encontrar meu pet               |
|Usuário dos sistema/Gertrudes      | Adquirir mais conhecimento no tema de pets perdidos                 | Encontrar meu pet caso ele fuja e evitar de deixa-lo fugir |
|Usuário dos sistema/Lucas    | Auxiliar pessoas a encontrarem pets perdidos                 | Ajudar pessoas a reecontrar seus pets e ajudar a diminuir o número de pets na rua |
|Usuário dos sistema/Lucas     | Eu possa doar itens que eu nao uso mais se meu pet falecer                 | Ajudar pessoas com pets a sustentar e cuidar propriamente deles  |



## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuarios, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral.Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tebela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues


|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar na página principal postagem feitas por outros usuarios | ALTA | 
|RF-002| O site deve apresentar, para cada postagem, uma imagem correspondente ao assunto | ALTA | 
|RF-003| O site deve permitir ao usuario fazer postagens sobre os seus pets perdidos | ALTA | 
|RF-004| O site deve oferecer a capacidade do usuario de se registrar e logar | ALTA | 
|RF-005| O site deve oferecer uma funcionalidade de filtro para permitir ao usuario localizar uma caracteristica especifica que sera informada no filtro | ALTA | 
|RF-006| O site deve oferecer a capacidade dos usuarios anunciarem itens para doação | ALTA | 



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser compativel com os principais navegadores do mercado |  ALTA | 
|RNF-002| O site deve ser publicado em um ambiente acessível publicamente na Internet(GitHub Pages, Heroku, Repl.it) |  MÉDIA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade | MÉDIA | 





## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo |
|02| A aplicação deve se restringir as tecnologias da Web no Frontend     |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho      |





# Projeto de Interface


## Wireframes

Conforme fluxo de telas do projeto, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura em comum que é apresentada na figura. Nesta estrutura, existem 3 grandes blocos, descritos a seguir. São eles:
-Cabeçalho: local onde são dispostos elementos fixos de identidade(logo) e navegação principal do site(menu da aplicação);
-Conteúdo: apresenta o conteúdo da tela em questão;
-Barra lateral: apresenta os elementos de navegação secundária, geralmente associados aos elementos do bloco de conteúdo.

![image](https://user-images.githubusercontent.com/113958847/205839260-d2911710-130d-46c2-9ecb-5700848c6802.png)




# Metodologia

A metodologia contempla as definições de ferramentas utilizado pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.


## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

O Git foi a ferramenta de controle de versão escolhida. Por ele nós vamos subir os arquivos para  o repositorio no Github.

# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

Para implementar a solução do projeto, foram utilizadas as linguagem HTML(HyperText Markup Language) que é o componente básico da web, e CSS, PHP e JavaScrpit.

Nossas tecnologias usadas foram: HTML, CSS, JavaScrpi, PHP, Json, Visual studio code, discord, replit, Miro e GitHub.
HTML, CSS, JavaScrpit, Json e PHP foram usados para a montagem do site. Visual studio code e replit foram usados para a compilação dos códigos. Miro, GitHub e Discord foram usados para o desenvolvimento criativo e para upload de códigos.


## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências


> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
