document.querySelector('.BGpopup').style.display = 'flex';

document.querySelector('.ok').addEventListener('click', function(){
    document.querySelector('.BGpopup').style.display = 'none';
});

document.querySelector('.submit').addEventListener('click', function(){
    let username = document.forms["login"]["Username"].value;
    let password = document.forms["login"]["Password"].value;
    if (username == "Fena Ferina" && password == "2468") {
        document.querySelector('.BGberhasil').style.display= 'flex';
    } 
    else {
        document.querySelector('.BGgagal').style.display= 'flex';
    }
})

let formLogin = document.getElementById("formLogin")
formLogin.addEventListener("click", function(event){
    event.preventDefault()
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.BGberhasil').style.display = 'none';
});

document.querySelector('.close1').addEventListener('click', function(){
    document.querySelector('.BGgagal').style.display = 'none';
});
