let container = document.getElementById('container')
let query = 'Cartoon';
let url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=sz7DGJ-dS-2_8Pn_sBCamirdlYLGBFtHNWNTZGqyXes`

fetch(url)
    .then(res => res.json())
    .then(res => { console.log(res.results)
        for(let i = 0; i < res.results.length; i++){
            console.log(res.results[i].urls.full);


            let card = document.createElement('div');
            let picture = document.createElement('img');
            let header = document.createElement('h1')
            let description = document.createElement('p');

            card.setAttribute('class', 'card');

            picture.src = res.results[i].urls.full;
            description.innerText = res.results[i].description;
            header.innerHTML = res.results[i].id;

            card.appendChild(header);
            card.appendChild(picture);
            card.appendChild(description);
            container.appendChild(card);
        }
    })
    .catch(err => console.log(err))

function search(){
    query = document.getElementById('search').value || 'cartoon';

    url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=sz7DGJ-dS-2_8Pn_sBCamirdlYLGBFtHNWNTZGqyXes`
    container.innerHTML = '';

    fetch(url)
    .then(res => res.json())
    .then(res => { console.log(res.results)
        for(let i = 0; i < res.results.length; i++){
            console.log(res.results[i].urls.full);


            let card = document.createElement('div');
            let picture = document.createElement('img');

            card.setAttribute('class', 'card');

            picture.src = res.results[i].urls.full;

            card.appendChild(picture);
            container.appendChild(card);
        }
    })
    .catch(err => console.log(err))
}

window.onload = search;