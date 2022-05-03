const textbox = document.getElementById("textbox");
buttons = document.querySelectorAll("button");
let textboxValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "C") {
      textboxValue = "";
      textbox.value = textboxValue;
    } else if (buttonText == "=") {
      textbox.value = eval(textboxValue);
    } else {
      textboxValue += buttonText;
      textbox.value = textboxValue;
    }
  });
}
