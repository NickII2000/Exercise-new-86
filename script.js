'use strict';

console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000,
        };

        resolve();
    }, 2000);
});

req.then(() => {
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
});