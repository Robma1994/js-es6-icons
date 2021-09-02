// Milestone 1 - Stampare a video tutti gli elementi nella pagina html
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];
const colors = ["Green", "Yellow", "Blue"];

const iconsContainer = document.getElementById('icons');


//Milestone 2 - Coloriamo le icone per tipo
const coloriIcone = colorsIcons(icons,colors);
containerRepeat(coloriIcone, iconsContainer);
console.log(coloriIcone)


//Funzioni
//Funzione Milestone 1 (ok)
function containerRepeat(array, container){
    array.forEach( (currentValue) => {
      const {name, family, prefix, color} = currentValue;
      container.innerHTML +=`
      <div class="card">
          <i class="${family} ${prefix + name}" style="color:${color}" ></i>
          <div class="tit">${name}</div>
      </div> 
      `
  });
}
 

//Funzione Milestone 2a
function typology(array){
  const newArrayType = [];
  array.forEach((currentValue) => {
    if (newArrayType.includes(currentValue.type) == false){
      newArrayType.push(currentValue.type);
    }
  }); 
  return newArrayType;
}

//Funzione Milestone 2b
function colorsIcons(array, colors) {
  const types = typology(array);

  const coloriIcone = array.map((currentValue) =>{
    const positionType = types.indexOf(currentValue.type);
    currentValue.color = colors[positionType];
    return currentValue;
  });
  return coloriIcone
}
