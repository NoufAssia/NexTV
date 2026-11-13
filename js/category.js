const categoryBtn = document.querySelector("#category");
const categoryPopUp = document.querySelector("#popup-category");
const selectedCategoryTitle = document.querySelector("#selected-category");
const searchInput = document.querySelector("#search");
const channelsDiv = document.querySelector("#listCahnnel");

let selectedCategory = "all";
let searchResult = "";
let channels = [];

export function filterAndSearch(data) {
  channels = data;
  const categories = [
    "All categories",
    ...new Set(channels.map((channel) => channel.category)),
  ];
  categoryModal(categories);
}

function categoryModal(categories) {
  categoryPopUp.innerHTML = "";

    categories.forEach((category) => {
      const button = document.createElement("button");
      button.textContent = category.toLowerCase();
      button.className ="block w-full text-start border-purple-500/80 bg-white/[0.03] hover:bg-purple-500 pl-2";
      button.dataset.category = category;
      categoryPopUp.append(button);
    });

}

  categoryBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    categoryPopUp.classList.toggle("hidden");
  });

  categoryPopUp.addEventListener("click", (event)=>{
    const clickedCategory = event.target.closest("button[data-category]");

    if(!clickedCategory){
        return;
    };
    const selectedCategory = clickedCategory.dataset.category;
    selectedCategoryTitle.textContent = selectedCategory;
    categoryPopUp.classList.add("hidden");
  });

  document.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  categoryPopUp.classList.add("hidden");
});