let cardsContainer = document.querySelector("#cardsContainer");
let currentIndex = 0;
let allUsers = [];

// Ek hi baar API call
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    allUsers = users;
    showUsers();
  });

function showUsers() {

    cardsContainer.innerHTML = "";

    let usersToShow = allUsers.slice(currentIndex, currentIndex + 3);

    usersToShow.forEach((user, index) => {

        let card = document.createElement("div");
        card.className =
          "w-80 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800";

        card.innerHTML = `
            <div class="h-28 bg-gradient-to-r from-violet-600 to-cyan-500"></div>

            <div class="flex justify-center -mt-14">
                <img
                    src="https://i.pravatar.cc/150?img=${currentIndex + index + 1}"
                    class="w-28 h-28 rounded-full border-4 border-slate-900"
                >
            </div>

            <div class="p-6 text-center">
                <h2 class="text-2xl font-bold text-white">
                    ${user.name}
                </h2>

                <p class="text-cyan-400 mt-1">
                    ${user.company.bs}
                </p>

                <p class="text-slate-400 text-sm mt-4">
                    ${user.email}
                </p>
            </div>
        `;

        cardsContainer.appendChild(card);
    });

    currentIndex += 3;

    // End par pahunch gaye to fir se start
    if (currentIndex >= allUsers.length) {
        currentIndex = 0;
    }
}

document
  .querySelector("#refreshBtn")
  .addEventListener("click", showUsers);