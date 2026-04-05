
// Print till the user entered number 

const btn = document.getElementById("btn");
const inp = document.getElementById("inpNum");
let numBox = document.getElementById("numBox");
const clearBtn = document.getElementById("clearBtn");

btn.addEventListener("click", () => {
  let value = Math.floor(Number(inp.value));
  if (!validateNum(value)) {
    return;
  }

  for (let i = 0; i <= value; i++) {
    numBox.innerHTML += `
      <span
        class="border p-2 w-12 h-12 text-center hover:text-blue-500 hover:font-bold hover:border-2"
        >${i}</span
      >
      `;
  }
  inp.value = "";
});

function validateNum(val) {
  if (val > 50 || val <= 0) {
    alert("please enter a number not more than 50 and greater than 0");
    return false;
  }
  return true;
}

clearBtn.addEventListener("click", () => {
  numBox.innerHTML = "";
});
