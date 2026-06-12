# OLINDA ENCANTADA

Universo de fantasia infantil baseado no patrimônio cultural vivo de Olinda (PE). Série animada produzida com pipeline Claude + Higgsfield MCP — este repositório é o **hub de produção** do projeto.

> *"Qual memória precisa ser salva hoje?"*

## Mapa do repositório

```
docs/                          ← base de conhecimento (anexar ao Project no Claude)
  00-analise-video-referencia.md   Análise crítica da referência Claude+Higgsfield (verificada)
  01-biblia-universo.md            Fonte única de verdade do lore
  02-pipeline-producao-ia.md       Engenharia de produção (4 camadas, 5 travas)
  03-roadmap-estrategico.md        Fases, MVP, legitimação, financiamento, riscos
  04-setup-claude-higgsfield.md    Setup operacional passo a passo

producao/
  prompts/
    master-style-prompt.md         Trava 1 — DNA visual (PT + EN)
    templates.md                   Templates de keyframe, animação e cenário
    personagens/                   Prompts canônicos: Calu, Tico+Chico, Homem da Meia-Noite
  episodios/
    ep00-mvp/                      MVP de 90s: roteiro + decupagem completos (12 planos)
  checklist-qc.md                  Gate de qualidade antes de publicar

assets/                        ← banco de assets versionado (Trava 4 — nunca sobrescrever)
  personagens/  cenarios/  episodios/  audio/  moodboard/
```

## Estado atual (jun/2026)

| Etapa | Status |
|---|---|
| Camada 1 — Base de conhecimento | ✅ Pronta (docs 00–04) |
| Camada 2 — Planejamento do MVP | ✅ Roteiro + decupagem do ep00 prontos |
| Semana 1 — Moodboard Mestre | ⬜ Fotografar Olinda → `assets/moodboard/` |
| Semana 2 — Testes de estilo + travas de modelo | ⬜ Doc 04, seção 3 |
| Semana 3 — Character sheets + Soul IDs | ⬜ Prompts prontos em `producao/prompts/personagens/` |
| Semana 4 — Produção do ep00 | ⬜ Decupagem pronta em `producao/episodios/ep00-mvp/` |
| Conversa de escuta (Thales/Luiz Adolfo) | ⬜ Marcar — perguntas no Doc 03, seção 4 |

## Como usar (ciclo de produção)

1. Criar o Project "Olinda Encantada" no Claude com os arquivos de `docs/` (instruções no Doc 04).
2. Conectar o Higgsfield MCP: `https://mcp.higgsfield.ai/mcp`.
3. Seguir o workflow do Doc 04, seção 4 — gerar 4 variações por asset, curar 1, versionar em `assets/`.
4. Todo episódio passa pelo `checklist-qc.md` antes de publicar.

## Princípios inegociáveis

- A IA resolve **produção**, não **relevância** — o diferencial é a cultura viva e o acesso aos guardiões da tradição.
- Cultura **descoberta, nunca explicada** — criança assiste aventura, não aula.
- Nada é publicado fora do style guide ou sem o gate cultural.
