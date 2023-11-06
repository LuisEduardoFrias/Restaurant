export default function Move(className) {
  const container = document.querySelector(`.${className}`);
  const img = container.querySelectorAll(".box");

  let index = 0;
  setInterval(() => {
    if (index === 4) index = 0;

    const firstImg = img[index];
    container.removeChild(firstImg);
    container.appendChild(firstImg);
    index++;
  }, 2500);
}
