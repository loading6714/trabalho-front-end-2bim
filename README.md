# Executive Transfer DF

## Integrantes

- Higor César Alves Nunes — UC26101564
- Kaio Melo de Oliveira — UC26103137

## Descrição do projeto

O Executive Transfer DF é um site fictício criado para um motorista executivo (Higor Alves), que utiliza um Toyota Corolla Altis Hybrid 2024 para realizar traslados para aeroportos, eventos corporativos e viagens agendadas em Brasília.

## Necessidade identificada

Hoje esse tipo de serviço depende só de indicação e de conversas no WhatsApp para que o cliente entenda o que é oferecido, os diferenciais do atendimento e a forma de contato. Não existe nenhuma página que reúna essas informações de forma organizada e que facilite o primeiro contato.

## Público-alvo

- profissionais que precisam de transporte para reuniões e eventos corporativos;
- pessoas com voos marcados que precisam de transporte para o aeroporto;
- pessoas que precisam de transporte para viagens entre cidades próximas a Brasília;
- quem busca um transporte mais confortável e combinado com antecedência.

## Objetivo do site

A página funciona como uma landing page: o objetivo é apresentar o serviço de forma clara e levar o visitante a entrar em contato pelo WhatsApp para solicitar um orçamento.

## Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** (arquivo externo, com media queries para responsividade)
- **Google Fonts** (fonte Poppins, importada via link no `<head>`)
- **JavaScript** puro (sem bibliotecas)
- **Bootstrap 5** (container, grid, cards e navbar responsiva)

## Estrutura de pastas

```
trabalho-front-end-2bim/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── motorista.jpg
│   └── corolla.jpg
├── docs/
│   ├── diagnostico-inicial.md
│   ├── evidencias-processo.md
│   └── declaracao-integridade.md
└── README.md
```

## Processo de desenvolvimento

1. Definimos o caso a ser trabalhado (motorista executivo autônomo) e fizemos o diagnóstico da necessidade antes de começar a programar (ver `docs/diagnostico-inicial.md`).
2. Planejamos o conteúdo da página, incluindo as seções de veículo e diferenciais, que ajudam a justificar por que o serviço é melhor do que uma corrida de aplicativo comum.
3. Montamos o HTML com as seções principais, usando tags semânticas.
4. Criamos o CSS, definindo uma paleta mais sóbria (preto, grafite e dourado discreto), pensando em transmitir profissionalismo e discrição.
5. Implementamos o JavaScript do FAQ e da confirmação de envio do formulário.
6. Aplicamos o Bootstrap no grid de serviços, nos cards de diferenciais e no menu responsivo.
7. Testamos a responsividade reduzindo a tela do navegador e usando o modo de inspeção (F12).
8. Publicamos o projeto no GitHub Pages.

## Principais decisões do projeto

- **Estrutura HTML**: usamos `header`, `nav`, `main`, `section` para cada bloco de conteúdo e `footer`. Optamos por manter um número moderado de seções (sobre, veículo, serviços, diferenciais, como funciona, FAQ e contato) para a página não ficar longa demais.
- **Paleta de cores**: preto, grafite e cinza escuro para transmitir profissionalismo e discrição, com um dourado usado nos títulos, bordas e botões de destaque.
- **Tipografia**: importamos a fonte Poppins pelo Google Fonts, aplicada em todo o site, para dar um acabamento mais elegante do que as fontes padrão do navegador.
- **Hover e transições leves**: os cards de serviço e diferenciais têm uma leve elevação e sombra discreta ao passar o mouse, e os botões têm uma transição suave de cor. Isso foi feito só com `transition` e `box-shadow` no CSS, sem nenhuma biblioteca de animação.
- **Seção do veículo**: criamos uma seção separada para o Corolla Altis Hybrid porque o conforto do carro é um diferencial real do serviço, e isso ajuda o visitante a entender o que está contratando.
- **Diferenciais em cards**: usamos o sistema de cards do Bootstrap para listar os diferenciais (água, carregador, ar-condicionado etc.) de forma rápida de visualizar, sem precisar de parágrafos longos.
- **Responsividade**: usamos o grid do Bootstrap (`col-md`, `col-lg`) para os cards se reorganizarem em telas menores, complementando com media queries próprias para ajustar o tamanho dos textos do hero.
- **Acessibilidade**: todas as imagens têm atributo `alt` descritivo, os títulos seguem ordem hierárquica (h1 > h2 > h3), os ícones decorativos da seção de diferenciais têm `aria-hidden="true"` (para não serem lidos por leitores de tela, já que o texto ao lado já descreve o diferencial), e os links têm texto que explica para onde levam.
- **Botão flutuante de WhatsApp**: implementado apenas com CSS (`position: fixed`), sem nenhum JavaScript adicional, para ficar sempre visível enquanto o visitante rola a página.

