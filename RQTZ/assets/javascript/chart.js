  var config = {
    apiKey: "AIzaSyAmeCQpq3Gpvmncg2iRx1_p2Jd8yixEFew",
    authDomain: "rqtz-51f2f.firebaseapp.com",
    databaseURL: "https://rqtz-51f2f.firebaseio.com",
    projectId: "rqtz-51f2f",
    storageBucket: "rqtz-51f2f.appspot.com",
    messagingSenderId: "252970490945"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submitFbIdButton").on("click", function(event) {
    event.preventDefault();
    var fbSearch1 = $("#fbPageID1Search").val().trim();
    var fbSearch2 = $("#fbPageID2Search").val().trim();

    console.log("Yes!");
});