/**Facebook Graph API Search **/

/* REMINDER to update the access token there are two places where they need to be updated!!!!!!! */

//document.getElementById("searchBox").focus();
document.getElementById("searchBox");
document.getElementById("searchBox2");

let pageSearchApp = {
    loader: document.getElementsByClassName("loader")[0],

   onSearchFieldEnter: function (ev) {
        var that = this,
            searchField = document.getElementById("searchBox"),
            pagesContainer = document.getElementById("pagesContainer"),
            apiUrl = "https://graph.facebook.com/v2.11/search?q=",
            ////UPDATE THIS ACCESS TOKEN AS NECESSARY
            access_token = "EAAbZBeNZCvO5kBAJTZAqRKE4q55iXlpD0ElWSmbZB1wYi6ypkc4Y2ZBcGkexZCSmCvjiOFIbpYgn0pphee6ZAR8vBmPUhQu3jKSIVEDAXQOxViBhlz6PdeFZC2tgTV36YdGihRMCJA6kbzyoaRic1nDljEJuFfThT5H9taUG6mRZBnv9ytPvq9ofYb1DhFiDcOBcZD";

        if (searchField.value != "") {
            pagesContainer.innerHTML = "";
            apiUrl = apiUrl + searchField.value + "&type=page&limit=1&fields=id,name,about,posts,category,company_overview,bio,engagement,picture,overall_star_rating,page_stories&access_token=" + access_token;
            that.createAjaxRequest("GET", apiUrl, that.pageCallbackFunction);
        }
        else {
            pagesContainer.innerHTML = "<pre>\
                                        <h1>No Page name was entered.</h1>\
                                        <h1>Please enter the page to be searched...</h1>\
                                    </pre>";
        }
    },
  
    onClickCard: function (card) {
        window.open("http://facebook.com/" + card.getAttribute("pageid"), "_blank");
    },

    pageCallbackFunction: function (event) {
        var that = this,
            pagesContainer = document.getElementById("pagesContainer"),
            xhrResponse = event.currentTarget,
            pictureURL, dom = "";

        if (xhrResponse.readyState == 4 && xhrResponse.status == 200) {
            var response = JSON.parse(xhrResponse.response).data,
                dom = "";
            if (response.length) {
                response.forEach(function (resultData) {
                    var card = "";
                    console.log(resultData);
<<<<<<< Updated upstream
                 //   console.log("post test: "+resultData.posts.data[1].created_time); // VERY IMPORTANT: Create a function that counts how many posts in the past month
                  //  console.log("engagement id test: "+resultData.engagement.count);

=======
              
                    for (i = 0; i < resultData.posts.data.length; i++) {
                        console.log("Posts: " + resultData.posts.data[i].created_time.length);
                        let temp1 = resultData.posts.data[i].created_time;
                    };
>>>>>>> Stashed changes

                    card += "<div class='card col-md-2' pageId=" + resultData.id + " onclick='pageSearchApp.onClickCard(this)'>";
                    card += "<img src='" + resultData.picture.data.url + "'>";
                    card += "<div class='card-body'>";
                    card += "<h4><b>" + resultData.name + "</b></h4>";
                    card += "<p>" + resultData.category + "</p>";
                    card += "<p>Likes: " + resultData.engagement.social_sentence + "</p>";
                    card += "<p>Total Posts for December: " + resultData.posts.data[0].created_time.length + "</p>";
                    card += "</div>";
                    card += "</div>";
                    dom += card;
                });
                pagesContainer.innerHTML = dom;
            }
            else {
                pagesContainer.innerHTML = "<h1>No Results Found.</h1>";
            }
        }
    },

    //////////////** An utility method for making Ajax calls **//////////////////////////
    createAjaxRequest: function (method, apiUrl, callbackFn) {
        var xhttp = new XMLHttpRequest(),
            that = this;

        xhttp.open(method, apiUrl, true);
        xhttp.send();
        xhttp.onreadystatechange = callbackFn.bind(that);
    },

};



