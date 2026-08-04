// this will hold all the HTML for every product
let productsHTML = '';

// go through each product and build its HTML
products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <!-- this "Added" message is hidden by default, we show it for 2 seconds after clicking -->
    <div class="added-to-cart js-added-to-cart-${product.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id = "${product.id}">
      Add to Cart
    </button>
  </div>
  `;
});

// now actually put all that HTML on the page
document.querySelector('.js-products-grid').
  innerHTML = productsHTML;

// go through every "Add to Cart" button and give it a click action
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {

    // this will remember the timer for THIS specific button
    let timerId;

    button.addEventListener('click', () => {
      // get the id of the product this button belongs to
      const { productId } = button.dataset;

      // read how many the user picked from the dropdown
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)
      const quantity = Number(quantitySelector.value);


      // check if this product is already in the cart
      let matchingItem;
      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item
        }
      })

      // if it's already there, just add to its quantity
      // if not, add it as a new item
      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId,
          quantity
        })
      }

      // add up all the quantities in the cart
      let cartQuantity = 0
      cart.forEach((item) => {
        cartQuantity += item.quantity
      })

      // show the total on the page
      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity

      // show the "Added" message for this product
      const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`)
      addedMessage.classList.add("added-to-cart-visible")

      // if we already have a timer running, cancel it first
      // (so clicking fast doesn't mess up the timing)
      if (timerId) {
        clearTimeout(timerId)
      }

      // hide the "Added" message again after 2 seconds
      timerId = setTimeout(() => addedMessage.classList.remove("added-to-cart-visible"), 2000)
    });
  });