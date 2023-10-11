
      let addTodoButton = document.getElementById("todoAdd");
      let todoContainer = document.getElementById("todoContainer");
      let inputfield = document.getElementById("inputfield");
      let container = document.getElementById("container");

      addTodoButton.addEventListener("click", function () {
        var paragraph = document.createElement("span");
        var buttonAdd = document.createElement("button");
        var buttonRemove = document.createElement("button");

        paragraph.style.display="inline-block";
        paragraph.style.margin="10px";
        buttonAdd.style.display="inline-block";
        buttonAdd.style.margin="10px";
        buttonRemove.style.display="inline-block";
        buttonRemove.style.margin="10px";
        
        var todoItem = document.createElement("div");
        todoItem.classList.add("container");

        paragraph.innerText = inputfield.value;
        buttonAdd.innerText = "Done";
        buttonAdd.style.borderRadius = "5px";
        buttonAdd.style.backgroundColor = "rgb(109, 227, 109)";
        // buttonAdd.style.marginLeft = "0px";
        // buttonAdd.style.marginBottom = "0px";
        buttonAdd.style.fontSize = "15px";
        buttonRemove.innerText = "Remove x";
        buttonRemove.style.borderRadius = "5px";
        buttonRemove.style.backgroundColor = "rgb(109, 227, 109)";
        buttonRemove.style.fontSize = "15px";

        paragraph.style.marginLeft = "0px";
        paragraph.style.fontSize = "20px";
        paragraph.style.color = "black";
        todoItem.appendChild(paragraph);
        todoItem.appendChild(buttonAdd);
        todoItem.appendChild(buttonRemove);

        todoContainer.appendChild(todoItem);

        inputfield.value = "";

        buttonAdd.addEventListener("click", function () {
          paragraph.style.textDecoration = "line-through";
          paragraph.style.color = "red";
        });

        buttonRemove.addEventListener("click", function (event) {
          paragraph.style.display = "none";
          buttonAdd.style.display = "none";
          buttonRemove.style.display = "none";

        });
      });
   