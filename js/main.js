import { dateAndTime } from "./ui.Js";

import { dataFetch } from "./api.js";
dateAndTime();
try {
  const data = await dataFetch();
  console.log("success", data);
} catch (error) {
  console.error("failed", error.message);
}
