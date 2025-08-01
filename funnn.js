const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

function moveNoButtonRandomly() {
  const containerRect = questionContainer.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - noBtnRect.width;
  const maxY = containerRect.height - noBtnRect.height - 35;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener("mouseover", moveNoButtonRandomly);

yesBtn.addEventListener("click", () => {
  yesBtn.disabled = true;
  noBtn.disabled = true;
  questionContainer.style.display = "none";

  resultContainer.innerHTML = `
    <div
      class="tenor-gif-embed"
      data-postid="25420589"
      data-share-method="host"
      data-aspect-ratio="1.07744"
      data-width="100%">
      <a href="https://tenor.com/view/yess-yes-gif-25420589">Yess GIF</a>
      from
      <a href="https://tenor.com/search/yess-gifs">Yess GIFs</a>
    </div>
    <h2>why are you still here!</h2>
  `;

  resultContainer.style.display = "block";

  if (window.TenorEmbed && typeof window.TenorEmbed.createElements === "function") {
    window.TenorEmbed.createElements();
  }
});
