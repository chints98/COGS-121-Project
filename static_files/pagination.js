$('#page_1').click( () => {
    if (toggle_US==false) {
        filters = 'filter[operator]=OR&filter[conditions][0][field]=country&filter[conditions][0][value]=USA&filter[conditions][0][negate]=true&filter[conditions][1][field]=body&profile=full&limit=3' 
    }
    else {
        filters = 'filter[operator]=AND&filter[conditions][0][field]=country&filter[conditions][0][value]=USA&filter[conditions][1][field]=body&profile=full&limit=3'
    }
    $.ajax({    
        url: 'https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=wildfire&' + filters,    
        type: 'GET',
        dataType: 'json',
        success: (res) => {
            console.log(res);
            articles = res;
            $('.article-header').each((index,element) => {
                console.log('U.S. clicked!');
                element.innerHTML = res.data[index].fields.title
                document.getElementById(("news1Text")).innerHTML ="";
                document.getElementById(("news2Text")).innerHTML ="";
                document.getElementById(("news3Text")).innerHTML ="";

            });
            $('.article-body').each((index,element) => {
            element.innerHTML =
                res.data[index].fields.body.split(' ').slice(0,30).join(' ') + '...';
        });

        }



    });

});


$('#page_2').click( () => {
    if (toggle_US==false) {
        filters = 'filter[operator]=OR&filter[conditions][0][field]=country&filter[conditions][0][value]=USA&filter[conditions][0][negate]=true&filter[conditions][1][field]=body&profile=full&limit=3' 
    }
    else {
        filters = 'filter[operator]=AND&filter[conditions][0][field]=country&filter[conditions][0][value]=USA&filter[conditions][1][field]=body&profile=full&limit=3'
    }
    $.ajax({    
        url: 'https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=crime&' + filters,    
        type: 'GET',
        dataType: 'json',
        success: (res) => {
            console.log(res);
            articles = res;
            $('.article-header').each((index,element) => {
                console.log('U.S. clicked!');
                element.innerHTML = res.data[index].fields.title
                document.getElementById(("news1Text")).innerHTML ="";
                document.getElementById(("news2Text")).innerHTML ="";
                document.getElementById(("news3Text")).innerHTML ="";

            });
            $('.article-body').each((index,element) => {
            element.innerHTML =
                res.data[index].fields.body.split(' ').slice(0,30).join(' ') + '...';
        });

        }



    });

});



$('#page_3').click( () => {
    if (toggle_US==false) {
        filters = 'filter[operator]=OR&filter[conditions][0][field]=country&filter[conditions][0][value]=USA&filter[conditions][0][negate]=true&filter[conditions][1][field]=body&profile=full&limit=3' 
    }
    else {
        filters = 'filter[operator]=AND&filter[conditions][0][field]=country&filter[conditions][0][value]=USA&filter[conditions][1][field]=body&profile=full&limit=3'
    }
    $.ajax({    
        url: 'https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=flood&' + filters,    
        type: 'GET',
        dataType: 'json',
        success: (res) => {
            console.log(res);
            articles = res;
            $('.article-header').each((index,element) => {
                console.log('U.S. clicked!');
                element.innerHTML = res.data[index].fields.title
                document.getElementById(("news1Text")).innerHTML ="";
                document.getElementById(("news2Text")).innerHTML ="";
                document.getElementById(("news3Text")).innerHTML ="";

            });
            $('.article-body').each((index,element) => {
            element.innerHTML =
                res.data[index].fields.body.split(' ').slice(0,30).join(' ') + '...';
        });

        }



    });

});


$('#page_4').click( () => {
    if (toggle_US==false) {
        filters = 'filter[operator]=OR&filter[conditions][0][field]=country&filter[conditions][0][value]=USA&filter[conditions][0][negate]=true&filter[conditions][1][field]=body&profile=full&limit=3' 
    }
    else {
        filters = 'filter[operator]=AND&filter[conditions][0][field]=country&filter[conditions][0][value]=USA&filter[conditions][1][field]=body&profile=full&limit=3'
    }
    $.ajax({    
        url: 'https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=earthquake&' + filters,    
        type: 'GET',
        dataType: 'json',
        success: (res) => {
            console.log(res);
            articles = res;
            $('.article-header').each((index,element) => {
                console.log('U.S. clicked!');
                element.innerHTML = res.data[index].fields.title
                document.getElementById(("news1Text")).innerHTML ="";
                document.getElementById(("news2Text")).innerHTML ="";
                document.getElementById(("news3Text")).innerHTML ="";

            });
            $('.article-body').each((index,element) => {
            element.innerHTML =
                res.data[index].fields.body.split(' ').slice(0,30).join(' ') + '...';
        });

        }



    });

});