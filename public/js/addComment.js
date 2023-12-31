async function commentFormHandler(event) {
  event.preventDefault();


   //to add selectors once core logic works...
  const comment_text = document
    .querySelector("")
    .value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
      document.querySelector("").style.display = "block";
    }
  }
}

document

//add the CSS tags later
  .querySelector("")
  .addEventListener("submit", commentFormHandler);