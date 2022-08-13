let nextFollows = [

    {
        "name": "Alan Meyer",
        "profilImg": "img/profilImage1.jpg",
        "location": "München",
        "postImage": "img/postImage1.jpg",
        "likes": [132],
        "ifLiked": false,
        "comment": "Wunderschön, oder? Habe ich gestern im Zoo fotografiert :)",
        "newCommentary": []

    },
    {
        "name": "Manja Charista",
        "profilImg": "img/profilImage2.jpg",
        "location": "Hamburg",
        "postImage": "img/postImage2.jpg",
        "likes": [89],
        "ifLiked": false,
        "comment": "Richtig guter Schnappschuss von meinem Hund, oder was meint ihr?",
        "newCommentary": []

    },
    {
        "name": "Mark Bachwert",
        "profilImg": "img/profilImage3.jpg",
        "location": "Dresden",
        "postImage": "img/postImage3.jpg",
        "likes": [42],
        "ifLiked": false,
        "comment": "Ein cooles Foto von meinen Kindern gemacht :)",
        "newCommentary": []

    },
    {
        "name": "Mike Buschmann",
        "profilImg": "img/profilImage4.jpg",
        "location": "Schleswig-Holstein",
        "postImage": "img/postImage4.jpg",
        "likes": [12],
        "ifLiked": false,
        "comment": "Meint ihr, dass der Hund zu mir passen würde? :D",
        "newCommentary": []

    },
    {
        "name": "Shadowpizza",
        "profilImg": "img/profilImage5.png",
        "location": "Hamburg",
        "postImage": "img/postImage5.jpg",
        "likes": [4872],
        "ifLiked": false,
        "comment": "Achtung Werbung! - Super Pizzen bei Shadowpizza, greift zu!",
        "newCommentary": []

    }

];

let profiles = [

    {
        "name": [""],
        "profilImg": "img/profilImage.png",
        "ifLogedIn": false
    }

];

let postsList = [];
let counter = [];



/** ################################################################################################################################################################################################################# */



/** 
 * the render function.
 * 
 * */
function render() {
    renderPosts();
}

loadFromLocalStorage();


/**
 * render all posts.
 * 
 */
function renderPosts() {
    let posts = document.getElementById("shadowgramPosts");
    posts.innerHTML = "";

    for (let i = 0; i < postsList.length; i++) {

        posts.innerHTML += generatePostsHTML(i);

        if (postsList[i]['ifLiked'] == true) {
            document.getElementById(`likeImage${i}`).classList.add("dNone");
            document.getElementById(`disslikeImage${i}`).classList.remove("dNone");
        } else {
            document.getElementById(`likeImage${i}`).classList.remove("dNone");
            document.getElementById(`disslikeImage${i}`).classList.add("dNone");
        }

        let newComment = document.getElementById(`newComment${i}`);
        for (let j = 0; j < postsList[i]['newCommentary'].length; j++) {
            const newCommentList = postsList[i]['newCommentary'][j];

            newComment.innerHTML += generateNewCommentHTML(newCommentList, i, j);
        }

    }

    renderFollows();
    renderNextFollows();
    renderProfil();
    renderCounterFollows();
}



/**
 * generate posts HTML-Content.
 * @param {i}
 * 
 */
function generatePostsHTML(i) {
    return /*html*/ `
    <div class="shadowgramPostDesign">
        <div class="shadowgramSecondContainer">
            <div class="profileNameLocationFlex">
                <img class="profileImageDynamicContent" src="${postsList[i]['profilImg']}" alt="">   
                <div class="NameLocationFlex">
                    <span><b>${postsList[i]['name']}</b></span>
                    <span class="locationDesign">${postsList[i]['location']}</span>
                </div>
            </div>    
            <div>
                <img class="pointImageDesign" src="img/punkte.png" alt="">
            </div>
        </div>
        <div>
            <img class="postImageDesign" src="${postsList[i]['postImage']}" alt="">
        </div> 
        <div class="shadowgramThirdContainer">
            <img onclick="addLike(${i})" class="paddingRight" id="likeImage${i}" src="img/heart_empty.png" alt="">
            <img onclick="deleteLike(${i})" class="paddingRight dNone" id="disslikeImage${i}" src="img/heart_full.png" alt="">
            <img class="paddingRight" src="img/sprechblase.png" alt="">
            <img class="paddingRight" src="img/gps-navigation.png" alt="">
        </div>
        <div class="likeContainer">
            <span id="nextLike"><b>${postsList[i]['likes']}</b> Likes.</span>
        </div>
        <div class ="commentContainer">
            <div>
                <span><b>${postsList[i]['name']}:</b> ${postsList[i]['comment']}</span><br>
            </div>
            <div id="newComment${i}">
            </div> 
        </div>
        <div class="borderline"></div>
        <form onsubmit="addComment(${i}); return false;">
            <div class="inputContainer">
                <div class="inputContainerFlex">
                    <img src="img/smiley.png" alt="">
                    <input type="text" required placeholder="Kommentieren..." id="inputField${i}">
                </div>
                <div>
                    <button class="clickBtnPost">Post</button>
                </div>
            </div>
        </form>    
    </div>
    `;
}



