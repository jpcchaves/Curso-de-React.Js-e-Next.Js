Curso de React.Js + Next.Js completo do básico ao avançado. Aprenda ReactJS, NextJS, Styled-Components, testes com Jest e Testing Library, Storybook, Server-Side Rendering e demais siglas (SSR, SSG, ISR, CSR, SPA, PWA, etc...) no front-end. Aprenda, também, Strapi para criarmos APIs de back-end.

Vamos usar muitas ferramentas que não foram mencionadas nessa descrição, porém estou deixando uma breve explicação de cada uma das seções presentes no curso abaixo. Leia até o final e compreender melhor o que você vai aprender.

**Atenção:** É recomendável ter conhecimento intermediário em JavaScript, HTML e CSS para maior aproveitamento do curso. Mesmo assim, disponibilizo seções bônus de HTML, CSS, JavaScript e TypeScript para **recapitular** o conhecimento. **Sem este conhecimento, pode ser frustrante acompanhar as aulas**.

**Seção 1: Introdução**

Essa é apenas uma seção introdutória ao curso. Apenas alguns avisos e apresentações.

**Seção 2: React (O Básico)**

Essa é uma seção introdutória ao React. Voltada para quem nunca usou o React na vida mas tem conhecimento intermediário em HTML, CSS e JavaScript. Nela vamos explorar os componentes de classe e alguns lifecycle methods. Isso é importante para que você entenda como os React Hooks funcionam por baixo dos panos. Vamos consumir uma API com dados falsos e fazer deploy da nossa aplicação a fim de termos nosso site "no ar".

**Seção 3: Mock Service Worker e testes para <Home /> (Testes avançados)**

Nessa seção vamos testar o nosso componente mais complexo criado na seção anterior, a <Home />. Este componente usa vários outros componentes, fetch API para buscar dados, tem efeitos colaterais (useEffect) e várias ações que podem ocorrer na página. Por este motivo, vamos usar **Mock Service Worker, Jest e Testing Library** para testar as requisições que obtém dados externos para popular o componente. É uma seção pequena, mas bastante **divertida e avançada**, com muito conhecimento para você.

**Seção 4: Reack Hooks (Teoria e hooks avançados)**

Essa é uma seção apresentando os hooks mais importantes do React. Nela vamos usar componentes funcionais e entender como funcionam os hooks useState, useEffect, useCallback, useMemo, useRef, useContext e Context API e useReducer.

Nessa seção introduziremos a Context API e os hooks useContext e useReducer, que podem ser usados para funcionarem de maneira similar ao Redux, para criar estados globais na aplicação.

**Seção 5: Roteamento com React Router Dom**

Nesta seção vamos aprender a usar o React Router Dom para adicionarmos roteamento na nossa aplicação. O React Router Dom é muito usado para adicionar rotas no seu front-end com React. Entenderemos como ele funciona e como usar links de maneira eficaz no react.

**Seção 6: Projeto 1: Landing pages com Strapi e MongoDB (Back-end)**

Essa é uma seção especialmente feita para back-end. Vamos criar uma API Rest utilizando o Strapi, que é um Headless CMS já consagrado no Mercado. O Strapi permite que criemos nossas APIs de maneira rápida, simples e eficiente.

Vamos fazer deploy da aplicação no Heroku de forma gratuita. Você poderá acessar sua API de qualquer lugar do mundo.

Essa API será usada nas seções futuras, onde usaremos o React e o NextJS para consumir seus dados.

**Seção 7: Projeto 1: Landing pages com React (Front-end)**

Nesta seção vamos criar o nosso primeiro projeto com o React. Ela depende da seção anterior, pois usaremos o React para consumir nossa API (criada com o Strapi).

Aqui vamos começar a usar todos os recursos possível do React. Também vamos começar a usar o Storybook e realizar testes na nossa aplicação usando Jest e a Testing Library. Os testes podem ser feitos sem a necessidade de uma tela, porque aqui usaremos o jsdom para renderizarmos nosso componente via código.

Vamos fazer deploy desta aplicação a fim de termos nosso site acessível de qualquer lugar do mundo.

**Seção 8: Projeto 1: Landing pages - Deploy**

Aqui é onde vamos publicar nossa aplicação para o mundo. Faremos deploy do back-end e front-end.

**Seção 9: Next.Js com SSR, SSG e ISR (ou ISG)**

Vamos usar essa seção para reaproveitar componentes do React e gerar arquivos estáticos de HTML, CSS, JS e imagens usando "o framework do momento" - Next.js.

