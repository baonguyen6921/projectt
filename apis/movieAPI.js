const getMovieInfo = (movieName, page = 1 ) => {

        return fetch(`https://www.omdbapi.com/?apikey=9831ec80&s=${movieName}&type=movie&page=${page}`)

            .then(response => response.json())
            .then(json => {
                return(json)
            })
            .catch(error => {
                console.error(error);
            })
    };

export default getMovieInfo;
