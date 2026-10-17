import {useEffect,useRef,useState} from 'react';
import {Moon,Sun} from 'lucide-react';
const key='fornalha-theme';
function applyTheme(theme:'light'|'dark'){
  document.documentElement.dataset.theme=theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#1f211d':'#f5f0e5');
}
export default function ThemeToggle(){
  const sessionChoice=useRef(false);
  const [theme,setTheme]=useState<'light'|'dark'>(()=>document.documentElement.dataset.theme==='dark'?'dark':'light');
  useEffect(()=>{
    const media=matchMedia('(prefers-color-scheme: dark)');
    function sync(){let saved;try{saved=localStorage.getItem(key)}catch{}const next=saved==='dark'||(saved!=='light'&&media.matches)?'dark':'light';applyTheme(next);setTheme(next)}
    const onSystemChange=()=>{if(sessionChoice.current)return;try{const saved=localStorage.getItem(key);if(saved==='light'||saved==='dark')return}catch{}sync()};
    const onStorage=(event:StorageEvent)=>{if(event.key===key||event.key===null){sessionChoice.current=false;sync()}};
    media.addEventListener('change',onSystemChange);addEventListener('storage',onStorage);
    return()=>{media.removeEventListener('change',onSystemChange);removeEventListener('storage',onStorage)};
  },[]);
  function toggle(){sessionChoice.current=true;const next=theme==='dark'?'light':'dark';applyTheme(next);setTheme(next);try{localStorage.setItem(key,next)}catch{}}
  const label=theme==='dark'?'Ativar modo claro':'Ativar modo escuro';
  return <button type="button" className="icon-button theme-toggle" aria-label={label} title={label} onClick={toggle}>{theme==='dark'?<Sun size={19} aria-hidden="true"/>:<Moon size={19} aria-hidden="true"/>}</button>;
}
