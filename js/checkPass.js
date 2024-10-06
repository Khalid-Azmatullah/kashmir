function checkPass() {
  const passwordInput = document.getElementById("password").value;
  const correctPassword = "cockroach";

  if (passwordInput === correctPassword) {
      window.location.href = "https://khalid-azmatullah.github.io/kashmir/dashboard.html";
  } else {
      const errorSound = document.getElementById("errorSound");
      errorSound.play()
      document.getElementById("incorrectPasswordMessage").innerHTML = "Incorrect Password ❌";
      const message = document.getElementById("incorrectPasswordMessage");
      message.classList.add("incorrectAnimation");

  }
}
