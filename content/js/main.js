let linkRequest = {
  destination: "http://nicedevtryhard.byethost16.com/",
  domain: { fullName: "rebrand.ly" }
  //, slashtag: "nicedev"
  //, title: "My Portfolio"
}

let requestHeaders = {
  "Content-Type": "application/json",
  "apikey": "54c95134525245b69d721db185022584"
}

$.ajax({
  url: "https://api.rebrandly.com/v1/links",
  type: "post",
  data: JSON.stringify(linkRequest),
  headers: requestHeaders,
  dataType: "json",
  success: (link) => {
    console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
  }
});