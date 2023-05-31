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
    elCloud.className = "cloudEl";
    elCloud.style.position = 'relative';

    self.texts.forEach((text,index) => {
      const item = self.createTextItem(text);
      position = computePosition(index);
      item.style.left = position.x;
      item.style.top = position.y;
      elCloud.appendChild(item);
    });
    self.container.appendChild(elCloud);
  }
  createTextItem(text) {
    const itemEl = document.createElement("span");
    itemEl.className = "itemEl";
    itemEl.style.position = 'absolute';
    itemEl.innerText = text;
    return itemEl;
  }
  computePosition(index, random = false) {
    const self = this;
    const textsLength = self.texts.length;
    // if random `true`, It means that a random appropriate place is generated, and the position will be independent of `index`
    if (random) index = Math.floor(Math.random() * (textsLength + 1));
    const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
    const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
    return {
        x: (self.size * Math.cos(theta) * Math.sin(phi)) / 2,
        y: (self.size * Math.sin(theta) * Math.sin(phi)) / 2,
        z: (self.size * Math.cos(phi)) / 2,
    };
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

