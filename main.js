document.addEventListener('DOMContentLoaded', function() {
 
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const numbersElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');



    fetch('https://api.github.com/users/schmidtfer')
    .then(function(resposta) {
        return resposta.json();
    })

    .then(function(json){
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        numbersElement.innerText = json.public_repos;
        linkElement.href = json.html_url;

        
    })
})

