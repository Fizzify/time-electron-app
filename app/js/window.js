const CLOSE = document.getElementById("close");
const MINIMIZE = document.getElementById("minimize");

CLOSE.addEventListener("click", () => {
  app.window.close();
});

MINIMIZE.addEventListener("click", () => {
  app.window.minimize();
});
