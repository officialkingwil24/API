let container = document.getElementById('container');
let query = document.getElementById('search').value ||"Power"

function search(){
    query = document.getElementById('search').value ||"Power"
    let url = `http://www.omdbapi.com/?s=${query}&apikey=d961dcc`
    container.innerHTML=''

    fetch(url)

    .then(res => res.json())
    .then(res=> movies(res))
    .catch(err=> console.log(err))
}
window.onload = search

function movies(res){

    console.log(res)
    let counter = 0
    for(let i = 0; i < res.Search.length; i++){
        // counter++
        // if(counter <= 6){
        let card = document.createElement('div');
        let poster = document.createElement('img');
        let title = document.createElement('h2');
        let year = document.createElement('p');

        card.setAttribute('class', 'card');

        poster.src = res.Search[i].Poster
        year.innerText = res.Search[i].Year
        title.innerText = res.Search[i].Title

        card.appendChild(title);
        card.appendChild(poster);
        card.appendChild(year);
        container.appendChild(card);

        // }
        // else {
        //     let card = document.createElement('div');
        //     let poster = document.createElement('img');
        //     let title = document.createElement('h2');
        //     let year = document.createElement('p');
    
        //     card.setAttribute('class', 'card');
    
        //     poster.src = res.Search[i].Poster
        //     year.innerText = res.Search[i].Year
        //     title.innerText = res.Search[i].Title
    
        //     card.appendChild(title);
        //     card.appendChild(poster);
        //     card.appendChild(year);
        //     container.appendChild(card);
    
        //     document.body.appendChild(card)
        // } 
    }

    
}

// let container = document.getElementById('container')
// let query = 'Power';
// let url = `http://www.omdbapi.com/?s=juice&apikey=d961dcc`

// fetch(url)
//     .then(res => res.json())
//     .then(res => { 

//            // console.log(res.results.search[i].urls.full);
//             console.log(res.Search)

//             let card = document.createElement('div');
//             let picture = document.createElement('img');
//             let header = document.createElement('h1')
//             let description = document.createElement('p');

        

//             picture.src = res.results[i].urls.full;
//             description.innerText = res.results[i].description;
//             header.innerHTML = res.results[i].id;

//             card.appendChild(header);
//             card.appendChild(picture);
//             card.appendChild(description);
//             container.appendChild(card);
//         }
//     })
//     .catch(err => console.log(err))

// function search(){
//     query = document.getElementById('search').value || 'power book II';

//     url = `http://www.omdbapi.com/?s=juice&apikey=d961dcc`
//     container.innerHTML = '';

//     fetch(url)
//     .then(res => res.json())
//     .then(res => { console.log(res.results)
//         for(let i = 0; i < res.results.length; i++){
//             console.log(res.results[i].urls.full);


//             let card = document.createElement('div');
//             let picture = document.createElement('img');

//             card.setAttribute('class', 'card');

//             picture.src = res.results[i].urls.full;

//             card.appendChild(picture);
//             container.appendChild(card);
//         }
//     })
//     .catch(err => console.log(err))
// }

// search()