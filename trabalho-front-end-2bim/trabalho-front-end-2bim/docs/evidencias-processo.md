# Evidências do processo - Executive Transfer DF

## Descrição do caso escolhido

Site para um motorista executivo autônomo (Higor Alves), oferecendo transporte para aeroporto, eventos corporativos, transporte executivo e viagens intermunicipais, utilizando um Toyota Corolla Altis Hybrid 2024.

## Justificativa da escolha

Escolhemos esse caso porque é uma situação real e comum: muita gente em Brasília depende de motoristas particulares conhecidos por indicação. Esse motorista não tinha nenhuma página própria, só contato direto por WhatsApp, o que limita quem consegue conhecer o serviço e seus diferenciais.

## Registro do diagnóstico inicial

O diagnóstico completo está no arquivo `docs/diagnostico-inicial.md`. Em resumo, identificamos que:

- o público principal são profissionais e passageiros com viagem marcada;
- a maior dificuldade do cliente é não saber de antemão os serviços e diferenciais oferecidos;
- a ação esperada do site é levar o visitante a pedir orçamento pelo WhatsApp.

## Decisões tomadas

- **HTML**: organizamos a página em blocos (cabeçalho, hero, sobre, veículo, serviços, diferenciais, como funciona, FAQ, contato e rodapé), usando tags semânticas para cada um.
- **CSS**: definimos uma paleta mais sóbria, com preto, grafite e cinza escuro para transmitir profissionalismo e discrição, e um dourado usado nos títulos, bordas e botões principais.
- **Seção do veículo**: criamos essa seção separada porque o conforto do Corolla Altis Hybrid é um diferencial real do serviço.
- **Diferenciais em cards**: usamos cards do Bootstrap para listar os diferenciais (água, carregador, ar-condicionado, monitoramento de voo etc.) de forma visual e rápida de entender.
- **Responsividade**: usamos o grid do Bootstrap para os cards se reorganizarem automaticamente em telas menores, complementando com media queries próprias para ajustar o tamanho da fonte do hero.
- **Acessibilidade**: todas as imagens com `alt` descritivo, hierarquia de títulos respeitada e textos de link específicos (por exemplo, "Falar no WhatsApp" em vez de "clique aqui").
- **Botão flutuante de WhatsApp**: implementado só com CSS (`position: fixed`), sem necessidade de JavaScript adicional para isso.
- **Bootstrap**: usado apenas em container, grid, cards e navbar responsiva, mantendo o restante do CSS escrito por nós.

## Evidência de evolução do projeto

A primeira versão da página continha apenas o cabeçalho, o hero e a seção de contato, sem nenhum estilo aplicado (HTML puro). A partir daí:

1. adicionamos as seções de "Sobre", "Serviços" e "FAQ";
2. aplicamos o CSS, definindo cores e espaçamento;
3. em uma segunda etapa, evoluímos o projeto com a seção do veículo, a seção de diferenciais, a seção "Como funciona" e o botão flutuante de WhatsApp;
4. implementamos o JavaScript do FAQ e, depois, a confirmação de envio do formulário de contato;
5. em uma revisão final, refinamos a identidade visual, aplicando uma paleta mais escura em todas as seções, com dourado nos títulos e bordas dos cards.

(Sugestão: tirar prints da página em cada uma dessas etapas e guardar numa pasta para anexar à entrega, ou usar o histórico de commits do GitHub como evidência.)

## Explicação das funcionalidades em JavaScript

1. **FAQ expansível**: cada pergunta é um botão (`<button class="pergunta-faq">`). O JavaScript percorre todos esses botões e adiciona um evento de clique em cada um. Quando o botão é clicado, o script pega o elemento seguinte (a resposta) e alterna (`toggle`) a classe CSS `aberta`, que controla se a resposta aparece ou fica escondida.

2. **Confirmação de envio do formulário**: o formulário tem um evento de `submit`. Ao ser enviado, o JavaScript chama `event.preventDefault()` para impedir o comportamento padrão (que tentaria recarregar a página ou enviar os dados para algum lugar). Em seguida, adiciona a classe `mostrar` em uma `div` que estava escondida, fazendo a mensagem de confirmação aparecer, e limpa os campos do formulário com `formulario.reset()`.

## Descrição dos testes realizados

- Testamos a página em diferentes larguras de tela, usando o modo de inspeção do navegador (F12 → modo responsivo).
- Clicamos em cada pergunta do FAQ para confirmar que abre e fecha corretamente.
- Testamos o envio do formulário de contato e verificamos se a mensagem de confirmação aparecia corretamente, junto com a seta indicando o botão do WhatsApp.
- Verificamos se todos os links do menu (`#sobre`, `#veiculo`, `#servicos`, `#diferenciais`, `#faq`, `#contato`) rolam até a seção certa.
- Testamos a navegação usando apenas a tecla Tab do teclado, sem usar o mouse.
- Verificamos se o botão flutuante de WhatsApp permanece visível mesmo rolando a página até o fim.
- Testamos o projeto já publicado no GitHub Pages, verificando se as imagens, o CSS e o JavaScript carregam normalmente fora do ambiente local.

## Divisão de trabalho entre os integrantes

Higor César Alves Nunes e Kaio Melo de Oliveira dividimos as etapas do projeto de forma equilibrada, participando juntos do levantamento de requisitos, da estruturação do HTML, da estilização em CSS, da implementação do JavaScript, dos testes e da revisão final da documentação.
