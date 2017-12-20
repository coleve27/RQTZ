/**Facebook Graph API Search **/

/* REMINDER to update the access token!!!!!!! */

document.getElementById("searchBox").focus();
let pageSearchApp = {
    loader: document.getElementsByClassName("loader")[0],

    /** Invoked while pressing enter key on searchBox **/


    /////////////*From FACEBOOK, Api URL and Access token search tool */////////////////////

    onSearchFieldEnter: function (ev) {
        var that = this,
            searchField = document.getElementById("searchBox"),
            pagesContainer = document.getElementById("pagesContainer"),
            apiUrl = "https://graph.facebook.com/v2.11/search?q=",
            access_token = "EAACEdEose0cBANvOH1v1ANsdyvFHzxLDwKi7HojHOqgoZC82kEROojWgKF9xYMAPAiVZA5smL6keONV89aXVAEJvGYrY6KGQ1lvZAnWNqvZC2p6A6e1E7jFWedZBaU9zgQNj7m20ErOfWDmo0GXsZC2ZBIeqslbgxtdwuGqQTA0BUok9pIpTS4rk2qnp8bj5Tq5Iczo7VQv5wZDZD";

           // https://graph.facebook.com/v2.11/search?q=peanut&type=page&limit=6&fields=id,name,about,category,company_overview,posts, bio,engagement,picture,overall_star_rating&access_token=EAACEdEose0cBABlAi0kw53yiW2nuefX6sxpebSpqrBkNHsEGb3A0mB0MaR7ZBoT7hfRZCsZBIv9wnmJenSK99bTxaAUjfR1qLa7ngBVEtiaKU0GFUaTTqZBUOw60GbvUKUpmXq2nj7UBnm2vG63mz0bjdzxITd0N0NZBgShZAPngOcZCS9LuoWwVmP8iN7jzyb1K029zCaicAZDZD




        if (searchField.value != "") {
            pagesContainer.innerHTML = "";
            apiUrl = apiUrl + searchField.value + "&type=page&limit=6&fields=id,name,about,posts,category,company_overview,bio,engagement,picture,overall_star_rating,page_stories&access_token=" + access_token;
            that.createAjaxRequest("GET", apiUrl, that.pageCallbackFunction);
        }
        else {
            pagesContainer.innerHTML = "<pre>\
                                        <h1>No Page name was entered.</h1>\
                                        <h1>Please enter the page to be searched...</h1>\
                                    </pre>";
        }
    },
    /////////////*From FACEBOOK, Api URL and Access token search tool */////////////////////




    /////////////////*  Makes a div card to display the 5 results of the search query *///////////////////////////
    onClickCard: function (card) {
        window.open("http://facebook.com/" + card.getAttribute("pageid"), "_blank");
    },

    /** callback function for pageApi request **/
    pageCallbackFunction: function (event) {
        var that = this,
            pagesContainer = document.getElementById("pagesContainer"),
            xhrResponse = event.currentTarget,
            pictureURL, dom = "";

        if (xhrResponse.readyState == 4 && xhrResponse.status == 200) {
            // when document is read, do this
            var response = JSON.parse(xhrResponse.response).data,
                dom = "";
            //response from the api query if results found (note: values pulled are id,name,about,category,company_overview,bio,engagement,picture,overall_star_rating)
            if (response.length) {
                response.forEach(function (resultData) {
                    var card = "";
                    console.log(resultData);
                 //   console.log("post test: "+resultData.posts.data[1].created_time); // VERY IMPORTANT: Create a function that counts how many posts in the past month
                  //  console.log("engagement id test: "+resultData.engagement.count);


                  console.log("Impressions: " + resultData.posts);
                    card += "<div class='card col-md-2' pageId=" + resultData.id + " onclick='pageSearchApp.onClickCard(this)'>";
                    card += "<img src='" + resultData.picture.data.url + "'>";
                    card += "<div class='card-body'>";
                    card += "<h4><b>" + resultData.name + "</b></h4>";
                    card += "<p>" + resultData.category + "</p>";
                    card += "<p>" + resultData.posts + "</p>";
                    card += "<p>Likes: " + resultData.engagement.social_sentence + "</p>";
                    //console.log("People who Like this: " + resultData.engagement.count);
                    card += "</div>";
                    card += "</div>";
                    dom += card;
                });
                pagesContainer.innerHTML = dom;
            }
            //if no response are found
            else {
                pagesContainer.innerHTML = "<h1>No Results Found.</h1>";
            }
        }
    },
    /////////////////*Makes a div card to display the 5 results of the search query *///////////////////////////


    //////////////** An utility method for making Ajax calls **//////////////////////////
    createAjaxRequest: function (method, apiUrl, callbackFn) {
        var xhttp = new XMLHttpRequest(),
            that = this;

        xhttp.open(method, apiUrl, true);
        xhttp.send();
        xhttp.onreadystatechange = callbackFn.bind(that);
    },


};

//GET insights//

var accessToken = "EAACEdEose0cBAHaqLIXJkHjdUhjpZCYa7RVJsj3pQmgEjhrmPZBJx9Lhid4pZCLi1fwcNIGB6JIAN6ATZACxD1TZCNSugUzx2ZAaV0ravxX9hXZBFV8Bs2h8Xpaofufinumzq429HvHAXKnPNGAHHMcpOA6XnHBwtZAFskwYUWofZC857lMYKnRnLZAALZBdvgZCVV0ZD"
var page_engaged_users = "https://graph.facebook.com/v2.11/kittiesonfleek/insights/page_engaged_users/days_28/?access_token=" + accessToken;
var pageFans = "https://graph.facebook.com/v2.11/kittiesonfleek/insights/page_fans/lifetime/?access_token=" + accessToken;
var impressions = "https://graph.facebook.com/v2.11/kittiesonfleek/insights/page_impressions/days_28/?access_token=" + accessToken;

$.ajax({
    url: impressions,
    method: "GET"
}).done(function (response) {
    //console.log of impressions in the last 28 days//
    console.log(response.data[0].values[1].value);
    var impressions = response.data[0].values[1].value;
    $("#impressions").text(impressions);
});

$.ajax({
    url: page_engaged_users,
    method: "GET"
}).done(function (response) {
    //console.log of impressions in the last 28 days//
    console.log(response.data[0].values[1].value);
    var pageEngage = response.data[0].values[1].value;
    $("#pageEngage").text(pageEngage);
});

$.ajax({
    url: pageFans,
    method: "GET"
}).done(function (response) {
    //console.log of impressions in the last 28 days//
    console.log(response.data[0].values[1].value);
    var pageFans = response.data[0].values[1].value;
    $("#pageFans").text(pageFans);
});


// var initiate Javascript SDK//
// window.fbAsyncInit = function () {
//     FB.init({
//         appId: '1968644966792089',
//         autoLogAppEvents: true,
//         xfbml: true,
//         version: 'v2.11'
//     });
//
//     FB.getLoginStatus(function (response) {
//         if (response.status === 'connected') {
//             console.log('Logged in.');
//         }
//         else {
//             FB.login();
//         }
//     });
// };
//
// (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) { return; }
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
