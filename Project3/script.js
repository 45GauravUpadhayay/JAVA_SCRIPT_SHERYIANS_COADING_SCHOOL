const titleInput = document.querySelector("#title");
const amountInput = document.querySelector("#amount");
const categoryInput = document.querySelector("#category");

const addBtn = document.querySelector("#addBtn");

const expensesContainer =
document.querySelector("#expensesContainer");

const totalExpense =
document.querySelector("#totalExpense");


let total = 0;


addBtn.addEventListener("click", () => {

    if (
        titleInput.value === "" ||
        amountInput.value === "" ||
        categoryInput.value === ""
    ) {
        alert("fill all field");
        return;
    }

    const amount = Number(amountInput.value);
    const title = titleInput.value;
    const category = categoryInput.value;

    const div = document.createElement("div");
    div.classList.add("expense-item");

    div.innerHTML = `
        <div>
            <h4>${title}</h4>
            <p>${category}</p>
        </div>

        <div class="right">
            <span>₹${amount}</span>
            <button class="delete-btn">🗑</button>
        </div>
    `;

    total += amount;
    totalExpense.textContent = `₹${total}`;

    // ✅ IMPORTANT: select button from THIS div only
    const deletebtn = div.querySelector(".delete-btn");

    deletebtn.addEventListener("click", () => {
        div.remove();
        total -= amount;
        totalExpense.textContent = `₹${total}`;
    });

    expensesContainer.appendChild(div);

    titleInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
});