let pageSearchApp2 = {
    loader: document.getElementsByClassName("loader")[0],

    /** Invoked while pressing enter key on searchBox **/
    /////////////*From FACEBOOK, Api URL and Access token search tool */////////////////////
    onSearchFieldEnter: function (ev) {
        var that = this,
            searchField = document.getElementById("searchBox2"),
            pagesContainer2 = document.getElementById("pagesContainer2"),
            apiUrl2 = "https://graph.facebook.com/v2.11/search?q=",
            ////UPDATE THIS ACCESS TOKEN AS NECESSARY
            access_token = "EAAbZBeNZCvO5kBAJTZAqRKE4q55iXlpD0ElWSmbZB1wYi6ypkc4Y2ZBcGkexZCSmCvjiOFIbpYgn0pphee6ZAR8vBmPUhQu3jKSIVEDAXQOxViBhlz6PdeFZC2tgTV36YdGihRMCJA6kbzyoaRic1nDljEJuFfThT5H9taUG6mRZBnv9ytPvq9ofYb1DhFiDcOBcZD";



        if (searchField.value != "") {
            pagesContainer2.innerHTML = "";
            apiUrl2 = apiUrl2 + searchField.value + "&type=page&limit=1&fields=id,name,about,posts,category,company_overview,bio,engagement,picture,overall_star_rating,page_stories&access_token=" + access_token;
            that.createAjaxRequest("GET", apiUrl2, that.pageCallbackFunction);
            console.log("This is Search2");
        }
        else {
            pagesContainer2.innerHTML = "<pre>\
                                        <h1>No Page name was entered.</h1>\
                                        <h1>Please enter the page to be searched...</h1>\
                                    </pre>";
        }
    },
  
    onClickCard: function (card) {
        window.open("http://facebook.com/" + card.getAttribute("pageid"), "_blank");
    },

    pageCallbackFunction: function (event) {
        var that = this,
            pagesContainer2 = document.getElementById("pagesContainer2"),
            xhrResponse = event.currentTarget,
            pictureURL, dom = "";

        if (xhrResponse.readyState == 4 && xhrResponse.status == 200) {
            var response = JSON.parse(xhrResponse.response).data,
                dom = "";
            if (response.length) {
                response.forEach(function (resultData) {
                    var card = "";
                    console.log(resultData);
                
                    for (i = 0; i < resultData.posts.data.length; i++) {
                        console.log("Posts: " + resultData.posts.data[i].created_time.length);
                        let temp1 = resultData.posts.data[i].created_time;
                    };

                    card += "<div class='card col-md-2' pageId=" + resultData.id + " onclick='pageSearchApp2.onClickCard(this)'>";
                    card += "<img src='" + resultData.picture.data.url + "'>";
                    card += "<div class='card-body'>";
                    card += "<h4><b>" + resultData.name + "</b></h4>";
                    card += "<p>" + resultData.category + "</p>";
                    card += "<p>Likes: " + resultData.engagement.social_sentence + "</p>";
                    card += "<p>Total Posts for December: " + resultData.posts.data[0].created_time.length + "</p>";
                    card += "</div>";
                    card += "</div>";
                    dom += card;
                });
                pagesContainer2.innerHTML = dom;
            }
            else {
                pagesContainer2.innerHTML = "<h1>No Results Found.</h1>";
            }
        }
    },
   
    createAjaxRequest: function (method, apiUrl2, callbackFn) {
        var xhttp2 = new XMLHttpRequest(),
            that = this;

        xhttp2.open(method, apiUrl2, true);
        xhttp2.send();
        xhttp2.onreadystatechange = callbackFn.bind(that);
    },

};

<<<<<<< Updated upstream
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
=======





//initiate Javascript SDK//

window.fbAsyncInit = function () {
    FB.init({
        appId: '1968644966792089',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.11'
    });

    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log('Logged in.');
            var pageID = "kittiesonfleek";
            var insights = "/" + "insights";
            var metrics = "/" + "page_impressions";
            var timePeriod = "/" + "days_28";
            var accessToken = "?access_token=" + "EAACEdEose0cBABlAi0kw53yiW2nuefX6sxpebSpqrBkNHsEGb3A0mB0MaR7ZBoT7hfRZCsZBIv9wnmJenSK99bTxaAUjfR1qLa7ngBVEtiaKU0GFUaTTqZBUOw60GbvUKUpmXq2nj7UBnm2vG63mz0bjdzxITd0N0NZBgShZAPngOcZCS9LuoWwVmP8iN7jzyb1K029zCaicAZDZD"
            var queryURLb = "https://graph.facebook.com/v2.11/" + pageID + insights + engaged_users + timePeriod + accessToken;
            var queryURLa = "https://graph.facebook.com/v2.11/" + pageID + insights + metrics + timePeriod + accessToken;
            var engaged_users = "/" + "page_engaged_users";
            var page_engaged_users = "https://graph.facebook.com/v2.11/kittiesonfleek/insights/page_engaged_users/days_28/?access_token=EAACEdEose0cBABlAi0kw53yiW2nuefX6sxpebSpqrBkNHsEGb3A0mB0MaR7ZBoT7hfRZCsZBIv9wnmJenSK99bTxaAUjfR1qLa7ngBVEtiaKU0GFUaTTqZBUOw60GbvUKUpmXq2nj7UBnm2vG63mz0bjdzxITd0N0NZBgShZAPngOcZCS9LuoWwVmP8iN7jzyb1K029zCaicAZDZD";
            var pageFans = "https://graph.facebook.com/v2.11/kittiesonfleek/insights/page_fans/lifetime/?access_token=EAACEdEose0cBABlAi0kw53yiW2nuefX6sxpebSpqrBkNHsEGb3A0mB0MaR7ZBoT7hfRZCsZBIv9wnmJenSK99bTxaAUjfR1qLa7ngBVEtiaKU0GFUaTTqZBUOw60GbvUKUpmXq2nj7UBnm2vG63mz0bjdzxITd0N0NZBgShZAPngOcZCS9LuoWwVmP8iN7jzyb1K029zCaicAZDZD";
         
            $.ajax({
                url: queryURLa,
                method: "GET"
            }).done(function (response) {
                //console.log of impressions in the last 28 days//
                console.log(response.data[0].values[1].value);
                var impressions = response.data[0].values[1].value;
                $("#impressions").text("impressions within the last 28 days: " + impressions);
            });

            $.ajax({
                url: page_engaged_users,
                method: "GET"
            }).done(function (response) {
                //console.log of impressions in the last 28 days//
                console.log(response.data[0].values[1].value);
                var pageEngage = response.data[0].values[1].value;
                $("#pageEngage").text("page engagement within the last 28 days: " + pageEngage);
            });

            $.ajax({
                url: pageFans,
                method: "GET"
            }).done(function (response) {
                //console.log of impressions in the last 28 days//
                console.log(response.data[0].values[1].value);
                var pageFans = response.data[0].values[1].value;
                $("#pageFans").text("page fans over lifetime of page: " + pageFans);
            });
        }
        else {
            FB.login();
        }
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
>>>>>>> Stashed changes
