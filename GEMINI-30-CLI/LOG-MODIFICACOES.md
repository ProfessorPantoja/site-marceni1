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

## Modelo para proximas entradas
- Data: YYYY-MM-DD
- O que mudou:
- Onde mudou (arquivo/area):
- Motivo da mudanca:
