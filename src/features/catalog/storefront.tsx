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
   <nav className="desktopNav"><a href="#productos">Productos</a><a href="#tecnologia">Tecnología</a><a href="#club">Hazte socio</a><a href="#soluciones">Soluciones</a></nav>
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
   <a className="signal signalLink" href="#catalogo-llaveros" aria-label="Abrir catálogo NFC"><div className="chip"><b>NFC</b><span>ACTIVE</span></div><i/><i/><i/><small>ABRIR CATÁLOGO ↘</small></a>
   <div className="scrollTag">SCROLL TO EXPLORE <span>↓</span></div>
  </section>


  <section className="keyCatalog" id="catalogo-llaveros">
   <div className="catalogIntro"><p className="kicker">CATÁLOGO / NFC ACTIVE</p><h2>ELIGE TU<br/><span>FORMATO.</span></h2><p>Productos físicos Tapeador preparados para conectar contenido, contacto, menús, redes o experiencias digitales mediante NFC y QR.</p></div>
   <div className="catalogTypes">
    <article><div className="productIcon businessIcon"><span className="ringIcon"/><span className="tagIcon"><b>T</b><i>)))</i></span></div><small>EMPRESAS</small><h3>Llaveros<br/>empresariales</h3><p>Identidad de marca, contacto, redes, catálogos o soluciones personalizadas para equipos y clientes.</p><a href="#productos">VER OPCIONES →</a></article>
    <article><div className="productIcon cordIcon"><span className="ringIcon"/><span className="cordBody"><i/><i/><i/><b>NFC</b></span></div><small>RESISTENCIA</small><h3>Llaveros<br/>Paracord</h3><p>Formato resistente y práctico con tecnología NFC integrada para uso diario.</p><a href="#productos">VER OPCIONES →</a></article>
    <article><div className="productIcon printIcon"><span className="ringIcon"/><span className="printBody"><b>T</b><i>)))</i></span></div><small>PERSONALIZACIÓN</small><h3>Llaveros<br/>3D</h3><p>Diseños personalizados impresos en 3D con NFC integrado: personajes, logos, nombres y formas especiales.</p><a href="#productos">VER OPCIONES →</a></article>
    <article><div className="productIcon tableIcon"><span className="napkin"/><span className="tableBody"><b>)))</b><i>▦</i></span></div><small>NEGOCIOS / MESAS</small><h3>Servilleteros<br/>NFC + QR</h3><p>Acceso rápido a cartas, promociones, redes o información desde la mesa, tocando o escaneando.</p><a href="#productos">VER OPCIONES →</a></article>
   </div>
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


  <section className="clubSection" id="club">
   <div className="clubTop"><div><p className="kicker">04 / CLUB TAPEADOR</p><h2>HAZTE<br/><span>SOCIO.</span></h2></div><div className="pointsHero"><b>+1000</b><span>PUNTOS POR CADA COMPRA</span></div></div>
   <div className="clubGrid"><div className="clubBenefits"><p>Compra, acumula y canjea. Tus puntos Tapeador convierten cada compra en una recompensa.</p><div className="rewardProgress"><div className="rewardNumbers"><b>20,000</b><span>PUNTOS</span></div><div className="progressTrack"><i/></div><strong>LLAVERO TAPEADOR GRATIS</strong></div><div className="clubSteps"><span><b>01</b> REGÍSTRATE</span><span><b>02</b> COMPRA</span><span><b>03</b> SUMA PUNTOS</span><span><b>04</b> CANJEA</span></div></div>
   <form className="clubForm" onSubmit={(e)=>e.preventDefault()}><div><small>REGISTRO / CLUB TAPEADOR</small><h3>ÚNETE AL CLUB</h3></div><label>NOMBRE COMPLETO<input name="name" type="text" placeholder="Tu nombre" required minLength={2}/></label><label>NÚMERO DE CELULAR<input name="phone" type="tel" placeholder="+51 999 999 999" required/></label><label>FECHA DE NACIMIENTO<input name="birthDate" type="date" required/></label><label className="consent"><input type="checkbox" name="promoConsent"/><span>Acepto recibir promociones y beneficios de Tapeador, incluyendo ofertas por mi cumpleaños.</span></label><button className="cta clubJoin" type="submit">QUIERO SER SOCIO <span>↗</span></button><p className="privacyNote">Tus datos se usarán para gestionar tu membresía, puntos y promociones autorizadas.</p></form></div>
  </section>
  <section className="ticker"><div>TAPEADOR NFC — TOCA / CONECTA / COMPARTE — TAPEADOR NFC — TOCA / CONECTA / COMPARTE — </div></section>
  <footer><a className="brand" href="#"><span className="mark">T</span>TAPEADOR</a><p>TECNOLOGÍA NFC PARA EL MUNDO REAL.</p><small>© 2026 TAPEADOR</small></footer>

  {open&&<><div className="shade" onClick={()=>setOpen(false)}/><aside className="drawer"><div className="drawerHead"><div><small>TAPEADOR / PEDIDO</small><h2>TU CARRITO</h2></div><button onClick={()=>setOpen(false)}>×</button></div>{cart.items.length===0?<p className="empty">TU CARRITO ESTÁ VACÍO.</p>:cart.items.map(i=><div className="cartItem" key={i.product.id}><span>{i.product.emoji}</span><div><b>{i.product.name}</b><small>Precio por confirmar</small></div><div className="qty"><button onClick={()=>cart.change(i.product.id,-1)}>−</button>{i.qty}<button onClick={()=>cart.change(i.product.id,1)}>+</button></div></div>)}<div className="drawerBottom"><p>Confirmaremos precios y personalización antes de procesar tu pedido.</p><button className="cta wide" disabled={!cart.items.length}>CONTINUAR PEDIDO →</button></div></aside></>}
 </main>
}