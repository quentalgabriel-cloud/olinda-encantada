# OLINDA ENCANTADA

## Pipeline de Produção com IA — Documento Técnico v1.0

> **Função deste documento:** decodificar a engenharia por trás do fluxo mostrado no vídeo de referência (Claude + Higgsfield MCP para jogos) e adaptá-la para produção de **episódios animados em vídeo para YouTube**, com consistência, otimização e simplicidade.

-----

## 1. A ENGENHARIA DO VÍDEO DE REFERÊNCIA, DECODIFICADA

O que o vídeo mostra não é “uma ferramenta que faz jogos”. É uma **arquitetura de produção** com 4 camadas:

### Camada 1 — Base de Conhecimento

> *“O Claude pega um PDF gigantesco de pesquisa, lê tudo e mapeia cada ponto importante.”*

A IA não cria do zero: ela é alimentada por um corpo de pesquisa denso. **No nosso caso, essa camada já existe** — são os relatórios de pesquisa cultural de Olinda + a Bíblia do Universo (Documento 01). Quanto melhor essa camada, melhor todo o resto.

### Camada 2 — Planejamento Estruturado

> *“Em seguida, ele planeja o jogo inteiro. História, mecânica, o mundo, narrativa, tudo conectado.”*

Antes de gerar qualquer asset, a IA produz um plano completo onde tudo se referencia. No nosso caso: bíblia → arco de temporada → roteiro de episódio → decupagem de cenas → lista de assets. **Nada é gerado sem estar amarrado ao plano.**

### Camada 3 — Geração de Assets com Consistência

> *“Cria personagens consistentes, cenários cinematográficos, interface e animação.”*

A palavra-chave é **consistentes**. Isso não é mágica do modelo — é engenharia de prompt + referências visuais fixas + reaproveitamento de assets. É a camada mais difícil e onde este documento mais agrega (seção 4).

### Camada 4 — Orquestração

> *“Tudo dentro de uma única conversa com a IA.”*

Um agente (Claude) chama as ferramentas certas na ordem certa via MCP/integrações. Para vídeo, a orquestração total numa conversa ainda é parcial — mas o **fluxo encadeado com templates** reproduz 90% do ganho com 10% da complexidade.

### A tradução para o nosso projeto

|Jogo (vídeo de referência)  |Olinda Encantada (vídeo/YouTube)                          |
|----------------------------|----------------------------------------------------------|
|PDF de pesquisa             |Bíblia + relatórios culturais                             |
|Game design doc             |Roteiro + decupagem de cenas                              |
|Personagens/cenários do jogo|Character sheets + cenários da série                      |
|Interface do jogo           |Identidade visual do canal (thumb, abertura, lower thirds)|
|Build jogável               |Episódio publicado                                        |


> **Aviso estratégico (do próprio material):** a IA resolve PRODUÇÃO. Não resolve RELEVÂNCIA. A execução ficou barata; criar uma franquia que uma criança ame continua difícil. O diferencial não está nas ferramentas — está na visão e no acesso à cultura viva.

-----

## 2. ARQUITETURA GERAL DO PIPELINE

```
[BÍBLIA + PESQUISA]
        │
        ▼
[1. ROTEIRO]  Claude — roteiro do episódio a partir de template
        │
        ▼
[2. DECUPAGEM]  Claude — quebra em cenas/planos + lista de assets por cena
        │
        ▼
[3. ASSETS VISUAIS]
   ├── Character sheets (uma vez, reaproveitados sempre)
   ├── Cenários-base (uma vez por locação)
   └── Keyframes por cena (imagem inicial de cada plano)
        │
        ▼
[4. ANIMAÇÃO]  image-to-video sobre os keyframes (5–10s por plano)
        │
        ▼
[5. ÁUDIO]
   ├── Vozes (TTS pt-BR com vozes fixas por personagem)
   ├── Música original "estilo frevo/ciranda" (IA ou compositor local)
   └── SFX (bibliotecas)
        │
        ▼
[6. MONTAGEM]  edição, lip-sync onde necessário, legendas, mix
        │
        ▼
[7. PUBLICAÇÃO]  YouTube + cortes verticais (Shorts/Reels/TikTok)
        │
        ▼
[8. FEEDBACK LOOP]  métricas → ajuste de personagens/histórias → bíblia
```

-----

## 3. STACK DE FERRAMENTAS POR ETAPA

> Nota: o mercado de IA generativa muda mês a mês. Tratar esta tabela como ponto de partida e revalidar versões/preços antes de fechar o stack. Critério de escolha: **consistência de personagem > qualidade de frame isolado**.

