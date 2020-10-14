function apiQuery(req,res) {
    let myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "edamam-recipe-search.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", process.env.API_KEY);
    myHeaders.append("useQueryString", "True");

    let raw = "";

    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search${!!req.body.ingredientList ? `?q=${req.body.ingredientList.join(',')}` : `?q=`}${!!req.body.requiredList ? `?r=${req.body.requiredList.join(',')}` : ``}`, requestOptions)
    .then(response => {
        res.status(200).json(response);
    })
    .then(result =>  result)
    .catch(error => console.log('error', error));

    
}