const api =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=6";


const cryptoList = document.getElementById("crypto");

async function loadPrices() {
  const res = await fetch(api);
  const data = await res.json();

  cryptoList.innerHTML = "";

  data.forEach(coin => {
    const cls =
      coin.price_change_percentage_24h >= 0 ? "green" : "red";

    cryptoList.innerHTML += `
      <tr>
        <td>${coin.name}</td>
        <td>$${coin.current_price.toLocaleString()}</td>
        <td class="${cls}">
          ${coin.price_change_percentage_24h.toFixed(2)}%
        </td>
      </tr>
    `;
  });
}

/* Initial Load */
loadPrices();

/* Auto Refresh every 8 seconds */
setInterval(loadPrices, 8000);

