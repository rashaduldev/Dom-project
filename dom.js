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
    if (textArea.style.fontStyle === 'underline') {
        textArea.style.fontStyle = 'normal';
    } else {
        textArea.style.fontStyle = 'underline';
    }
})