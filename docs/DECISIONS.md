# Decisiones

## 001 — Next.js App Router + TypeScript
Elegido para separar componentes servidor/cliente y mantener tipos estrictos.

## 002 — Supabase Tapeador
Se reutiliza el proyecto Supabase existente `Tapeador` como backend.

## 003 — Carrito local en MVP
El carrito se guarda en localStorage. La base de datos será fuente de verdad para productos, precios y pedidos.

## 004 — Seguridad de pedidos
El cliente nunca será fuente de verdad del precio o total. La creación final del pedido se validará/recalculará en servidor.
