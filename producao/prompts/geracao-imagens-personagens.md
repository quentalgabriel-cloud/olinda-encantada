# Geração de Imagens — Prompts dos Personagens + Pôster de Lançamento

> **Função:** documento operacional único para gerar as imagens de referência de **cada personagem** e o **pôster/banner de lançamento** de *Olinda Encantada*.
> **Fonte de verdade:** Bíblia (`docs/01-biblia-universo.md`, seções 3, 4, 7, 9) e Master Style Prompt (`producao/prompts/master-style-prompt.md`, Trava 1). O texto canônico de cada personagem vive em `producao/prompts/personagens/` — este documento o consolida para sessões de geração.
> **Ferramenta-alvo:** Higgsfield MCP (pipeline oficial, Trava 5). Os prompts estão em linguagem natural portável; ver §6 para adaptar a Midjourney / Flux / Nano Banana / Ideogram / Seedream.
> **Status:** v0.1 — Calu, Tico+Chico e Homem da Meia-Noite usam texto **canônico travado**; Nina, Beni e Lia são **derivação fiel da Bíblia, pendente de travamento de design e validação cultural** (Doc 03, seção 4).

---

## 0. Como usar este documento (workflow por personagem)

1. Monte o prompt final = **Master Style Prompt (§1)** + **bloco do personagem (§3)** + **modo de geração (§2: model sheet OU hero shot)**.
2. Gere **4 variações** por asset (Doc 04, seção 4).
3. Cure **1**, versione em `assets/personagens/<nome>/` seguindo a convenção `nome_tipo_v1.png` (Trava 4 — nunca sobrescrever).
4. Junte ~20 imagens curadas → treine o **Soul ID** do personagem no Higgsfield (`calu_v1`, `nina_v1`, etc.).
5. Passe pelo gate: `producao/checklist-qc.md` antes de publicar qualquer coisa.

> **Por que model sheet ≠ cena:** a folha-modelo (turnaround/expressões) usa **fundo neutro** para o gerador isolar o design e o Soul ID treinar limpo. As imagens "de cena/hero" usam o cenário noturno completo do Master Style. Os dois modos estão em §2.

---

## 1. Master Style Prompt (Trava 1 — colar em TODO prompt)

```
Style: vibrant 2D/2.5D children's animation inspired by the giant carnival
puppets (bonecos gigantes) of Olinda, Brazil, and mamulengo hand puppets —
slightly oversized heads, big expressive eyes, bold eyebrows, strong
recognizable silhouettes.
Palette: Portuguese-tile blue, colonial-house yellow, carnival-block red,
colonial-door green, multicolored frevo bursts.
Textures: papier-mâché, lace, painted wood, cobblestone.
Lighting: magical night, moonlight plus warm street lanterns, enchanted
golden-particle glow.
Setting: winding hillside streets, colorful colonial houses, rooftops,
baroque churches.
Tone: cozy, adventurous, never scary.
```

---

## 2. Os dois modos de geração

### Modo A — Folha-modelo (model sheet / turnaround)
Use para construir o dataset do Soul ID.

```
[Master Style Prompt]
[Bloco do personagem — §3]
Character model sheet: full-body turnaround on a clean neutral studio
backdrop (soft warm grey with a faint Portuguese-tile-blue tint and a few
gentle golden particles), even soft lighting, no scenery, no props beyond
the character's signature item.
Layout: four full-body views in one row — front, 3/4, side profile, back.
Consistent proportions and colors across all four views.
Aspect ratio 16:9.
```

E uma folha separada de expressões:

```
[Master Style Prompt]
[Bloco do personagem — §3]
Expression sheet: same character, head-and-shoulders, six expressions in a
grid on the same neutral backdrop — {ver "Expressões" do personagem}.
Identical face design across all six. Aspect ratio 16:9.
```

### Modo B — Hero shot (retrato de cena, para pôster/divulgação)

```
[Master Style Prompt]
[Bloco do personagem — §3]
Scene: a single hero portrait of the character, confident pose, looking
toward the viewer. Location: a winding Olinda colonial street at enchanted
night, colorful houses and a baroque church silhouette softly out of focus
behind. Framing: medium shot, slight low angle to feel heroic.
Time: enchanted night. Emotion: warm and inviting.
Aspect ratio 4:5.
```

---

## 3. Os personagens

