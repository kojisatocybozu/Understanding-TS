let appId = "abc";
const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 * n2;
  }
  return;
}

function clickHundler(message: string) {
  let userName = "Max";
  console.log("clicked " + message + " " + userName + " " + add(50, 8));
}

button.addEventListener("click", clickHundler.bind(null, "Your'e welcome"));
