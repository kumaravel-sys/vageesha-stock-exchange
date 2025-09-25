// === Editable Settings ===
const API_KEY = 'd3aksk1r01qrtc0ckpa0d3aksk1r01qrtc0ckpag'; // Replace with your Finnhub key
const PASSWORD = 'vse2k25@svv'; // Change to your desired password

// You can rename companies here (these are the labels shown on UI)
const customnames=[
{ symbol: "NTPC Ltd", displayName: "ORGANISING DEPARTMENT" },
  { symbol: "Oil&Natural Gas Corpn Ltd", displayName: "MODELS DEPARTMENT" },
  { symbol: "Bharat Electronics Ltd", displayName: "GAMES DEPARTMENT" },
  { symbol: "Power Grid Corporation of India Ltd", displayName: "FOODSTALL DEPARTMENT" },
  { symbol: "Eternal Ltd", displayName: "PHOTOGRAPHY DEPARTMENT" },
  { symbol: "Wipro Ltd", displayName: "TECH DEPARTMENT" },
  { symbol: "Coal India", displayName: "STALLS DEPARTMENT" },
  { symbol: "Ashoka Buildcon Ltd", displayName: "FINANCE DEPARTMENT" }
];
const stockSymbols = Object.keys(customNames);

function checkPassword() {
  const input = document.getElementById('password').value;
  if (input === PASSWORD) {
    document.getElementById('login-gate').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
    fetchStockData();
  } else {
    document.getElementById('error-msg').textContent = 'Incorrect Password!';
  }
}

function fetchStockData() {
  const container = document.getElementById('stocks');
  stockSymbols.forEach(symbol => {
    fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const card = document.createElement('div');
        card.className = 'stock-card';
        card.innerHTML = `
          <h3>${customNames[symbol]}</h3>
          <p><strong>Current:</strong> $${data.c}</p>
          <p><strong>High:</strong> $${data.h}</p>
          <p><strong>Low:</strong> $${data.l}</p>
          <p><strong>Open:</strong> $${data.o}</p>
          <p><strong>Prev Close:</strong> $${data.pc}</p>
        `;
        container.appendChild(card);
      })
      .catch(err => console.error('Error fetching stock:', err));
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
