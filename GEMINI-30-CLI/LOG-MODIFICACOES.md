# Log de Modificacoes - Site Base GEMINI-30-CLI

Objetivo:
1. Registrar alteracoes aplicadas no site base para manter historico de decisoes.
2. A partir deste ponto, toda mudanca de conteudo/estrutura deve entrar neste log.

Contador:
Total atual de itens numerados no log: **72**

## 2026-03-02

### Alteracao anterior (ja aplicada)
3. Endereco de atendimento completado na secao de contato com:
4. `(Em cima da loja Engeluz)`
5. `Bairro: Manguinhos`

### Alteracao atual
6. Inserido mapa embed do Google Maps na secao de contato (referencia: Engeluz Home Center - Buzios).
7. Mantido carregamento `lazy` e `referrerPolicy` para melhor comportamento de performance/privacidade.
8. Placeholder da secao "Sobre" substituido pela foto real em `public/quem-e-marceni-1.png`.
9. Ajustado CSS da imagem para preenchimento correto com `object-fit: cover`.
10. Logo `public/logo-marceni.png` adicionada na navbar e no rodape.
11. Hero atualizado para usar `public/fundo-site-marceni.webp` como fundo principal.
12. Navbar atualizada para exibir somente a logo central, maior e em formato retangular (corte vertical por `object-fit: cover`), removendo o texto "Marceni Correa" do topo.
13. Navbar ajustada para composicao com duas logos lado a lado:
14. icone quadrado `public/logo-marceni-MC-512x512.png` (esquerda)
15. wordmark retangular `public/logo-Marceni-somente-texto.jpg` (direita)
16. Hero alterado para usar `public/fundo2.jpg`.
17. Navbar refinada para deixar a composicao das logos menos apertada (mais altura, mais espaco e wordmark com `object-fit: contain`).
18. Botao `Agendar` do topo reduzido para ficar visualmente menor (desktop e mobile).
19. Removida borda/caixa da logo retangular (wordmark) no navbar para visual mais limpo.

## 2026-03-03

20. Wordmark do navbar alterada de JPG para PNG transparente:
21. de `public/logo-Marceni-somente-texto.jpg`
22. para `public/logo-Marceni-somente-texto.png`
23. Escala da composicao de logo no navbar aumentada (icone + wordmark), com altura da barra ajustada para melhor respiro no mobile.
24. Ajustada referencia da wordmark no `App.tsx` com fallback para JPG em caso de troca de arquivo.
25. Ajuste de escala da wordmark para ganho visual real: passou a escalar por altura (`width: auto`) mantendo proporcao do arquivo.
26. Hero recebeu compensacao de padding-top para respeitar a navbar fixa e evitar texto escondido logo abaixo do topo.
27. Eyebrow do hero ajustada para manter `CRP 05/67563` na mesma linha no mobile (reducao de `letter-spacing` e `font-size` responsivo).
28. Headline e subheadline do hero atualizadas para linguagem direta ao publico empresario.
29. Hero atualizado com nova headline: `Ajudando homens e mulheres a superar desafios`.
30. Sub do hero reorganizado em lista visual com os temas: `Ansiedade`, `burnout`, `Falta de equilíbrio`, `Desequilíbrio de papéis e energias em relacionamentos` e `Inversão de papéis Familiar`.
31. Frase adicionada na secao Sobre: `Psicóloga para Empreendedores Iniciantes e Empresários de Médio Porte`.
32. Bloco literal incluído em Áreas de Atuação com os 5 itens do pedido da cliente (texto completo).
33. Pacote de animacoes premium adicionado em todo o site:
34. entrada por scroll com `IntersectionObserver` (classe `.reveal` + `is-visible`) em secoes, cards, bloco da cliente, contato e rodape.
35. hero com sequencia de entrada dos elementos, chips com stagger e brilho sutil de fundo.
36. microinteracoes em navbar, botoes, cards, mapa e logo do rodape.
37. fallback de acessibilidade com `prefers-reduced-motion`.

### CHECKPOINT - INICIO DAS SOLICITACOES DA CLIENTE
38. Data/hora de referencia: 2026-03-03
39. Baseline tecnico: commit `7fe6e34`
40. Regra: a partir deste ponto, as entradas abaixo representam ajustes solicitados diretamente pela cliente.

