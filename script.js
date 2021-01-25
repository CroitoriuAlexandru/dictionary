var addWordInput = document.getElementById('addWordInput');
var addWordButton = document.getElementById('addWordButton');
var searchWordInput = document.getElementById('searchWordInput');
var addedWords = document.getElementById('addedWords');
var SearchWord = document.getElementById('alertSearchWord');
var wordsList = [];

// 
// 
// 
// 

addWordButton.addEventListener('click', function() {
    if(addWordInput.value.length > 0){
        if (!wordsList.includes(addWordInput.value)) {
            wordsList.push(addWordInput.value);
            addedWords.innerHTML =  `
                <li class="list-group-item">
                    ${addWordInput.value}
                    <button class="btn btn-danger delete-item" onclick="deleteItem(this);">X</button>
                </li>
            ` + addedWords.innerHTML;
        } else {
            alert("You entered a word that already exists in the dictionary");
        }
        addWordInput.value = '';
    }
});

function deleteItem(deleteButton) {
    var wordToDelete = deleteButton.parentNode.childNodes[0].nodeValue.trim();
    const wordIndex = wordsList.indexOf(wordToDelete);
    if (wordIndex !== -1) {
        wordsList.splice(wordIndex, 1); // delete word
    }

    var li = deleteButton.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}

// searchWordButton.addEventListener('click', function(){
searchWordInput.addEventListener('keyup', function(){
    if(searchWordInput.value.length > 0){
        alertSearchWord.style.display = "block";
        if (wordsList.includes(searchWordInput.value)) {
            alertSearchWord.className = 'alert alert-success';
            alertSearchWord.innerHTML = "yes we have this word";
        } else {
            alertSearchWord.className = 'alert alert-danger';
            alertSearchWord.innerHTML = "no we dont have that word";
        }
    } else {
        alertSearchWord.style.display = "none";
    }
});