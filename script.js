const menuToggle = document.querySelector('.hamburger');
const navmenu = document.querySelector('.desktop-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navmenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  menuToggle.classList.remove('active');
  navmenu.classList.remove('active');
}));

const speakersData = [
  {
    Image: 'images/speaker_01.png',
    Name: 'Yochai Benkler',
    position: 'Reverend at FIF Mbabane',
    description: " He is a steward, a manager of God's resources and Jesus' flock. He takes responsibility, but not ownership.",
  },
  {
    Image: 'images/speaker_02.png',
    Name: 'SohYeong Noh',
    position: 'Health Educator',
    description: ' A lecturer in one of the local tertiary institutions. Joined FIF in 2010',
  },
  {
    Image: 'images/speaker_03.png',
    Name: 'Johana Masango',
    position: 'Life oriantation Coach',
    description: ' A psychologist by proffesion, Married with 2 children, a boy and a girl',
  },
  {
    Image: 'images/speaker_04.png',
    Name: 'Israel Jacobs',
    position: 'Dematologist',
    description: 'He works in the national TB hospital, He is interested in health issues',
  },
  {
    Image: 'images/speaker_05.png',
    Name: 'Manyatsi David',
    position: 'Reverend',
    description: ' Has pastored in 4 different churches in the past 10 years',
  },
  {
    Image: 'images/speaker_06.png',
    Name: 'Dlamini Pauslos',
    position: 'Bishop',
    description: ' A father of three, Married 43 years old',
  },
];

speakersData.forEach((card, index) => {
  const mainDiv = document.createElement('div');
  if(index >=2){
    mainDiv.classList.add('speaker', 'hide-items');
  }else 
  {
    mainDiv.classList.add('speaker');
  }

  const cardsNormal = `<div class="speaker speaker${index + 1}" id="${index + 1}">
  <img src="${card.Image}" alt="">
  <div class="speaker-intro">
    <h3 class='card-name'>${card.Name}</h3>
    <p class='position'>${card.position}</p>
    <hr>
    <p class='description'>${card.description}</p>
  </div>
</div>`;

  const works = document.querySelector('.speakers-data');
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = cardsNormal;
  const cardsNormalPage = tempContainer.firstChild;

  if (index >= 2) {
    cardsNormalPage.classList.add('guestToHide', 'hidden');
  }
  works.appendChild(cardsNormalPage);
});

const moreButton = document.querySelector('#moreButton');
const hiddenGuests = document.querySelectorAll('.guestToHide');
const lessButton = document.querySelector('#lessButton');

moreButton.addEventListener('click', () => {
  hiddenGuests.forEach((hiddenGuest) => {
    hiddenGuest.classList.toggle('hidden');
  });
  moreButton.classList.add('hidden');
  lessButton.classList.add('hidden');
});

lessButton.addEventListener('click', () => {
  hiddenGuests.forEach((hiddenGuest) => {
    hiddenGuest.classList.toggle('hidden');
  });
  moreButton.classList.remove('hidden');
  lessButton.classList.remove('hidden');
});
