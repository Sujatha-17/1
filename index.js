document.addEventListener("DOMContentLoaded", function() {
  const lostItems = [
  ];

  const foundItems = [
  ];

  const items = JSON.parse(localStorage.getItem('items')) || [];

  items.forEach(item => {
    if (item.itemType === 'lost') {
      lostItems.push({
        itemName: item.itemName,
        dateAdded: item.dateAdded,
        dateLost: item.dateLostFound,
        name: item.name
      });
    } else {
      foundItems.push({
        itemName: item.itemName,
        dateAdded: item.dateAdded,
        dateFound: item.dateLostFound,
        name: item.name
      });
    }
  });

  const lostItemsContainer = document.getElementById('lostItems');
  const foundItemsContainer = document.getElementById('foundItems');

  const lostCount = document.getElementById('lostCount');
  const foundCount = document.getElementById('foundCount');

  lostCount.textContent = lostItems.length;
  foundCount.textContent = foundItems.length;

  lostItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-body d-flex justify-content-between">
        <div class="leftdiv d-flex flex-column justify-content-around">
          <h5 class="card-title">Item Name: ${item.itemName}</h5>
          <p class="card-text">Date Added: ${item.dateAdded} | Date Lost: ${item.dateLost}</p>
        </div>
        <div class="rightdiv d-flex flex-column justify-content-around">
          <p class="card-text">Name: ${item.name}</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>
    `;

    lostItemsContainer.appendChild(card);
  });

  foundItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-body d-flex justify-content-between">
        <div class="leftdiv d-flex flex-column justify-content-around">
          <h5 class="card-title">Item Name: ${item.itemName}</h5>
          <p class="card-text">Date Added: ${item.dateAdded} | Date Found: ${item.dateFound}</p>
        </div>
        <div class="rightdiv d-flex flex-column justify-content-around">
          <p class="card-text">Name: ${item.name}</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>
    `;

    foundItemsContainer.appendChild(card);
  });

  
});
