document.getElementById('add-bgColor').addEventListener('click', function () {
  document.getElementById('container').style.backgroundColor = 'lightblue';
  document.getElementById('container').style.padding = '10px';
})
function addBorder() {
  const articles = document.getElementsByTagName('article');
  for (const article of articles) {
    article.style.border = '3px solid gold';
    article.style.backgroundColor = 'cornflowerblue';
    article.style.borderRadius = '10px';
    article.style.color = 'white';
  }
}
document.getElementById('add-margin-padding').addEventListener('click', function () {
  const articles = document.getElementsByTagName('article');
  for (const article of articles) {
    article.style.marginBottom = '10px';
    article.style.padding = '10px';
  }
})
function addArticle() {
  const container = document.getElementById('container');
  const article = document.createElement('article');
  article.innerHTML = `
  <h2 class="title">Article</h2>
  <p>Maiores at nobis repudiandae ex quas quia error esse fugit itaque enim, suscipit, facilis optio.</p>
  `
  container.appendChild(article);
}

