const categoryBtn = document.querySelector("#catgeory");
const searchInput = document.querySelector("#search");
const channelsDiv = document.querySelector("#listCahnnel");

let selectedCategory = "all";
let searchResult = "";
let channels = [];



export function filterAndSearch(data){
    channels = data;
const  filteredChannels = channels.filter((channel) =>{
    // // const matchedCategories = ;
    // // const matchedSearch =;
    // return matchedCategories && matchedSearch;
});
}