41. Ajuste de copy em `Áreas de Atuação` no card `Relacionamentos` para: `Mulheres que assumem papéis masculinos e homens que assumem papéis femininos`.
42. Ajuste de copy no card `Palestras` para: `Ansiedade - Exaustão Por Trabalho - Troca de Hierarquia (filhos com pais) - Inversão de Papeis (Marido e Mulher)`.
43. Ajuste de copy na secao `Entre em Contato`: removido `e saúde mental` do texto introdutorio.
44. Correcao de alinhamento da secao `Formatos de Atendimento` para seguir a mesma linha estrutural das demais secoes no desktop.
45. Credito `Design & Desenvolvimento | Fabio Pantoja` reforcado para aparecer com destaque no desktop (mantido no mobile).
46. Ajuste fino na mesma secao `Formatos de Atendimento`: centralizacao do bloco corrigida com `max-width` + `margin: 0 auto`.
47. Texto de acolhimento da secao `Entre em Contato` atualizado para: `Você não precisa enfrentar esses desafios emocionais sozinho. Estou com você nesse processo.` (decisao conjunta cliente + IA Codex 5.3).
48. Reversao solicitada: texto de acolhimento da secao `Entre em Contato` voltou para `Estou pronta para te acompanhar nessa jornada de autodescoberta.`.
49. Ajuste de direcionamento: no bloco de demandas, titulo alterado para `Principais Demandas de Atendimento` e frase de acolhimento inserida no proprio bloco.

### SNAPSHOT HERO - MARCO ESTRATEGICO
50. Data/hora do snapshot: **03/03/2026 22:08**.
51. Destaque: este snapshot marca rodada prioritaria de refinamento da `Hero Section`.
52. Removido da Hero: `Psicóloga & Empresária | CRP 05/67563`.
53. Reposicionado fora da Hero (secao Sobre): `Psicóloga & Empresária | CRP 05/67563`.
54. Headline principal da Hero reduzida para melhorar respiro visual e leitura.
55. Lista da Hero atualizada com os textos completos pedidos pela cliente (sem resumo).
56. Item de exaustao na Hero alterado para `Exaustão por trabalho`, com `burnout` exibido no hover.
57. Textos longos da Hero receberam desdobramento visual para manter clareza sem perder o texto integral.
58. Hero refinada com separacao em duas caixinhas distintas: `Desequilíbrio de papéis e energias em relacionamentos` e `Mulheres que assumem papéis masculinos e homens que assumem papéis femininos`.
59. Credencial `Psicóloga & Empresária | CRP 05/67563` movida para abaixo da foto da Marceni na secao Sobre.
60. Ajuste fino de espaco nas pilulas da Hero: padding interno e line-height reduzidos, com limite de largura para as longas, aproximando borda e texto no mobile.
61. Correcao de escopo no ajuste das pilulas: desktop voltou ao tamanho anterior e o encaixe de espaco foi mantido apenas no mobile.
62. Ajuste adicional mobile nas pilulas longas (4, 5 e 6): reducao de `max-width`, `padding` e `line-height` para aproximar ainda mais a borda do texto.
63. Ajuste fino no mobile: espacamento entre pilulas da Hero aumentado em `+2px` (`gap` de `8px` para `10px`).
64. Ajuste fino no mobile: pequeno aumento do espacamento entre linhas internas das pilulas para melhorar leitura dos textos quebrados.

### SNAPSHOT HERO - ANIMACAO ORBITAL PREMIUM
65. Data/hora do checkpoint: **03/03/2026 22:45**.
66. Marco: inicio da fase de animacao premium nas pilulas da Hero, com foco em movimento suave e assinatura visual.
67. Pilulas da Hero passam a realizar deslocamento radial (indo para fora e retornando ao centro) em loop continuo.
68. Movimento com variacao por item (duracao, atraso, vetor e rotacao), gerando aleatoriedade controlada e comportamento mais organico.

## Modelo para proximas entradas
69. Data: YYYY-MM-DD
70. O que mudou:
71. Onde mudou (arquivo/area):
72. Motivo da mudanca:
