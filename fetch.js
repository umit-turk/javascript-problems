apiKey = "4f51bc64-d3c0-4a30-a153-d2ec70d97507";
let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=5&convert=USD";

fetch(url + qString)
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data.data));
