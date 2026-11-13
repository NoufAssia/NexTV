import { dateAndTime } from "./date.js";
import { showCategories } from "./category.js";
import { showCahnnels } from "./channels.js";
import { dataFetch } from "./api.js";
import { showImg } from "./preview.js";
dateAndTime();

const loading = document.querySelector("#loading");
const errorDiv = document.querySelector("#error-div");
const errorMsg = document.querySelector("#error-message");
const retryBtn = document.querySelector("#retry-btn");

async function manageError() {
  try {
    const data = await dataFetch();
    showCategories(data);
    showCahnnels(data);
    showImg(data);
    console.log("success", data);
  } catch (error) {
    console.error("failed", error.message);
    errorMsg.textContent = error.message;
    errorDiv.classList.remove("hidden");
    retryBtn.addEventListener("click", () => {
      window.location.reload();
    });
  } finally {
    loading.hidden = true;
  }
}
manageError();