## Funcionalidades em JavaScript

Implementamos duas funcionalidades, ambas com JavaScript puro:

1. **FAQ expansível**: cada pergunta é um botão; ao clicar, a resposta correspondente aparece embaixo, e clicando de novo ela se esconde. Isso é feito alternando (`classList.toggle()`) uma classe CSS chamada `aberta` na resposta.

2. **Confirmação de envio do formulário**: ao clicar em "Enviar mensagem", o JavaScript impede o envio padrão do formulário (`event.preventDefault()`, já que não existe nenhum servidor recebendo esses dados) e exibe uma mensagem de confirmação na tela, adicionando a classe `mostrar` a um elemento que antes estava escondido. A mensagem orienta o visitante a usar o WhatsApp para um atendimento mais rápido.

## Uso de Bootstrap

Usamos o Bootstrap de forma introdutória em três pontos:

- **Container e grid** (`container`, `row`, `col-md`, `col-lg`): para organizar as seções de serviços, diferenciais e "como funciona" de forma responsiva.
- **Cards** (`card`, `card-body`, `card-title`, `card-text`): para apresentar cada serviço e cada diferencial de forma padronizada.
- **Navbar responsiva** (`navbar`, `navbar-toggler`, `collapse`): para o menu se transformar em um botão "hambúrguer" em telas pequenas.

Não usamos nenhum outro componente do Bootstrap além desses, para manter o projeto compatível com o nível da disciplina.

## Testes realizados

- Testamos a página em diferentes larguras de tela usando a ferramenta de inspeção do navegador (modo responsivo do F12), simulando celular, tablet e desktop.
- Verificamos se o menu hambúrguer abre e fecha corretamente no modo mobile.
- Testamos o clique em todas as perguntas do FAQ para confirmar que abrem e fecham sem erro.
- Testamos o envio do formulário de contato, verificando se a mensagem de confirmação aparece corretamente e se os campos são limpos depois do envio.
- Verificamos se todos os links de navegação (`#sobre`, `#veiculo`, `#servicos`, etc.) levam para a seção correta.
- Testamos a navegação usando apenas o teclado (tecla Tab), para garantir que os links e botões do FAQ pudessem ser acessados sem o mouse.
- Testamos o projeto publicado no GitHub Pages, verificando se imagens, CSS e JavaScript carregam corretamente fora do ambiente local.

## Contribuição dos Integrantes

O projeto foi desenvolvido em colaboração pelos dois integrantes da equipe.

As atividades foram divididas de forma equilibrada entre os participantes, incluindo:

- levantamento de requisitos;
- planejamento da estrutura do site;
- desenvolvimento do HTML;
- estilização com CSS;
- implementação em JavaScript;
- testes de funcionamento;
- revisão da documentação;
- organização dos arquivos para entrega;
- validação final do projeto.

Ambos participaram ativamente de todas as etapas do desenvolvimento.

## Links

-repositório GitHub:https://github.com/loading6714/trabalho-front-end-2bim

-GitHub Pages:https://loading6714.github.io/trabalho-front-end-2bim/
- Repositório GitHub: [INSERIR LINK]
- GitHub Pages: [INSERIR LINK]
