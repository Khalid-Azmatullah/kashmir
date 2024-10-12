function checkPass() {
  const passwordInput = document.getElementById("password").value;
  const correctPassword = "cockroach";

  if (passwordInput === correctPassword) {
      window.location.href = "https://khalid-azmatullah.github.io/kashmir/redirect.html";
  } else if (passwordInput === "🪳") {
      window.location.href = "https://khalid-azmatullah.github.io/kashmir/redirect.html";
  } else {
      const errorSound = document.getElementById("errorSound");
      errorSound.play()
      document.getElementById("incorrectPasswordMessage").innerHTML = "Incorrect Password ❌";
      const message = document.getElementById("incorrectPasswordMessage");
      message.classList.add("incorrectAnimation");
      setTimeout(() => {
        message.classList.remove("incorrectAnimation");
      }, 1000);
  }
}
