function copyText() {
    // Находим элемент по ID
    var textToCopy = document.getElementById("textToCopy");
    
    // Выделяем текст
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // Для мобильных устройств
    
    // Копируем текст
    document.execCommand("copy");
    
    // Сообщаем пользователю об успешном копировании
    alert("Текст скопирован: " + textToCopy.value);
}