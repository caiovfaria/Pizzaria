# Fornalha — revisão local

## Identidade
Creme, carvão, vermelho de forno e verde oliva. Tipografia editorial com fontes do sistema, sem download de fontes. Fotografia de destaque e cardápio textual com preço por tamanho. Imagens identificadas como ilustrativas; sem nota de avaliação, endereço ou prazo de entrega inventados.

## Movimento e acessibilidade

Modo claro/escuro: botão no cabeçalho com rótulo acessível e preferência local independente do carrinho. Na primeira visita segue o sistema; inicialização antes da renderização evita clarão de fundo claro. Trata armazenamento indisponível e alterações em outras abas. Contrastes principais testados (4,5:1 ou superior), inspeção do cabeçalho e personalização em 320px, alternância por teclado e persistência ao recarregar. Mudança disponível apenas na prévia até aprovação de publicação.
Abertura original em SVG/CSS: cortador atravessa a pizza horizontalmente, duas metades se afastam e a tela desaparece. Limite de 2,9 segundos, Escape/atalho para entrar e respeito à redução de movimento. Nenhuma nova biblioteca de animação.
Janelas com dialog nativo, foco contido, retorno de foco, Escape e fechamento pelo fundo. Opções em radio/checkbox nativos, campos rotulados, link de pular conteúdo e foco visível.

## Pedido e dados
Preservadas as chaves existentes de carrinho e favoritos. Preço e nome reconstruídos a partir do catálogo; valores monetários totalizados em centavos. Carrinho ilegível não é sobrescrito automaticamente. Contato e endereço ficam somente na memória durante a visita. Copiar resumo requer ação do usuário; nenhum envio/pagamento acontece. Isso é demonstração, não checkout de produção: futuramente o servidor deve validar preços e pedidos, caso se implemente venda real.

## Verificação
`node --test tests/order.test.mjs` cobre catálogo, dados salvos, opções, centavos e contrato da intro.
`npm run build` gera a versão de produção. Build não executa análise de tipos completa nem substitui testes visuais.
Inspeção no navegador: início desktop e mobile, reflow em 320px, busca, categorias, favoritos/estado vazio, meio a meio + borda + adicional (R$ 64,90), retirada + PRIMEIRA10 (R$ 58,41), validação de campos obrigatórios, Escape e retorno de foco. Pedido e favorito criados no teste foram retirados ao final. Preferência de movimento reduzido verificada no código/teste automatizado, não por emulação no navegador.
`npm audit --omit=dev` após remover react-router (sem imports no projeto): zero vulnerabilidades conhecidas de produção no relatório consultado. Não equivale a auditoria completa nem certifica ausência de falhas. As demais dependências e alterações preexistentes foram preservadas.
Prévia local: `npm run dev -- --host 127.0.0.1 --port 4173 --strictPort`.
Hospedagem, HTTPS, headers e WhatsApp real não foram alterados/publicados nesta revisão. Rotas novas do cardápio usam fragmento (#/cardapio/salgadas), compatível com hospedagem estática e atualização direta. Conferir build com base /Pizzaria/ antes de publicar no GitHub Pages.
