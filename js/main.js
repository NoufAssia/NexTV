import { dateAndTime } from "./date.js";
import { filterAndSearch } from "./category.js";
import { showCahnnels } from "./channels.js";
import { dataFetch } from "./api.js";
dateAndTime();

const loading = document.querySelector("#loading");
const errorDiv = document.querySelector("#error-div");
const errorMsg = document.querySelector("#error-message");
async function manageError() {
  try {
    const data = await dataFetch();
    filterAndSearch(data);
    showCahnnels(data);
    console.log("success", data);
  } catch (error) {
    console.error("failed", error.message);
    errorMsg.textContent = error.message;
    errorDiv.classList.remove("hidden");
  } finally {
    loading.hidden = true;
  }
}
manageError();

