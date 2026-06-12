# OLINDA ENCANTADA

## Análise Crítica do Vídeo de Referência — Claude + Higgsfield MCP

> **Função deste documento:** registrar o que o vídeo de referência realmente mostra (verificado frame a frame), separar o que é real do que é marketing, e validar com pesquisa atualizada (junho/2026) como replicar a arquitetura para o nosso caso.

-----

## 1. O QUE O VÍDEO REALMENTE MOSTRA (verificação frame a frame)

O vídeo (75s, formato vertical) intercala o apresentador com capturas de uma conversa real no Claude. Sequência verificada:

1. **Leitura da pesquisa:** o Claude processa um PDF de pesquisa de campo sobre comportamento de chimpanzés e extrai um mapa de pontos (hierarquia social, forrageamento, comunicação, predadores, alianças, temperamentos individuais). → **Camada 1 do Doc 02.**
2. **Direções de arte:** o Claude apresenta **4 direções visuais** para o jogo (estilos diferentes do mesmo cenário de selva com o chimpanzé) e o criador escolhe uma: *"Locking that style in"*. → **Equivale ao nosso Master Style Prompt + teste de estilo (Semana 2 do Doc 02).**
3. **Personagem principal:** o Claude gera **4 takes do protagonista em formato turnaround** (pose corporal + busto, lado a lado) e o criador seleciona um: *"Got our hero"*. → **Character sheet via Higgsfield Soul (Trava 2).**
4. **Cenas cinematográficas:** frames do chimpanzé em cena ampla de selva, com composição e iluminação consistentes com o estilo travado.
5. **"Jogo jogável":** a cena final mostra os visuais gerados com **interface de jogo sobreposta** (barras de vida, minimapa, inventário, ciclo dia/noite).

### Leitura honesta da referência

O ponto forte do vídeo é genuíno: **a orquestração inteira aconteceu numa única conversa**, com o Claude planejando e chamando as ferramentas do Higgsfield na ordem certa. Mas o "jogo completo" mostrado é, na prática, **assets visuais + UI** — a parte "jogável" é a menos comprovada do vídeo.

**Conclusão estratégica (e ela é favorável a nós):** o que o fluxo Claude+Higgsfield entrega de verdade, hoje, com qualidade de estúdio, é exatamente o que o NOSSO produto precisa — **personagens consistentes, cenários cinematográficos e animação image-to-video**. O caso de uso "vídeo para YouTube" é mais maduro tecnicamente que o caso de uso "jogo". Estamos adaptando a referência para o terreno onde ela é mais forte.

-----

## 2. VALIDAÇÃO DO STACK (pesquisa junho/2026)

### Higgsfield MCP — confirmado e oficial

- **URL do servidor:** `https://mcp.higgsfield.ai/mcp` (conector remoto oficial, autenticação OAuth pela conta Higgsfield — sem API keys)
- **Funciona com:** Claude web, Claude Desktop e Claude Code
- **Ferramentas expostas (as que importam para nós):**

| Ferramenta MCP | Uso no nosso pipeline |
|---|---|
| **Soul Character Training** | Treinar identidade fixa de cada personagem (Calu, Tico, Homem da Meia-Noite) a partir das folhas-modelo → consistência entre episódios (Trava 2) |
| **Cinematic Image-to-Video** | Animar keyframes com movimentos de câmera predefinidos (passo 4 do workflow) |
| **Video Analyzer** | Analisar referências (ex.: clipes de animações que admiramos) para informar gerações |
| **Viral Clip Generator** | Cortes verticais para Shorts/Reels/TikTok (passo 9) |
| **Virality Prediction** | Score de gancho/retenção antes de publicar (feedback loop) |

- **Modelos disponíveis via MCP (30+):** Soul 2.0, Kling 3.0, Veo 3.1, Seedance 2.0, Nano Banana Pro, GPT Image 2, Seedream 4.5, Cinema Studio 3.0. O agente escolhe o modelo ou especificamos manualmente — **para a Trava 5, sempre especificar manualmente.**
- **Billing:** sistema de créditos da conta Higgsfield; cada geração consome créditos conforme modelo/resolução.

### Planos Higgsfield (referência jun/2026 — revalidar antes de assinar)

| Plano | Preço | Créditos/mês | Observação |
|---|---|---|---|
| Free | $0 | ~10 | Só para testar o conector |
| Basic | ~$9/mês | ~150 | Inclui Soul ID — suficiente para a Fase 0 (style tests + sheets) |
| **Pro** | ~$17,40/mês (anual) | ~600 | **Recomendado para o MVP e Fase 1** |
| Ultimate | ~$29,40/mês (anual) | ~1.200 | Se a cadência de 1 micro-ep/2 semanas apertar os créditos |
| Creator | ~$119/mês | ~6.000 | Só na Fase 2+ |

Cabe com folga no orçamento do Doc 02 (R$ 250–850/mês). Imagens geradas têm uso comercial liberado.

### Soul ID — nota técnica importante

O treino de Soul ID pede **~20 imagens do personagem em ângulos e expressões variados**. Para personagens originais (que não existem em fotos), o caminho é em duas etapas:

1. Gerar a folha-modelo canônica (turnaround + expressões + ações) com Soul 2.0/Nano Banana usando o prompt canônico + Master Style Prompt;
2. Curar as ~20 melhores imagens geradas e **treinar o Soul ID com elas**. A partir daí, toda nova cena usa o Soul ID, não o prompt de texto.

Isso refina a Trava 2 do Doc 02: a folha-modelo não é só referência visual — é o **dataset de treino** da identidade do personagem.

-----

## 3. A ARQUITETURA REPLICADA PARA O NOSSO CASO

| Camada (vídeo de referência) | Implementação Olinda Encantada | Status |
|---|---|---|
| 1. Base de conhecimento (PDF de pesquisa) | Bíblia + Pipeline + Roadmap como knowledge base do Project no Claude | **Pronto** (docs 01–03 deste repo) |
| 2. Planejamento estruturado (game design doc) | Roteiro + decupagem por episódio | **Iniciado** (`producao/episodios/ep00-mvp/`) |
| 3. Assets consistentes (Soul) | Soul ID por personagem + cenários-base + keyframes | A executar (Semanas 2–3) |
| 4. Orquestração (MCP numa conversa) | Higgsfield MCP conectado ao Claude (setup no Doc 04) | A conectar |

-----

## 4. ONDE NÃO COPIAR A REFERÊNCIA

1. **Não prometer "tudo numa conversa" no nosso processo real.** A montagem final (edição, mix, legendas) continua humana e é onde nasce o acabamento profissional. O MCP elimina o vaivém entre 10 ferramentas — não elimina o editor.
2. **Não pular a curadoria.** No vídeo, o criador escolhe 1 entre 4 a cada etapa. Essa escolha humana É o direcionamento criativo. Geração sem gate de seleção produz inconsistência.
3. **Não herdar a tese "agora é fácil".** Já está no Doc 03 (risco nº 1): a IA barateou execução, não relevância. O vídeo é prova de capacidade técnica; o nosso diferencial continua sendo a cultura viva de Olinda e o acesso a Luiz Adolfo/Thales.

-----

*Documento vivo. Fontes e versões de ferramentas revalidadas em 12/jun/2026.*
