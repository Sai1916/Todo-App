console.log("todo");

let list_items = [];
let new_item = [];

localStorage.getItem("todo-items");

if (JSON.parse(localStorage.getItem("todo-items")) != null) {
  new_item = JSON.stringify(localStorage.getItem("todo-items"));
  // console.log(items);
}
//   localStorage.setItem("todo-items", JSON.stringify(list_items));
// }

// localStorage.setItem("todo-items", JSON.parse(list_items));

function AddList() {
  let list1 = document.createElement("li");
  new_item = document.getElementById("input").value;
  list_items = document.createTextNode(new_item);
  list1.appendChild(list_items);

  if (new_item === "") {
    alert("Enter something!!!");
  } else {
    document.getElementById("list").appendChild(list1);
    document.getElementById("input").value = "";
    let itemsArray = localStorage.getItem("todo-items")
      ? JSON.parse(localStorage.getItem("todo-items"))
      : [];

    // let todos;
    // if (localStorage.getItem("todos") == null) {
    //   todos = [];
    // } else {
    //   todos = JSON.parse(localStorage.getItem("todos"));
    // }

    // todos.push(new_item);
    // localStorage.setItem("todos", JSON.stringify(todos));

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(txt);
    list1.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }

    // saveTodos(new_item);

    if (localStorage.getItem("todo-items") == null) {
      localStorage.setItem("todo-items", JSON.stringify(new_item));
      list1.push(new_item);
    } else {
      localStorage.setItem("todo-items", JSON.stringify(new_item));
    }
    localStorage.getItem("todo=items");
    console.log(JSON.parse(localStorage.getItem("todo-items")));
  }
}

let myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// let list2 = document.getElementById("list");
// list2.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );
let list2 = document.querySelector("ol");
list2.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "li") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// function addElement() {
//   if (document.querySelector("#input").value.trim() != "") {
//     list_items.push(document.querySelector("#input").value.trim());
//     display();
//   }
// }

// function display() {
//   document.querySelector("#list").innerHTML.value = "";
//   for (let i = 0; i < list_items.length; i++) {
//     document.querySelector("#list").innerHTML.value +=
//       "<center><div class='element'>" +
//       list_items[i] +
//       "<img src='./pencil.svg' onclick='edit(" +
//       i +
//       ")'><img src='./criss-cross.svg' onclick='del(" +
//       i +
//       ")'></div></center>";
//   }
// }

// function saveTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") == null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getTodos() {
//   let todos;
//   if (localStorage.getItem("todos") == null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   let list1 = document.createElement("li");
//   let todo = document.getElementById("input").value;
//   list_items = document.createTextNode(todo);
//   list1.appendChild(list_items);

//   if (todo === "") {
//     alert("Enter something!!!");
//   } else {
//     document.getElementById("list").appendChild(list1);
//     document.getElementById("input").value = "";
//   }

//   let span = document.createElement("span");
//   let txt = document.createTextNode("\u00D7");
//   span.classList.add("close");
//   span.appendChild(txt);
//   list1.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       let div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
