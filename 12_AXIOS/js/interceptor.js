// requisição 
postsFetch.inreceptors.requests.use(
    function(config){
        console.log("antes da requisição");
        return config;
    },
    function (error){
        return Promise.reject(error)
    }
);

//resposta

postsFetch.inreceptors.response.use(
    function(response){
        console.log("antes da requisição");
        return response;
    },
    function (error){
        return Promise.reject(error)
    }
);