|Etapa                         |Ferramentas candidatas                                                                                                                         |Observações                                                                                                             |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
|Roteiro, decupagem, prompts   |**Claude** (Projects com a Bíblia anexada)                                                                                                     |Criar um Project “Olinda Encantada” com os 3 documentos como knowledge base — isso replica a Camada 1 do vídeo          |
|Design de personagens/cenários|**Midjourney** (character reference/omni-reference), **Higgsfield** (Soul/character consistency), **Nano Banana / Gemini Image**, **GPT Image**|Gerar a folha-modelo uma vez; depois SEMPRE gerar novas poses com imagem de referência, nunca só texto                  |
|Keyframes de cena             |Mesmo gerador dos personagens, com referência de personagem + referência de cenário juntas                                                     |Manter o mesmo modelo/versão durante a temporada inteira                                                                |
|Animação (image-to-video)     |**Higgsfield**, **Kling**, **Runway**, **Veo**, **Hailuo/MiniMax**, **Luma**                                                                   |Planos curtos (5–10s); movimentos simples; câmera descrita no prompt                                                    |
|Voz                           |**ElevenLabs** (pt-BR, vozes clonadas/designadas fixas por personagem)                                                                         |Criar e TRAVAR uma voz por personagem; considerar dubladores reais locais na fase 2 (autenticidade + custo baixo em PE) |
|Música                        |**Suno/Udio** para protótipos; **músicos locais** para versão final                                                                            |Frevo é patrimônio com compositores vivos — música original com artista pernambucano é diferencial + argumento de edital|
|Lip-sync (quando necessário)  |Recursos nativos dos geradores de vídeo, **Hedra**, **Runway Act**                                                                             |No MVP, evitar diálogo em close — usar narração + reações (reduz 70% da complexidade)                                   |
|Edição                        |**CapCut / Premiere / DaVinci**                                                                                                                |Template de projeto com abertura, cartelas e mix padrão                                                                 |
|Thumbnail/identidade          |Mesmo gerador de imagem + **Canva** (já conectado)                                                                                             |Manter grid visual do canal                                                                                             |
|Gestão de produção            |**Notion** (você já domina)                                                                                                                    |Banco de episódios, banco de assets, status por etapa                                                                   |

-----

## 4. O SISTEMA DE CONSISTÊNCIA (o coração da engenharia)

É aqui que projetos amadores falham. A consistência vem de **5 travas**:

### Trava 1 — Master Style Prompt (DNA visual da série)

Um bloco de texto fixo, anexado a TODO prompt de imagem. Rascunho inicial (refinar após o moodboard):

```
Estilo: animação infantil 2D/2.5D vibrante, inspirada em bonecos gigantes
de Olinda e mamulengos — cabeças levemente exageradas, olhos grandes e
expressivos, sobrancelhas marcantes, silhuetas fortes e reconhecíveis.
Paleta: azul-azulejo português, amarelo-casario, vermelho-bloco,
verde-portas coloniais, explosões multicoloridas de frevo.
Texturas: papel machê, renda, madeira pintada, paralelepípedo.
Iluminação: noturna mágica, lua + lampiões quentes, brilho de Encanto
(partículas douradas). Cenário: ladeiras sinuosas, casario colonial
colorido, telhados, igrejas barrocas. Tom: aconchegante, aventureiro,
nunca assustador. Aspect ratio 16:9.
```

### Trava 2 — Character Sheets canônicos

Para CADA personagem, gerar uma vez e congelar:

- **Turnaround:** frente, 3/4, perfil, costas
- **Folha de expressões:** feliz, surpreso, assustado, determinado, rindo
- **Folha de ações:** correndo, pulando, apontando, usando o dom mágico
- **Ficha de prompt canônico** (exemplo Calu):

```
CALU: menino brasileiro de pele parda, 10 anos, cabelo crespo curto
preto, olhos castanhos grandes, sorriso travesso. Veste camisa verde
e branca (homenagem ao Homem da Meia-Noite), bermuda azul, tênis
vermelho, mini-cartola pendurada nas costas. Proporção: cabeça grande
estilo boneco de Olinda. [+ Master Style Prompt]
```

A partir daí, **toda nova imagem de Calu usa as imagens da folha-modelo como referência** (character reference do Midjourney, Soul ID do Higgsfield, ou imagem-referência do Nano Banana). Texto sozinho nunca mantém consistência.

### Trava 3 — Cenários-base reutilizáveis

Gerar cada locação (Alto da Sé encantado, Mercado da Ribeira, Ladeira da Misericórdia…) em 3–4 ângulos fixos. Novas cenas naquele local = edição/variação da imagem-base, não geração do zero.

### Trava 4 — Convenção de nomes e banco de assets

```
/assets
  /personagens/calu/calu_turnaround_v2.png
  /personagens/calu/calu_expressoes_v2.png
  /cenarios/alto-da-se/altose_noite_angA_v1.png
  /episodios/ep01/cena03_keyframe_v1.png
  /episodios/ep01/cena03_video_v2.mp4
  /audio/vozes/calu_ep01_fala04.mp3
```

Regra: nunca sobrescrever; sempre versionar. O banco de assets é o ativo que se valoriza a cada episódio (custo marginal por episódio CAI com o tempo — economia inversa à animação tradicional).

### Trava 5 — Mesmo modelo, mesma versão

Travar o gerador de imagem e o de vídeo durante uma temporada. Trocar de modelo no meio = trocar de estúdio no meio da temporada.

-----

## 5. WORKFLOW PASSO A PASSO DE UM EPISÓDIO

