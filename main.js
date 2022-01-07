var list = [];

var titleValue = document.getElementById('title-value');
var bodyValue = document.getElementById('body-value');
var saveButton = document.getElementById('save-button');
var ideaCardGrid = document.querySelector('.grid-container');
var showStarred = document.getElementById('showStarred')
// var deleteButton = document.querySelector('.delete');
// var ideaCard = document.querySelector('.idea-card');

saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', mouseHoverEffect);
saveButton.addEventListener('mouseout', mouseLeaving);
ideaCardGrid.addEventListener('click', deleteSelectedCard);
ideaCardGrid.addEventListener('click', favoriteACard);
showStarred.addEventListener('click', showFavorites)


function saveIdea() {
  event.preventDefault();

  var newTitle = titleValue.value;
  var newBody = bodyValue.value;

  if(newTitle && newBody) {
    var newIdea = new Idea(newTitle, newBody);
    list.push(newIdea);
    displayAllIdeas();
  }

  emptyInput();
}

function displayAllIdeas() {
  ideaCardGrid.innerHTML = '';

  for (var i = 0; i < list.length; i++) {
    if (!list[i].star) {
      ideaCardGrid.innerHTML += `
      <section class="idea-card">
      <header class="idea-card-top">
      <img type="image" src="./assets/star.svg" id=${list[i].imgId} alt="star" class="star">
      <img type="image" src="./assets/delete.svg" alt="delete" id=${list[i].id} class="delete">
      </header>
      <h3 class="idea-card-title">${list[i].title}</h3>
      <p class="idea-card-body">${list[i].body}</p>
      <footer class="idea-card-bottom">
      <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
      </section>`
    } else {
      ideaCardGrid.innerHTML += `
      <section class="idea-card">
      <header class="idea-card-top">
      <img type="image" src="./assets/star-active.svg" id=${list[i].imgId} alt="star" class="star active">
      <img type="image" src="./assets/delete.svg" alt="delete" id=${list[i].id} class="delete">
      </header>
      <h3 class="idea-card-title">${list[i].title}</h3>
      <p class="idea-card-body">${list[i].body}</p>
      <footer class="idea-card-bottom">
      <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
      </section>`
    }
  }
}



function emptyInput() {
  titleValue.value = '';
  bodyValue.value = '';
}

function mouseHoverEffect() {
  if (!titleValue.value && !bodyValue.value) {
    saveButton.classList.add('hover-button');
  }
}

function mouseLeaving() {
  saveButton.classList.remove('hover-button');
}

function removeIdea() {
  ideaCardGrid.classList.toggle('remove');
}

function deleteSelectedCard() {
  for (var i = 0; i < list.length; i++) {
    if (list[i].id.toString() === event.target.id) {
     list.splice(i, 1);
     displayAllIdeas();
     }
   }
}

function favoriteACard() {
  for (var i = 0; i < list.length; i++) {
    if (list[i].imgId.toString() === event.target.id) {
      if (!list[i].star) {
        list[i].star = true;
      } else {
        list[i].star = false;
      }
      displayAllIdeas();
     }
   }
}
///need to refactor
//fix hover when only title || body is typed in 
function showFavorites() {
  ideaCardGrid.innerHTML = ''
  for (var i = 0; i < list.length; i++) {
    if(list[i].star){
    ideaCardGrid.innerHTML += `
    <section class="idea-card">
    <header class="idea-card-top">
    <img type="image" src="./assets/star-active.svg" id=${list[i].imgId} alt="star" class="star active">
    <img type="image" src="./assets/delete.svg" alt="delete" id=${list[i].id} class="delete">
    </header>
    <h3 class="idea-card-title">${list[i].title}</h3>
    <p class="idea-card-body">${list[i].body}</p>
    <footer class="idea-card-bottom">
    <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
    </section>`
    }
  }
}
