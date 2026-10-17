import {products, crusts, extras, type CartItem, type SizeKey} from './catalog.ts';
export const money=(value:number)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(value);
export const normalize=(value:string)=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
export function priceFor(productId:number,size:SizeKey,crust:string,additions:string[],secondFlavor?:string){
  const product=products.find(p=>p.id===productId),second=products.find(p=>p.name===secondFlavor);
  if(!product||!['P','M','G'].includes(size)||!crusts.some(c=>c.name===crust)||additions.some(a=>!extras.some(e=>e.name===a))||new Set(additions).size!==additions.length||(secondFlavor&&(!second||second.category!=='salgadas'||product.category!=='salgadas'||second.id===product.id)))throw Error('Configuração de pizza inválida.');
  return Math.round((Math.max(product.prices[size],second?.prices[size]||0)+(crusts.find(c=>c.name===crust)?.price||0)+extras.filter(e=>additions.includes(e.name)).reduce((s,e)=>s+e.price,0))*100)/100;
}
export function parseCart(raw:string|null):CartItem[]{
  const data=JSON.parse(raw||'[]');if(!Array.isArray(data)||data.length>100)throw Error('Carrinho inválido.');
  return data.map(item=>{
    if(!item||typeof item.key!=='string'||item.key.length>100||!Number.isInteger(item.quantity)||item.quantity<1||item.quantity>20||typeof item.note!=='string'||item.note.length>160||!Array.isArray(item.extras)||(item.secondFlavor!==undefined&&typeof item.secondFlavor!=='string'))throw Error('Item de carrinho inválido.');
    const unitPrice=priceFor(item.productId,item.size,item.crust,item.extras,item.secondFlavor);
    return {...item,name:products.find(p=>p.id===item.productId)!.name,unitPrice};
  });
}
export function totals(cart:CartItem[],delivery:boolean,coupon:string){
  const subtotalCents=cart.reduce((sum,item)=>sum+Math.round(priceFor(item.productId,item.size,item.crust,item.extras,item.secondFlavor)*100)*item.quantity,0);
  const discountCents=normalize(coupon)==='primeira10'?Math.round(subtotalCents*.1):0,deliveryCents=cart.length&&delivery?700:0;
  return {subtotal:subtotalCents/100,discount:discountCents/100,deliveryFee:deliveryCents/100,total:(subtotalCents-discountCents+deliveryCents)/100};
}
