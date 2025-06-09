import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

export default async function handler(req, res) {
  const tienda = req.query.tienda || "bluehost.com";
  const url = `https://www.retailmenot.com/view/${tienda}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const cupones = [];
    document.querySelectorAll('[data-testid="offer-title"]').forEach(el => {
      const texto = el.textContent.trim();
      if (texto.length < 60) cupones.push(texto);
    });

    res.status(200).json({ tienda, cupones });
  } catch (err) {
    res.status(500).json({ error: "Scraping error", message: err.message });
  }
}
