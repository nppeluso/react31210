const products = [
    {id: '01', name: 'Servicio 1', description: 'Descripicion 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/300', stock: 10},
    {id: '02', name: 'Servicio 2', description: 'Descripicion 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/301', stock: 20},
    {id: '03', name: 'Servicio 3', description: 'Descripicion 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/302', stock: 30},
    {id: '04', name: 'Servicio 4', description: 'Descripicion 4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/303', stock: 40},
    {id: '05', name: 'Servicio 5', description: 'Descripicion 5 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/304', stock: 50},
    {id: '06', name: 'Servicio 6', description: 'Descripicion 6 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', img: 'https://picsum.photos/305', stock: 60}
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

export const getItem = new Promise((resolve,reject) => {
    let flag = true;
    setTimeout(()=>{
        if (flag){
            console.log("Promise resolved correctly!");
            resolve(products.filter(item => item.name === 'Servicio 2'));
        }else{
            reject("Promise REJECTED");
        }
    },2000);
});