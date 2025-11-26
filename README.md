Projeto Integrador - 🏕️ Clube da Sobrevivência

Integrantes: Marco Antonio e Davi Tavares

Marco Antônio: Figma, HTML, CSS, Testes e Documentação.
Davi Tavares: Figma, HTML, CSS e JavaScript.

Estruturas de Pastas:

img: Pasta utilizada para armazenar todas as imagens utilizadas no projeto.
Produtos:Pasta dedicada para salvar os produtos ligados ao site.

Produtos: A listagem de todas as paginas de produtos ofertados pelo site.

Componentes: Pasta responsavel pela modulariazaçao do site.

Componentes: Pasta contendo a modularização por parte do JavaScript.

Projeto integrador parte 1:
Foi criado o prototipo do projeto junto no figma, logo apos, criamos o esqueleto do HTML e foi implementado o CSS, durante as etapas do projeto fomos apresentados ao JavaScript para implementação na tríade HTML,CSS e JavaScript.

Projeto integrador parte 2:
Ajustes finais do projeto, como a modularização, testes, revisoes, com isso aperfeiçoando o projeto, essa etapa foi essencial para o aprimoramento da nossa pratica e design, tambem um tanto desafiador.

Projeto integrador parte 3:

Espaço reservado para o GitHubPages:

https://djunera.github.io/Projeto-Integrador/

Introdução

O site Clube da Sobrevivência foi desenvolvido com o objetivo de apresentar produtos e informações voltadas para o público aventureiro, como campistas e praticantes de atividades ao ar livre.
O projeto foi criado utilizando HTML5, CSS3 e JavaScript, tecnologias essenciais para construção de páginas web modernas. Além disso, foi utilizado o GitHub Pages para a publicação do site, permitindo acesso público e gratuito.

Prototipo Figma:

https://www.figma.com/design/VkMRGxPffRNRPrxwd12JmZ/clube-da-sobrevivencia?node-id=0-1&p=f&t=Q8CLuq5wbUpzOiqI-0

tecnologias utilizadas: HTML5, CSS3, JavaScript

reflexão individuais e da dupla:

Marco Antonio:
Durante o projeto, eu percebi que trabalhar em dupla é menos complicado do que eu pensava, a funções do Github facilitam muito as atualizações do código além de programar em HTML não ser tão complicado, mais uma questão de prática.
Davi Tavares:
Durante a realização do projeto, descobri que a dinâmica em dupla funciona de forma bem mais leve do que eu esperava. As funcionalidades do GitHub ajudaram bastante no controle das versões e na colaboração. Além disso, percebi que trabalhar com HTML não é tão complexo com tempo e repetição, acaba se tornando algo natural.

dupla:
Durante o projeto, nós percebemos que trabalhar em dupla foi bem mais simples do que imaginávamos. As ferramentas do GitHub ajudaram muito na organização e na atualização do código, deixando o processo mais rápido e colaborativo. Também notamos que programar em HTML não é tão complicado com prática e paciência, tudo vai ficando mais fácil e natural para nós dois.



Estrututras de pastas:

Desenvolvimento

O projeto foi dividido em etapas de estruturação, estilização e publicação.

🔹 Estrutura (HTML)

O HTML5 foi usado para montar a base do site, separando o conteúdo em seções:

<header>: responsável pelo cabeçalho e pelo menu de navegação fixo no topo da página.

<section>: utilizada para dividir o conteúdo em partes — Início, Produtos, Sobre e Contato.

<div>: aplicada para organizar blocos internos e agrupar elementos visuais.

<footer>: adicionada ao final da página com os direitos autorais.

Essas tags foram escolhidas por oferecerem melhor organização, semântica e acessibilidade, tornando o código mais limpo e fácil de entender.

🔹 Estilo (CSS)

O CSS3 foi utilizado para criar a aparência visual do site, aplicando cores, fontes, espaçamento e efeitos.
Entre as principais propriedades usadas estão:

background → define imagens e cores de fundo para dar identidade visual.

display: flex e grid → alinham os elementos de forma responsiva, organizando os produtos em uma grade ajustável.

font-family: 'Poppins' → importada do Google Fonts para um visual mais moderno.

border-radius e box-shadow → adicionam bordas arredondadas e sombras, deixando os blocos mais suaves.

