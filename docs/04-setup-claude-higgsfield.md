# OLINDA ENCANTADA

## Setup Operacional — Claude + Higgsfield MCP

> **Função deste documento:** passo a passo para montar a "fábrica" exatamente como no vídeo de referência, adaptada ao nosso pipeline (Doc 02). Fazer uma vez; produzir sempre.

-----

## 1. CRIAR O PROJECT NO CLAUDE (Camada 1)

1. Em claude.ai → **Projects → New Project → "Olinda Encantada"**
2. Anexar como knowledge base os arquivos de `docs/`:
   - `01-biblia-universo.md` (fonte única de verdade do lore)
   - `02-pipeline-producao-ia.md` (como produzir)
   - `03-roadmap-estrategico.md` (o que priorizar)
   - `00-analise-video-referencia.md` (o que o stack faz)
3. Instruções do Project (colar no campo "Project instructions"):

```
Você é o copiloto de produção da série Olinda Encantada. Regras:
1. Todo lore deriva da Bíblia (Doc 01). Nunca invente fatos novos de
   universo sem sinalizar que é proposta de adição à Bíblia.
2. Todo prompt de imagem inclui o Master Style Prompt e o prompt
   canônico do personagem (producao/prompts/).
3. Roteiros seguem a estrutura de 7 passos da Bíblia (seção 8);
   decupagem segue a regra "1 plano = 1 ação".
4. Antes de aprovar qualquer entrega, aplique os 5 critérios de
   validação (Bíblia, seção 10) e as diretrizes culturais (seção 9).
5. Ao gerar assets via Higgsfield MCP: usar SEMPRE os mesmos modelos
   travados da temporada (ver Doc 04, seção 3). Gerar 4 variações,
   pedir minha escolha, nunca seguir sem curadoria.
```

-----

## 2. CONECTAR O HIGGSFIELD MCP

**Claude web/desktop:** Settings → Connectors → *Add custom connector* → nome `Higgsfield`, URL `https://mcp.higgsfield.ai/mcp` → Connect → login na conta Higgsfield (OAuth, uma vez só).

**Claude Code (terminal):**

```bash
claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp
```

Na primeira chamada de ferramenta ele abre o browser para autenticar.

**Conta Higgsfield:** começar no plano **Pro** (~600 créditos/mês — ver análise no Doc 00). Assinar só quando a Semana 2 (testes de estilo) começar; não queimar mês de créditos antes do moodboard pronto.

-----

## 3. TRAVAS DE MODELO DA TEMPORADA (Trava 5 do Doc 02)

Preencher após a bateria de testes da Semana 2 e **não mudar até o fim da temporada**:

| Função | Modelo travado | Data da trava |
|---|---|---|
| Imagem (sheets, cenários, keyframes) | *a definir — candidatos: Soul 2.0, Nano Banana Pro, Seedream 4.5* | — |
| Identidade de personagem | Soul ID (treinado por personagem) | — |
| Vídeo (image-to-video) | *a definir — candidatos: Kling 3.0, Veo 3.1, Seedance 2.0* | — |
| Voz | ElevenLabs, 1 voz fixa por personagem | — |
| Música (protótipo) | Suno | — |

**Protocolo do teste de estilo (Semana 2):** mesmo frame-teste ("Calu na ladeira à noite, lampiões acesos, Alto da Sé ao fundo") gerado nos 3 candidatos de imagem; melhor resultado animado nos 3 candidatos de vídeo. Critério: consistência de personagem > beleza do frame isolado.

-----

## 4. WORKFLOW DE EPISÓDIO COM O MCP (mapeamento ferramenta a ferramenta)

| Passo (Doc 02, seção 5) | Como fica com o MCP conectado |
|---|---|
| 1. Roteiro | Claude (Project), template da Bíblia |
| 2. Decupagem | Claude (Project) — output no formato de `producao/episodios/ep00-mvp/decupagem.md` |
| 3. Keyframes | Claude chama geração de imagem via MCP com Soul ID do personagem + cenário-base como referência. 4 variações por plano → você escolhe 1 |
| 4. Animação | Claude chama **Cinematic Image-to-Video** sobre cada keyframe aprovado (prompt de movimento da decupagem) |
| 5. Vozes | ElevenLabs (fora do MCP por enquanto) |
| 6. Música/SFX | Suno + biblioteca |
| 7. Montagem | CapCut/Premiere (humano) |
| 8. QC | `producao/checklist-qc.md` |
| 9. Publicação + cortes | YouTube; **Viral Clip Generator** (MCP) para os cortes verticais; **Virality Prediction** como sanity check do gancho |

### Disciplina de créditos

- Estimar ~10–20 créditos por imagem e ~30–100 por clipe de vídeo (varia por modelo/resolução — calibrar no primeiro mês e anotar aqui).
- Keyframes reprovados custam pouco; vídeo reprovado custa caro. **Regra: só animar keyframe aprovado.**
- Todo asset aprovado é baixado e versionado em `assets/` na hora (convenção da Trava 4). A conta Higgsfield não é o nosso storage.

-----

## 5. SEQUÊNCIA DE EXECUÇÃO (espelha a Semana 1–4 do Doc 02)

- [ ] **Semana 1:** Moodboard Mestre → fotos reais de Olinda em `assets/moodboard/`
- [ ] **Semana 2:** conectar MCP, rodar protocolo de teste de estilo, preencher a tabela de travas (seção 3)
- [ ] **Semana 3:** gerar folhas-modelo de Calu, Tico+Chico e Homem da Meia-Noite (prompts em `producao/prompts/personagens/`) → treinar Soul ID de cada um → cenário-base da ladeira
- [ ] **Semana 4:** produzir o ep00 MVP (`producao/episodios/ep00-mvp/` — roteiro e decupagem já prontos neste repo)

-----

*Documento vivo. Preencher as travas e os custos reais de crédito conforme a produção rodar.*
