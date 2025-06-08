const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

module.exports = async (req, res) => {
  const tienda = req.query.tienda || 'bluehost.com';
  const url = `https://www.retailmenot.com/view/${tienda}`;

  try {
    const response = await fetch(url);
    const html = await response.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const couponElements = document.querySelectorAll('[data-clipboard-text]');
    const cupones = Array.from(couponElements)
      .map(el => el.getAttribute('data-clipboard-text'))
      .filter(Boolean);

    res.status(200).json({ tienda, cupones });
  } catch (error) {
    console.error('Error scraping cupones:', error);
    res.status(500).json({ error: 'Error al obtener cupones.' });
  }
};