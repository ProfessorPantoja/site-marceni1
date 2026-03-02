# Projeto Marceni - Estrutura da Raiz

Este diretorio raiz guarda tudo que e comum aos agentes (`CODEX-53`, `GEMINI-30-CLI`, `GEMINI-31`).

Estrutura comum:
- `brief-mvp-marceni.md`: briefing funcional
- `pendencias-marceni.md`: checklist de pendencias
- `materiais/`: textos, prints, links, brand e referencias coletadas
- `fonte-dados-site-marceni.md`: base revisada de dados
- `dados-marceni-whatsapp-intacto-2026-03-02.md`: fonte bruta

Estrutura especifica por agente:
- `CODEX-53/`: versoes e artefatos especificos do Codex (ex: `V1/`)
- `GEMINI-30-CLI/` e `GEMINI-31/`: artefatos especificos de cada fluxo Gemini

Fluxo recomendado:
1. Guardar novos materiais em `materiais/inbox/`.
2. Mover para a subpasta certa (`textos/`, `prints/`, `links/`, etc).
3. Atualizar `pendencias-marceni.md` conforme avancar.
