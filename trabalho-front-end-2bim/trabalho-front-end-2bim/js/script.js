// script.js
// Duas funcionalidades nessa página:
// 1) FAQ expansível (abre/fecha resposta ao clicar na pergunta)
// 2) Formulário de contato (mostra mensagem de sucesso, sem enviar pra nenhum servidor)


// ===================== FAQ =====================

// pega todos os botões de pergunta que existem na página
const botoesFaq = document.querySelectorAll('.pergunta-faq');

// pra cada botão, adiciono um "escutador" de clique
botoesFaq.forEach(function (botao) {

    botao.addEventListener('click', function () {

        // a resposta é o próximo elemento depois do botão, dentro do mesmo item-faq
        const resposta = botao.nextElementSibling;

        // se a resposta já tiver a classe "aberta", eu tiro (fecha)
        // se não tiver, eu coloco (abre)
        resposta.classList.toggle('aberta');
    });

});


// ===================== FORMULÁRIO DE CONTATO =====================

const formulario = document.getElementById('formContato');
const mensagemConfirmacao = document.getElementById('confirmacaoEnvio');

formulario.addEventListener('submit', function (evento) {

    // impede que o formulário tente enviar os dados pra algum lugar
    // (não tem backend nesse projeto, é só pra fins de demonstração)
    evento.preventDefault();

    // mostra a mensagem de confirmação, adicionando a classe "mostrar"
    mensagemConfirmacao.classList.add('mostrar');

    // limpa os campos do formulário depois do envio
    formulario.reset();
});
