var mainGrid = document.getElementById('main-container');


var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true);
xhttp.send();

xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
        var responseArr = JSON.parse(xhttp.responseText);
        for (var i = 0; i < responseArr.length; i++) {
            //create main card
            var videoCard = createVideoCard(responseArr[i].id, responseArr[i].thumbnail, responseArr[i].title);
            mainGrid.appendChild(videoCard);
        }
    }
}




function createVideoCard(id, card_image, card_title) {
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    //create thumbnail for the card
    var cardHyperLink = document.createElement("a");
    cardHyperLink.href = "./watch-page.html?source=" + id;
    var thumbnail = document.createElement('img');
    thumbnail.src = card_image;
    thumbnail.classList.add('thumbnail');

    // create card data div

    var cardData = document.createElement('div');
    cardData.classList.add('card-data');


    var title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = card_title;

    cardHyperLink.appendChild(thumbnail);
    cardHyperLink.appendChild(title);
    cardData.appendChild(cardHyperLink);
    cardDiv.appendChild(cardData);

    return cardDiv;



}





