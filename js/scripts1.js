var newWord = document.querySelector('.add-word').value;

function changePage(site){
    window.location.href=site;
    console.log(site)
}

function refreshPage(){
    window.location.reload();
}

function addNewWord(){
    words.push(newWord);
    console.log(words);
}