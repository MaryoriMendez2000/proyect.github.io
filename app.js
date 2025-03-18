// Get references to DOM elements
const inputField = document.getElementById('amigo');
const addButton = document.querySelector('.button-add');
const friendsList = document.getElementById('listaAmigos');
const resultsList = document.getElementById('resultado');
const drawButton = document.querySelector('.button-draw');

// Array to store friends' names
let friends = [];

// Function to add a friend to the list
function addFriend() {
  const friendName = inputField.value.trim();
  if (friendName === '') {
    alert('Por favor ingrese un nombre valido.');
    return;
  }
  friends.push(friendName);
  renderFriendsList();
  inputField.value = '';
}

// Function to render the list of friends
function renderFriendsList() {
  friendsList.innerHTML = '';
  friends.forEach((friend) => {
    const li = document.createElement('li');
    li.textContent = friend;
    friendsList.appendChild(li);
  });
}

// Function to randomly select a "secret friend"
function drawSecretFriend() {
  if (friends.length === 0) {
    alert('Por favor agrega al menos un amigo a la lista.');
    return;
  }
  const secretFriend = friends[Math.floor(Math.random() * friends.length)];
  resultsList.innerHTML = `El amigo secreto es : ${secretFriend}!`;
}

// Add event listeners
addButton.addEventListener('click', addFriend);
drawButton.addEventListener('click', drawSecretFriend);