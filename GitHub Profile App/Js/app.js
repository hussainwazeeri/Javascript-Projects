const APIURL= "https://api.github.com/users/";
const main= document.querySelector("#main")
const searchBox= document.querySelector("#search")

const getUser= async(username)=>{
    const response = await fetch(APIURL + username);
    const data= await response.json()
    console.log(data)
    const card= `
    <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="profile">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2> 
                <p>${data.bio}</p>
                <ul class="info">
                    <li><strong>${data.followers} Followers </strong></li>
                    <li><strong>${data.following} Following </strong></li>
                    <li><strong>${data.public_repos} Repost</strong></li>
                </ul>
                <div id="repos">

                </div>
            </div>
        </div>
    `
    main.innerHTML= card;
    getRepos(username)
}
//init call
getUser("hussainwazeeri")

const getRepos= async(username)=>{
    const repos= document.querySelector("#repos");
    const response= await fetch(APIURL + username + "/repos")
    const data= await response.json()
    console.log(data)
    data.forEach(
        (item)=>{
            // console.log(item)
            const elem= document.createElement("a");
            elem.classList.add("repo")
            elem.href= item.html_url
            elem.target= "_blank"
            elem.innerText=item.name;
            repos.appendChild(elem)
        }
    )

}

const formSubmit= ()=>{
    const searchBox= document.querySelector("#search")
    if(searchBox.value != ""){
        getUser(searchBox.value);
        searchBox.value= "";
    }
    return false;
}

searchBox.addEventListener(
    "focusout",
    function(){
        formSubmit();
    }
)

/*
    <a href="#" class="repo" target="_blank">Repo 1</a>
    <a href="#" class="repo" target="_blank">Repo 2</a>
    <a href="#" class="repo" target="_blank">Repo 3</a>
*/