> Ordem: os 5 protagonistas (a Turminha) + o mentor Homem da Meia-Noite.
> Diversidade (Bíblia §9.5): o elenco reflete uma Olinda miscigenada — a distribuição de pele/traços abaixo é **intencional**, e deve ser validada com a comunidade (§9.6). Não é decorativa.

---

### 3.1 CALU — *o aventureiro* (10 anos) — **CANÔNICO**

**Representa:** AVENTURA. Curioso, impulsivo, energia do grupo. (Bíblia §3)

```
CALU: 10-year-old Brazilian boy, brown skin (pele parda), short curly black
hair, big brown eyes, mischievous smile. Wears a green-and-white shirt
(homage to the Homem da Meia-Noite giant puppet), blue shorts, red sneakers,
a tiny top hat hanging on his back. Proportions: oversized head in the style
of Olinda giant puppets.
```

- **Adereço-assinatura:** mini-cartola pendurada nas costas (eco do Homem da Meia-Noite — o herói que ele admira).
- **Paleta-âncora:** verde + branco (camisa), vermelho (tênis).
- **Expressões (folha):** feliz, surpreso, assustado, determinado, rindo, maravilhado.
- **Ações (folha):** correndo ladeira abaixo, pulando, apontando, escalando, se escondendo.
- **Travar / evitar:** manter a mini-cartola sempre presente; não trocar o verde/branco da camisa (é homenagem canônica).
- **Saída:** `assets/personagens/calu/` → Soul ID `calu_v1`.

---

### 3.2 NINA — *a guardiã do conhecimento* (10 anos) — **DERIVADO v0.1**

**Representa:** CONHECIMENTO. Ao tocar azulejos antigos, enxerga memórias do passado (a "arqueóloga" da turma). Metódica, apaixonada por histórias, cética saudável. (Bíblia §3)

```
NINA: 10-year-old Brazilian girl, warm dark-brown skin (Afro-Brazilian),
black hair in two neat braids tied with small blue-and-white azulejo-pattern
clips, big curious brown eyes, bold eyebrows, round glasses. Wears a
blue-and-white pinafore dress patterned after Portuguese tiles (azulejo)
with a white collar, and a worn little leather satchel holding a notebook
and chalk for tile-rubbings. She holds a small painted azulejo tile fragment
that glows softly blue when she touches it (her magic focus). Proportions:
oversized head in the style of Olinda giant puppets.
```

- **Adereço-assinatura:** o fragmento de azulejo que brilha azul + a bolsa de anotações.
- **Paleta-âncora:** azul-azulejo + branco.
- **Expressões (folha):** concentrada, maravilhada (vendo uma memória), cética/sobrancelha erguida, empolgada com uma descoberta, séria, sorriso gentil.
- **Ações (folha):** tocando um azulejo na parede (mão brilhando), anotando no caderno, ajustando os óculos, apontando uma pista, abraçando um livro.
- **Travar / evitar:** os óculos e as duas tranças são a silhueta dela — manter sempre; não cair em "menininha de escola genérica"; garantir proporção de cabeça grande estilo boneco de Olinda.
- **Saída:** `assets/personagens/nina/` → Soul ID `nina_v1`.

---

### 3.3 BENI (ou Bento) — *o veloz* (11 anos) — **DERIVADO v0.1**

**Representa:** IMAGINAÇÃO / MOVIMENTO. Sombrinha de frevo que permite saltos, planagens e manobras. Impulsivo, corre pelas ladeiras como ninguém. (Bíblia §3)

```
BENI (Bento): 11-year-old Afro-Brazilian boy, dark-brown skin, short cropped
hair, lean athletic build, wide confident grin, bold eyebrows. Dressed as a
young frevo passista — a bright multicolored short jacket with ribbons and
suggested sequins (stylized, not photoreal), rolled-up trousers, light fast
sneakers built for running. He always carries his signature open frevo
umbrella (sombrinha de frevo) in vivid rainbow colors. Subtle motion-lines
around him suggest speed. Proportions: oversized head in the style of Olinda
giant puppets.
```

- **Adereço-assinatura:** a sombrinha de frevo multicolorida, **sempre aberta e vívida** — é o ícone dele.
- **Paleta-âncora:** explosão multicolor de frevo (com vermelho/amarelo dominando).
- **Expressões (folha):** rindo no auge da corrida, foco de manobra, espanto, confiança/desafio, cansado-mas-feliz, surpresa.
- **Ações (folha):** correndo ladeira abaixo, saltando com a sombrinha aberta, planando, girando a sombrinha, freando em derrapagem.
- **Travar / evitar:** a sombrinha é inseparável; manter silhueta de passista legível — não sobrecarregar o figurino a ponto de virar ruído; pele escura (representação Afro-pernambucana do frevo) é intencional.
- **Saída:** `assets/personagens/beni/` → Soul ID `beni_v1`.

