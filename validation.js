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

// || =========== Pop-Up Modal ============ ||*/

const myCards = [`<div class="snapshoot">
<img src="./images/screenshot1.png" alt="screenshot" class="responsive"/>
</div>
<div class="word-title">
<div class="w-title">
  <h2 class="name1">Thomas</h2>
  <ul class="canop">
    <li>CANOPY</li>
    <li>Back End Dev</li>
    <li>2015</li>
  </ul>
</div>
<div class="p-text">
  <p class="word">
    A daily selection of privately personalized reads; no accounts or
    sign-ups required.
  </p>
</div>
<div>
  <ul class="languages">
    <li>html</li>
    <li>css</li>
    <li>javaScript</li>
  </ul>
</div>
<button type="submit" id="pj1" class="tap">See Project</button>
</div>`, `<div class="snapt">
<img src="./images/snapshot4.png" alt="snapshot" class="responsive"/>
</div>
<div class="titol">
<div class="w-title">
  <h2 class="name">Multi-Post Stories</h2>
  <ul class="canop">
    <li>FACEBOOK</li>
    <li>Full Stack Dev</li>
    <li>2015</li>
  </ul>
</div>
<div class="p-text">
  <p class="word-2">
    Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.
  </p>
</div>
<div>
  <ul class="languages-2">
    <li>html</li>
    <li>Ruby on rails</li>
    <li>css</li>
    <li>javaScript</li>
  </ul>
</div>
<button type="submit" id="pj2" class="blind">See Project</button>
</div>`, `<div class="snapshooti">
<img src="./images/snapshot.png" alt="snapshot"/>
</div>
<div class="word-title">
<div class="w-title">
  <h2 class="name">Facebook 360</h2>
  <ul class="canop">
    <li>FACEBOOK</li>
    <li>Full Stack Dev</li>
    <li>2015</li>
  </ul>
</div>
<div class="p-text">
  <p class="word">
    Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.
  </p>
</div>
<div>
  <ul class="languages">
    <li>html</li>
    <li>Ruby on rails</li>
    <li>css</li>
    <li>javaScript</li>
  </ul>
</div>
<button type="submit" id="pj3" class="see">See Project</button>
</div>`, `<div class="snapt">
<img src="./images/snapshot2.png" alt="snapshot" class="responsive">
</div>
<div class="titol">
<div class="w-title">
  <h2 class="name">Uber Navigation</h2>
  <ul class="canop">
    <li>Uber</li>
    <li>Lead developer</li>
    <li>2018</li>
  </ul>
</div>
<div class="p-text">
  <p class="word-2">
    A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.
  </p>
</div>
<div>
  <ul class="languages-2">
    <li>html</li>
    <li>Ruby on rails</li>
    <li>css</li>
    <li>javaScript</li>
  </ul>
</div>
<button type="submit" id="pj4" class="blind">See Project</button>
</div>`];
function getCards(n) {
  const card1 = document.createElement('div');
  if (n === 1 || n === 3) {
    card1.className = 'card1';
  } else {
    card1.className = 'card2';
  }
  card1.innerHTML = myCards[n];
  return card1;
}
/* const card1 = document.createElement('div');
card1.className = 'card1';
card1.innerHTML = myCards[0];
const card2 = document.createElement('div');
card2.className = 'card2';
card2.innerHTML = myCards[1];
const card3 = document.createElement('div');
card3.className = 'card1';
card3.innerHTML = myCards[2];
const card4 = document.createElement('div');
card4.className = 'card2';
card4.innerHTML = myCards[3]; */

const sect = document.createElement('section');
sect.className = 'middle-section';
sect.id = 'cards';
for (let i = 0; i < 4; i += 1) {
  sect.appendChild(getCards(i));
}
const about = document.getElementById('about');
about.parentNode.insertBefore(sect, about);
