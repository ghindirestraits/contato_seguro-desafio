# Desafio | Tester

-> Este é um CRUD feito para cadastro de usuários, onde você pode criar, atualizar, filtrar e remover os cadastros. **Há apenas 1 bug funcional no CRUD**.

-> Este é um **CRUD** apenas no **lado do cliente**, ou seja, irá manter as informações armazenadas no **localStorage** do navegador.

-> Você não precisa instalar nada para executar o CRUD, apenas rodar localmente em alguma porta do seu computador (dica: utilizar Live Server). Para conferir a execução da aplicação, você pode abrir index.html no seu navegador.

As regras dos campos sendo utilizados são as seguintes:

* Nome: obrigatório para preenchimento
* E-mail: obrigatório para preenchimento
* Telefone: não obrigatório
* Data de nascimento: não obrigatório
* Cidade onde nasceu: não obrigatório

## O QUE IMPLEMENTAR?

* Criar os casos de uso sobre toda a aplicação.
* Implementar teste End-to-end com o framework Cypress ou similar de preferência.

## O QUE SERÁ VALIDADO?

* A organização dos casos de uso e do teste End-to-end;
* A gramática sobre os casos de uso;
* A descrição do erro, caso encontrado;
* A sintaxe semântica do teste End-to-end.

-> Resposta do participante
Responda aqui quais foram suas dificuldades e/ou possíveis melhorias.

## Resolução

### Servidor Utilizado

Utilizou-se o pacote Node `http-server` a fim de executar o __CRUD__. O endereço encontra-se em `implementation/test_cases/cypress.json`.

### Possíveis Melhorias

1. Todos _feedbacks_ visuais permanecem na tela após alguma ação ser executada, sendo necessária intervenção do usuário para que os mesmos sejam fechados. Desta forma, após adicionar um alterar um registro, por exemplo, os alertas persistirão na tela, podendo o usuário executar outras atividades. __Sugestão:__ alterar implementação a fim de que os alertas exijam que sejam fechados/confirmado para que o usuároi prossiga com suas ações.
1. Sempre que o usuário entra com um novo registro, não é verificado se o email é válido (se possui uma estrutura como _example@example.com.br_). __Sugestão:__ implementar verificação de estrutura de email no _backend_.
1. A entrada de dados para o campo __Data de nascimento__ utiliza o modelo de data norte-americano. Já a exibição deste mesmo dado na lista de registros segue o padrão pt_BR. __Sugestão:__ alterar o backend para que seja possível entrar com datas no modelo pt_BR.
1. Quando deseja-se pesquisar por datas de nascimento através do campo de busca, é necessário que se escreva a data no format `YYYY-MM-DD`. Além de ser extremamente pouco intuitivo, não corresponde com nenhum dos modelos utilizados anteriormente (entrada e exibição de dados. __Sugestão:__ alterar o backend para que utilize o mesmo formato da inserção de dados (de preferência pt_BR).

### Relatório de _Bugs_

#### __1 - Dado não persiste após edição__

* Tipo
  * funcional (SW)
* Descrição
  * Ao tentar editar um registro, após clicar em "Enviar", a aplicação sobrescreve o referente registro com dados _dummy_, como "nome" no campo __Nome__, "email" no campo __Email__, por exemplo.
* Pré-condições
  * Um registro deve ter sido adicionado à memória para que possa ser editado.
* Comportamento Esperado
  * A aplicação permite ao usuário editar um registro e salvar a nova informação juntamente com os dados pré-existentes.
* Comportamento Detectado
  * Ao invés disso, a aplicação exibe o modal de edição, permite ao usuário a entrada de novos dados, porém não salva os mesmos, tampouco persiste o que já existia na memória, substiuindo-os por dados __dummy__.
* Prioridade
  * Considerando que se trata de uma _feature_ funcional, a prioridade deste _bug_ é alta.
