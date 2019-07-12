// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('tabs');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(res => {
    const topics = res.data.topics
    console.log('topics as array:', topics)
    topics.forEach(topic => {
        const topicList = topic;
        console.log('topicList', topicList)})
    })
    .catch(error => {
    // Handles failure:
    console.log('The API is currently down, try again later', error)
  })
  function component(user)
  {
    

const tab = document.createElement('div');
tab.classList.add('topics')
tab.textContent = topicList;
console.log('topiclist2', topicList)



return tab;

    }