// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardCont = document.querySelector('.cards-container')    
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log(res.data)
        const jsarticles = res.data.articles.javascript
        const bsarticles = res.data.articles.bootstrap
        const technology = res.data.articles.technology
        const jquery = res.data.articles.jquery
        const nodejs = res.data.articles.node
        jsarticles.forEach(element => {
            cardCont.append(createCards(element))
        });
        bsarticles.forEach(element => {
            console.log(element)
            cardCont.append(createCards(element))
        });
        technology.forEach(element => {
            console.log(element)
            cardCont.append(createCards(element))
        });
        jquery.forEach(element => {
            console.log(element)
            cardCont.append(createCards(element))
        });
        nodejs.forEach(element => {
            console.log(element)
            cardCont.append(createCards(element))
        });
       });
   
   
function createCards(element){
    const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgCont = document.createElement('div'),
    imgSrc = document.createElement('img'),
    authorName = document.createElement('span');

    card.append(headline)
    card.append(author) 
    imgCont.append(author)
    imgSrc.append(imgCont)
    authorName.append(author)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('image-container')
    
    headline.textContent = element.headline
    imgSrc.src = element.authorPhoto
    authorName.textContent = `By: ${element.authorName}`
    return card
}