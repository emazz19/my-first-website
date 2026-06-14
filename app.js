// Show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// A tiny bit of interactivity to prove the JavaScript is loading.
const messages = [
  "Hello from the cloud! ☁️",
  "Deployment successful 🎉",
  "You just shipped a website 🚢",
  "Push to GitHub → live on Azure ⚡",
];

let clicks = 0;
document.getElementById("btn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.textContent = messages[clicks % messages.length];
  clicks++;
});
