import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const script=readFileSync(new URL('../public/theme-init.js',import.meta.url),'utf8');
function boot(saved,systemDark,unavailable=false){const root={dataset:{}},meta={};vm.runInNewContext(script,{localStorage:{getItem(){if(unavailable)throw Error('blocked');return saved}},matchMedia:()=>({matches:systemDark}),document:{documentElement:root,querySelector:()=>({setAttribute:(key,value)=>meta[key]=value})}});return {theme:root.dataset.theme,color:meta.content}}
test('saved theme takes priority over operating system',()=>{assert.equal(boot('light',true).theme,'light');assert.equal(boot('dark',false).theme,'dark')});
test('first visit and invalid values follow system preference',()=>{assert.equal(boot(null,true).theme,'dark');assert.equal(boot(null,false).theme,'light');assert.equal(boot('corrupt',true).theme,'dark')});
test('unavailable storage does not prevent boot or theme color',()=>{assert.deepEqual(boot(null,true,true),{theme:'dark',color:'#1f211d'});assert.equal(boot('light',false).color,'#f5f0e5')});
function contrast(a,b){const l=hex=>{const n=hex.match(/\w\w/g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return n[0]*.2126+n[1]*.7152+n[2]*.0722};const x=l(a),y=l(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
test('main dark theme text and primary buttons meet 4.5:1 contrast',()=>{for(const [fg,bg] of [['f0eadf','1f211d'],['b8b6a7','1f211d'],['e5a18b','1f211d'],['fff9ee','aa452f'],['b8b6a7','252820']])assert.ok(contrast(fg,bg)>=4.5,`${fg}/${bg}`)});
test('theme initialization is in head and public asset is rewritten by Vite',()=>{const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');assert.ok(html.includes('src="/theme-init.js"'));assert.ok(html.indexOf('theme-init.js')<html.indexOf('</head>'));const component=readFileSync(new URL('../src/app/components/ThemeToggle.tsx',import.meta.url),'utf8');assert.ok(component.includes('aria-label={label}'));assert.ok(component.includes('removeEventListener'));assert.ok(component.includes('localStorage.setItem(key,next)'))});
