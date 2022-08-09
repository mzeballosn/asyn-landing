import fetch from 'node-fetch'; // instalar npm i node-fetch

const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI){
    return fetch(urlAPI); //fetch es una promesa
}
/*
fetchData(`${API}/products`)
        .then(response => response.json())
        .then(products => {
            console.log(products);
        }).then(() => {
            console.log('hola');
        }).catch(error => console.log(error));
        */

fetchData(`${API}/products`)
        .then(response => response.json())
        .then(products => {            
            return fetch(`${API}/products/${products[0].id}`)
        })
        .then(response => response.json())
        .then(products=>{
            console.log(products.title)
            return fetch(`${API}/categories/${products.category.id}`)
        })
        .then(response => response.json())
        .then(category => {            
            console.log(category.name);
        }).catch(error => console.log(error))
        .finally(console.log('Finally'));