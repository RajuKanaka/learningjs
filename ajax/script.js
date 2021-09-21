// ajax
console.log("ajax");
let fetchBtn = document.getElementById("fetch-btn");
// console.log(fetchBtn);
// fetchBtn.addEventListener("click", buttonClickHandler);
// // function buttonClickHandler() {
// //   console.log("you have clicked fetch btn");
// //   const xhr = new XMLHttpRequest();
// //   xhr.open("GET", "t.txt", true);
// //   xhr.onload = function () {
// //     if (this.status === 200) {
// //       console.log(this.responseText);
// //     } else {
// //       console.log("not found");
// //     }
// //   };
// //   xhr.send();
// // }
let popBtn = document.getElementById("backup-btn");
popBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have clicked fetch btn");
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/typicode/demo/db.",
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("not found");
    }
  };
  xhr.send();
}
