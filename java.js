var name = document.getElementById('name');
var email = document.getElementById('email');
// Get a reference to the database service
var database = firebase.database();

function add( name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}