import type {RefObject} from 'react';
import {ArrowUpRight, ArrowRight, Plus} from 'lucide-react';
import {products, type Product} from '../catalog';
import {money} from '../order';
import FoodPhoto from './FoodPhoto';

type Props = {heading:RefObject<HTMLHeadingElement|null>; menu:()=>void; choose:(product:Product)=>void; chooseHalf:()=>void};

/** The visual language is a pizza-shop poster and an order slip, not a UI kit. */
export default function BalconyHome({heading,menu,choose,chooseHalf}:Props){
  return <>
    <section className="shop-front wrap" aria-label="Fornalha, pizzaria artesanal">
      <div className="front-meta"><span>PIZZARIA ARTESANAL</span><span>MASSA. MOLHO. MESA.</span><span>10 SALGADAS / 05 DOCES</span></div>
      <div className="front-lockup" aria-hidden="true"><div className="front-name">FORNALHA</div><span className="front-aside">Salgadas.<br/>Doces.<br/>Do seu jeito.<span>↙</span></span></div>
      <div className="front-rule"><span>BOA COMPANHIA COMEÇA COM UMA CAIXA ABERTA.</span><span aria-hidden="true">↓</span></div>
    </section>

    <section className="oven-poster wrap">
      <figure className="poster-photo">
        <FoodPhoto src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=85" alt="Pizza com queijo gratinado, tomate e manjericão sobre a mesa" priority/>
        <figcaption>Fotografia de referência. Produtos ilustrativos.</figcaption>
      </figure>
      <div className="order-poster">
        <p className="poster-kicker"><span aria-hidden="true">✳</span> ESCOLHA O SABOR. JUNTE A MESA.</p>
        <h1 ref={heading} tabIndex={-1}>VAI UMA<br/>PIZZA?</h1>
        <div className="poster-bottom"><p>Um sabor inteiro.<br/>Ou um pouco de cada lado.</p><button className="primary poster-cta" onClick={menu}>Abrir o cardápio <ArrowUpRight size={22}/></button></div>
      </div>
      <span className="poster-edition" aria-hidden="true">F / 01 — A PRIMEIRA FATIA É SUA</span>
    </section>

    <section className="counter-section wrap" aria-labelledby="counter-title">
      <div className="counter-intro"><span className="section-index">01 / NO BALCÃO</span><h2 id="counter-title">Pra começar{' '}<br/>a conversa.</h2><p>Três sabores do cardápio, sem mistério. Escolha um e monte do seu jeito.</p><button className="text-button" onClick={menu}>Ver os 15 sabores <ArrowRight size={18}/></button></div>
      <div className="counter-list">{[products[1],products[0],products[4]].map((p,index)=><article className="counter-item" key={p.id}>
        <span className="counter-number">0{index+1}</span><div><h3>{p.name}</h3><p>{p.description}</p><span className="counter-size">MÉDIA · 6 FATIAS</span></div>
        <div className="counter-price"><strong>{money(p.prices.M)}</strong><button className="add-pizza" onClick={()=>choose(p)} aria-label={`Personalizar ${p.name}`}><Plus size={19}/></button></div>
      </article>)}</div>
    </section>

    <section className="half-section" aria-labelledby="half-title"><div className="half-inner wrap">
      <div className="half-drawing" aria-hidden="true"><div className="half-left"><span>½</span></div><div className="half-right"><span>½</span></div><small>UMA PIZZA.<br/>DUAS ESCOLHAS.</small></div>
      <div className="half-copy"><span className="section-index">02 / SEM DISPUTA PELA ÚLTIMA FATIA</span><h2 id="half-title">Cada lado<br/>tem seu gosto.</h2><p>Margherita de um lado, calabresa do outro? Nas salgadas, você combina dois sabores na mesma pizza.</p><p className="half-note">No meio a meio, vale o preço do sabor de maior valor. Borda e adicionais são calculados à parte.</p><button className="primary" onClick={chooseHalf}>Montar meio a meio <ArrowUpRight size={20}/></button></div>
    </div></section>

    <section className="order-guide wrap" id="como-pedir" aria-labelledby="guide-title"><div className="guide-heading"><span className="section-index">03 / SUA COMANDA</span><h2 id="guide-title">Da escolha<br/>ao último detalhe.</h2><p>O pedido é demonstrativo.<br/>Você monta, confere e pode copiar o resumo.</p></div>
      <ol className="order-slips"><li><span>01</span><h3>Escolha o sabor.</h3><p>Salgada ou doce. Busque por nome ou ingrediente no cardápio.</p></li><li><span>02</span><h3>Deixe com a sua cara.</h3><p>Tamanho, borda, segundo sabor e aqueles extras que você gosta.</p></li><li><span>03</span><h3>Confira a comanda.</h3><p>Revise os itens e os valores. Copiar o resumo não envia uma compra.</p></li></ol>
    </section>
  </>;
}