/**
 * generate new comment HTML-Content.
 * @param {*} newCommentList
 * @param {*} i
 * @param {*} j
 * @returns 
 * 
 */
function generateNewCommentHTML(newCommentList, i, j) {
    return /*html*/ `
    <div class ="newCommentFlex">
        <div>
            <span><b>${profiles[0]['name']}: </b></span><span>${newCommentList}</span>
        </div>
        <div>
            <img onclick="deleteComment(${i}, ${j})" src="img/x-mark.png" alt="">
        </div>
    </div>`
}



/** ################################################################################################################################################################################################################# */


/**
 * Renders the suggestions.
 * 
 */
function renderNextFollows() {
    let nextFollow = document.getElementById("shadowgramNextFollows");
    nextFollow.innerHTML = "";

    for (let i = 0; i < nextFollows.length; i++) {

        nextFollow.innerHTML += generateNextFollowsHTML(i);
    }

}


function generateNextFollowsHTML(i) {
    return /*html*/ `
    <div class="nextFollowContainer">
        <div class="nextFollowFlex">
            <img class="profileImageDynamicContent" src="${nextFollows[i]['profilImg']}" alt="">
            <span class="paddingLeft">${nextFollows[i]['name']}</span>
        </div>
        <div>
            <span onclick = "follow(${i})" class="clickBtn">Follow</span>
        </div>
    </div>`
}



/** ################################################################################################################################################################################################################# */


/**
 * Render the current people you are following.
 * 
 */
function renderFollows() {
    let follows = document.getElementById("shadowgramFollows");
    follows.innerHTML = "";

    for (let i = 0; i < postsList.length; i++) {

        follows.innerHTML += generateFollowsHTML(i);
    }
}


function generateFollowsHTML(i) {
    return /*html*/ `
    <div class="nextFollowContainer">
        <div class="nextFollowFlex">
            <img class="profileImageDynamicContent" src="${postsList[i]['profilImg']}" alt="">
            <span class="paddingLeft">${postsList[i]['name']}</span>   
        </div>
        <div>
            <span onclick="alertEntfollow(${i})" class="clickBtn">Unfollow</span>
        </div>
    </div>`
}


/** ################################################################################################################################################################################################################# */


/**
 * Renders your profile.
 * 
 */
function renderProfil() {
    let profil = document.getElementById("shadowgramProfil");
    profil.innerHTML = "";

    for (let i = 0; i < profiles.length; i++) {

        profil.innerHTML = generateProfilHTML(i);

        if (profiles[i]['ifLogedIn'] == true) {
            document.getElementById('shadowgramNextFollows').classList.remove("dNone");
            document.getElementById("mainBody").classList.add("calc");
            document.getElementById("loginDesign").classList.remove("loginDesign");
            document.getElementById("currentFollows").style.display = "unset";
            document.getElementById("nextFollows").style.display = "unset";
            document.getElementById("profilFlex").classList.remove("profilImageFlexLogin");
            document.getElementById("loginHeadline").style.display = "none";
            document.getElementById("loginText").style.display = "none";
        } else {
            document.getElementById("profilFlex").classList.remove("profilImageFlex");
            document.getElementById("changeUser").innerHTML = "Namen vergeben";
            document.getElementById("currentFollows").style.display = "none";
            document.getElementById("nextFollows").style.display = "none";
        }

        if (postsList.length == 0) {
            document.getElementById("mainBody").classList.remove("calc");
        }
    }
}



function generateProfilHTML(i) {
    return /*html*/ `
    <div id="profilFlex" class="profilImageFlex profilImageFlexLogin">
        <div class="profilImageDesign">
            <img src="${profiles[i]['profilImg']}" alt="">
            <span><b>${profiles[i]['name']}</b></span>
        </div>
        <div>
            <span id="changeUser" onclick="changeUser(${i})" class="registerBtn"><b>Change name</b></span>
        </div>
    </div>`
}


/** ################################################################################################################################################################################################################# */

/**
 *  follow function
 * @param {*} i
 * 
 */
function follow(i) {
    postsList.push(nextFollows[i]);
    counter.push(1);
    nextFollows.splice(i, 1);
    document.getElementById("shadowgramFollows").classList.remove("dNone");

    if (postsList.length > 0) {
        document.getElementById("mainBody").classList.add("calc");
    }

    renderCounterFollows();
    saveToLocalStorage();
    renderPosts();
}


/**
 * alert by entfollow
 * @param {*} i
 * 
 */
function alertEntfollow(i) {
    let text = 'Do you really want to unfollow this person?';
    if (confirm(text) == true) {
        nextFollows.push(postsList[i]);
        postsList.splice(i, 1);
        counter.splice(i, 1);

        if (postsList.length == 0) {
            document.getElementById("mainBody").classList.remove("calc");
        }
    }

    renderCounterFollows();
    saveToLocalStorage();
    renderPosts();
}


/** ################################################################################################################################################################################################################# */


/**
 * Renders the counter of the number of current people you are following.
 * 
 */
