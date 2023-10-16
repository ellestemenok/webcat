const breedsTable = document.querySelector(".breeds-table");
const breedcatImage = document.getElementById("breedcat-image");

// Обработчик события при наведении на строку таблицы
breedsTable.addEventListener("mouseenter", function (event) {
    // Проверяем, что событие произошло над строкой (TR)
    if (event.target.tagName === "tr") {
        // Получаем ID строки
        const rowId = event.target.id;

        // Обновляем src изображения в breedcat-image-container в зависимости от ID строки
        switch (rowId) {
            case "abyssian-cat-row":
                breedcatImage.src = "img/Abyssinian-Cat.webp";
                break;
            case "arabic-mau-row":
                breedcatImage.src = "img/Egyptian-Mau.jpg";
                break;
            // Добавьте дополнительные случаи для других пород, если необходимо
        }
    }
});