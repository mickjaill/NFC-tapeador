"use client";
import { useState } from "react";
import { categories,products,type Category } from "./products";
import { useCart } from "@/features/cart/cart";

export function Storefront(){
 const [category,setCategory]=useState<"Todos"|Category>("Todos");
 const [open,setOpen]=useState(false);
 const cart=useCart();
 const shown=category==="Todos"?products:products.filter(p=>p.category===category);
 return <main>
  <header className="nav">
   <a className="brand" href="#"><span className="mark">T</span>TAPEADOR</a>
   <nav className="desktopNav"><a href="#productos">Productos</a><a href="#tecnologia">Tecnología</a><a href="#soluciones">Soluciones</a></nav>
   <button className="cartButton" onClick={()=>setOpen(true)}>CARRITO <b>{cart.count}</b></button>
  </header>

  <section className="hero">
   <div className="heroGlow"/>
   <div className="heroContent">
    <p className="kicker">TAPEADOR / NFC TECHNOLOGY</p>
    <h1>TOCA.<br/><em>CONECTA.</em></h1>
    <p className="lead">Transformamos objetos físicos en experiencias digitales con tecnología NFC. Sin aplicaciones. Sin complicaciones.</p>
    <div className="heroActions"><a href="#productos" className="cta">DESCUBRIR PRODUCTOS <span>↗</span></a><a href="#tecnologia" className="textLink">CÓMO FUNCIONA →</a></div>
   </div>
   <div className="signal" aria-hidden="true"><div className="chip"><b>NFC</b><span>ACTIVE</span></div><i/><i/><i/></div>
   <div className="scrollTag">SCROLL TO EXPLORE <span>↓</span></div>
  </section>

  <section className="manifesto" id="tecnologia">
   <p className="kicker">01 / NUESTRA TECNOLOGÍA</p>
   <h2>EL FUTURO ESTÁ<br/>A <span>UN TOQUE.</span></h2>
   <div className="manifestoGrid"><p>Un pequeño chip puede abrir un mundo de información. Tapeador conecta personas, mascotas, recuerdos y empresas con experiencias digitales instantáneas.</p><div className="stat"><strong>0</strong><span>APPS NECESARIAS</span></div><div className="stat"><strong>1</strong><span>TOQUE PARA CONECTAR</span></div></div>
  </section>

  <section className="productsSection" id="productos">
   <div className="sectionHead"><div><p className="kicker">02 / COLECCIÓN</p><h2>HECHO PARA<br/><span>CONECTAR.</span></h2></div><p>Elige una solución. Nosotros hacemos que el mundo físico cobre vida digital.</p></div>
   <div className="filters">{categories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c.toUpperCase()}</button>)}</div>
   <div className="grid">{shown.map((p,i)=><article className="card" key={p.id} style={{animationDelay:`${i*80}ms`}}>
    <div className="visual"><div className="productNumber">0{i+1}</div><span>{p.emoji}</span><i>NFC READY</i><div className="scanLine"/></div>
    <div className="cardBody"><small>{p.category} / TAPEADOR</small><h3>{p.name}</h3><p>{p.description}</p><div className="cardFoot"><strong>PRECIO A CONSULTAR</strong><button onClick={()=>{cart.add(p);setOpen(true)}}>AGREGAR <span>+</span></button></div></div>
   </article>)}</div>
  </section>

  <section className="performance" id="soluciones">
   <div className="performanceVisual"><div className="rings"><b>T</b></div></div>
   <div className="performanceCopy"><p className="kicker">03 / TAPEADOR SYSTEM</p><h2>UNA IDEA.<br/>INFINITAS<br/><span>POSIBILIDADES.</span></h2><p>Desde un contacto de emergencia hasta una experiencia de marca. El mismo gesto —acercar el celular— puede activar exactamente lo que necesitas.</p><a href="#productos" className="cta light">VER SOLUCIONES <span>↗</span></a></div>
  </section>

  <section className="ticker"><div>TAPEADOR NFC — TOCA / CONECTA / COMPARTE — TAPEADOR NFC — TOCA / CONECTA / COMPARTE — </div></section>
  <footer><a className="brand" href="#"><span className="mark">T</span>TAPEADOR</a><p>TECNOLOGÍA NFC PARA EL MUNDO REAL.</p><small>© 2026 TAPEADOR</small></footer>

  {open&&<><div className="shade" onClick={()=>setOpen(false)}/><aside className="drawer"><div className="drawerHead"><div><small>TAPEADOR / PEDIDO</small><h2>TU CARRITO</h2></div><button onClick={()=>setOpen(false)}>×</button></div>{cart.items.length===0?<p className="empty">TU CARRITO ESTÁ VACÍO.</p>:cart.items.map(i=><div className="cartItem" key={i.product.id}><span>{i.product.emoji}</span><div><b>{i.product.name}</b><small>Precio por confirmar</small></div><div className="qty"><button onClick={()=>cart.change(i.product.id,-1)}>−</button>{i.qty}<button onClick={()=>cart.change(i.product.id,1)}>+</button></div></div>)}<div className="drawerBottom"><p>Confirmaremos precios y personalización antes de procesar tu pedido.</p><button className="cta wide" disabled={!cart.items.length}>CONTINUAR PEDIDO →</button></div></aside></>}
 </main>
}