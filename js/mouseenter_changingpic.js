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
                    breedcatImage.src = "https://www.purina.com/_gatsby/image/d7bc83f9f9f4fce2c725fb6305661a06/db260c3135eaa60932f828cea175db47/Abyssinian_body_7.jpg?u=https%3A%2F%2Flive-purina-h20.pantheonsite.io%2Fsites%2Fdefault%2Ffiles%2Fmedia%2Fimage%2FAbyssinian_body_7.jpg&a=w%3D500%26h%3D500%26fit%3Dcrop%26crop%3Dentropy%26fm%3Djpg%26q%3D75&cd=e77ad984e60b8abf1a544e1323a792a9";
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