//Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Nike Epic React Flyknit',
    image: './img/whitej.jpg',
    category: 'Running',
    link:
      'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=Nike+Epic+React+Flyknit&rh=i%3Aaps%2Ck%3ANike+Epic+React+Flyknit',
    onSale: true,
    inStock: true,
    details: ['Flexible Knit', 'Sole Cusioned', 'Lightweight'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'DeepSkyBlue',
        variantImage: './img/blue.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'Pink',
        variantImage: './img/pink.jpg'        
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0
  },
  methods: {
    updateProduct(variantImg) {
      this.image = variantImg
    },
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
    }

  }
});
