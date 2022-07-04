const products = [
    {id: '01', name: 'Servicio 1', description: 'Descripción 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry', img: 'https://picsum.photos/300', stock: 10, price: '123', fullDescription: 'Full description 1 - Full description 1 - Full description 1 - Full description 1 - Full description 1', thumbnail_1: 'https://picsum.photos/205', thumbnail_2: 'https://picsum.photos/206'},
    {id: '02', name: 'Servicio 2', description: 'Descripción 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum Industry', img: 'https://picsum.photos/301', stock: 20, price: '234', fullDescription: 'Full description 2 - Full description 2 - Full description 2 - Full description 2 - Full description 2', thumbnail_1: 'https://picsum.photos/210', thumbnail_2: 'https://picsum.photos/207'},
    {id: '03', name: 'Servicio 3', description: 'Descripción 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been', img: 'https://picsum.photos/302', stock: 30, price: '345', fullDescription: 'Full description 3 - Full description 3 - Full description 3 - Full description 3 - Full description 3', thumbnail_1: 'https://picsum.photos/209', thumbnail_2: 'https://picsum.photos/208'},
    {id: '04', name: 'Servicio 4', description: 'Descripción 4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', img: 'https://picsum.photos/303', stock: 40, price: '33', fullDescription: 'Full description 4 - Full description 4 - Full description 4 - Full description 4 - Full description 4', thumbnail_1: 'https://picsum.photos/211', thumbnail_2: 'https://picsum.photos/300'},
    {id: '05', name: 'Servicio 5', description: 'Descripción 5 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ', img: 'https://picsum.photos/304', stock: 50, price: '61', fullDescription: 'Full description 5 - Full description 5 - Full description 5 - Full description 5 - Full description 5', thumbnail_1: 'https://picsum.photos/212', thumbnail_2: 'https://picsum.photos/214'},
    {id: '06', name: 'Servicio 6', description: 'Descripción 6 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/305', stock: 60, price: '200', fullDescription: 'Full description 6 - Full description 6 - Full description 6 - Full description 6 - Full description 6', thumbnail_1: 'https://picsum.photos/213', thumbnail_2: 'https://picsum.photos/215'}
]

export const getInfo = new Promise((resolve,reject) => {
    let flag = true;
    setTimeout(()=>{
        if (flag){
            console.log("Promise resolved correctly!");
            resolve(products);
        }else{
            reject("Promise REJECTED");
        }
    },3000);
});

export const getItem = function(id){
    return new Promise((resolve,reject) => {
    let flag = true;
    setTimeout(()=>{
        if (flag){
            console.log("Promise resolved correctly!");
            resolve(products.find(item => item.id === id));
        }else{
            reject("Promise REJECTED");
        }
    },2000);
});
}