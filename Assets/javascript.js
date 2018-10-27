// Code for handling the push
database.ref().push({
	name: name,
	email: email,
	age: age,
	comment: comment,
	dateAdded: firebase.database.ServerValue.TIMESTAMP
});