import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {products} from '../src/app/catalog.ts';
const home=readFileSync(new URL('../src/app/components/BalconyHome.tsx',import.meta.url),'utf8');
function contrast(a,b){const luminance=hex=>{const v=hex.match(/\w\w/g).map(n=>parseInt(n,16)/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4);return v[0]*.2126+v[1]*.7152+v[2]*.0722};const x=luminance(a),y=luminance(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
test('poster and half-and-half action retain AA normal text contrast',()=>{
  for(const [fg,bg] of [['fff3dc','9d3828'],['702719','fff3dc'],['36271a','e3b657'],['e3b657','292b23'],['69695c','eee7d8'],['b8b6a7','282b24']])assert.ok(contrast(fg,bg)>=4.5,`${fg}/${bg}`);
});
test('home selection and catalogue counts remain accurate',()=>{
  assert.equal(products.filter(p=>p.category==='salgadas').length,10);
  assert.equal(products.filter(p=>p.category==='doces').length,5);
  assert.ok(home.includes('10 SALGADAS / 05 DOCES'));
  assert.ok(home.includes('money(p.prices.M)'));
  assert.ok(home.includes('Fotografia de referência. Produtos ilustrativos.'));
});
test('dedicated half-and-half shortcut initializes both flavours without changing cart storage',()=>{
  const app=readFileSync(new URL('../src/app/components/App.tsx',import.meta.url),'utf8');
  assert.ok(home.includes('onClick={chooseHalf}'));
  assert.ok(app.includes('chooseHalf={()=>{openProduct(products[1]);setSecond(products[0].name)}}'));
  assert.ok(app.includes("localStorage.getItem('fornalha-cart')"));
  assert.ok(app.includes("localStorage.setItem('fornalha-favorites'"));
});
