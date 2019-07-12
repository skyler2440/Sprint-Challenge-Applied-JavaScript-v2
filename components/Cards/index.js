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
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log(res.data)
        const articles = res.data
       articles.array.forEach(element => {
           console.log(element)
       });
    })
function createCards(){
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
    
    // headline.textContent = 
    // imgSrc.src = 
    // authorName.textContent = `By: ${}`
}