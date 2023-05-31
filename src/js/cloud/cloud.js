// alert("fichero cloud.js");
class NameCloud {
  constructor(container, texts) {
    // alert("dentro del constructor");
    const self = this;
    self.container = container;
    self.texts = texts;
    self.createInnerCloud();
  }
  createInnerCloud() {
    const self = this;
    self.radius = 20; // rolling radius
        self.depth = 2 * self.radius; // rolling depth
        self.size = 1.5 * self.radius; // rolling area size with mouse

    const elCloud = document.createElement("div");
    elCloud.className = "cloudEl";
    elCloud.style.position = 'relative';
    elCloud.innerText = "elCLoud";

    self.texts.forEach((text)=>{
      
      const item = self.createTextItem(text);
      const index = self.texts.indexOf(text);
      
      const position = self.computePosition(index) ;
      
      item.style.left = " " + position.x  + "%";
      alert("" + position.x + "%");
      item.style.top = " " + position.y  + "%";
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
        x: (80 * Math.cos(theta) * Math.sin(phi)) / 2 +50,        
        y: (80 * Math.sin(theta) * Math.sin(phi)) / 2 +50,
        
        // z: (self.size * Math.cos(phi)) / 2,
        z: 0,
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

