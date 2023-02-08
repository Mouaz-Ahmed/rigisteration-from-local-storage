var rigisteredUser_storage_login = JSON.parse(localStorage.getItem('rigisterdUser'))  // get email pass form local storage
function loginPage() {

    var userEmail = document.getElementById('login_email_value')

    var userPassword = document.getElementById('login_password_value')

    for (var i = 0; i < rigisteredUser_storage_login.length; i++) {

        if (userEmail.value == rigisteredUser_storage_login[i].email && userPassword.value == rigisteredUser_storage_login[i].password) {
            alert('login sucessful')

            userScreen(rigisteredUser_storage_login[i].name, rigisteredUser_storage_login[i].profilePic);
        }
    }
}

function userScreen(userName, profilePic, userEmail, userPassword) {
    var rgisterationContainer = document.getElementById("logIn_container");
    rgisterationContainer.innerHTML = '';

    var h1 = document.createElement('h1')
    var text = document.createTextNode(userName)
    h1.appendChild(text)
    h1.className = 'userScreen_h1'
    text.className = 'userScreen_text'  

    var img = document.createElement('img')
    img.setAttribute('class' , 'userImage')
    img.setAttribute('src',profilePic)

    var makeFriendbtn = document.createElement("button")
    makeFriendbtn.innerHTML = "Make Friends"
    makeFriendbtn.className = "Add_friend_btn"
    makeFriendbtn.setAttribute('onclick' , `showPeoples("${userEmail}","${userPassword}")`)

    rgisterationContainer.appendChild(img)
    rgisterationContainer.appendChild(h1)
    rgisterationContainer.appendChild(makeFriendbtn)

}

function showPeoples(userEmail,userPassword){
    var rgisterationContainer = document.getElementById("logIn_container");
    var rigisteredUser_storage_login = JSON.parse(localStorage.getItem('rigisterdUser'))  // get email pass form local storage
   
    for(var i=0; i<rigisteredUser_storage_login.length; i++){

        if(userEmail == rigisteredUser_storage_login[i].email && userPassword == rigisteredUser_storage_login[i].password){
            continue;
        }
            
        var div = document.createElement('div');
        div.setAttribute('class','make_friend_container');

        var img = document.createElement('img');
        img.setAttribute('class','Add_friend_images');
        img.setAttribute('src',rigisteredUser_storage_login[i].profilePic)

        var span = document.createElement('span')
        spanText = document.createTextNode(rigisteredUser_storage_login[i].name);
        span.appendChild(spanText)
        span.className = 'add_friend_span'

        var addFriendBtn = document.createElement('button');
        addFriendBtn.innerText = 'Add Friend';
        addFriendBtn.setAttribute('onclick',"addFriend()")
        addFriendBtn.className = 'add_friend_btn'


        div.appendChild(img)
        div.appendChild(span)
        div.appendChild(addFriendBtn)
        rgisterationContainer.appendChild(div)
    }
      
    }

    function addFriend(){
    alert("friend added")
    }