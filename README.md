
# Pizzaria Fornalha

Site responsivo para uma pizzaria artesanal, com cardápio separado entre pizzas salgadas e doces, personalização de sabores, carrinho persistente e fluxo completo de revisão do pedido.

## Funcionalidades

- 10 pizzas salgadas e 5 pizzas doces
- Pesquisa e favoritos
- Escolha de tamanho, borda, adicionais e observações
- Pizza meio a meio
- Carrinho salvo no navegador
- Entrega ou retirada
- Cálculo de subtotal, taxa de entrega e cupom `PRIMEIRA10`
- Revisão e cópia do pedido
- Layout responsivo e acessível

## Abrir o projeto no Windows

Para apenas visualizar o site, clique duas vezes em `ABRIR-PIZZARIA.cmd`.

Para programar com atualização automática, clique duas vezes em `DESENVOLVER-PIZZARIA.cmd`.

Não utilize o Live Server ou abra o `index.html` diretamente. Este é um projeto React/Vite e precisa ser iniciado pelo Vite.

## Executar pelo terminal

```bash
npm install
npm run dev
```

Para visualizar a versão compilada:

```bash
npm run preview
```

## Configuração pendente

O envio por WhatsApp permanece desativado até que o número comercial seja preenchido em `WHATSAPP_NUMBER`, no arquivo `src/app/components/App.tsx`.

As opções Pix, cartão e dinheiro registram a preferência no pedido; o projeto não realiza cobrança online nem possui integração com gateway de pagamento.
  
