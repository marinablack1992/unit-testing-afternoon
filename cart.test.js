const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties', () => {

    afterEach(function () {
        cart.cart = [];
        cart.total = 0;
    });

    test('Cart should return an empty array', () => {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    })
    test('Cart total should be zero', () => {
        expect(cart.total).toEqual(0)
    })

})

describe('Cart Methods', () => {

    afterEach(function () {
        cart.cart = [];
        cart.total = 0;
    });

    test('Cart should add car', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    })

    test('addToCart should increase the total prop', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[8])
        cart.addToCart(cars[2])

        expect(cart.total).toEqual(cars[0].price + cars[8].price + cars[2].price);
    })

    test('removeFromCart should remove car from arr', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])

        cart.removeFromCart(1, cars[1].price)

        expect(cart.cart.length).toEqual(1)
    })

    test('removeFromCart should decrease total prop', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])

        cart.removeFromCart(1, cars[1].price);

        expect(cart.total).toEqual(cars[0].price)
    })

    test('checkout should have all cars we add, and the correct total', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);

        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0)
    })

})