:hover → cria interações ao passar o mouse sobre os produtos e links.

position: fixed no cabeçalho → mantém o menu visível mesmo durante a rolagem.

scroll-behavior: smooth → faz a navegação entre seções acontecer de forma suave.

Esses recursos foram escolhidos para garantir um site bonito, intuitivo e funcional, com foco na experiência do usuário.

🔹 Script (Java Script)

O JavaScript deixou o site do Clube da Sobrevivência mais interativo e envolvente, permitindo que botões, textos e imagens reagissem às ações do visitante. A interação mais interessante foi a saudação personalizada, que dá boas-vindas ao usuário e o faz se sentir parte da comunidade. Aprendi que, com o uso da DOM, posso modificar elementos do site em tempo real como cores, mensagens e efeitos visuais, tornando a experiência mais dinâmica e atrativa para quem acessa.

Além disso, foram implementadas funcionalidades que melhoram a navegação, como o menu fixo ao rolar a página e a rolagem suave entre seções. O menu permanece visível no topo mesmo durante a rolagem, facilitando o acesso às áreas principais do site. Já a rolagem suave proporciona uma transição mais fluida ao clicar nos links de navegação, contribuindo para uma experiência mais moderna e agradável. Essas melhorias demonstram como o JavaScript pode transformar um site estático em uma plataforma interativa e acolhedora.


🔹 Versionamento e Publicação

O Git foi utilizado para controlar as versões do projeto, permitindo salvar alterações e manter histórico do desenvolvimento.
Após isso, o repositório foi criado no GitHub, e o site foi publicado por meio do GitHub Pages, gerando um link público de acesso ao projeto.

Conclusão

O desenvolvimento do site Clube da Sobrevivência permitiu aplicar conhecimentos práticos de HTML, CSS, Java Script e Git, resultando em um projeto funcional e visualmente atraente.
O uso das tags semânticas, da estilização moderna e da publicação via GitHub Pages demonstrou a importância de unir organização, estética e tecnologia na criação de páginas web.

O projeto cumpre seu objetivo de divulgar produtos e informações sobre aventura e sobrevivência de forma clara, organizada e profissional.

1. Revisão e Diagnóstico do Projeto Atual 
O que já estava funcionando bem?
O menu fixo, o scroll suave entre seções e o carrossel já operavam corretamente. Essas funções tornavam a navegação mais fluida e foram mantidas sem alterações significativas por já estarem funcionando bem.
Quais elementos HTML se repetiam em várias páginas?
O header, o nav e o footer eram idênticos em todas as páginas, além dos cards de produtos repetirem a mesma estrutura. Isso indicava necessidade de modularização para evitar repetição de código.
Onde o layout quebrava ou ficava estranho?
O grid de produtos apresentava desalinhamentos em telas pequenas (celulares). Algumas imagens ultrapassavam a largura e o carrossel tinha dimensões fixas, causando cortes em mobile.
Quais melhorias fariam diferença real para o usuário?
•	Corrigir a responsividade do grid.
•	Adicionar melhor acessibilidade (alt text, foco visível, skip link).
•	Modularizar o header e footer para facilitar manutenção.
•	Ajustar imagens fluidas para não distorcer no mobile.
Essas melhorias foram priorizadas e implementadas.
________________________________________
2. Modularização do Código HTML 
2.1. Componentes reutilizáveis identificados
Durante a análise, vimos que vários elementos se repetiam, principalmente:
•	Header
•	Nav
•	Footer
•	Estruturas de cards de produtos
Essas partes foram separadas para melhorar organização e facilitar manutenção.
2.2. Estrutura criada
Foi criada a pasta /componentes, contendo os arquivos:
•	header.html
•	footer.html
Esses componentes agora são carregados automaticamente em todas as páginas.
A estrutura final do projeto foi reorganizada conforme o modelo proposto: /css, /js, /componentes, /img.
2.3. Implementação da reutilização
A abordagem escolhida foi carregar componentes com JavaScript usando fetch(), pois:
•	evita repetição de código
•	facilita edição
•	não exige servidor
•	tem melhor performance visual que iframes
A função foi corrigida para usar async/await corretamente, garantindo carregamento sem erros.
Todos os componentes foram testados e funcionam em todas as páginas.
________________________________________
3. Aprimoramento de Interatividade 
O que foi revisado e melhorado?
•	O carrossel foi revisado e organizado para garantir que as imagens troquem corretamente.
•	A rolagem suave foi mantida e testada para evitar travamentos.
•	O JavaScript foi separado em arquivos distintos, deixando o código mais limpo.
Melhorias consideradas:
Foi planejada a implementação de um menu hambúrguer e botão de “voltar ao topo”, mas ainda serão adicionados em implementações futuras.
Benefícios para o usuário:
A navegação ficou mais fluida, o uso mais intuitivo e o código mais fácil de manter e atualizar.
________________________________________
4. Consolidação de Acessibilidade 
4.1. Checklist aplicado
 Foram usadas tags semânticas (header, nav, section, footer).
