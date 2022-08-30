const input = document.getElementById("inputNewLink");
const addBtn = document.getElementById("btnAddNewLink");

// ADD New Link Button Events - On Mouse Click
addBtn.addEventListener("click", addNewLink, false);
// ADD New Link Button Events - Key Press "ENTER"
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    addNewLink();
  }
});

function addNewLink() {
  const inputText = input.value;
  const ul = document.getElementById("linkList");
  const li = document.createElement("li");

  if (inputText == "") {
    // Trocar o alertas por estilização CSS. Cor do placeholder e borda.
    alert("Preencha com um link");
  } else if (!isValidLink(inputText)) {
    alert("Preencha com um link válido");
  } else {
    li.innerHTML = `
    <a href="${inputText}" class="text-link">${inputText}</a>
    <button class="btn-action">
      <i class="fa-solid fa-pencil"></i>
    </button>
    <button class="btn-action">
      <i class="fa-solid fa-trash-can"></i>
    </button>
    `;

    ul.appendChild(li);
  }

  document.querySelector("#inputNewLink").value = "";
}

// Checa se o link enviado é válido
function isValidLink(inputText) {
  return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
    inputText
  );
}
