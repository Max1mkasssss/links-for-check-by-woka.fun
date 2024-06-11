function copyText() {

    var textToCopy = document.getElementById("textToCopy");
    
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); 
    
    document.execCommand("copy");
    
    alert("Текст скопирован: " + textToCopy.value);
}