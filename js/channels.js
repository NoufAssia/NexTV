const channelsDiv = document.querySelector("#listCahnnel");

export function showCahnnels(data) {
  channelsDiv.innerHTML = "";

  if (data.length === 0) {
    channelsDiv.textContent = "No channels found.";
    channelsDiv.classList.add(text-white/70);
    return;
  }

  data.forEach((channel) => {
    const channelDiv = document.createElement("div");
    channelDiv.className =
      " channel flex items-center gap-3  border mr-3 pl-2 rounded-lg text-white/50 hover:bg-purple-500 hover:text-white cursor-pointer";
    channelDiv.dataset.preview = channel.logo;
    channelDiv.dataset.name = channel.name;
    channelDiv.dataset.id = channel.id;
    channelDiv.dataset.number = channel.channelNumber;
    const number = document.createElement("span");
    number.textContent = channel.channelNumber;

    const logo = document.createElement("img");
    logo.src = channel.logo;
    logo.alt = `${channel.name} logo`;
    logo.className = "w-6 h-6 object-contain";

    const name = document.createElement("span");
    name.textContent = channel.name;

    channelDiv.append(logo, number, name);
    channelsDiv.appendChild(channelDiv);
  });
}
