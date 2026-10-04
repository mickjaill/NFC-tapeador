# Arquitectura — NFC Tapeador

## Objetivo
Catálogo ecommerce NFC mobile-first con carrito, pedidos y administración segura.

## Capas
- `src/app`: rutas y composición Next.js.
- `src/features/catalog`: catálogo y productos.
- `src/features/cart`: estado y reglas del carrito.
- `src/lib/supabase`: única puerta de acceso a Supabase.
- `docs`: decisiones, errores conocidos y arquitectura.

## Seguridad
RLS en toda tabla expuesta. El navegador solo usa URL + publishable key. Nunca incluir secret/service_role en código cliente. Los totales de pedidos serán recalculados en servidor usando precios de base de datos.

## Regla de mantenimiento
Los cambios deben limitarse al feature correspondiente. Si una decisión afecta arquitectura, seguridad o datos, registrar primero/actualizar DECISIONS.md. Los errores recurrentes van en KNOWN_ISSUES.md.