---

### 3.4 LIA — *a conectora* (9 anos) — **DERIVADO v0.1**

**Representa:** CONEXÃO HUMANA. Quando canta ciranda, une pessoas que estão brigadas. A mais nova; empática, faz amigos em qualquer lugar. (Bíblia §3)

```
LIA: 9-year-old Brazilian girl, the youngest of the group, light-brown
mestiça skin, wavy dark hair adorned with small white lace flowers, big
gentle eyes, soft round cheeks. Wears a wide twirling ciranda skirt in warm
colonial-yellow with white lace trim, a simple blouse, and simple sandals.
When she sings, soft golden Encanto particles and delicate lace-like threads
of light spread out and gently connect the people around her. Proportions:
oversized head in the style of Olinda giant puppets.
```

- **Adereço-assinatura:** a saia rodada de ciranda + os fios de luz/renda dourados quando canta (manifestação do Encanto).
- **Paleta-âncora:** branco-renda + amarelo-casario, com toque de "estrelas/mar" (eco da Dona Ciranda, Bíblia §5).
- **Expressões (folha):** cantando de olhos fechados, sorriso acolhedor, preocupada com um amigo, encantada, tímida-corajosa, rindo.
- **Ações (folha):** rodando a saia na dança, estendendo a mão, cantando (partículas saindo), unindo as mãos de duas pessoas, sentada na roda.
- **Travar / evitar:** é a menor e mais nova — sem infantilizar a ponto de tirar a agência dela; a renda e a saia rodada são a assinatura; usar a textura "renda" do Master Style aqui.
- **Saída:** `assets/personagens/lia/` → Soul ID `lia_v1`.

---

### 3.5 TICO & CHICO — *o engraçado* (8 anos + mamulengo) — **CANÔNICO**

**Representa:** HUMOR. Tico **NUNCA** aparece sem Chico. Mistério permanente: Chico está vivo? Ninguém sabe. (Bíblia §3)

```
TICO: 8-year-old Brazilian boy, light brown skin, messy dark hair,
gap-toothed grin, round cheeks, slightly shorter than his friends. Wears a
yellow t-shirt with colorful patches, rolled-up jeans, worn sandals, a small
backpack full of carnival-scrap gadgets.
He always carries CHICO: a mamulengo hand puppet made of painted wood and
cloth, red pointed hat, patched colorful outfit, painted-on cheerful face
with one eyebrow raised — Chico's expression seems to change subtly between
shots (is he alive? nobody knows).
Proportions: oversized heads in the style of Olinda giant puppets.
```

- **Adereço-assinatura:** Chico (na mão, sempre) + a mochilinha de engenhocas de sucata de carnaval.
- **Paleta-âncora:** amarelo com remendos coloridos; Chico com chapéu vermelho.
- **Expressões (folha de Tico):** rindo, espanto cômico, medo exagerado, ideia genial, suspeita, orgulho. **Folha separada de Chico:** 3 ângulos + 3 micro-expressões (material das gags — a sobrancelha que muda).
- **Travar / evitar:** gerar Tico **sempre com Chico na mão**; Chico mantém design fixo, só a micro-expressão varia (é a piada).
- **Saída:** `assets/personagens/tico-chico/` → Soul ID `tico_chico_v1`.

---

### 3.6 HOMEM DA MEIA-NOITE — *Guardião Supremo* (mentor) — **CANÔNICO**

> ⚠️ **Diretriz cultural (Bíblia §9):** figura inspirada no boneco real (1931, Patrimônio Vivo de PE). Tratar SEMPRE com majestade e calor — misterioso, **nunca assustador**. O fraque real é verde e branco; **validar o design com os guardiões da tradição antes de publicar** (Doc 03, seção 4).

```
HOMEM DA MEIA-NOITE (Midnight Man): a majestic giant carnival puppet come to
life, towering over the colonial houses (about three stories tall). Elegant
black tailcoat (fraque) over a green-and-white striped shirt, white gloves,
tall black top hat, neat dark mustache, warm wise eyes that glow softly like
street lanterns. Carries an ornate golden key (the key of the city). Moves
with slow, dignified grace. Made of papier-mâché and painted wood textures,
visibly handcrafted. Mysterious and grand but warm and kind — never
frightening. Proportions: classic Olinda giant puppet (huge head, long rigid
body).
```

