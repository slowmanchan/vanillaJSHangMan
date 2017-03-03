window.onload = function() {
  var gameState = {
    guessedLetters: [],
    correctGuesses: [],
    word: 'hello'
  }

  function guessedLetter(guess) {
    var guessedLetters = document.createElement('div');

    guessedLetters.style.width = '50px';
    guessedLetters.style.height = '50px';
    guessedLetters.style.borderStyle = 'solid';
    guessedLetters.style.borderColor = 'black';
    guessedLetters.style.fontSize = '3em';
    guessedLetters.style.float = 'left';

    guessedLetters.innerHTML = guess;

    return guessedLetters;
  }

  function answerLetter(i) {
    var answerLetter = document.createElement('div');

    answerLetter.style.width = '60px';
    answerLetter.style.height = '60px';
    answerLetter.style.borderStyle = 'solid';
    answerLetter.style.borderColor = 'blue';
    answerLetter.style.float = 'left';
    answerLetter.style.fontSize = '2em';

    answerLetter.id = 'L' + i;
    return answerLetter;
  }

  function newWord() {
    var wordContainer = document.createElement('div');

    for (var i = 0; i < gameState.word.length; i++) {
       wordContainer.append(answerLetter(i));
    }

    return wordContainer;
  }

  function board() {
    var board = document.createElement('div');

    board.id = 'board';

    return board;
  }

  function checkLetter(letter) {
    for (var i = 0; i < gameState.word.length; i++) {
      if (letter == gameState.word[i]) {
        var answerBox = document.getElementById('L' + i);
        answerBox.innerHTML = letter;
        gameState.correctGuesses.push(letter);
      }
    }
    if (gameState.correctGuesses.length == gameState.word.length) {
      alert("You Win");
    }
  }

  function form() {
    var inputBox = document.createElement('input');
    var form = document.createElement('form');
    var button = document.createElement('button');
    var board = document.getElementById('board');

    button.addEventListener('click', function(e) {
      e.preventDefault();
      if (inputBox.value) {
        gameState.guessedLetters.push(inputBox.value[0]);
        board.append(guessedLetter(inputBox.value[0]));
        checkLetter(inputBox.value[0]);
      }
      inputBox.value = '';
    });

    button.innerHTML = 'GO';
    form.append(inputBox);
    form.append(button);

    return form;
  }

  function init() {
    root.append(newWord());
    root.append(board());
    root.append(form());
  }

  init();
}
