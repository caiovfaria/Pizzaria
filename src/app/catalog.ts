export type SizeKey = "P" | "M" | "G";
export type OrderType = "delivery" | "pickup";
export type Product = { id:number; name:string; description:string; category:"salgadas"|"doces"; tag?:string; image:string; prices:Record<SizeKey,number> };
export type CartItem = { key:string; productId:number; name:string; secondFlavor?:string; size:SizeKey; crust:string; extras:string[]; note:string; quantity:number; unitPrice:number };

export const WHATSAPP_NUMBER = "";
export const DELIVERY_FEE = 7;
export const products: Product[] = [
  { id:1, category:"salgadas", name:"Calabresa Artesanal", description:"Molho da casa, muçarela, calabresa artesanal, cebola roxa e orégano.", tag:"Clássica", image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&h=620&fit=crop&auto=format", prices:{P:32.9,M:45.9,G:57.9} },
  { id:2, category:"salgadas", name:"Margherita da Casa", description:"Molho de tomates italianos, muçarela, tomate, manjericão e azeite.", tag:"Clássica", image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&h=620&fit=crop&auto=format", prices:{P:31.9,M:43.9,G:54.9} },
  { id:3, category:"salgadas", name:"Frango Cremoso", description:"Frango temperado, requeijão cremoso, muçarela, milho e cheiro-verde.", tag:"Da casa", image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&h=620&fit=crop&auto=format", prices:{P:34.9,M:47.9,G:59.9} },
  { id:4, category:"salgadas", name:"Quatro Queijos", description:"Muçarela, parmesão, provolone e gorgonzola sobre molho artesanal.", image:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=900&h=620&fit=crop&auto=format", prices:{P:36.9,M:49.9,G:62.9} },
  { id:5, category:"salgadas", name:"Pepperoni Especial", description:"Muçarela, pepperoni premium, parmesão e um toque de mel picante.", tag:"Premium", image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=900&h=620&fit=crop&auto=format", prices:{P:38.9,M:52.9,G:65.9} },
  { id:6, category:"doces", name:"Chocolate com Morango", description:"Chocolate ao leite, morangos frescos e leite em pó. Irresistível.", tag:"Mais pedida", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=620&fit=crop&auto=format", prices:{P:29.9,M:39.9,G:49.9} },
  { id:7, category:"salgadas", name:"Portuguesa Completa", description:"Presunto, ovos, cebola, pimentão, azeitonas, muçarela e orégano.", image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&h=620&fit=crop&auto=format", prices:{P:35.9,M:48.9,G:60.9} },
  { id:8, category:"salgadas", name:"Bacon Crocante", description:"Muçarela, bacon crocante, tomate, cebola caramelizada e molho da casa.", tag:"Novidade", image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&h=620&fit=crop&auto=format", prices:{P:37.9,M:50.9,G:63.9} },
  { id:9, category:"salgadas", name:"Napolitana", description:"Muçarela, tomate em rodelas, parmesão, alho dourado e manjericão.", image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&h=620&fit=crop&auto=format", prices:{P:33.9,M:46.9,G:58.9} },
  { id:10, category:"salgadas", name:"Carne Seca Especial", description:"Carne seca desfiada, muçarela, cebola roxa, requeijão e cheiro-verde.", tag:"Especial", image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&h=620&fit=crop&auto=format", prices:{P:39.9,M:54.9,G:67.9} },
  { id:11, category:"salgadas", name:"Vegetariana", description:"Muçarela, abobrinha, tomate, champignon, pimentões e manjericão.", image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=900&h=620&fit=crop&auto=format", prices:{P:34.9,M:47.9,G:59.9} },
  { id:12, category:"doces", name:"Banana com Canela", description:"Banana caramelizada, leite condensado, canela e muçarela suave.", tag:"Clássica", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=620&fit=crop&auto=format", prices:{P:27.9,M:37.9,G:47.9} },
  { id:13, category:"doces", name:"Romeu e Julieta", description:"Goiabada cremosa, muçarela e requeijão sobre massa fininha.", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=620&fit=crop&auto=format", prices:{P:28.9,M:38.9,G:48.9} },
  { id:14, category:"doces", name:"Brigadeiro Crocante", description:"Brigadeiro cremoso, granulado belga e morangos frescos.", tag:"Premium", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=620&fit=crop&auto=format", prices:{P:31.9,M:42.9,G:52.9} },
  { id:15, category:"doces", name:"Doce de Leite", description:"Doce de leite, paçoca crocante e um toque de flor de sal.", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=620&fit=crop&auto=format", prices:{P:30.9,M:40.9,G:50.9} },
];
export const crusts=[{name:"Tradicional",price:0},{name:"Catupiry",price:7},{name:"Cheddar",price:7}];
export const extras=[{name:"Bacon",price:5},{name:"Cebola roxa",price:3},{name:"Queijo extra",price:6},{name:"Azeitonas",price:3}];
