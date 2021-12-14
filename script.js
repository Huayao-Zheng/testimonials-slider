const previousBtn = document.querySelector('.left-arrow');
const nextBtn = document.querySelector('.right-arrow');
const quote = document.querySelector('p');
const saidBy = document.querySelector('cite');
const position = document.querySelector('.job-title');
const avatar = document.querySelector('.avatar');
const avatarContainer = document.querySelector('.avatar-contianer');
const blockquote = document.querySelector('blockquote');

const slidesData = [
  {
    quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    person: 'Tanya Sinclair',
    position: 'UX Engineer',
    imgPath: 'images/image-tanya.jpg',
  },
  {
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    person: 'John Tarkpor',
    position: 'Junior Front-end Developer',
    imgPath: 'images/image-john.jpg',
  },
];

[avatar, blockquote].forEach((elm) => {
  elm.classList.add('active');
});

let currentSlide = 0;

previousBtn.addEventListener('click', () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slidesData.length - 1;
  }

  setTestimonialContent();
});

nextBtn.addEventListener('click', () => {
  currentSlide++;

  if (currentSlide > slidesData.length - 1) {
    currentSlide = 0;
  }

  setTestimonialContent();
});

function setTestimonialContent() {
  [avatar, blockquote].forEach((elm) => {
    elm.classList.remove('active');
  });
  quote.innerText = slidesData[currentSlide].quote;
  saidBy.innerText = slidesData[currentSlide].person;
  position.innerText = slidesData[currentSlide].position;
  avatar.src = slidesData[currentSlide].imgPath;

  setTimeout(() => {
    [avatar, blockquote].forEach((elm) => {
      elm.classList.add('active');
    });
  }, 300);
}