Hierarquia de títulos corrigida.
Todas as imagens receberam alt.
Imagens decorativas ganharam alt vazio.
Os botões e links ficaram acessíveis via teclado.
Criado um skip link para ir direto ao conteúdo.
Contraste de textos revisado.
Tamanho da fonte ajustado para boa leitura.
4.2. Testes realizados
•	Navegação completa só com teclado.
•	Análise de acessibilidade via Lighthouse no DevTools.
•	Correção dos pontos de contraste e semântica indicados pela ferramenta.
Resultado: o site ficou mais inclusivo e fácil de usar para todos os perfis de usuário.
________________________________________
5. Consolidação de Responsividade 
5.1. Testes em diferentes telas
O site foi testado nos tamanhos:
•	375px (mobile)
•	768px (tablet)
•	1280px e 1920px (desktop)
Problemas encontrados:
•	Grid desalinhado no celular
•	Carrossel muito grande no mobile
•	Imagens distorcidas ou estourando
5.2. Ajustes aplicados
•	Correção completa do grid no mobile, mantendo 1 card por linha.
•	Imagens agora são fluidas (max-width: 100%).
•	Breakpoints reorganizados.
•	Layout ajustado para manter espaçamentos adequados.
Agora o site funciona bem em qualquer dispositivo.
________________________________________
 6. Exploração de Integrações Externas
A integração escolhida foi o botão de WhatsApp, permitindo que o cliente entre em contato direto.
✔ Por que essa integração foi escolhida?
•	É útil para pequenos negócios.
•	Facilita atendimento e vendas.
•	Funciona sem JavaScript ou backend.
•	Funciona em qualquer celular.
________________________________________
7. Organização Final e Documentação 
7.1. Estrutura de arquivos reorganizada
A estrutura completa foi revisada e agora segue padrões profissionais:
•	Pastas separadas para CSS, JS, componentes, imagens e documentação.
•	Arquivos renomeados e organizados.
•	Componentes HTML isolados e carregados dinamicamente.
7.2. Comentários adicionados
Apenas comentários essenciais foram incluídos para:
•	explicar funções
•	documentar componentes
•	orientar manutenção futura
Sem excesso de comentários desnecessários.
7.3. Atualização completa do README
O README agora inclui:
•	descrição do projeto
•	funcionalidades
•	modularização
•	acessibilidade
•	responsividade
•	integrações
•	estrutura do projeto
•	autoavaliação
•	próximos passos
________________________________________
8. Autoavaliação com Rubrica 

• Professora, nós não tivemos acesso à rubrica de avaliação devido a um erro no anexo. Como não conhecíamos os critérios de avaliação, não sabíamos como realizar a auto-avaliação. Espero que entenda.

8.1. Avaliação dos critérios
•	Interatividade: Intermediário
Carrossel, scroll suave e sticky header funcionando.
•	Acessibilidade: Intermediário
Adicionados alt text, skip link, foco visível e uso de HTML semântico.
•	Responsividade: Avançado
Testado em quatro tamanhos de tela e totalmente corrigido.
•	Modularidade: Avançado
Componentes carregados dinamicamente via fetch(), reduzindo redundância.
•	Design: Intermediário
Layout limpo e funcional, mas ainda com espaço para refinamento visual.
8.2. Plano de Melhoria
•	Adicionar indicadores no carrossel.
•	Modularizar mais elementos (como cards de produto).
•	Otimizar imagens em formatos mais leves.
