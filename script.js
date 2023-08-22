const infiList = document.getElementById("infi-list");
let currentPage = 1;
const itemsPerPage = 10;

// Function to add items to the list
function addItemsToInfiList(start, end) {
  for (let i = start; i <= end; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `List Item ${i}`;
    infiList.appendChild(listItem);
  }
}

// Initial loading of items
addItemsToInfiList(1, itemsPerPage);

// Function to load more items when reaching the end
function loadMoreItems() {
  const totalItems = currentPage * itemsPerPage;
  const start = totalItems - itemsPerPage + 1;
  const end = totalItems + itemsPerPage;

  addItemsToInfiList(start, end);

  currentPage++;
}

// Event listener for scrolling
infiList.addEventListener("scroll", () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    loadMoreItems();
  }
});
