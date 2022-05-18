// Validating the email
document.querySelector('#form').addEventListener('submit', (e) => {
  let valid = true;

  const responseContainer = document.querySelector('#warning-message');

  const emailArray = document.querySelector('#email').value.split('');

  for (let i = 0; i < emailArray.length; i += 1) {
    if (emailArray[i] !== emailArray[i].toLowerCase() && emailArray[i] !== '@' && emailArray[i] !== '.') { valid = false; }
  }
  if (!valid) {
    e.preventDefault();
    responseContainer.innerText = 'Email provided is invalid: Please your email address should be in lower case only !';
    responseContainer.style.color = 'yellow';
  }
});