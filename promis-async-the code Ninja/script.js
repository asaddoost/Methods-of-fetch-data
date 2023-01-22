// // console.log(1)
// // console.log(2)

// // setTimeout(() => {
// //     console.log('callback function fired')
// // },  2000)
// // console.log(3)
// // console.log(4)

// // ----------------------------------------------


// // const getTodo = () => {
// //     const request = new XMLHttpRequest();


// // request.addEventListener('readystatechange', () => {
// //     //console.log(request, request.readyState);
// //     if(request.readyState === 4 && request.status === 200) {
// //         console.log(request, request.responseText)
// //     }else if (request.readyState === 4) {
// //         console.log('could not fetch tha data')
// //     }
// // });

// // request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// //  request.send();
// // }

// // getTodo();


// // ---------------------------------------------------------

// //how to fetch a local data from json file

// fetch('./data.json')
// .then((response) => {
//     console.log('resolved',response);
//     return response.json();
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log('rejected', err)
// })

// -------------------------------------------------------------

// How to get data with async await

// const getTodos = async() => {
//     const response = await fetch('./data.json');// can be an 
    
//     if(response.status !== 200) {
//         throw new Error ('Can not fetch the data');
//     }
//     const data = await response.json();
//     return data;
// }

// console.log(1)
// console.log(2)

// getTodos()
// .then(data => console.log ('resolved', data))
// .catch(data => console.log('rejected', error.message))

// console.log(3)
// console.log(4)

// //--------------------------------------------------------

