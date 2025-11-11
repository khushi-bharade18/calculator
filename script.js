let inputBox = document.querySelector("#inputId");
let buttons = document.querySelectorAll(".button");
let str = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (true) {
      // You clicked equals button.

      case e.target.classList.contains("equal"):
        if (str === "") {
          inputBox.value = "Error";
          str = "";
        } else {
          let formatStr = eval(str);
          str = formatNumber(formatStr);
          inputBox.value = str;
          str = "";
        }
        break;

      // You clicked plus button.

      case e.target.classList.contains("plus"):
        str += "+";
        inputBox.value = str;
        break;

      // You clicked minus button.

      case e.target.classList.contains("minus"):
        str += "-";
        inputBox.value = str;
        break;

      // You clicked multiply button.

      case e.target.classList.contains("multiply"):
        str += "*";
        inputBox.value = str;
        break;

      // You clicked divide button.

      case e.target.classList.contains("divide"):
        str += "/";
        inputBox.value = str;
        break;

      // You clicked power button.

      case e.target.classList.contains("power"):
        str += "**";
        inputBox.value = str;
        break;

      // You clicked sqrt button.

      case e.target.classList.contains("sqrt"):
        str = eval(str);
        // Converting string into floating point number
        let num = parseFloat(str);
        if (isNaN(num) || num < 0) {
          inputBox.value = "Error : (-ve)";
          str = "";
          return;
        }
        // Find the square root of number
        let sqrtNum = Math.sqrt(num);
        str = formatNumber(sqrtNum);
        inputBox.value = str;
        str = "";
        break;

      // You clicked plus-miinus button.

      case e.target.classList.contains("plus-minus"):
        let regex = /(\(-?\d+(\.\d+)?\)|\d+(\.\d+)?)$/;
        str = str.replace(regex, (match) => {
          if (match.startsWith("(-")) {
            return match.slice(2, -1);
          } else {
            return `(-${match})`;
          }
        });
        inputBox.value = str;
        break;

      // You clicked delete button.

      case e.target.classList.contains("delete"):
        str = str.substring(0, str.length - 1);
        inputBox.value = str;
        break;

      // You clicked all-clear button.

      case e.target.classList.contains("all-clear"):
        str = "";
        inputBox.value = str;
        break;

      // Add numbers in string

      default:
        str += e.target.innerHTML;
        inputBox.value = str;
        break;
    }
  });
});

function formatNumber(n) {
  if (!isFinite(n)) return String(n);
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(5)).toString();
}
