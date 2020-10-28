let body = document.querySelector('body');
let url = 'https://dog.ceo/api/breeds/image/random/50'

fetch(url)
  .then(res => res.json())
  .then(res => {
      console.log(res)
      for(let i = 0; i < res.message.length; i++){
        let picture = document.createElement('img'); // creating an html(node) element
        picture.src = res.message[i]; // adding a source(src) to the element
        body.appendChild(picture); // adding it to the body
    }
})
  .catch(err => console.log(err))
  // node is similar to objects