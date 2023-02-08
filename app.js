var registrationContainer = document.getElementById('rgisteration_container')

function User(name, profilePic, email, password, friends) {
    this.name = name;
    this.profilePic = profilePic;
    this.email = email;
    this.password = password;
}


var getRigisterUSer;

function rigisteredUser_storage() {
    if (localStorage.getItem('rigisterdUser')) {
        getRigisterUSer = JSON.parse(localStorage.getItem('rigisterdUser'))
    } else {
        localStorage.setItem('rigisterdUser', JSON.stringify([]));
    }
}

function getValues() {
    var fullName = document.getElementById('User_name_value').value;
    var profilepic = document.getElementById('profile_pic_value').value;
    var userEmail = document.getElementById('email_value').value;
    var passwordValue = document.getElementById('password_value').value;

    // this push input when input is filled without fill its not 

    if (fullName != '' && profilepic != '' && userEmail != '' && passwordValue != '') {
        getRigisterUSer.push(new User(fullName, profilepic, userEmail, passwordValue, ))
        var rigisterBtn = document.getElementById("rigister_btn")
        rigisterBtn.href = './login/index.html'
        localStorage.setItem('rigisterdUser', JSON.stringify(getRigisterUSer))
    }
}









// ashar
// "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-1/122879392_2861281154197297_5478232735818223838_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEV4m04TMRM5_KopOk7iSl_Fa7XOiFgCEMVrtc6IWAIQ0WYuceZeRX6BuvjIMaeyzAXpR6SMBy2Grxy5Utx50B4&_nc_ohc=6UYf-ezab5UAX9agwJx&_nc_ht=scontent.fkhi16-1.fna&oh=00_AT85T8hDwfdL8ZgsCjqaLT88TN1a2OFUJsbHhbC6xj4EpA&oe=6349D180"
// ashar
// https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/99157966_250791406190783_1653192169894182912_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFGlQMrq1epOo3NH-uU2kwk1ADPvSogCBrUAM-9KiAIGkDXCxr8L9Vo-AyfV0PemMTlXiMV4QFjkMrWcY8Zp_1f&_nc_ohc=H9R2Rmsg09AAX8pHQfl&tn=BTxyO8FhVNMvacgS&_nc_ht=scontent.fkhi16-1.fna&oh=00_AT_ZP3x2q2_tThirVh-fBbgvCqc769I3UxPhi_zjQYGFkg&oe=634A1423
// muneeb
// https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/296198858_1716604438672448_6745257016459966441_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH85tnFKjvMXoshxS8c_eMJSE3ZEWBR2HBITdkRYFHYcKoL56Cw6x7riVsyV0dPJMSXimV_42ksaA68ORQmhfa9&_nc_ohc=yNRFHEgy7SQAX8nRWdS&_nc_ht=scontent.fkhi16-1.fna&oh=00_AT9JUkbH8-2g6VhP-SynmrL204ZTeSji8oqRiqEy2DsGrQ&oe=632BC8AB"
// abdullah
 // https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/295675097_1074104143308794_145552280653907041_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGhnMBYYhXxnAWO_opf7UHU0iQjfFaI0oPSJCN8VojSg2mdTlNkn-fecvw8HlWT3r1K_D5pKO5tScWu5mNfTE7s&_nc_ohc=HTCryh4B8z0AX9Oxdrm&_nc_ht=scontent.fkhi16-1.fna&oh=00_AT86jHzc4JmBSZ2a--hw5QPrcYl1QGst43UHlqJ_szTucQ&oe=632ADF10