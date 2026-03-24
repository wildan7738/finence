// Widget TradingView agar terlihat kamu benar-benar Analyst Finance
new TradingView.widget({
  "width": "100%",
  "height": 400,
  "symbol": "OANDA:XAUUSD",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "id",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "container_id": "tradingview_widget"
});

// Efek scroll sederhana
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
});