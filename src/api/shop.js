/* eslint-disable no-unused-expressions */

const _products = [
  {'id': 1, 'title': 'Iphone 14 Pro', 'price': 600, 'inventory': 100},
  {'id': 2, 'title': 'MacBook Air 2017', 'price': 150.90, 'inventory': 20},
  {'id': 3, 'title': 'HP Only one', 'price': 940, 'inventory': 11},
  {'id': 4, 'title': 'Samsung', 'price': 50, 'inventory': 10}
]

export default{
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  byProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
      ? cb()
      : errorCb()
    }, 100)
  }
}
