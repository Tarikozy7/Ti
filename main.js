import menu from "./database.js";

const menuContainer = document.getElementById("menu-container");
// console.log(menuContainer)

const filterButton = document.querySelectorAll(".filter-btn");
// console.log(filterButton)
/*
-YAPILACAKLAR-
-databaseden gelen menu dizisini array metodu döneceğiz 
-diziden dönen her bir veri için ekrana bir eleman bastırılacak
*/

// sayfa yüklendiği anda fonksiyonları çalıştırmak için

document.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
});

// sayfa yüklendiğinde menuyü göstermek için
function displayMenu(menuItems) {
  // console.log(menuItems)
  let dispMenu = menuItems.map(
    (menuItem) => `

<div
          class="d-flex align-items-center gap-3 flex-column flex-md-row my-2"
          id="card"
        >
          <img 
          src=${menuItem.img} 
          alt="" 
          id="image" 
          class="rounded shadow" />
          <div>
            <div class="d-flex justify-content-between">
              <h5>${menuItem.title}</h5>
              <p>${menuItem.price} ₺</p>
            </div>
            <p class="lead">
              ${menuItem.desc}
            </p>
          </div>
        </div>

`
  );
  //  console.log(titles)
  dispMenu = dispMenu.join("");
  menuContainer.innerHTML = dispMenu;
}

// Filtreleme işlemi yapılan butonları forEach ile dönülüyor
// forEach kullanılıyor çünkü map metodu sadece dizilirde kullanılır

filterButton.forEach((button) => {
  // console.log(button)

  // her bir butona bir olay dinleyicisi ekleniyor
  button.addEventListener("click", (e) => {

    // HTML de verdiğimiz dataset özelliği sayesinde tıklanılan elemanı tespit edebiliyoruz
    const category = e.target.dataset.id;
    // console.log(e.target.dataset.id);

    // filtlereleme yapacak olan fonksiyona o an ki tıklanılan butonun kategori bilgisini parametre olarak gönderiyoruz
    searchCategory(category);
  });
});

// filtlereleme fonksiyonu
function searchCategory(categoryInfo) {
  console.log(categoryInfo);

  // filter metodu tüm menüyü döner ve verilen parametreler doğrultusuda yeni diziyi geriye döner
  const filteredMenu=menu.filter((menuItem)=>{
    if(categoryInfo===menuItem.category) 
    return menuItem
  });

  // console.log(filteredMenu)

  if(categoryInfo==='all'){
    displayMenu(menu)
  }else{
    displayMenu(filteredMenu)
  }

}
