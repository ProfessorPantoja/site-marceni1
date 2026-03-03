# Log de Modificacoes - Site Base GEMINI-30-CLI

Objetivo:
- Registrar alteracoes aplicadas no site base para manter historico de decisoes.
- A partir deste ponto, toda mudanca de conteudo/estrutura deve entrar neste log.

## 2026-03-02

### Alteracao anterior (ja aplicada)
- Endereco de atendimento completado na secao de contato com:
- `(Em cima da loja Engeluz)`
- `Bairro: Manguinhos`

### Alteracao atual
- Inserido mapa embed do Google Maps na secao de contato (referencia: Engeluz Home Center - Buzios).
- Mantido carregamento `lazy` e `referrerPolicy` para melhor comportamento de performance/privacidade.
- Placeholder da secao "Sobre" substituido pela foto real em `public/quem-e-marceni-1.png`.
- Ajustado CSS da imagem para preenchimento correto com `object-fit: cover`.
- Logo `public/logo-marceni.png` adicionada na navbar e no rodape.
- Hero atualizado para usar `public/fundo-site-marceni.webp` como fundo principal.
- Navbar atualizada para exibir somente a logo central, maior e em formato retangular (corte vertical por `object-fit: cover`), removendo o texto "Marceni Correa" do topo.
- Navbar ajustada para composicao com duas logos lado a lado:
- icone quadrado `public/logo-marceni-MC-512x512.png` (esquerda)
- wordmark retangular `public/logo-Marceni-somente-texto.jpg` (direita)
- Hero alterado para usar `public/fundo2.jpg`.
- Navbar refinada para deixar a composicao das logos menos apertada (mais altura, mais espaco e wordmark com `object-fit: contain`).
- Botao `Agendar` do topo reduzido para ficar visualmente menor (desktop e mobile).
- Removida borda/caixa da logo retangular (wordmark) no navbar para visual mais limpo.

## 2026-03-03

- Wordmark do navbar alterada de JPG para PNG transparente:
- de `public/logo-Marceni-somente-texto.jpg`
- para `public/logo-Marceni-somente-texto.png`
- Escala da composicao de logo no navbar aumentada (icone + wordmark), com altura da barra ajustada para melhor respiro no mobile.
- Ajustada referencia da wordmark no `App.tsx` com fallback para JPG em caso de troca de arquivo.
- Ajuste de escala da wordmark para ganho visual real: passou a escalar por altura (`width: auto`) mantendo proporcao do arquivo.
- Hero recebeu compensacao de padding-top para respeitar a navbar fixa e evitar texto escondido logo abaixo do topo.
- Eyebrow do hero ajustada para manter `CRP 05/67563` na mesma linha no mobile (reducao de `letter-spacing` e `font-size` responsivo).
- Headline e subheadline do hero atualizadas para linguagem direta ao publico empresario.
- Hero atualizado com nova headline: `Ajudando homens e mulheres a superar desafios`.
- Sub do hero reorganizado em lista visual com os temas: `Ansiedade`, `burnout`, `Falta de equilíbrio`, `Desequilíbrio de papéis e energias em relacionamentos` e `Inversão de papéis Familiar`.
- Frase adicionada na secao Sobre: `Psicóloga para Empreendedores Iniciantes e Empresários de Médio Porte`.
- Bloco literal incluído em Áreas de Atuação com os 5 itens do pedido da cliente (texto completo).
- Pacote de animacoes premium adicionado em todo o site:
- entrada por scroll com `IntersectionObserver` (classe `.reveal` + `is-visible`) em secoes, cards, bloco da cliente, contato e rodape.
- hero com sequencia de entrada dos elementos, chips com stagger e brilho sutil de fundo.
- microinteracoes em navbar, botoes, cards, mapa e logo do rodape.
- fallback de acessibilidade com `prefers-reduced-motion`.

### CHECKPOINT - INICIO DAS SOLICITACOES DA CLIENTE
- Data/hora de referencia: 2026-03-03
- Baseline tecnico: commit `7fe6e34`
- Regra: a partir deste ponto, as entradas abaixo representam ajustes solicitados diretamente pela cliente.

- Ajuste de copy em `Áreas de Atuação` no card `Relacionamentos` para: `Mulheres que assumem papéis masculinos e homens que assumem papéis femininos`.
- Ajuste de copy no card `Palestras` para: `Ansiedade - Exaustão Por Trabalho - Troca de Hierarquia (filhos com pais) - Inversão de Papeis (Marido e Mulher)`.
- Ajuste de copy na secao `Entre em Contato`: removido `e saúde mental` do texto introdutorio.
- Correcao de alinhamento da secao `Formatos de Atendimento` para seguir a mesma linha estrutural das demais secoes no desktop.
- Credito `Design & Desenvolvimento | Fabio Pantoja` reforcado para aparecer com destaque no desktop (mantido no mobile).
- Ajuste fino na mesma secao `Formatos de Atendimento`: centralizacao do bloco corrigida com `max-width` + `margin: 0 auto`.
- Texto de acolhimento da secao `Entre em Contato` atualizado para: `Você não precisa enfrentar esses desafios emocionais sozinho. Estou com você nesse processo.` (decisao conjunta cliente + IA Codex 5.3).

## Modelo para proximas entradas
- Data: YYYY-MM-DD
- O que mudou:
- Onde mudou (arquivo/area):
- Motivo da mudanca:
