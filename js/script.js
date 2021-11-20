window.onload = function () {
  const deg = 6;

  const $hr = document.getElementById("hr");
  const $mn = document.getElementById("mn");
  const $sc = document.getElementById("sc");

  function setTime() {
    let date = new Date();
    let hours = date.getHours() * 30;
    let minutes = date.getMinutes() * deg;
    let seconds = date.getSeconds() * deg;

    $hr.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
    $mn.style.transform = `rotateZ(${minutes}deg)`;
    $sc.style.transform = `rotateZ(${seconds}deg)`;
  }
  setTime();

  setInterval(() => {
    setTime();
  }, 100);
};
