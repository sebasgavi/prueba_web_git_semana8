window.addEventListener('load', function(){
    /*var hola = document.querySelector('.hola');
    console.log(hola);

    setTimeout(function(){
        hola.className = 'hola azul';
        console.log(hola.className)
    }, 1000);

    hola.className += ' grande';*/

    var elementos = document.querySelectorAll('.elementolista');
    elementos.forEach(function(elem){
            elem.addEventListener('click', function(){
                elementos.forEach(function(elem2){
                    //elem2.className = elem2.className.replace('activo', '');
                    //elem2.classList.remove('activo');
                    //console.log(this);
                });
                document.querySelector('.elementolista.activo')
                    .classList.remove('activo');

                //elem.className += ' activo';
                elem.classList.add('activo');

                debugger;

                var num = 10;
                debugger;
                var num2 = 100;

                num += 1000;

                console.log(this);
                debugger;

                window.setTimeout(function(){
                    console.log(this);
                }, 1000);

                window.setTimeout(() => {
                    console.log(this);
                }, 2000);
            });
        });

    
    const algo = 100;
    
    //console.log(algo);
    elementos.forEach(function(elem){
        var algo = 10;
        //console.log(algo);
        //console.log(i);
        for(let i = 0; i < 10; i++){
            console.log(i);
        }

        if(true){
            let 
        }
        //console.log(i);
        //console.log(i+40);

    });
    //console.log(algo);
});

