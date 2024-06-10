window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".loader").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.body.style.overflow = "auto"; // Возвращаем скролл после загрузки
    }, 4100); // 2 секунды
});
