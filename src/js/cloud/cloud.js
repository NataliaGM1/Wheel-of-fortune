
class NameCloud {  
    constructor(container , texts) {//= document.body, options
        alert("constructor");
        const self = this; 
        self.container = container;
        self.texts = texts ;//|| []        
        self.createInnerCloud();        
    }
    
    createInnerCloud() {
        const self = this;

        const elCloud = document.createElement('div');
        elCloud.className = "cloud";
        // alert("createCloud");
        
        self.texts.forEach((text) => {
            // alert("creado item");
            const item = self.createTextItem(text);
            elCloud.appendChild(item);            
        });
        
        self.container.appendChild(elCloud);        
    }
    createTextItem(text) {        
        const itemEl = document.createElement('span');
        itemEl.className = "item";      
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
    init() {
        const self = this; 

        // update state regularly
        self._next(); // init update state
        self.interval = self._requestInterval(() => {
            self._next.call(self);
        }, 10);
    }
    next() {
        
    }
    update(texts) {
        const self = this;
        // params
        self.texts = texts || [];
        // judging and processing items based on texts
        self.texts.forEach((text, index) => {
            let item = self.items[index];
            if (!item) { // if not had, then create
                item = self._createTextItem(text, index);
                Object.assign(item, self._computePosition(index, true)); // random place
                self.$el.appendChild(item.el);
                self.items.push(item);
            }
            // if had, replace text
            item.el.innerText = text;
        });
        // remove redundant self.items
        const textsLength = self.texts.length;
        const itemsLength = self.items.length;
        if (textsLength < itemsLength) {
            const removeList = self.items.splice(textsLength, itemsLength - textsLength);
            removeList.forEach(item => {
                self.$el.removeChild(item.el);
            });
        }
    }
}

createCloud();
function createCloud(){
    const textNames = getNames();
    const cloudContainer = getContainer();
    // const $elCloud = document.createElement('div');
    // const itemEl = document.createElement('span');
    // itemEl.innerText = 'Juan';
    // $elCloud.appendChild(itemEl);
    // cloudContainer.appendChild($elCloud);
    // textNames.forEach((textElement, index, array) =>{
    //     const item = createTextItem(textElement);
    //     cloudContainer.appendChild(item);        
    // });
    // const unPerro = new Perro();
    
    const namesCloud = new NameCloud(cloudContainer, textNames);
}

function getNames(){
    const names = ['Pepe', 'Juan', 'Jeni'];
    return names;
}
function getContainer(){
    const container = document.getElementById('cloud');
    return container;
}
