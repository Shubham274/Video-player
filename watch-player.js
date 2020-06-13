

var mainCardDiv = document.getElementById('watch-details-container');
var sideMenu = document.getElementById('side-menu');

var xhttp = new XMLHttpRequest();
var source = location.href.split('source=')[1];
console.log(location.href.split('source=')[1])


xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/video/" + source, true);
xhttp.send();


xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
        var responseArr = JSON.parse(xhttp.responseText);
        var videoCardDetails = createDetailsCard(responseArr);
        //console.log(responseArr);
    }
}

function createDetailsCard(details) {

    var mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');
    var cardFrame = document.createElement('iframe');
    cardFrame.src = "https://player.vimeo.com/video/" + details.vimeoId;
    cardFrame.width = "100%";
    cardFrame.height = 360;
    cardFrame.frameBorder = 0;
    cardFrame.allow = "autoplay;fullscreen";
    cardFrame.allowFullscreen;

    mainDiv.appendChild(cardFrame);
    var viewsCard = document.createElement('p');
    viewsCard.classList.add('view-para');
    viewsCard.innerHTML = details.views + ' views ';
    mainDiv.appendChild(viewsCard);
    var iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');
    iconsDiv.innerHTML = `<i class="far fa-heart"></i><i class="far fa-comment-alt"></i><i class="far fa-bookmark"></i>`;

    viewsCard.appendChild(iconsDiv);
    var titleCard = document.createElement('h1');
    titleCard.classList.add('title-content');
    titleCard.innerHTML = details.title;
    mainDiv.appendChild(titleCard);


    var viewDetailsCard = document.createElement('p');
    viewDetailsCard.classList.add('details-para');
    viewDetailsCard.innerHTML = details.description;
    mainDiv.appendChild(viewDetailsCard);

    mainCardDiv.appendChild(mainDiv);

    var http = new XMLHttpRequest();
    http.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true);
    http.send();

    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            var responseArr = JSON.parse(http.responseText);
            for (var i = 0; i < responseArr.length; i++) {
                //create main card
                var videoCard = createVideoCard(responseArr[i].id, responseArr[i].thumbnail, responseArr[i].title);
                sideMenu.appendChild(videoCard);
            }
        }
    }
    //console.log(mainDiv);
}
function createVideoCard(id, card_image, card_title) {
    var sideDiv = document.createElement('div')
    sideDiv.classList.add('side-div');

    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card-side-div');
    //create thumbnail for the card
    var cardHyperLink = document.createElement("a");
    cardHyperLink.href = "watch-page.html?source=" + id;
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
    sideDiv.appendChild(cardDiv);
    console.log(cardDiv);
    return cardDiv;



}

/* <iframe src="https://player.vimeo.com/video/190062231" width="640" height="360" frameborder="0"
            allow="autoplay; fullscreen" allowfullscreen></iframe>

        <p>98110 views</p>
        <div>
            <i class="far fa-heart"></i>
            <i class="far fa-comment-alt"></i>
            <i class="far fa-bookmark"></i>
        </div>
        <hr>
        <h1>pineapple cheesecake</h1>
        <p>
            "Pineapple Cheesecake: 150g butter snap cookies; 90g butter, melted; 2 packs cream cheese, room temperature;
            3/4
            cup sugar; 1/2 tsp vanilla extract; 4 eggs; 4 slices canned pineapple (drained first); Preheat oven at
            320°F.
            Lightly grease mini muffin pans with melted butter, then line each recess with strips of wax paper (1in wide
            x
            3in long), crossing at base. Pulse cookies in a food processor until finely crumbled, then add melted butter
            to
            combine. Divide mixture into muffin pans and press firmly into bases. Prepare filling by mixing cream
            cheese,
            sugar and vanilla extract with an electric mixer. Add eggs, one at a time, beating well after each addition.
            Pulse sliced pineapple in a food processor into pulp and add to cream cheese mixture. Divide filling into
            muffin
            pans and bake 25-30 minutes until just firm. Cool slightly, then chill for at least 2 hours. Serving
            suggestion:
            Pipe some whipped cream over the cheesecake
            and top with a small slice of pineapple that's been dipped in Li-hing powder. Garnish with mint leaves."
        </p>
    </div> */
