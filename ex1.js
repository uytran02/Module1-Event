//lấy ra thời gian hiện tại
const getTime = () => {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, 0); //to string và padStart để
  //hiện 2 chữ số, và thêm chữ số 0 trước giờ có 1 chữ số mà không dùng if else
  //ngoài ra dùng if-else cũng được
  document.querySelector(".hour-number").innerHTML = hours;
  let minutes = now.getMinutes().toString().padStart(2, 0);
  document.querySelector(".minute-number").innerHTML = minutes;

  let seconds = now.getSeconds().toString().padStart(2, 0);
  document.querySelector(".second-number").innerHTML = seconds;

  return `${hours}:${minutes}:${seconds}`;
};
setInterval(getTime, 1000);

const changeBackground = () => {
  const container = document.querySelector(".container");
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  container.style.backgroundImage = `linear-gradient(to right, #${randomColor1}, #${randomColor2}) `;
};

setInterval(changeBackground, 3000);

const turnOnAudio = () => {
  const audio = document.querySelector("#audio");
};
