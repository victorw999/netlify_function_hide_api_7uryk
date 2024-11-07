window.onload = function () {
  const message = document.getElementById("message")
  document.getElementById("button").addEventListener("click", async () => {

    // #1
    const response1 = await fetch("/.netlify/functions/hello-world?name=Netlify");
    const data1 = await response1.json();
    console.log("(1)" + data1.msg);
    message.innerHTML = "(2)" + data1.msg;

    // fetch("/.netlify/functions/hello-world?name=" + "Netlify")
    //   .then((data) => data.json())
    //   .then(({ msg }) => console.log("(1)" + msg) || (message.innerHTML = "(2)" + msg))

    // #2
    await fetch("/.netlify/functions/token-hider")
      .then((data) => data.json())
      .then(({ msg }) => console.log("new change 22222 \n (1)" + msg) || (message.innerHTML = "(2)" + msg))
  })
}
