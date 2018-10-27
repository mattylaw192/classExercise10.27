// Code for handling the push
// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAbfpDmpf6HG7Z0g29QsjRDbTmgBPFIR6s",
   authDomain: "class27-d2ae6.firebaseapp.com",
   databaseURL: "https://class27-d2ae6.firebaseio.com",
   projectId: "class27-d2ae6",
   storageBucket: "class27-d2ae6.appspot.com",
   messagingSenderId: "206793102901"
 };
 firebase.initializeApp(config);

 //created variable to reference database
var database = firebase.database();

//Initial values
var employeeName = "";
var employeeRole = "";
var employeeStartDate = "";
var employeeMonthlyRate = 0;

$("#submit").on("click",function(event){
    event.preventDefault();

    var employeeNameText = $("#employeeNameId").val().trim();
    var employeeRoleText = $("#employeeRole").val().trim();
    var employeeStartDateText = $("#startDate").val().trim();
    var employeeMonthlyRateText = $("#monthlyRate").val().trim();
    // parseInt($("#bidder-price").val().trim());
  


    database.ref().push({
        name: employeeNameText,
        role: employeeRoleText,
        StartDate: employeeStartDateText,
        employeeRate: employeeMonthlyRateText,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });



})

