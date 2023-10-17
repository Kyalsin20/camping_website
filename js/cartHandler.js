let addedItems = JSON.parse(localStorage.getItem('addedItems')) || []
const basketSection = document.querySelector('.cart__items')
const totalPriceSection = document.getElementById('totalPrice')
const checkoutBtn = document.getElementById('checkoutBtn')

function updateCart () {
  localStorage.setItem('addedItems', JSON.stringify(addedItems))

  if (addedItems.length === 0) {
    basketSection.innerHTML = '<p>No item added to cart yet.</p>'
    checkoutBtn.classList.add('checkout__hidden')
  } else {
    const cartHTML = addedItems
      .map(item => {
        return `<div class="cart__item">
                    <img src="${item.img}" alt="${
          item.title
        }" class="cart__item__img">
                    <div class="cart__item__detail">
                        <h3 class='detail__heading'>${item.name}</h3>
                        <p>${item.color}</p>
                        <p class="price">$${(item.count * item.price).toFixed(
                          2
                        )}</p>
                        <div class="cart__item__count">
                            <button class='count__btn' onClick="decreaseCount(${
                              item.id
                            })">-</button>
                            <span class='item__count'>${item.count}</span>
                            <button class='count__btn' onClick="increaseCount(${
                              item.id
                            })">+</button>
                        </div>
                    </div>
                </div>`
      })
      .join('')

    basketSection.innerHTML = cartHTML
  }

  // Calculate total price
  const totalPrice = addedItems.reduce(
    (total, item) => total + item.count * item.price,
    0
  )
  totalPriceSection.textContent = totalPrice.toFixed(2)
}

updateCart()

function increaseCount (itemId) {
  const item = addedItems.find(item => item.id === itemId)
  if (item) {
    item.count += 1
    // Update the count element in the UI
    const countElement = document.querySelector(
      `[data-item-id="${itemId}"] span`
    )
    if (countElement) {
      countElement.textContent = item.count
    }
  }
  updateCart()
}

function decreaseCount (itemId) {
  const item = addedItems.find(item => item.id === itemId)
  if (item && item.count > 1) {
    item.count -= 1
    // Update the count element in the UI
    const countElement = document.querySelector(
      `[data-item-id="${itemId}"] span`
    )
    if (countElement) {
      countElement.textContent = item.count
    }
  } else {
    addedItems = addedItems.filter(cartItem => cartItem.id !== itemId)
  }
  updateCart()
}

function checkout () {
  addedItems = []
  updateCart()
  setTimeout(() => {
    window.location.href = 'index.html'
  }, 1500)
}

function handleBack () {
  window.history.back()
}
