const hostDiv = document.querySelector("#host-div");
const defImg = document.querySelector("#default-img");
const channelsDiv = document.querySelector("#listCahnnel");

const currentProgram = document.querySelector("#currentProgram");
const startTime = document.querySelector("#startTime");
const endTime = document.querySelector("#endTime");
const progressPercentage = document.querySelector("#progressPercentage");
const epgCp = document.querySelector("#epgCp");
const epgSt = document.querySelector("#epgSt");
const epgEt = document.querySelector("#epgEt");
const epgPp = document.querySelector("#epgPp");

console.log("HOST:", hostDiv);
console.log("DEFAULT:", defImg);
console.log("CHANNELS:", channelsDiv);
export function showImg(data) {
  channelsDiv.addEventListener("click", (event) => {
    const click = event.target.closest(".channel");
    const clickedChannel = data.find((channel) =>{
        return channel.id === click.dataset.id;
    })
    if (click) {
      defImg.classList.add("hidden");

      let img = hostDiv.querySelector("#channel-preview");
      if (!img) {
        img = document.createElement("img");
        img.id = "channel-preview";
        img.className =
          "rounded-3xl w-full h-full object-cover shadow-[-1px_-1px_16px_16px_rgba(0,0,0,0.35)]";
        hostDiv.append(img);
      }
      img.src = click.dataset.preview;
      img.alt = `${click.dataset.name} preview`;

      let epg = clickedChannel.epg;
      currentProgram.classList.remove("hidden");
      epgCp.textContent = epg.currentProgram;
      startTime.classList.remove("hidden");
      epgSt.textContent = epg.startTime;
      endTime.classList.remove("hidden");
      epgEt.textContent = epg.endTime;
      progressPercentage.classList.remove("hidden");
      epgPp.textContent = epg.progressPercentage;
    }
  });
}
