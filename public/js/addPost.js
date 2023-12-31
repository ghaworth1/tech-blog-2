async function newFormHandler(event) {
  event.preventDefault();

   //to add selectors once core logic works...
  const title = document.querySelector("").value;

  const content = document.querySelector("").value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
//add the CSS tags later
  .querySelector("")
  .addEventListener("submit", newFormHandler);