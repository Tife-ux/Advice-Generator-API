const content = document.querySelector(".content");

async function getQuote() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  const newAdvice = `
    <span class="content">
      <p class="text-center" style="color: hsl(150, 100%, 66%); font-size: 20px;">Advice #${data.slip.id}</p>
      <p class="col text-white text-center" style="font-size: 30px;">${data.slip.advice}</p>
    </span>
  `;

  content.innerHTML = newAdvice;
}

document.querySelector(".dice").addEventListener("click", getQuote);
getQuote()




