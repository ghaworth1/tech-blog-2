async function loginFormHandler(event) {
  event.preventDefault();

   //to add selectors once core logic works...
  const username = document.querySelector("").value.trim();
  const password = document.querySelector("").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
//add the CSS tags later
  .querySelector("")
  .addEventListener("submit", loginFormHandler);