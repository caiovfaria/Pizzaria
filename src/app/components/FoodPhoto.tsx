import {useState} from 'react';
export default function FoodPhoto({src,alt,priority=false}:{src:string;alt:string;priority?:boolean}){
  const [failed,setFailed]=useState(false);
  return failed?<span className="photo-fallback" role="img" aria-label={alt+' — fotografia indisponível'}><span>Fornalha<small>Fotografia indisponível.<br/>O cardápio continua logo aqui.</small></span></span>:<img src={src} alt={alt} loading={priority?'eager':'lazy'} {...{fetchpriority:priority?'high':'auto'}} onError={()=>setFailed(true)}/>;
}
