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
