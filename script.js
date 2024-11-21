/*/function botao() {
    var numElement = document.getElementById("num");
    var num = Number(numElement.innerHTML);
    numElement.innerHTML = num + 1;
}

function comprar1() {
    var texto = document.getElementById('compra');
    var preco = Number(document.getElementById('b1').innerHTML);
    var numElement = document.getElementById("num");
    var num = Number(numElement.innerHTML);
    
    
    if (num >= preco) {
        numElement.innerHTML = num - preco;
        preco = preco + ((preco / 100) * 10);
        precoElement.innerHTML = preco.toFixed(2);

    }
}*/
/*var numerosPorSegundo = 0;
            function botao() {
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            numElement.innerHTML = num + 1;
        }

        function comprar1() {
            var precoElement = document.getElementById('b1');
            var preco = Number(precoElement.innerHTML);
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            if (num >= preco) {
                numElement.innerHTML = (num - preco).toFixed(2);

                preco = preco + preco //((preco / 100) * 10);
                precoElement.innerHTML = preco.toFixed(2);
                numerosPorSegundo += 1;
                document.getElementById("gerando").innerHTML = numerosPorSegundo.toFixed(2);
            }
        }

        
        function comprar2(){
            var precoElement = document.getElementById('b2');
            var preco = Number(precoElement.innerHTML);
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            if (num >= preco) {
                numElement.innerHTML = (num - preco).toFixed(2);

                preco = preco + preco //((preco / 100) * 10);
                precoElement.innerHTML = preco.toFixed(2);
                numerosPorSegundo += 10;
                document.getElementById("gerando").innerHTML = numerosPorSegundo.toFixed(2);
            }
        }
        setInterval(function() {
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            numElement.innerHTML = num + numerosPorSegundo;
        }, 50);*/




        var numerosPorSegundo = 0;

        function botao() {
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            numElement.innerHTML = (num + 1).toFixed(2);
        }

        function comprar1() {
            var precoElement = document.getElementById('b1');
            var preco = Number(precoElement.innerHTML);
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            if (num >= preco) {
                numElement.innerHTML = (num - preco).toFixed(2);

                preco = preco + preco; //((preco / 100) * 10);
                precoElement.innerHTML = preco.toFixed(2);
                numerosPorSegundo += 1;
                document.getElementById("gerando").innerHTML = numerosPorSegundo.toFixed(2);
            }
        }

        function comprar2() {
            var precoElement = document.getElementById('b2');
            var preco = Number(precoElement.innerHTML);
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            if (num >= preco) {
                numElement.innerHTML = (num - preco).toFixed(2);

                preco = preco + preco + (preco/2); //((preco / 100) * 10);
                precoElement.innerHTML = preco.toFixed(2);
                numerosPorSegundo += 100;
                document.getElementById("gerando").innerHTML = numerosPorSegundo.toFixed(2);
            }
        }

        function comprar3() {
            var precoElement = document.getElementById('b3');
            var preco = Number(precoElement.innerHTML);
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            if (num >= preco) {
                numElement.innerHTML = (num - preco).toFixed(2);

                preco = preco+preco + preco + (preco/2); //((preco / 100) * 10);
                precoElement.innerHTML = preco.toFixed(2);
                numerosPorSegundo += 10000;
                document.getElementById("gerando").innerHTML = numerosPorSegundo.toFixed(2);
            }
        }
        function comprar4() {
            var precoElement = document.getElementById('b4');
            var preco = Number(precoElement.innerHTML);
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            if (num >= preco) {
                numElement.innerHTML = (num - preco).toFixed(2);

                preco = preco + preco + preco + preco + (preco/2); //((preco / 100) * 10);
                precoElement.innerHTML = preco.toFixed(2);
                numerosPorSegundo += 1000000;
                document.getElementById("gerando").innerHTML = numerosPorSegundo.toFixed(2);
            }
        }
        function comprar5() {
            var precoElement = document.getElementById('b5');
            var preco = Number(precoElement.innerHTML);
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            if (num >= preco) {
                numElement.innerHTML = (num - preco).toFixed(2);

                preco = preco + preco + preco + preco + preco + (preco/2); //((preco / 100) * 10);
                precoElement.innerHTML = preco.toFixed(2);
                numerosPorSegundo += 100000000;
                document.getElementById("gerando").innerHTML = numerosPorSegundo.toFixed(2);
            }
        }
        function comprar6() {
            var precoElement = document.getElementById('b6');
            var preco = Number(precoElement.innerHTML);
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            if (num >= preco) {
                numElement.innerHTML = (num - preco).toFixed(2);

                preco = preco + preco + preco + preco + preco + preco + (preco/2); //((preco / 100) * 10);
                precoElement.innerHTML = preco.toFixed(2);
                numerosPorSegundo += 10000000000;
                document.getElementById("gerando").innerHTML = numerosPorSegundo.toFixed(2);
            }
        }
        setInterval(function() {
            var numElement = document.getElementById("num");
            var num = Number(numElement.innerHTML);
            numElement.innerHTML = (num + numerosPorSegundo).toFixed(2);
        }, 10); // Atualiza a cada 1 segundo
