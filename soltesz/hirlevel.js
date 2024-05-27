document.getElementById('newsletterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  if (!email.includes('@')) {
      alert('Kérjük, érvényes email címet adjon meg.');
      return;
  }
  document.getElementById('message').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('message').classList.add('popup-on-overlay');
  setTimeout(function() {
      window.location.href = 'kaland.html';
  }, 2000); 
});

function toggleButton() {
  const checkBox = document.getElementById('privacy-policy');
  const submitButton = document.getElementById('submit-button');
  submitButton.disabled = !checkBox.checked;
}