- **Adereço-assinatura:** a chave dourada da cidade + a cartola alta. Olhos que brilham como lampião.
- **Expressões (folha):** sereno, sorriso sutil, olhar que "vê você", despertar (olhos acendendo).
- **Ações (folha):** despertando da imobilidade, inclinando-se devagar, estendendo a mão, caminhando entre os casarões. Incluir **referência de escala** ao lado de um casario (~3 andares).
- **Travar / evitar:** jamais sombrio/horror; sempre caloroso; não publicar sem o gate de validação cultural.
- **Saída:** `assets/personagens/homem-da-meia-noite/` → Soul ID `hmn_v1`.

---

## 4. Matriz de detalhes obrigatórios (checklist de "cada detalhe necessário")

Todo prompt de personagem precisa cravar estas 19 dimensões. Use como QA antes de gerar:

| # | Dimensão | Onde está |
|---|----------|-----------|
| 1 | DNA de estilo (2D/2.5D, boneco de Olinda) | Master Style §1 |
| 2 | Proporção (cabeça grande, silhueta forte) | "Proportions:" em cada bloco |
| 3 | Pele (tom intencional, diversidade) | linha de identidade |
| 4 | Cabelo (forma + cor) | linha de identidade |
| 5 | Olhos + sobrancelhas marcantes | linha de identidade |
| 6 | Figurino canônico (cores fixas) | bloco do personagem |
| 7 | Adereço-assinatura (foco mágico/prop) | "Adereço-assinatura" |
| 8 | Paleta-âncora do personagem | "Paleta-âncora" |
| 9 | Textura (papel machê, renda, madeira) | Master Style §1 |
| 10 | Silhueta reconhecível | proporção + adereço |
| 11 | Iluminação (noite mágica / neutra p/ sheet) | §2 modo A vs B |
| 12 | Fundo (neutro p/ model sheet, cena p/ hero) | §2 |
| 13 | Enquadramento / turnaround (4 vistas) | §2 modo A |
| 14 | Expressões (folha de 6) | bloco do personagem |
| 15 | Ações (lista p/ dataset) | bloco do personagem |
| 16 | Aspect ratio (16:9 sheet / 4:5 hero / 2:3 pôster) | §2 e §7 |
| 17 | Negativos / proibições | §5 |
| 18 | Consistência (Soul ID / ref de imagem) | §0 e §6 |
| 19 | Gate cultural (HMN, orixás, marcas) | Bíblia §9 / §5 |

---

## 5. Negativos universais (anexar como "avoid" / negative prompt)

```
Avoid: photorealism, 3D Pixar plastic look, horror, scary or threatening
faces, dark gritty mood, generic western-cartoon clichés, extra fingers,
deformed hands, asymmetrical eyes, text, watermark, logo, signature, UI,
modern clothing brands or anachronisms, cluttered busy background on model
sheets, multiple conflicting art styles, "AI slop" mushy detail.
```

Regras de conteúdo (Bíblia §9): orixás só como **simbologia de cor** (mar, amor), nunca caricaturados; marcas de blocos sempre como versão **"inspirada em"**, nunca cópia literal; nada fora do style guide.

---

## 6. Adaptação por ferramenta (mesma base, sintaxe diferente)

- **Higgsfield (oficial / Trava 5):** cole o prompt como image prompt → gere 4 → cure → treine **Soul ID** por personagem. Para manter consistência entre cenas, **sempre** passe a referência de imagem / Soul ID, nunca só texto (Trava 2). É o caminho do pipeline.
- **Midjourney (v6/v7):** acrescente no fim ` --ar 16:9` (sheet) / ` --ar 4:5` (hero) / ` --ar 2:3` (pôster) ` --style raw --s 250`. Consistência: gere um hero shot, depois use ` --cref <url>` para travar o personagem e ` --sref <url>` para travar o estilo entre imagens.
- **Flux / Stable Diffusion:** prompt no positivo, o bloco §5 no **negative prompt**. CFG ~3.5 (Flux) / 6–7 (SDXL). Consistência via LoRA treinado nas folhas-modelo (equivalente ao Soul ID).
- **Nano Banana / Seedream / Ideogram:** ótimos para o **pôster com texto** (renderizam o título). Para personagem, mesmo prompt natural. Use edição por referência para consistência.

