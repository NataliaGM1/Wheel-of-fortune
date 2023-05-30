createCloud();
function createCloud(){
    const names=getNames();
    const container=getCloudElement();
    addItemsTo(names,container);
}
function getNames(){
    const names=[
    'Juan','Carlos','Miguel','Jesus','Pedro','Michael','Pablo','Mateo','Santi'    
    ]
    return names;
    
}

function getCloudElement(){
    const element=document.getElementById("cloud");
    return element;
}
function addItemsTo(items,cloud){
    for(let item of items){
    const node=document.createElement("div"); 
    cloud.appendChild(node); 
    }
}