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
  05-moodboard-referencias.md      Mapa estético (Grupos A–E) + lacunas para fotos próprias
  pesquisa/                        Relatórios que preenchem as Lacunas da Bíblia (5 + índice)
    01-mitologia-oral.md           Lendas e causos de Olinda → Top 5 para a T1
    02-catalogo-bonecos-blocos.md  Bonecos gigantes, bonequeiros e blocos infantis
    03-patrimonio-mestres.md       Patrimônio escondido + mestres a consultar
    04-editais-financiamento.md    Janelas de financiamento (18 meses) + pré-requisitos
    05-mercado-benchmark.md        Benchmarks BR, modelo Coco, COPPA/ECA, IA vs. AI slop

producao/
  prompts/
    master-style-prompt.md         Trava 1 — DNA visual (PT + EN)
    templates.md                   Templates de keyframe, animação e cenário
    personagens/                   Prompts canônicos: Calu, Tico+Chico, Homem da Meia-Noite
  testes-estilo/
    protocolo-semana2.md           Protocolo de teste de estilo + travas de modelo
  parcerias/
    kit-conversa-thales.md         Kit da conversa de escuta com os guardiões
  episodios/
    ep00-mvp/                      MVP de 90s: roteiro + decupagem completos (12 planos)
  checklist-qc.md                  Gate de qualidade antes de publicar

assets/                        ← banco de assets versionado (Trava 4 — nunca sobrescrever)
  personagens/  cenarios/  episodios/  audio/  moodboard/

.claude/                       ← config do Claude Code + framework ECC (ver seção abaixo)
  skills/ecc/   agents/   commands/   rules/ecc/   scripts/   hooks/
  settings.json                Hooks do ECC ativados em escopo de projeto
```

## Extensões — ECC (everything-claude-code)

O framework [ECC](https://github.com/affaan-m/ECC) (MIT, de Affaan Mustafa) está instalado em escopo de projeto, em `.claude/`, para ficar disponível também nas sessões do Claude Code na web. Foram adicionados **197 skills, 64 agentes, 84 comandos e regras**, mais os **hooks** do framework.

- **Skills, agentes e comandos** funcionam automaticamente — o Claude Code os descobre em `.claude/`. Use um comando ECC digitando `/<nome>`; invoque uma skill pelo nome.
- **Hooks** estão ativados em `.claude/settings.json`, com `CLAUDE_PLUGIN_ROOT` resolvido por sessão via `${CLAUDE_PROJECT_DIR}` (necessário porque o container web é efêmero). Eles rodam código Node (apenas módulos nativos) em eventos de ferramenta.
- **Comportamento a conhecer:** o ECC inclui um "GateGuard" que pede a apresentação de fatos antes do primeiro comando Bash/edição da sessão. Para ajustar:
  - desligar o gate: rodar a sessão com `ECC_GATEGUARD=off`;
  - desativar hooks específicos: `ECC_DISABLED_HOOKS="<id>,<id>"`;
  - reduzir contexto injetado no início: `ECC_SESSION_START_CONTEXT=off`.
- **Licença/atribuição:** `.claude/ECC-LICENSE` (MIT). Documentação do framework em `.claude/README.md`.
- **Atualizar o ECC:** reinstalar com o instalador oficial — `node <clone-do-ECC>/scripts/install-apply.js --target claude-project --profile full` a partir da raiz do projeto.

## Estado atual (jun/2026)

| Etapa | Status |
|---|---|
| Camada 1 — Base de conhecimento | ✅ Pronta (docs 00–05 + 5 relatórios de pesquisa em `docs/pesquisa/`) |
| Lacunas de pesquisa da Bíblia | ✅ 1–5 pesquisadas (Bíblia v1.2); ⏳ 6 (infância) depende da conversa de escuta |
| Camada 2 — Planejamento do MVP | ✅ Roteiro + decupagem do ep00 prontos |
| Semana 1 — Moodboard Mestre | 🔶 Referências CC coletadas (22 imagens + mapa estético no Doc 05); faltam fotos próprias 35mm |
| Semana 2 — Testes de estilo + travas de modelo | 🔶 Protocolo pronto em `producao/testes-estilo/`; falta executar e travar |
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
