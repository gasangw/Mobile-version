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
<button type="submit" id="pj1" class="tap" onclick="showPopUp()">See Project</button>
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
<button type="submit" id="pj2" class="blind" onclick="showPopUp()">See Project</button>
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
<button type="submit" id="pj3" class="see" onclick="showPopUp()">See Project</button>
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
<button type="submit" id="pj4" class="blind"  onclick="showPopUp()">See Project</button>
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

const sect = document.createElement('section');
sect.className = 'middle-section';
sect.id = 'cards';
for (let i = 0; i < 4; i += 1) {
  sect.appendChild(getCards(i));
}
const about = document.getElementById('about');
about.parentNode.insertBefore(sect, about);

/// =========
function addHeader() {
  const header = document.createElement('header');
  header.className = 'header12';
  header.innerHTML = `<div class="major">
  <h2 class="person">Tonic</h2>
  <img src="./images/IconCancel.png" alt="a cross" class="cross" onclick="closeModal()"/>
</div>
<div class="sector">
  <ul class="lists">
    <li class="list1">CANOPY</li>
    <li class="list2">Back End Dev</li>
    <li class="list3">2015</li>
  </ul>
</div>`;
  return header;
}

function addImgi() {
  const imgi = document.createElement('div');
  imgi.className = 'imgi';
  imgi.innerHTML = '<img src="./images/Portfolio.png" alt="snapshoot" class="responsive1"/>';
  return imgi;
}

function addContent() {
  const content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = `<p class="text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
  <div class="langu">
      <ul class="languages3">
          <li>html</li>
          <li>css</li>
          <li>javaScript</li>
          <li>github</li>
          <li>ruby</li>
          <li>Bootstrap</li>
      </ul>
      <hr class="strike">
    <div class="links">
    <a href="https://gasangw.github.io/Mobile-version" class="demo">
      <p>See live</p>
      <img src="./images/Icon.png" alt="vector" class="imo"/>
    </a>
   <a href="https://github.com/gasangw/Mobile-version" class="demo">
      <p>See Source</p>
      <img src="./images/vic2.png" alt="vector" class="imo"/>
    </a>  
    </div> 
  </div>`;
  return content;
}

const sectionPopUp = document.createElement('section');
/* eslint-disable */
function showPopUp() {
  const modProjects = { header: addHeader(), imgi: addImgi(), content: addContent() };
  const divTop = document.createElement('div');
  divTop.className = 'top';
  divTop.appendChild(modProjects.header);
  divTop.appendChild(modProjects.imgi);
  divTop.appendChild(modProjects.content);
  sectionPopUp.className = 'popUp';
  sectionPopUp.appendChild(divTop);
  document.body.classList.toggle('scrollLock');
  document.body.appendChild(sectionPopUp);
}

function closeModal() {
  document.body.removeChild(sectionPopUp);
  document.body.classList.toggle('scrollLock');
}
/* eslint-enable */