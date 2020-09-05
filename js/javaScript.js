var dias;
var valorResultado = 0;
var contador = 1;
var potencia = 1;
var lock = false;

//COLETA DE DADOS
var calcularProjecao = [24288572, 24563380, 24776988, 25051178, 25334339, 25584820, 25835301];

function funcaoProjecao() {
    if(dias < 0){
        alert("Essa opcao e invalida!");
        lock == true;
    
    }else{

        if(dias > 0){
            document.getElementById('diasEscolhidos').innerHTML = dias;
        
        }else{
            console.log("E necessario entrar com um valor para a data");

        }

        //LOGICA DE DIVISAO DOS VALORES COLETADOS
        for(let i = 0; i < calcularProjecao.length; i++){
            if(contador == 7) {
                break;
                
            }else {
                valorResultado = valorResultado + (calcularProjecao[contador] / calcularProjecao[i]);
                contador++;

            }

        }

        //OBTER MEDIA
        valorResultado = valorResultado / 6;
        console.log("O valor da curva de crescimento e: "+ valorResultado);

        //LOGICA DE POTENCIA
        for(let i = 0; i < dias; i++){
            potencia = potencia * valorResultado;

        }

        //VERIFICAR A QUANTIDADE DE INFTADOS ATE O MOMENTO
        potencia = potencia * calcularProjecao[0];
            
        //INSERIR CALCULO
        if(potencia == calcularProjecao[0]){
            console.log("E necessario entrar com um valor para a data");

        }else{
            inserirValor();

        }

        //RESETAR CONTADORES
        valorResultado = 0;
        contador = 1;
        potencia = 1;

    }

}

//INSERIR VALORES CALCULADOS
function inserirValor() {
    var criarNovoItem = document.createElement("P");
    criarNovoItem.innerText = potencia.toLocaleString(); /*EDICAO DE VALORES*/
    document.body.appendChild(criarNovoItem);

}

//ADICIONANDO UM NOVO VALOR A VARIAVEL DIAS
function add(){
    var quantidade = parseInt(document.getElementById('numero').value);
    dias = quantidade;
    
    console.log("Quantidade: "+quantidade);
    console.log("Dias: "+dias);

    funcaoProjecao();

}

//ARMAZENANDO VALORES NO ARRAY CAPITURADOS DO .JSON
window.addEventListener('load', function(){
    fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response){
            //console.log(response.OWID_WRL.data)

            var armazenar = 0;

            for(let i = 0; i < response.OWID_WRL.data.length; i++){ 

                console.log(response.OWID_WRL.data[i].total_cases)
                //armazenar = armazenar + response.OWID_WRL.data[i].new_cases

                armazenar = armazenar + (response.OWID_WRL.data[i++].total_cases / response.OWID_WRL.data[i].total_cases)

            }

            console.log("Amazem e igual a: "+ armazenar)

            receberValor(armazenar)

       })
        
});

function receberValor(totalCasos){
    var calcularProjecao = 0;
    calcularProjecao = calcularProjecao + totalCasos;
    console.log("O valor recebido de aramzem foi de : "+ totalCasos)

}
