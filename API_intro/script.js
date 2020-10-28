let body = document.querySelector('body');console.log
function getReq(){
    let res = {
        "Soccer": {name: "Soccer", numOfPlayers:"22", ball: true, equipment: ['boots', 'ball', 'field'], img: 'https://mysportsmovement.com/wp-content/uploads/2019/06/17.jpg'},
        "Tennis": {name: "Tennis", numOfPlayers: 2, ball: true, equipment: ['sneakers', 'ball', 'net', 'raquet'], img: 'https://www.denverpost.com/wp-content/uploads/2017/12/serena-williams.jpg?w=512'},
        "Rugby": {name: "Rugby", numOfPlayers: 30, ball: true, equipment: ['boots', 'ball', 'goals'], img: 'https://i.ytimg.com/vi/j6fWDbPyXlc/maxresdefault.jpg'},
        "Formula One": {name: "Formula One", numOfPlayers: 20, ball: false, equipment: ['car', 'helmate', 'driving shoes', 'driving gloves', 'driving suit'], img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/03/20/26192.jpg'},
    }
    for(let key in res){
        console.log(res[key])

        let banner = document.createElement('img');
        let newTitle = document.createElement('h1');
        let equipment = document.createElement('p')
        let card = document.createElement('div');

        card.setAttribute('class', 'card');

        banner.src = res[key].img
        newTitle.innerText = res[key].name;
        equipment.innerText = res[key].equipment;

        card.appendChild(banner);
        card.appendChild(newTitle);
        card.appendChild(equipment);

        body.appendChild(card);
    }
}
console.log(getReq())