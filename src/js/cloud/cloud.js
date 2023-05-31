alert("fichero cloud.js");
class NameCloud {
  constructor(container, texts) {
    alert("dentro del constructor");
    const self = this;
    self.container = container;
    self.texts = texts;
    self.createInnerCloud();
  }
  createInnerCloud() {
    const self = this;

    const elCloud = document.createElement("div");
    elCloud.className = "cloud";

    self.texts.forEach((text) => {
      const item = self.createTextItem(text);
      elCloud.appendChild(item);
    });
    self.container.appendChild(elCloud);
  }
  createTextItem(text) {
    const itemEl = document.createElement("span");
    itemEl.className = "item";
    itemEl.innerText = text;
    return itemEl;
  }
}
createCloud();
function createCloud() {
  const textNames = getNames();
  const cloudContainer = getContainerElement();
  const namesCloud = new NameCloud(cloudContainer, textNames);
}
function getNames() {
  const names = [
    "Juan",
    "Carlos",
    "Miguel",
    "Jesus",
    "Pedro",
    "Michael",
    "Pablo",
    "Mateo",
    "Santi",
  ];
  return names;
}

function getContainerElement() {
  const element = document.getElementById("cloud");
  return element;
}

