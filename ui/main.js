//console.log('Loaded!');

//change the text of main-text div

//var  element=document.getElementById("main-text");

//element.innerHTML="newvalue";
/*
var img = document.getElementById("madi");
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight, 100);
};*/



// var button = document.getElementById("counter");

// button.onclick = function() {
//     var request = new XMLHttpRequest();
//     request.onsteadystatechange = function() {
//         if (request.readyState === XMLHttpRequest.DONE) {
//             if (request.status === 200) {
//                 var counter = request.responseText;
//                 var a = document.getElementById('count');
//                 a.innerHTML = counter.toString();
//             }
//         }

//     };

//     request.open('GET', 'http://http://divyanshchowdhary2016.imad.hasura-app.io/counter', true);
//     request.send(null);
// };





// var submit = document.getElementById('submit_button');

// submit.onclick = function() {
//     var nameInput = document.getElementById('name');
//     var name = nameInput.value;
//     //create the reqest object
//     var request = new XMLHttpRequest();
//     //capture the request and stare it in the variable
//     request.onreadystatechange = function() {
//         if (request.readyState === XMLHttpRequest.DONE) {
//             //take some action
//             if (request.status === 200) {
//                 var names = request.responseText;
//                 names = JSON.parse(names);
//                 var list = '';
//                 for (var i = 0; i < names.length; i++) {
//                     list += '<li>' + names[i] + '</li>';
//                 }
//                 var ul = document.getElementById('namelist');
//                 ul.innerHTML = list;
//             }
//         }
//     };

//     //make the request
//     request.open('GET', 'http://divyanshchowdhary2016.imad.hasura-app.io/submit-name?name=' + name, true);
//     request.send(null);
// };

var submit = document.getElementById('submit_btn');
submit.onclick = function() {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            if (request.status === 200) {
                console.log('user logged in');
                alert('Login in Successful');
            } else if (request.status === 403) {
                alert('username/password is incorrect');
            } else if (request.status === 500) {
                alert('something went wrong on the server');
            }
        }
    }

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    request.open('POST', 'http://divyanshchowdhary2016.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({ username: username, password: password }));
}


var submit = document.getElementById('add_submit_btn');
submit.onclick = function() {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            if (request.status === 200) {
                console.log('user logged in');
                alert('User created '+ username);
            }  else if (request.status === 500) {
                alert('something went wrong on the server');
            }
        }
    }

    var username = document.getElementById('reg_username').value;
    var password = document.getElementById('reg_password').value;
    console.log(username);
    request.open('POST', 'http://divyanshchowdhary2016.imad.hasura-app.io/create-user', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({ username: username, password: password }));
}