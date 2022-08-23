let apiKey = 'ffd626443aa44e25b9d45aeb1d17013d';
let countrycode;

export const NewsApi = {
   fetchNewsStories(country){
    if(country === 'North America'){
        countrycode = 'us'
    }else if (country === 'Europe'){
        countrycode = 'gb'
    } else if (country === 'Africa'){
        countrycode = 'ng'
    } else if (country === 'South America'){
        countrycode = 've'
    } else if (country === 'Asia'){
        countrycode = 'jp'
    } else if (country === 'Australasia'){
        countrycode = 'nz'
    } else{ 
        countrycode = 'fr'
    }
    return fetch(`https://newsapi.org/v2/top-headlines?country=${countrycode}&apiKey=${apiKey}`
    ).then(response => {
        return response.json()
    }).then(jsonResponse => {
        return jsonResponse.articles.map(article => ({
            title: article.title, 
            author: article.author
        }))
    })
}

}