import {products,type Product,type SizeKey} from '../catalog';
import {money} from '../order';

export default function FlavorPicker({first,second,size,onFirst,onSecond}:{first:Product;second:string;size:SizeKey;onFirst:(product:Product)=>void;onSecond:(name:string)=>void}){
  if(first.category!=='salgadas')return null;
  const flavours=products.filter(p=>p.category==='salgadas');
  return <fieldset className="flavour-picker">
    <legend>Sabores da pizza</legend>
    <p id="flavour-help" className="fine-print">Escolha os dois lados. No meio a meio, vale o preço do sabor de maior valor; borda e adicionais são somados depois.</p>
    <div className="choice-grid two">
      <label className="field">Primeiro sabor
        <select value={first.id} aria-describedby="flavour-help" onChange={event=>{const product=flavours.find(p=>p.id===Number(event.target.value));if(product)onFirst(product)}}>
          {flavours.map(p=><option key={p.id} value={p.id}>{p.name} — {money(p.prices[size])}</option>)}
        </select>
      </label>
      <label className="field">Segundo sabor <span className="optional">opcional</span>
        <select value={second} aria-describedby="flavour-help" onChange={event=>onSecond(event.target.value)}>
          <option value="">Um sabor inteiro</option>
          {flavours.filter(p=>p.id!==first.id).map(p=><option key={p.id} value={p.name}>{p.name} — {money(p.prices[size])}</option>)}
        </select>
      </label>
    </div>
  </fieldset>;
}
