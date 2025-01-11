let bagItems;

onLoad();

function onLoad() {
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items_container');

    if(!itemsContainerElement){
        return;
    }

    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `<div class="item-container">
                <img class="item_image" src="${item.image}" alt="item-img">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company_name">
                    ${item.company}
                </div>
                <div class="item_name">
                    ${item.item_name}
                </div>
                <div class="price">
                    <span class="current_price">Rs ${item.current_price}</span>
                    <span class="origial_price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
            </div>`;
    });

    itemsContainerElement.innerHTML = innerHtml;
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag_item_count');
    if (bagItems.length > 0) {
        bagItemCountElement.innerHTML = bagItems.length;
        bagItemCountElement.style.visibility = 'visible';
    }
    else
        bagItemCountElement.style.visibility = 'hidden';
}