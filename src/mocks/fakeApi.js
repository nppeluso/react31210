const products = [
    { id: '01', name: 'Servicio 1', description: 'Descripción 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry', img: 'https://picsum.photos/id/659/200/300', stock: 10, price: '123', fullDescription: 'Full description 1 - Full description 1 - Full description 1 - Full description 1 - Full description 1', thumbnail_1: 'https://picsum.photos/id/237/200/300', thumbnail_2: 'https://picsum.photos/id/1025/200/300', category: 'Guarderia' },
    { id: '02', name: 'Servicio 2', description: 'Descripción 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum Industry', img: 'https://picsum.photos/id/514/200/300', stock: 20, price: '234', fullDescription: 'Full description 2 - Full description 2 - Full description 2 - Full description 2 - Full description 2', thumbnail_1: 'https://picsum.photos/id/111/200/300', thumbnail_2: 'https://picsum.photos/id/133/200/300', category: 'Adiestramiento' },
    { id: '03', name: 'Servicio 3', description: 'Descripción 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been', img: 'https://picsum.photos/id/7/200/300', stock: 30, price: '345', fullDescription: 'Full description 3 - Full description 3 - Full description 3 - Full description 3 - Full description 3', thumbnail_1: 'https://picsum.photos/id/250/200/300', thumbnail_2: 'https://picsum.photos/id/252/200/300', category: 'Juguetes' },
    { id: '04', name: 'Servicio 4', description: 'Descripción 4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', img: 'https://picsum.photos/id/83/200/300', stock: 40, price: '33', fullDescription: 'Full description 4 - Full description 4 - Full description 4 - Full description 4 - Full description 4', thumbnail_1: 'https://picsum.photos/id/867/200/300', thumbnail_2: 'https://picsum.photos/id/879/200/300', category: 'Accesorios' },
    { id: '05', name: 'Servicio 5', description: 'Descripción 5 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ', img: 'https://picsum.photos/id/816/200/300', stock: 50, price: '61', fullDescription: 'Full description 5 - Full description 5 - Full description 5 - Full description 5 - Full description 5', thumbnail_1: 'https://picsum.photos/id/26/200/300', thumbnail_2: 'https://picsum.photos/id/3/200/300', category: 'Juguetes' },
    { id: '06', name: 'Servicio 6', description: 'Descripción 6 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/id/82/200/300', stock: 60, price: '200', fullDescription: 'Full description 6 - Full description 6 - Full description 6 - Full description 6 - Full description 6', thumbnail_1: 'https://picsum.photos/id/339/200/300', thumbnail_2: 'https://picsum.photos/id/340/200/300', category: 'Accesorios' },
    { id: '07', name: 'Servicio 7', description: 'Descripción 7 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/id/82/200/300', stock: 50, price: '100', fullDescription: 'Full description 7 - Full description 7 - Full description 7 - Full description 7 - Full description 7', thumbnail_1: 'https://picsum.photos/id/339/200/300', thumbnail_2: 'https://picsum.photos/id/340/200/300', category: 'Accesorios' },
    { id: '08', name: 'Servicio 8', description: 'Descripción 8 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/id/82/200/300', stock: 18, price: '320', fullDescription: 'Full description 8 - Full description 8 - Full description 8 - Full description 8 - Full description 8', thumbnail_1: 'https://picsum.photos/id/339/200/300', thumbnail_2: 'https://picsum.photos/id/340/200/300', category: 'Accesorios' },
    { id: '09', name: 'Servicio 9', description: 'Descripción 9 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/id/82/200/300', stock: 25, price: '210', fullDescription: 'Full description 9 - Full description 9 - Full description 9 - Full description 9 - Full description 9', thumbnail_1: 'https://picsum.photos/id/339/200/300', thumbnail_2: 'https://picsum.photos/id/340/200/300', category: 'Accesorios' },
    { id: '10', name: 'Servicio 10', description: 'Descripción 10 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/id/82/200/300', stock: 16, price: '30', fullDescription: 'Full description 10 - Full description 10 - Full description 10 - Full description 10 - Full description 10', thumbnail_1: 'https://picsum.photos/id/339/200/300', thumbnail_2: 'https://picsum.photos/id/340/200/300', category: 'Accesorios' },
    { id: '11', name: 'Servicio 11', description: 'Descripción 11 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/id/82/200/300', stock: 8, price: '120', fullDescription: 'Full description 11 - Full description 11 - Full description 11 - Full description 11 - Full description 11', thumbnail_1: 'https://picsum.photos/id/339/200/300', thumbnail_2: 'https://picsum.photos/id/340/200/300', category: 'Accesorios' },
    { id: '12', name: 'Servicio 12', description: 'Descripción 12 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/id/82/200/300', stock: 5, price: '30', fullDescription: 'Full description 12 - Full description 12 - Full description 12 - Full description 12 - Full description 12', thumbnail_1: 'https://picsum.photos/id/339/200/300', thumbnail_2: 'https://picsum.photos/id/340/200/300', category: 'Accesorios' }



]

export const getInfo = (categoryId) => {
    return new Promise((resolve, reject) => {
        let flag = true;
        setTimeout(() => {
            if (flag) {
                console.log("Promise resolved correctly!");
                categoryId ? resolve(products.filter(item => item.category === categoryId))
                : resolve(products);
            } else {
                reject("Promise REJECTED");
            }
        }, 3000);
    });
}

export const getItem = (id) => {
    return new Promise((resolve, reject) => {
        let flag = true;
        setTimeout(() => {
            if (flag) {
                console.log("Promise resolved correctly!");
                resolve(products.find(item => item.id === id));
            } else {
                reject("Promise REJECTED");
            }
        }, 2000);
    });
}