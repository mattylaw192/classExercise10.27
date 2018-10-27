// Code for handling the push
/ Initialize Firebase
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


database.ref().push({
	name: employeeName,
	role: employeeRole,
	StartDate: employeeStartDate,
	employeeRate: employeeMonthlyRate,
	dateAdded: firebase.database.ServerValue.TIMESTAMP
});