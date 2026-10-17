import {useEffect,useRef,type ReactNode} from 'react';
import {X} from 'lucide-react';
export default function OrderDialog({title,close,children,drawer=false}:{title:string;close:()=>void;children:ReactNode;drawer?:boolean}){
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const active=document.activeElement as HTMLElement;const old=document.body.style.overflow;document.body.style.overflow='hidden';ref.current?.showModal();return()=>{ref.current?.close();document.body.style.overflow=old;active?.focus()}},[]);
  return <dialog className={`order-dialog ${drawer?'drawer':''}`} ref={ref} aria-labelledby="dialog-title" onCancel={event=>{event.preventDefault();close()}} onClick={event=>{if(event.target===ref.current){const box=ref.current.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)close()}}}>
    <header className="dialog-heading"><div><span className="eyebrow">DO SEU JEITO</span><h2 id="dialog-title">{title}</h2></div><button type="button" className="icon-button" onClick={close} aria-label="Fechar janela"><X size={22}/></button></header>{children}
  </dialog>;
}
