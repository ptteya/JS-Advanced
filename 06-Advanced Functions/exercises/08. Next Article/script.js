function getArticleGenerator(input) {

    let articles = input;

    return () => {
        if (articles.length > 0) {
            let content = document.querySelector('#content');
            console.log(content)

            let article = document.createElement('article');
            article.innerText = articles.shift();
            content.appendChild(article);
        }
    }
}
