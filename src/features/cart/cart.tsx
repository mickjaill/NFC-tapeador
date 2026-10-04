"use client";
import { useEffect,useState } from "react";
import type { Product } from "../catalog/products";
type Item={product:Product;qty:number};
const KEY="nfc-tapeador-cart";
export function useCart(){const [items,setItems]=useState<Item[]>([]);const [ready,setReady]=useState(false);useEffect(()=>{try{const raw=localStorage.getItem(KEY);if(raw)setItems(JSON.parse(raw));}catch{}setReady(true)},[]);useEffect(()=>{if(ready)localStorage.setItem(KEY,JSON.stringify(items))},[items,ready]);const add=(product:Product)=>setItems(v=>{const hit=v.find(i=>i.product.id===product.id);return hit?v.map(i=>i.product.id===product.id?{...i,qty:i.qty+1}:i):[...v,{product,qty:1}]});const change=(id:string,d:number)=>setItems(v=>v.map(i=>i.product.id===id?{...i,qty:i.qty+d}:i).filter(i=>i.qty>0));return {items,add,change,count:items.reduce((n,i)=>n+i.qty,0)}}