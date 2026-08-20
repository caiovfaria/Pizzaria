
  import { Component, type ErrorInfo, type ReactNode } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/components/App.tsx";
  import "./styles/index.css";

  class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
    state = { error: null as Error | null };
    static getDerivedStateFromError(error: Error) { return { error }; }
    componentDidCatch(error: Error, info: ErrorInfo) { console.error(error, info); }
    render() {
      if (this.state.error) return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#0d0d0d",color:"white",padding:24,textAlign:"center"}}><div><h1>Não foi possível carregar esta etapa.</h1><p>Atualize a página para continuar seu pedido.</p><button onClick={()=>location.reload()} style={{marginTop:16,padding:"12px 20px",background:"#cc1120",color:"white",border:0}}>Tentar novamente</button></div></main>;
      return this.props.children;
    }
  }

  createRoot(document.getElementById("root")!).render(<ErrorBoundary><App /></ErrorBoundary>);
  
