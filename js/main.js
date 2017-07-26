var btn = document.getElementById("comment");
    btn.addEventListener("keypress", function enterKey(e) {
    if (e.keyCode == 13) {
        todoList();
    }
},false);

function todoList() {

var user = document.getElementById('userName').value;//create variable user.This is the value the user enters in the username section

var comment = document.getElementById('comment').value;//create variable comment. This the the value the user enters in comment section

var userName = document.createTextNode("Username: " + user);//Username that will print after user clicks on the button
var userComment = document.createTextNode("Comment: " + comment);//Comment that will print after user clicks on the  button

var hideButton = document.createElement("button"); //Created button element for hiding comment
hideButton.className = "btn btn-danger btn-lg button hidebutton";
hideButton.textContent = "Hide";

var showButton = document.createElement("button"); //Created button element for showing content
showButton.className = "btn btn-danger btn-lg button";
showButton.textContent = "Show";

var deleteButton = document.createElement("button");//Created button element for deleting content
deleteButton.className = "btn btn-danger btn-lg button";
deleteButton.textContent = "Delete";

var list = document.createElement("LI");//Create Li element to appear after user enters in their name and comment after todoList is clicked
list.className = "list-group-item box animated bounceInUp";//Bootstrap class for lists

var image = document.createElement("IMG");
image.className = "imageClass";
image.setAttribute("src", "img/carlton.gif");

var userNameText = document.createElement("H3"); // H3 element for the Username
userNameText.appendChild(userName);
var userCommentText = document.createElement("p");// p element for comment
userCommentText.appendChild(userComment);

function showFunction() {  //function for show button to show comment, username, image
  userNameText.style.display = "block";
  userCommentText.style.display = "block";
  image.style.display = "block";
}

function hideFunction() {     //function for hide button to hide comments, username and image
  userNameText.style.display = "none";
  userCommentText.style.display = "none";
  image.style.display = "none";
};

function deleteFunction(){  //fuction that deletes the entire li from the screen
  list.parentNode.removeChild(list);

};

showButton.addEventListener('click', showFunction);
hideButton.addEventListener('click', hideFunction);
deleteButton.addEventListener('click', deleteFunction);

list.appendChild(userNameText);
list.appendChild(userCommentText);
list.appendChild(image);
list.appendChild(hideButton);
list.appendChild(showButton)
list.appendChild(deleteButton);

document.getElementById('commentList').appendChild(list);//print the list to the document
};
