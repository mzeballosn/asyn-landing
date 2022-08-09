import fetch from 'node-fetch';

const API = "https://api.escuelajs.co/api/v1";


function postData(urlApi, data){
    const response = fetch(urlApi,{ 
        method:'POST', 
        mode:'cors', 
        credentials:'same-origin',
        headers:{
            'Content-Type': 'application/json', 
        },
        body:JSON.stringify(data)
    });
    return response;
}

const data = {
    'title':'new Product newCourse',
    'price': 102,
    'description':'aqui va la descripción',
    'categoryId':1,
    'images':[
        'http://placeimg.com/640/480/any'
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))