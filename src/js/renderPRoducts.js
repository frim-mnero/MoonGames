const cardContainer = document.querySelector(".сontainer-all");
const cardsAll = document.querySelector('.cards');
const infoCardPage = document.querySelector(".infoCardPage");

const containerGanres = document.querySelector(".detal-item");


getCards();

async function getCards(){

    const response = await fetch('./src/js/products.json');
    // console.log(response);

    const cardArray = await response.json();
    // console.log(cardArray);

    renderCards(cardArray);
    setId(cardArray);
    
    
}

function setId(cardArray){
  for(let i =0;i<cardArray.length;i++){
   cardArray[i].id+=i;
   
  }
   
}

function renderCards(cardArray) {
    cardArray.forEach(function(element) {
        const cardHTML = `<a href="#" class="card-item-link">
                            <div class="card-item">
                                <p class="card-title">${element.title}</p>
                                <img src="./src/images/imgCards/${element.img}" alt="" class="card-img">
                                <p class="try">${element.nal}</p>
                                <p class="object">${element.object}</p>
                                <button class="card-btn-buy">в корзину</button>
                                <p class="card-price">${element.price} руб.</p>
                                
                            </div>
                            </a>
                        `;
   
        
    cardContainer.insertAdjacentHTML('beforeend',cardHTML);
    });
    
     const cards = document.querySelectorAll(".card-item");
     for (let i = 0; i < cards.length; i++) {
      // console.log(cardArray[i].imgInfo[2]);  выбор картинки из списка
       cards[i].addEventListener("click", (el) => {
         el.stopPropagation();
        const ganresHTML = `
        <p class="detal-item-g">${cardArray[i].ganres}</p>
    `
         
         const pageHTML = `
         <div class="infoPage__header">
         <h2 class="ingoPage__header-title">${cardArray[i].title}</h2>
         <p class="infoPage__rating">Оценки игроков Steam: <span class="infoPage-rate">${cardArray[i].rating}</span></p>
         <div class="infoPage_wrapper wrapper non-wrapper">
             <div class="info-wrapper-img"><img  class="info-wrapper-imgImhg" src="./src/images/imgCards/${cardArray[i].img}" alt=""></div>
             <div class="info-wrapper-description">
                 <div class="info-desc">
                     <div class="info-mainInfo">
                         <p class="info">Регион: ${cardArray[i].country}</p>
                         <p class="info">Язык: ${cardArray[i].languages}р)</p>
                         <p class="info">Наличие: ${cardArray[i].nal}</p>    
                     </div>
                     <div class="info-description">
                         ${cardArray[i].smallDescr}... <button data-link="descript-info" class="moreDescriptBnt"><img class="moooreDescriptBtn" src="./src/images/servicesImages/arrowDown.png" alt=""></button>
                     </div>
                     
                 </div>
                
                 <div class="info-price">
                     <div class="info-price-group">
                         <p class="priceSteam proceCount">${cardArray[i].price} рублей</p>
                         <p class="priceMy proceCount">${cardArray[i].myPrice} рублей</p>
                     </div>
                     <div class="inf0-price-group">
                         <button class="card-btn-buy">в корзину</button>
                     </div>
                     <div class="info-price-group">
                         <p class="info-price-grpoup-activation">Активация: ${cardArray[i].activation}</p>
                         <p class="info-price-grpoup-activation">Мгновенная доставка</p>
                     </div>
                     
                 </div>
 
             </div>
         </div>
        </div>
 
        <div class="infoCardPage-slider">
             <img src="./src/images/profGame/dontStarveTogether/dontStarve2.jpg" alt="" class="info-slider-img">
             <img src="./src/images/profGame/dontStarveTogether/dontStarve3.jpg" alt="" class="info-slider-img">
             <img src="./src/images/profGame/dontStarveTogether/dotnStarve4.jpeg" alt="" class="info-slider-img">
             <img src="./src/images/profGame/dontStarveTogether/dontStarve5.jpg" alt="" class="info-slider-img">
             <img src="./src/images/profGame/dontStarveTogether/dontStarve6.jpg" alt="" class="info-slider-img">
             <img src="./src/images/profGame/dontStarveTogether/dontStarv7.jpg" alt="" class="info-slider-img">
        </div>
        <div class="infoCardPage__main">
             
             <div class="infoMainAbout wrapper non-wrapper">
                 <div class="infoMainAbout-item">
                     <div class="infoMainAbout__descriptions">
                         <h3 class="infoMain__title" id="descript-info">Описание</h3>
                         <p class="infoMain__description">${cardArray[i].description}</p>
                     </div>
                     <div class="infoMainAbout__activation">
                         <h3 class="infoMain__title">Активация игры</h3>
                         <ol class="activation-list">
                             <li class="activation-item">Получите оплаченные товары на почте,которую укзали при оплате заказа</li>
                             <li class="activation-item">Если не установлен Steam клиент, скачайте его для Windows (клиент также доступен на Mac и Linux) и установите.</li>
                             <li class="activation-item">Запустите Steam, зайдите в свой аккаунт или зарегистрируйте новый, если у вас его еще нет.</li>
                             <li class="activation-item">Войдите в меню «Игры» и выберите пункт «Активировать через Steam».</li>
                             <li class="activation-item">Примите соглашение подписчика Steam.</li>
                             <li class="activation-item">Введите ключ активации.</li>
                             <li class="activation-item">После активации вам будет предложено скачать игру Don't Starve Together.</li>
                         </ol>
                         <p class="activation-info">Ключ можно активировать через браузер.</p>
                     </div>
                     <div class="infoMainAbout__requirements">
                         <h3 class="infoMain__title">Минимальные системные требования игры</h3>
                         <p class="req-title">Windows</p>
                         <div class="req-group">
                             <div class="req-group-left">
                                 <p class="req-item">Система:</p>
                                 <p class="req-item">Процессор:</p>
                                 <p class="req-item">Память:</p>
                                 <p class="req-item">Графика:</p>
                                 <p class="req-item">DirectX®:</p>
                                 <p class="req-item">Размер на диске:</p>
                             </div>
                             <div class="req-group-right">
                                 <p class="req-item">${cardArray[i].OS}</p>
                                 <p class="req-item">${cardArray[i].processor}</p>
                                 <p class="req-item">${cardArray[i].OZU}</p>
                                 <p class="req-item">${cardArray[i].grafica}</p>
                                 <p class="req-item">${cardArray[i].directx}</p>
                                 <p class="req-item">${cardArray[i].memory}</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="infoMainAbout-item">
                     <div class="infoMainAbout__detals">
                         <h3 class="infoMain__title">Детали игры</h3>
                         <div class="info-detals-group">
                             <div class="info-detals-item">
                                 <div class="detal-item-title">Жанр:</div>
                                 <div class="detal-item">
                                  
                                 </div>
                             </div>   
                             <div class="info-detals-item">
                                 <div class="detal-item-title">Работает на:</div>
                                 <div class="detal-item">
                                     <p class="detal-item-w">Windows</p>
                                     <p class="detal-item-w">Mac</p>
                                     <p class="detal-item-w">SteamOS + Linux</p>
                                 </div>
                             </div>   
                             <div class="info-detals-item">
                                 <div class="detal-item-title">Дата выхода:</div>
                                 <div class="detal-item">
                                     <p class="detal-item-d item-all">${cardArray[i].release}</p>
                                 </div>
                             </div>   
                             <div class="info-detals-item">
                                 <div class="detal-item-title">Издатель</div>
                                 <div class="detal-item">
                                     <p class="detal-item-i">${cardArray[i].developer}</p>
                                 </div>
                             </div>   
                             <div class="info-detals-item">
                                 <div class="detal-item-title">Метки:</div>
                                 <div class="detal-item">
                                     <p class="detal-item-m">Выживание</p>
                                     <p class="detal-item-m">Для нескольких игроков</p>
                                     <p class="detal-item-m">Кооператив</p>
                                     <p class="detal-item-m">Открытый мир</p>
                                 </div>
                             </div>   
                             <div class="info-detals-item">
                                 <div class="detal-item-title">Колличество игроков:</div>
                                 <div class="detal-item">
                                     <p class="detal-item-p">Для одного игрока</p>
                                     <p class="detal-item-p">Кроссплатформенная игра</p>
                                 </div>
                             </div>   
                             <div class="info-detals-item">
                                 <div class="detal-item-title">Особенности:</div>
                                 <div class="detal-item">
                                     <p class="detal-item-o">Конроллер</p>
                                 </div>
                             </div>   
                         </div>
                     </div>
                 </div>
                 
             </div>
        </div>
          `
          infoCardPage.insertAdjacentHTML('beforeend',pageHTML);
          
        
         renderInfoCardPage(cardArray);
         scrollBtns();
       });
     }


     
}

function renderInfoCardPage(cardArray){
  cardsAll.classList.add("none");
  infoCardPage.classList.remove("none");
}

async function scrollBtns(){
    

  let moreDesc = document.querySelector(".moreDescriptBnt");
  
  
    moreDesc.onclick=function(){
      document.getElementById(moreDesc.getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }
    
}