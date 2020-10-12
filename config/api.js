var myHeaders = new Headers();
myHeaders.append("x-rapidapi-host", "edamam-recipe-search.p.rapidapi.com");
myHeaders.append("x-rapidapi-key", process.env.API_KEY);
myHeaders.append("useQueryString", "True");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=chicken", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));