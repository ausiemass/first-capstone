const speakersData = [
  {
    Image: 'images/speaker_01.png',
    Name: 'Austin M.',
    position: 'Backend Developer at Real Image',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab necessitatibus quam molestias debitis, nesciunt libero vel tempora nemo impedit.' ,
  },
  {
    Image: 'images/speaker_01.png',
    Name: 'Austin M.',
    position: 'Backend Developer at Real Image',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab necessitatibus quam molestias debitis, nesciunt libero vel tempora nemo impedit.' ,
  },
  {
    Image: 'images/speaker_02.png',
    Name: 'Austin M.',
    position: 'Backend Developer at Real Image',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab necessitatibus quam molestias debitis, nesciunt libero vel tempora nemo impedit.' ,
  },
  {
    Image: 'images/speaker_01.png',
    Name: 'Austin M.',
    position: 'Backend Developer at Real Image',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab necessitatibus quam molestias debitis, nesciunt libero vel tempora nemo impedit.' ,
  },
  {
    Image: 'images/speaker_02.png',
    Name: 'Austin M.',
    position: 'Backend Developer at Real Image',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab necessitatibus quam molestias debitis, nesciunt libero vel tempora nemo impedit.' ,
  },
  {
    Image: 'images/speaker_01.png',
    Name: 'Austin M.',
    position: 'Backend Developer at Real Image',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab necessitatibus quam molestias debitis, nesciunt libero vel tempora nemo impedit.' ,
  },
];



speakersData.forEach((card, index) => {
  const mainDiv = document.createElement("div");
  if(index >=2){
    mainDiv.classList.add("speaker", "hide-items");
  }else 
  {
    mainDiv.classList.add("speaker");
  }

  const cardsNormal = `<div class="speaker speaker${index + 1}" id="${index +1}">
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
  works.appendChild(cardsNormalPage);

});

const more = document.querySelector('.more');
more.addEventListener('çlick', () => {
const speakerID = (cardsNormal.index +1)
if(speakerID > 2){
}
});
