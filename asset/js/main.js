 async function getNews(){
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=bc7b817aa06a44798ad06680c8e19fc1");
    const data = await response.json();
    const articles = data.articles;
    const result = articles.map(function(article){
        return `
        <tr>
        <td>${article.source.id}</td>
        <td>${article.title}</td>
        <td>${article.author}</td>
        <td><img src="${article.urlToImage}" ></td>
        </tr>
        `;

    }).join(" ")
  document.querySelector(".viewNew").innerHTML = result;
}

getNews();