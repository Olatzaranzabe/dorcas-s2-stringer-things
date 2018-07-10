'use strict';

var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
var uploadBtn = document.querySelector('.fill-input__image');
var uploadInput = document.querySelector('.fill-input__input');
var uploadPhoto = document.querySelector('.card__image');
var fr = new FileReader();

function reWriteData(e){
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute('data-stringer');
  var sendCont = document.querySelector('#' + targetInput);
  var itemAttribute = fillInput.getAttribute('type');
  if (itemAttribute === 'number'){
    sendCont.href += fillInput.value;
  } else if (itemAttribute=== 'email'){
    sendCont.href += fillInput.value;
  } else if (itemAttribute === 'url'){
    var scriptUrl = fillInput.value.toString();
    console.log(scriptUrl);
    sendCont.href += scriptUrl;
  } else {
    sendCont.innerHTML = fillInput.value;
  }
}


for (var i=0; i<itemsSocialMedia.length; i++){
  itemsSocialMedia[i].addEventListener('change', reWriteData);
}




//Cargar Imagen

function mostrarImagen(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  var urlPhoto = 'url(' +'"' + fr.result + '"' +')';
  uploadPhoto.style.backgroundImage = urlPhoto;

}
function clickInput () {
  uploadInput.click();
}

uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);


//Skills
var selectInputSkills = document.querySelector('.select-abilities');
var skillContainer = document.querySelector('.card_skills--list');

function selectSkills(){
var x = selectInputSkills.value;
skillContainer.innerHTML= '<li class="skill">' +x +'</li>';

}


selectInputSkills.addEventListener('click', selectSkills);



// create box skills
var buttonSkills = document.querySelectorAll('.js-button-abilities');
var boxSkills = document.querySelectorAll('.js-ability-box');
var dataType;
var dataIndex = 0;

function createSkill(event){
  for (var i = 0; i < boxSkills.length; i++){
    dataType = event.currentTarget.getAttribute('data-type');
    dataIndex = event.currentTarget.getAttribute('data-index');
    dataIndex = parseInt(dataIndex);
    console.log('dataType' ,dataType);
    console.log('dataIndex type' ,typeof dataIndex);
    if(dataType === 'hidden') {
      boxSkills[dataIndex].classList.add(dataType);
    } else if (dataType === 'plus'){
      console.log('dataIndex' ,dataIndex);
      dataIndex = dataIndex + 1;
      boxSkills[dataIndex].classList.add(dataType);
    }
  }
}

for(var i = 0; i < buttonSkills.length; i++){
  buttonSkills[i].addEventListener('click', createSkill);
}
