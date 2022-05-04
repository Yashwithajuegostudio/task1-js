const textbox = document.getElementById("textbox");
td = document.querySelectorAll("td");
let textboxValue = "";
for (item of td) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

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
