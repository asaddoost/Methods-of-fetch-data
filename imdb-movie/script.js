const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01ebb6447dmsh462316df4d0a40cp18f72bjsn35133ecf95f7',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(data =>{
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}" <h2>${name}<h2/><li/>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
	.catch(err => console.error(err));