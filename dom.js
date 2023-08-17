const textBold = document.getElementById('textBold');
const textItalic = document.getElementById('textItalic');
const textUnderline = document.getElementById('textUnderline');


const textArea = document.getElementById('textArea');

textBold.addEventListener('click', function () {
    if (textArea.style.fontWeight == "normal") {
        textArea.style.fontWeight = "bold";
    } else {
        // alert('false')
        textArea.style.fontWeight = "normal";
    }


})
textItalic.addEventListener('click', function () {
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal';
    } else {
        textArea.style.fontStyle = 'italic';
    }
})

textUnderline.addEventListener('click', function () {
    if (textArea.style.textDecoration === 'underline') {
        textArea.style.textDecoration = 'none';
    } else {
        textArea.style.textDecoration = 'underline';
    }
})


// text Alain
const iconLeft=document.getElementById('iconLeft');
const iconMidle=document.getElementById('iconMidle');
const iconRight=document.getElementById('iconRight');
const iconCenter=document.getElementById('iconCenter');

iconLeft.addEventListener('click',function () {
    textArea.style.textAlign='left';
})

iconMidle.addEventListener('click',function () {
    textArea.style.textAlign='center';
})

iconRight.addEventListener('click',function () {
    textArea.style.textAlign='right';
})

iconCenter.addEventListener('click',function () {
    textArea.style.textAlign='center';
})


// text size and text colour 

const textSize=document.getElementById('textSize');
const textColour=document.getElementById('textColour');

textSize.addEventListener('input',function () {
   const sizeText=textSize.value +"px";
   textArea.style.fontSize=sizeText;
})
textArea.style.fontSize='16px';

textColour.addEventListener('input',function () {
    const colourr=textColour.value;

    textArea.style.color=colourr;
})
