function OkClick () {
  const firstName = document.getElementById("firstName").value;
  const messagePlaceholder = document.getElementById("message");
  const message = `Hello ${firstName}!`;
  messagePlaceholder.innerText = message;
}