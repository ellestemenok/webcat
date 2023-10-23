const breedsTable = document.querySelector(".breeds-table");
const breedcatImage = document.getElementById("breedcat-image");

// Обработчик события при наведении на строку таблицы
breedsTable.addEventListener("mouseover", function (event) {

    let target = event.target;
    // Проверяем, что событие произошло над строкой (TR)
    while (target != this){

        if (target.tagName === "TR") {
        
            // Получаем ID строки
            const rowId = target.id;
           
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
        target = target.parentNode;
    }
});