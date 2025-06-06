# Cuponera Pro API para Vercel

## Cómo usar

1. Crea un repositorio en GitHub.
2. Sube estos archivos (mantén la estructura /api/cupones.js).
3. Conecta el repositorio a Vercel (https://vercel.com).
4. El endpoint quedará activo en: https://<tu-nombre>.vercel.app/api/cupones?tienda=bluehost.com

## ¿Qué hace?

- Hace scraping de cupones desde https://www.retailmenot.com/view/[tienda]
- Extrae cupones reales desde los botones visibles
- Devuelve un JSON con los cupones encontrados