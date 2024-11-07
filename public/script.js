window.onload = function () {
  const message = document.getElementById("message")
  document.getElementById("button").addEventListener("click", () => {
    console.log("hello", message)
    // fetch("/.netlify/functions/hello-world?name=" + "Netlify")
    //   .then((data) => data.json())
    //   .then(({ msg }) => console.log("(1)" + msg) || (message.innerHTML = "(2)" + msg))

    fetch("/.netlify/functions/api-hider")
      .then((data) => data.json())
      .then(({ msg }) => console.log("(1)" + msg) || (message.innerHTML = "(2)" + msg))
  })
}