> Recomendação: defina **uma** ferramenta por temporada e trave (Trava 5). Misturar geradores quebra a consistência visual entre episódios.

---

## 7. Prompt final — PÔSTER / BANNER DE LANÇAMENTO

> Une os 5 protagonistas + o Homem da Meia-Noite, ancora o conflito central (MEMÓRIA: Encanto dourado empurrando a névoa cinza do Esquecimento) e deixa espaço para o logotipo. O **título e o logo devem ser finalizados em ferramenta de design** (vetor nítido) — gere a arte-base com espaço negativo no topo. Há uma variante com texto embutido em §7.3 para geradores que renderizam tipografia.

### 7.1 Pôster — versão operacional (EN), arte-base sem texto

```
[Master Style Prompt]

Key art / launch poster for the children's animated series "Olinda
Encantada". A heroic group composition on a winding Olinda hillside street at
enchanted night.

Foreground, the group of five kids standing together, full of energy:
- CALU (10, brown skin, curly black hair, green-and-white shirt, blue shorts,
  red sneakers, tiny top hat on his back) front and center, pointing forward
  with a mischievous grin.
- NINA (10, dark-brown skin, two braids, round glasses, blue-and-white
  azulejo pinafore) holding a softly glowing blue tile fragment.
- BENI (11, dark-brown skin, frevo-passista outfit) mid-leap with his open
  multicolored frevo umbrella.
- LIA (9, light-brown skin, lace flowers in her hair, yellow ciranda skirt)
  singing, golden lace-like threads of light spreading from her.
- TICO (8, light brown skin, yellow patched t-shirt) holding CHICO, his
  mamulengo puppet with a red pointed hat.

Behind and above them, towering over the colonial rooftops, the HOMEM DA
MEIA-NOITE: a majestic giant carnival puppet come to life, three stories
tall, black tailcoat over a green-and-white striped shirt, tall top hat,
holding the glowing golden key of the city, warm glowing eyes — grand and
protective, never scary.

Background: colorful colonial houses climbing the hillside, a baroque church
silhouette, the enchanted Relógio das Ladeiras (a magical clock tower)
glowing at the top, a big moon, warm street lanterns. Streams of golden
Encanto particles swirl up from the children and push back a thin grey mist
(the Esquecimento) creeping in from the dark edges.

Composition: cinematic, layered depth, low heroic angle, strong silhouettes,
rich saturated palette of tile-blue, colonial-yellow, carnival-red and
multicolored frevo bursts. Leave clear negative space at the top for a title
logo. No text.
Aspect ratio 2:3 (vertical poster).
```

### 7.2 Variante banner 16:9
Mesmo prompt, troque a última linha por:
```
Composition rebalanced for a wide horizontal banner: the five kids spread
across the lower third, Homem da Meia-Noite rising on the right, Relógio das
Ladeiras and church on the left, generous sky for a title. Aspect ratio 16:9.
```

### 7.3 Variante com título embutido (só p/ Ideogram / Nano Banana / Seedream / MJ v7)
Acrescente ao fim de §7.1, antes do aspect ratio:
```
Bold playful title text at the top reading "OLINDA ENCANTADA", and a small
tagline below reading "Qual memória precisa ser salva hoje?", clean readable
lettering integrated into the art.
```
> Texto gerado por IA costuma sair torto — prefira gerar **sem** texto (§7.1) e aplicar o logo depois no design. Use esta variante só para rascunho/mockup.

### 7.4 Negativos do pôster
Use o bloco §5 e reforce: `no scary giant, no horror lighting, no clutter that hides the kids' faces, keep all five kids clearly readable`.

### 7.5 Pós-geração
- Gere 4 variações de composição → cure 1.
- Gate cultural obrigatório (Homem da Meia-Noite, Bíblia §9) **antes** de publicar.
- Versione em `assets/episodios/` ou `assets/moodboard/` conforme o uso (Trava 4).

---

## 8. Registro de versões

| Versão | Data | Mudança |
|---|---|---|
| v0.1 | jun/2026 | Documento inicial: consolidação dos 3 prompts canônicos + derivação de Nina/Beni/Lia da Bíblia + matriz de 19 detalhes + prompt de pôster/banner. Personagens derivados pendentes de travamento e validação cultural. |
