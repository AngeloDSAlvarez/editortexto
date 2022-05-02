let textSize = 16

function setFontSize(){
    textSize = document.getElementById("inputFontSize").value
    changeFontSize()
}
function increaseText (){
    textSize++
    document.getElementById("inputFontSize").value = textSize
    changeFontSize()
}
function decreaseText (){
    textSize--
    document.getElementById("inputFontSize").value = textSize
    changeFontSize()
}
function boldText(){
    let boldText = document.getElementById("boldText")

    if (boldText.checked){
        document.getElementById("areaText").style.fontWeight = 'bold'
    }else{
        document.getElementById("areaText").style.fontWeight = 'normal'
    }
}
function underlineText(){
    let underlineText = document.getElementById("underlineText")

    if (underlineText.checked){
        document.getElementById("areaText").style.textDecoration = 'underline'
    }else{
        document.getElementById("areaText").style.textDecoration = 'none'
    }
}
function italicText(){
    let italicText = document.getElementById("italicText")

    if (italicText.checked){
        document.getElementById("areaText").style.fontStyle = 'italic'
    }else{
        document.getElementById("areaText").style.fontStyle = 'normal' 
    }
}
function changeFontSize(){
    document.getElementById("areaText").style.fontSize = textSize + 'px'
}