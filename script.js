var prompt = document.getElementById('prompt');
var a = document.getElementById('a');
var b = document.getElementById('b');
var result = document.getElementById('result');

var counter = 0;
var prompts = [
  'Are you sure you are ready for the game?',
  'Great, so we can go ahead and get started!',
  'Would you like to hear how the game goes?',
  'You are going to earn point, get challenged, receive some gifts (not traditional ones...), and laugh. A lot!',
  'You will have to guess a lot and good guesses will give you good points',
  'You will need to use your brain, your hands, and your phone.',
  'But all the rest is going to be at home',
  'If you feel ready, please click "I\'m so ready!" and we can go!'
];

var optionsA = [
  'Sure!',
  "Let's do this!",
  'Of course!',
  'Sounds Good!',
  'I love it!',
  'I have all of these!',
  "So let's go home!",
  "I'm so ready!"
];

var optionsB = [
  'Not really...',
  'Do we have to?',
  'No, I hate games',
  'Sounds boring...',
  "Doesn't sound like fun to me",
  'I prefer to sleep...',
  "Let's not go home!",
  "I'm not ready at all :("
];

b.addEventListener('click', function() {
  result.textContent =
    "That's too bad... If you change your mind, please click the other option. If not, Happy Birthday and see you next year :)";
});

a.addEventListener('click', function() {
  changePrompt();
});

function changePrompt() {
  prompt.textContent = prompts[counter];
  a.textContent = optionsA[counter];
  b.textContent = optionsB[counter];
  counter++;
  if (counter === 8) {
    finalMessage();
  }
}

function finalMessage() {
  prompt.textContent = 'YUY! WOW! FUN!!!!';
}

// in final message - change options to be smilies or something
// remove "bad" message after choosing a "good" one
// make messages smaller so it has enough space (maybe different font)
// add animation to page
