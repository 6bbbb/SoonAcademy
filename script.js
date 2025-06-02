function search (){
    let SearchBar = document.querySelector('#search-input').value.toLowerCase();
    let MissionsList = document.querySelector('.missions-list');
    let Mission =document.querySelectorAll('.misson-card');
    let MissionName = document.getElementsByTagName('h2');

    for(let i = 0 ; i< MissionName.length; i++){
        if ( MissionName[i].innerHTML.toLowerCase().indexOf(SearchBar) >=0 ){
            Mission[i].style.display = "";
        }
        else{
            Mission[i].style.display = "none";
        }
    }

}

