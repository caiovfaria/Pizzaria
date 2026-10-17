# Fornalha — análise de identidade e reformulação local

## Conclusão

A versão anterior era organizada e funcional, mas podia ser percebida como um template editorial de restaurante. Isso é um julgamento de design, não detecção de autoria por IA. Não existe evidência visual suficiente para determinar quem escreveu ou desenhou uma interface.

## O que foi examinado

Página pública no navegador, fonte local, componentes de início/cardápio/personalização/carrinho/revisão, estilos claro/escuro, abertura SVG, catálogo, armazenamento e testes existentes. Não foram usadas skills de planilhas, apresentações, Roblox, bancos de dados ou infraestrutura: não contribuem para este escopo. A skill cvf-web-design orientou identidade, simplicidade técnica, reflow, teclado, movimento reduzido e separação entre implementação e publicação.

| Área | Diagnóstico anterior | Decisão implementada |
| --- | --- | --- |
| Identidade | Marca em Georgia itálica, semelhante a muitas apresentações de restaurante | Letreiro condensado, hierarquia de cartaz, números e linguagem de comanda |
| Composição | Hero em duas colunas com canto curvo e selo redondo | Cartaz vermelho sobre fotografia, alinhamentos de balcão e marca tipográfica de abertura |
| Ritmo | Três fotos/cards equivalentes e bloco de três passos | Sugestões em lista com preços; seção específica de meio a meio; passos apresentados como comandas |
| Texto | Frases intercambiáveis com qualquer marca de alimentação | Chamadas curtas e explicação concreta de tamanhos, combinações e preços |
| Fotografia | Stock hero + imagens ilustrativas muito polidas do catálogo | Mantido um stock claramente identificado; retiradas as três fotos ilustrativas dos destaques |
| Cardápio | Funcional mas pouco conectado à marca | Tipografia e regras de impressão, preços por tamanho e botões consistentes com o balcão |
| Interação | Boa lógica já existente | Preservada; atalho de meio a meio agora inicializa os dois sabores |
| Confiança | Demonstração sem dados reais do comércio | Mantido aviso; não inventados avaliações, endereço, tempo de entrega, tradição ou contato |
| Tema escuro | Recém-implementado e funcional | Preservados preferência e tokens, com superfícies próprias para as novas seções |
| Movimento | Corte de pizza curto e cancelável | Preservado; entrada leve do cartaz, sem animações contínuas ou novos motores |

## Limites de autenticidade

O novo sistema visual é próprio desta implementação, sem template comercial copiado. Não é possível garantir exclusividade mundial de composição, frase ou estilo. Fotografias próprias da pizzaria, dados verídicos da casa e uma marca final encomendada ainda seriam os elementos mais fortes para a autenticidade de um negócio real. O portfólio continua sendo uma demonstração, não uma pizzaria operante.

## Implementação

- Novo componente `BalconyHome.tsx`; estado de pedido continua em `App.tsx`, sem migração de dados.
- Novo estilo `balcao.css`, usando fontes do sistema, CSS e ilustração geométrica própria; nenhuma dependência adicionada.
- Catálogo, preços, chaves de armazenamento, favoritos, lógica de centavos e fluxo demonstrativo preservados.
- Nenhuma publicação, alteração no portfólio, push ou mudança de hospedagem nesta etapa.

## Verificações desta etapa

- Build de produção e testes de pedido/tema/contraste/contrato visual.
- Navegador: início nos dois temas; cardápio salgado/doce; busca por ingrediente sem acento; estado vazio; favoritos; navegação móvel; personalização doce; atalho de meio a meio; adicional e borda; carrinho; retirada e cupom.
- Em 320 CSS px, sem rolagem horizontal nas páginas e nas janelas examinadas. Equivalência de reflow não constitui teste completo de zoom/tecnologia assistiva.
- Escape fecha personalização e retorna foco ao botão que a abriu. Foco inicial no fechamento; diálogos nativos mantidos.
- Pedido de teste e favorito removidos ao fim. Não foi copiado nem enviado pedido; campos pessoais não foram preenchidos.
- Movimento reduzido verificado no código e teste existente; não emulado no navegador. Abertura limitada a 2,9s, cancelável, sem mudança de duração.
- `npm audit --omit=dev --audit-level=high`: zero vulnerabilidades conhecidas no relatório consultado, sem equivaler a uma auditoria de segurança ou cobrir dependências de desenvolvimento.
- Sem nova API, backend, credenciais ou processamento de pagamento. HTTPS/headers em produção não foram modificados nem auditados exaustivamente nesta etapa.

## Referências técnicas

- Reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- Movimento reduzido: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion

## Pendências antes de oficializar

Aprovação visual do usuário; se aprovada, publicar a nova versão da pizzaria e, separadamente, atualizar novamente sua captura no portfólio. Não declarar fluxo de compra real enquanto o negócio e contato não estiverem configurados.