function renderCounterFollows() {
    let quantityFollows = counter.length;
    let counterFollows = document.getElementById("counterFollows");
    if (quantityFollows == 0) {
        counterFollows.classList.add("dNone");
    } else {
        counterFollows.classList.remove("dNone");
        counterFollows.innerHTML = quantityFollows;
    }
}


/** ################################################################################################################################################################################################################# */


/**
 * Adds comments depending on the iteration.
 * @param {*} i
 * 
 */
function addComment(i) {
    let inputField = document.getElementById(`inputField${i}`);
    inputField.innerHTML = "";

    if (inputField.value == "") {
        alert("The field must be filled.")
    } else {
        postsList[i]['newCommentary'].push(inputField.value);
    }


    inputField.value = "";
    saveToLocalStorage();
    renderPosts();
}


/**
 * Removes comments by iteration.
 * @param {*} i
 * @param {*} j
 */
function deleteComment(i, j) {
    postsList[i]['newCommentary'].splice(j, 1);

    saveToLocalStorage();
    renderPosts();
}


/** ################################################################################################################################################################################################################# */


/**
 * Makes it possible to enter your own name.
 * @param {*} i
 * 
 */
function changeUser(i) {
    let newName = (prompt("Gebe deinen gewünschten Benutzernamen ein."));
    if (isNaN(newName) == false) {
        alert("A name doesn't start with a number!");
    } else {
        profiles[i]['ifLogedIn'] = true;
        profiles[i]['name'].push(newName);
        profiles[i]['name'].splice(i, 1);
    }
    saveToLocalStorage();
    renderPosts();
}


/** ################################################################################################################################################################################################################# */


/**
 * Like the respective post and push the number of likes +1.
 * @param {*} i
 */
function addLike(i) {
    postsList[i]['ifLiked'] = true;
    postsList[i]['likes']++;
    saveToLocalStorage();
    renderPosts();
}


function deleteLike(i) {
    postsList[i]['ifLiked'] = false;
    postsList[i]['likes']--;
    saveToLocalStorage();
    renderPosts();
}


/** ################################################################################################################################################################################################################# */


/**
 * LocalStorage
 */
function saveToLocalStorage() {
    let nextFollowsAsText = JSON.stringify(nextFollows);
    let profilesAsText = JSON.stringify(profiles);
    let postsListAsText = JSON.stringify(postsList);
    let counterAsText = JSON.stringify(counter);

    localStorage.setItem('NextFollows', nextFollowsAsText)
    localStorage.setItem('profiles', profilesAsText);
    localStorage.setItem('postsLists', postsListAsText);
    localStorage.setItem('counter', counterAsText);
}

function loadFromLocalStorage() {
    let nextFollowsAsText = localStorage.getItem('NextFollows');
    let profilesAsText = localStorage.getItem('profiles');
    let postsListAsText = localStorage.getItem('postsLists');
    let counterAsText = localStorage.getItem('counter');

    if (nextFollowsAsText && profilesAsText && postsListAsText && counterAsText) {
        nextFollows = JSON.parse(nextFollowsAsText);
        profiles = JSON.parse(profilesAsText);
        postsList = JSON.parse(postsListAsText);
        counter = JSON.parse(counterAsText);
    }
}


/** ################################################################################################################################################################################################################# */


/**
 * Filter the names from the search bar.
 * The function that renders the complete page is inserted with access to the "Names".
 */
function filterNames() {
    let search = document.getElementById("search").value;
    search = search.toLowerCase();

    let posts = document.getElementById("shadowgramPosts");
    posts.innerHTML = "";

    for (let i = 0; i < postsList.length; i++) {
        let name = postsList[i]['name'];
        if (name.toLowerCase().includes(search)) {


            posts.innerHTML += generatePostsHTML(i);

            if (postsList[i]['ifLiked'] == true) {
                document.getElementById(`likeImage${i}`).classList.add("dNone");
                document.getElementById(`disslikeImage${i}`).classList.remove("dNone");
            } else {
                document.getElementById(`likeImage${i}`).classList.remove("dNone");
                document.getElementById(`disslikeImage${i}`).classList.add("dNone");
            }

            let newComment = document.getElementById(`newComment${i}`);
            for (let j = 0; j < postsList[i]['newCommentary'].length; j++) {
                const newCommentList = postsList[i]['newCommentary'][j];

                newComment.innerHTML += generateNewCommentHTML(newCommentList, i, j);
            }

        }
    }

    renderFollows();
    renderNextFollows();
    renderProfil();
    renderCounterFollows();


}


/** ################################################################################################################################################################################################################# */


/**
 * Responsive Menu
 */
function openResponsive() {
    document.getElementById("loginDesign").classList.remove("popUpTransform");
    document.getElementById("openResponsive").classList.add("dNone");
    document.getElementById("closeResponsive").classList.remove("dNone");
}


function closeResponsive() {
    document.getElementById("loginDesign").classList.add("popUpTransform");
    document.getElementById("openResponsive").classList.remove("dNone");
    document.getElementById("closeResponsive").classList.add("dNone");
}