**Pré-requisito (faz uma vez):** Project no Claude com Bíblia + este pipeline; character sheets dos 5 protagonistas + 1 mentor; 3 cenários-base; vozes definidas; template de edição.

|Passo|O quê                                                                                                           |Ferramenta       |Tempo estimado|
|-----|----------------------------------------------------------------------------------------------------------------|-----------------|--------------|
|1    |Roteiro (template da Bíblia, seção 8)                                                                           |Claude           |1–2h          |
|2    |Decupagem: quebrar em 8–15 planos; para cada plano: descrição visual, fala/narração, duração, assets necessários|Claude           |1h            |
|3    |Keyframes: gerar imagem inicial de cada plano (referência de personagem + cenário)                              |Gerador de imagem|2–4h          |
|4    |Animação: image-to-video de cada keyframe (prompt de movimento + câmera)                                        |Gerador de vídeo |2–4h          |
|5    |Vozes: gerar falas/narração com vozes fixas                                                                     |ElevenLabs       |1h            |
|6    |Música + SFX: trilha do episódio (banco próprio cresce com o tempo)                                             |Suno + biblioteca|1h            |
|7    |Montagem: cortar, sincronizar, legendar, abertura/encerramento                                                  |CapCut/Premiere  |3–5h          |
|8    |QC: passar nos 5 critérios de validação da Bíblia + revisão cultural                                            |Humano           |1h            |
|9    |Publicar + cortes verticais                                                                                     |YouTube          |1h            |

**Total realista por micro-episódio (2–4 min): 1,5 a 3 dias de trabalho de UMA pessoa.** Era isso que exigia uma equipe e meses — esta é a virada que o vídeo de referência descreve.

### Templates de prompt (prontos para uso)

**Keyframe de cena:**

```
[Master Style Prompt] + [Prompt canônico do(s) personagem(ns)] +
Cena: {descrição da ação}. Locação: {cenário-base como referência}.
Enquadramento: {plano geral / médio / close}. Hora: noite encantada.
Emoção da cena: {emoção}.
```

**Animação (image-to-video):**

```
{ação simples e única — ex: "o menino corre ladeira abaixo, a sombrinha
abre e ele plana por 2 metros"}. Câmera: {estática / travelling lateral
suave / leve push-in}. Sem cortes. Sem texto. Loop natural se possível.
```

Regra de ouro: **1 plano = 1 ação**. Planos com múltiplas ações quebram.

-----

## 6. ESTRATÉGIA DE FORMATO PARA YOUTUBE

Adaptação central do vídeo de referência: o output não é um jogo, é um **canal**.

- **Formato núcleo:** micro-episódios de 2–4 min (custo viável, retenção infantil, algoritmo)
- **Formato derivado:** Shorts de 30–60s (clipes mágicos: Beni voando de sombrinha, Chico “ganhando vida”) — motor de descoberta
- **Formato futuro:** episódios de 7–11 min quando o banco de assets estiver maduro; 22 min só em fase de licenciamento/streaming
- **Cadência MVP:** 1 micro-episódio a cada 2 semanas + 2 Shorts/semana é sustentável para uma pessoa
- **YouTube Kids:** marcar conteúdo como “feito para crianças” (COPPA) — implica sem comentários e monetização limitada; a receita real da franquia não é AdSense, é IP (licenciamento, editais, produtos — ver Documento 03)

-----

## 7. CUSTO ESTIMADO MENSAL (fase MVP)

|Item                                                   |Faixa (R$/mês)     |
|-------------------------------------------------------|-------------------|
|Gerador de imagem (Midjourney ou similar)              |60–120             |
|Gerador de vídeo (Kling/Higgsfield/Runway, plano médio)|150–500            |
|ElevenLabs                                             |30–120             |
|Suno                                                   |0–60               |
|Edição (CapCut Pro opcional)                           |0–50               |
|**Total**                                              |**~R$ 250–850/mês**|

Um piloto que custaria centenas de milhares de reais em animação tradicional vira um experimento de <R$1.000/mês + tempo. **É exatamente a redução de barreira que reativou o projeto.**

-----

## 8. ORDEM DE EXECUÇÃO TÉCNICA (primeiras 4 semanas)

1. **Semana 1 — Moodboard Mestre de Olinda** (Grupos A–E do material: referências obrigatórias, cenários, cultura, artesanato, cores). Fotografar Olinda real (você tem a 35mm e a cidade do lado — vantagem injusta).
1. **Semana 2 — Master Style Prompt + testes de estilo.** Gerar o mesmo frame-teste em 3–4 geradores; escolher e travar.
1. **Semana 3 — Character sheets** de Calu + Tico/Chico + Homem da Meia-Noite (os 3 do MVP). Cenário-base: uma ladeira icônica.
1. **Semana 4 — MVP narrativo:** vídeo de 60–120s — *“E se o Calunguinha descobrisse que os bonecos gigantes ganham vida à noite nas ladeiras de Olinda?”* (specs no Documento 03).

-----

*Documento vivo. Revalidar stack de ferramentas a cada ciclo de produção.*