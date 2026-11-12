const channelsDiv = document.querySelector("#listCahnnel");


export function  showCahnnels(data){
    channelsDiv.innerHTML = "";

    if(data.length === 0){
        channelsDiv.textContent = "No channels found.";
        return;
    }

    data.forEach((channel) =>{
        const channelDiv = document.createElement("div");
        channelDiv.className="flex items-center gap-3  border mr-3 rounded-lg text-white/50 hover:bg-purple-500 hover:text-white cursor-pointer";

        const number = document.createElement("span");
        number.texContent = channel.channelNumber;

        const logo = document.createElement("img");
        logo.src  = channel.logo;
        logo.alt = `${channel.name} logo`;
        logo.className="w-6 h-6 object-contain";

        const name = document.createElement("span");
        name.textContent = channel.name;

        channelDiv.append(number, logo, name);
        channelsDiv.appendChild(channelDiv);
    });
}