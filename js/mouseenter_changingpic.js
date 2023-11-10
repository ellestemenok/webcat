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
                case "bengal-cat-row":
                    breedcatImage.src = "https://www.purina.com/_gatsby/image/8ffc824a9ab9ea7c57f016709e730aed/db260c3135eaa60932f828cea175db47/Bengal_body_6.jpg?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2Fmedia%2Fimage%2FBengal_body_6.jpg&a=w%3D500%26h%3D500%26fit%3Dcrop%26crop%3Dentropy%26fm%3Djpg%26q%3D75&cd=c72db56a4aadc1ed3135e61fe44a039f";
                    break;
                case "donskoy-sphynx-row":
                    breedcatImage.src = "https://www.purina.com/_gatsby/image/257d7829ca3807d871814539a1bc2d45/db260c3135eaa60932f828cea175db47/Sphynx_body_7.jpg?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2Fmedia%2Fimage%2FSphynx_body_7.jpg&a=w%3D500%26h%3D500%26fit%3Dcrop%26crop%3Dentropy%26fm%3Djpg%26q%3D75&cd=794dd15976f67d03817fd0015526c6a2";
                    break;
                case "kanaani-row":
                    breedcatImage.src = "https://zoobonus.ua/storage/breeds/images/big/eXxunhJbzYhEmdW0q007PcNIzWflzAt6b3yWytWX.jpeg";
                    break;
                case "likoi-row":
                    breedcatImage.src = "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Lykoi.jpg?itok=rrQhzWcx";
                    break;
                case "maine-coon-row":
                    breedcatImage.src = "https://basepaws.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7hqiona4456t%2F3xSVakUgDq6fPfiTt8b1FJ%2Ff667027bd7942f3154235720d3776c2b%2FMaine_Coon_cat_breed.jpg&w=1080&q=75";
                    break;
                case "peterbold-row":
                    breedcatImage.src = "https://жизньпитомца.рф/upload/iblock/454/4544cf8ed07875e1aaaffc22ea1d1f84.jpg";
                    break;
                case "ragdoll-row":
                    breedcatImage.src = "https://www.purina.ru/sites/default/files/styles/nppe_breed_selector_500/public/2020-05/cat_ragdoll.jpg?itok=shqll8FY" ;
                    break;
                case "chausie-row":
                    breedcatImage.src = "https://www.monaconatureencyclopedia.com/wp-content/uploads/2010/09/jpg_Chausie_c_Giuseppe_Mazza.jpg";
                    break;
                case "japanese-bobtail-row":
                    breedcatImage.src = "https://www.purina-arabia.com/sites/default/files/breed_library/cat_japanese_bobtail_short_hair.jpg";
                    break;
               
            }
        }
        target = target.parentNode;
    }
});