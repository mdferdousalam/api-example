const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const bloqueQuote = document.getElementById("quote");
  bloqueQuote.innerText = quote.quote;
  //   console.log(quote);
};
