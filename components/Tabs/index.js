// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.topics');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(res => {
    const topics = res.data.topics
    console.log('topics as array:', topics)
    topics.forEach(topic => {
        const topicList = topic;
        tabs.append(component(topicList))
        console.log(topicList)
        
    })})

    function component(topicList){
        const tab = document.createElement('div')
        tab.classList.add('tab')
        tab.textContent = topicList
        return tab
    }