O NextJS permite criarmos coisas incríveis usando como base o ReactJS. Nenhum conhecimento adquirido com React é perdido, porque todos os recursos do React também funcionam no Next.js. Só precisaremos aprender sobre SSR (server-side rendering), SSG (static site generation) e ISR (incremental static regeneration). Para isso vamos usar tudo o que o Next nos disponibiliza, como roteamento, funções de data fetching e mais.

**Seção 10: Migrando o Next.js para TypeScript**

A partir dessa seção, vamos começar a usar a linguagem TypeScript. Na realidade isso não é uma linguagem de programação, mas é um superset do JavaScript (eu vou te explicar melhor no curso). Aqui nós vamos migrar todo o código escrito anteriormente com JavaScript para TypeScript.

**Seção 11: Usando create-next-app com --example**

Aqui vamos criar um exemplo com todas as configurações que fizemos em seções anteriores para utilizar o create-next-app com a flag --example. Isso vai nos permitir iniciar projetos com as configurações corretas de maneira rápida e eficaz.

**Seção 12: Projeto 2: Blog - Back-End com Strapi**

Este é o nosso segundo projeto de maior porte do curso. Vamos criar um blog com Strapi + Next.js para que você possa publicar o seu conteúdo online e se tornar mais relevante no mundo do desenvolvimento. Essa seção é focada apenas no back-end do blog, nas próximas seções vamos fazer o front-end com Next.js e demais tecnologias.

**Seção 13: GraphQL Queries com Strapi**

Nessa seção vamos dar início ao uso do GraphQL com os dados da nossa seção anterior. Vamos entender como instalar e usar o GraphQL para fazer queries (consultas) na nossa API do blog.

**Seção 14: Projeto 2: Blog - Front-end com Next.js (e React)**

Aqui vamos criar o front-end para o back-end da seção 11. Vamos usar tudo o que já foi aprendido até aqui para criarmos os componentes com React, Storybook, Jest e Testing Library e os templates das páginas com Next.js. Ao final, teremos um blog com super desempenho, porque usaremos SSG (static site generation) do Next.js para criar páginas HTML pré-renderizadas.

**Seção 15: Autenticação de usuários com Strapi**

Essa seção é super importante e divertida. Aqui vamos entender como criar um sistema de autenticação (login e logout) super seguro com _JWT Tokens_, _Cookies_ seguros com _httpOnly_ e rotas de verificação do token e do usuário. Vamos conversar sobre  ataques de _Cross-site request forgery_ (**CSRF** ou **XSRF**) e _Cross-site scripting_ (**XSS**) e como vamos implementar funcionalidades para prevenir esses tipos de ataques.

**Seção 16: GraphQL Mutations com Strapi**

Vamos aprender a criar mutations para manipular os dados do Strapi usando o GraphQL, você vai aprender a fazer um CRUD em rotas autenticadas usando ambas as ferramentas mencionadas anteriormente.

**Seção 17: Autenticação de usuários com Next.js e NextAuth.js**

Nessa seção vamos usar os dados estudados na seção 14 e 15 para criar um sistema de autenticação de usuários usando o Next.js e o NextAuth.js. Com eles teremos a possibilidade de ter sessions seguras no navegador usando cookies http only evitando assim ataques ataques de _Cross-site request forgery_ (**CSRF** ou **XSRF**) e _Cross-site scripting_ (**XSS**). Vamos sincronizar o token do usuário com o Strapi para mantermos o usuário ativo em todas as nossas páginas.

\---

**Seções Bônus**

Adicionei algumas seções bônus para você recapitular alguns conceitos importantes sobre HTML, CSS, JavaScript e TypeScript.

**Seção: HTML5 e CSS3 (Para iniciantes)**

Essa seção é uma seção recomendada para quem não conhece HTML e CSS. Vamos entender sobre tags, semântica HTML e CSS. Essa seção inclui partes avançadas do CSS, como Flexbox e Grid.

**Seção: Landing Page com HTML5 e CSS3**

Nesta seção vamos criar uma landing page linda usando o conhecimento adquirido na seção anterior como base. Também vamos fazer deploy desta aplicação para disponibilizarmos nosso site para o mundo.

**Seção: JavaScript Essencial**

Nesta seção vamos passar por partes importantes do JavaScript que são muito usadas dentro do React e Next. Vamos entender como fazer destructuring de arrays e objetos, funções, filter, map e reduce, classes, promises e a fetch API.

Estou sempre em busca de aprimoramento para este curso, então posso adicionar e/ou remover conteúdo quando achar necessário.

**Seção: TypeScript Essencial**

Nessa seção vamos entender a tipagem do TypeScript para usarmos esse superset do JavaScript junto aos nossos projetos de React.js e Next.js.

**Atenção: Este curso não é voltado para iniciantes em programação**