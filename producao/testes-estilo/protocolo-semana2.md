# OLINDA ENCANTADA

## Protocolo de Teste de Estilo — Semana 2

> **Função deste documento:** executar a Semana 2 da ordem técnica (Doc 02, seção 8): gerar os mesmos frames-teste em 3–4 geradores, comparar com critérios objetivos, escolher UM gerador de imagem e UM de vídeo, e travar o Master Style Prompt como v1.0 (Travas 1 e 5 do sistema de consistência).

-----

## 1. O que está sendo decidido

Duas decisões irreversíveis para a Temporada 1 (Trava 5 — trocar de modelo no meio = trocar de estúdio no meio da temporada):

1. **Gerador de imagem oficial** (character sheets, cenários-base, keyframes)
2. **Gerador de vídeo oficial** (image-to-video dos planos)

Critério-mestre do Doc 02: **consistência de personagem > qualidade de frame isolado.**

## 2. Candidatos

| Imagem | Mecanismo de consistência a testar |
|---|---|
| Midjourney | `--cref` / omni-reference |
| Higgsfield (Soul) | Soul ID / character consistency |
| Nano Banana (Gemini Image) | imagem-referência no prompt |
| GPT Image | imagem-referência no prompt |

| Vídeo (image-to-video) | Nota |
|---|---|
| Higgsfield | já no setup (Doc 04) |
| Kling | forte em movimento de personagem |
| Veo | forte em física/câmera |
| Runway | forte em controle |

Testar os 4 de imagem; vídeo pode ser afunilado para 2–3 conforme orçamento do mês (Doc 02, seção 7).

## 3. Os 3 frames-teste fixos

Os mesmos três prompts, idênticos, em todos os geradores. Sempre com o Master Style Prompt (EN, v0.1) anexado. 4 gerações por prompt por gerador.

### Teste A — Protagonista em cenário (o frame do MVP)

Valida: apelo do personagem + ladeira noturna + paleta.

```
[MASTER STYLE PROMPT v0.1 - EN]
CALU: Brazilian boy with brown skin, 10 years old, short curly black
hair, big brown eyes, mischievous smile. Wears green and white shirt,
blue shorts, red sneakers, a mini top hat hanging on his back.
Proportions: large head in the style of Olinda giant puppets.
Scene: Calu stands alone in the middle of a steep cobblestone street
at night, looking up amazed at something off-screen. Colonial houses
in blue, yellow and red line the street. Warm lanterns glow. Golden
magical particles float in the air. Wide shot. Emotion: wonder.
```

### Teste B — Mentor (o teste do "boneco vivo, nunca assustador")

Valida: o desafio estético central — um boneco gigante vivo que é majestoso e acolhedor, não uncanny. É aqui que a maioria dos geradores falha.

```
[MASTER STYLE PROMPT v0.1 - EN]
THE MIDNIGHT MAN (Homem da Meia-Noite): a living giant carnival puppet,
4 meters tall, elegant and wise. Papier-mâché head with kind painted
eyes, warm gentle smile, black top hat, green and white formal tailcoat.
Scene: he leans down slightly toward the camera in a narrow colonial
street at night, moonlight behind him, as if greeting a child. His
expression is warm, grandfatherly, mysterious but NEVER scary.
Medium shot, low angle. Emotion: warmth and quiet magic.
```

### Teste C — Cenário puro (o teste da cidade-personagem)

Valida: Olinda reconhecível sem personagem; a "noite encantada" como assinatura visual da série.

```
[MASTER STYLE PROMPT v0.1 - EN]
Scene: empty winding hillside street in Olinda at night, no people.
Colorful colonial houses with tile details, baroque church tower
silhouetted against a huge moon at the top of the hill, warm street
lanterns, golden magical particles drifting like fireflies. The street
itself feels alive, gently curved like it is breathing. Establishing
wide shot. Emotion: the city is dreaming.
```

### Rodada 2 — Teste de consistência (só com os 2 finalistas)

1. Da melhor geração do Teste A, extrair a imagem de Calu como referência.
2. Gerar 4 novas cenas com Calu via character reference: correndo, rindo de perto, de costas olhando a lua, ao lado do Homem da Meia-Noite.
3. **Pergunta única: é a MESMA criança nas 4 imagens?** Se não, o gerador está eliminado, por melhor que seja o frame isolado.

## 4. Rubrica de avaliação

Nota 1–5 por critério. Pesos refletem o critério-mestre.

| Critério | Peso | O que olhar |
|---|---|---|
| Consistência de personagem (rodada 2) | ×3 | mesmo rosto, roupa, proporção entre gerações |
| "Nunca assustador" no Teste B | ×3 | o mentor dá vontade de abraçar ou de fugir? |
| Aderência à paleta | ×2 | azul-azulejo, amarelo-casario, vermelho-bloco, verde-portas presentes sem virar arco-íris genérico |
| Texturas (papel machê, renda, paralelepípedo) | ×2 | a textura artesanal aparece ou ficou plástico/3D genérico? |
| Silhueta/apelo infantil | ×2 | teste do caderno: uma criança desenharia? |
| Noite mágica legível | ×1 | escuro encantado ≠ escuro sombrio |
| Olinda reconhecível (Teste C) | ×1 | comparar com as fotos do moodboard (Doc 05, Grupo B) |
| Custo + velocidade por imagem útil | ×1 | quantas gerações até 1 aproveitável? |

**Vídeo:** animar o melhor keyframe do Teste A em cada gerador de vídeo com o prompt: `The boy slowly looks up, his eyes widen with wonder, golden particles drift upward. Camera: slow gentle push-in. No cuts. No text.` Avaliar: personagem não deforma (×3), movimento suave sem "flutuação de IA" (×2), partículas/luz mantidas (×1).

## 5. Procedimento e registro

1. Salvar TODAS as gerações em `assets/testes-estilo/{gerador}/teste-{A|B|C}-{n}.png` (nunca sobrescrever — Trava 4).
2. Preencher a rubrica numa tabela neste arquivo (ou Notion) com as notas.
3. Decidir e registrar abaixo em "Decisão final".
4. Promover o Master Style Prompt a **v1.0** em `producao/prompts/master-style-prompt.md`, incorporando o que os testes ensinarem (ex.: se todos os geradores erram a textura de papel machê, reforçar no prompt).
5. Seguir para a Semana 3 (character sheets) usando APENAS o gerador vencedor.

## 6. Decisão final (preencher ao concluir)

| Decisão | Escolha | Versão do modelo | Data | Racional em 1 linha |
|---|---|---|---|---|
| Gerador de imagem | — | — | — | — |
| Gerador de vídeo | — | — | — | — |
| Master Style Prompt | v0.1 → v1.0 | — | — | — |

-----

*Documento vivo. Executar antes da Semana 3; não gerar character sheets sem decisão registrada aqui.*
