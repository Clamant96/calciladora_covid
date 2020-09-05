var dias;
var valorResultado = 0;
var contador = 1;
var potencia = 1;
var armazenar = 0;
var lock = false;

//COLETA DE DADOS
var calcularProjecao = [];

function funcaoProjecao() {
    console.log("Valores atribuidos ao array")
    for(let i = 0; i < 6; i++){
        console.log("Array calcularProjecao, posicao "+ i +" = "+ calcularProjecao[i]);

    }

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

        //LOGICA DE POTENCIA (UTILIZANDO OS DIAS COMO PARAMETRO DE QUANTIDADE)
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
window.addEventListener('load', function iniciar(){
    fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response){
            for(var j = 0; j < response.OWID_WRL.data.length; j++){ 
                
                console.log("Posicao "+ j)
                console.log(response.OWID_WRL.data[j].total_cases)

                let cont = 0;
                armazenar = armazenar + (response.OWID_WRL.data[(cont+1)].total_cases / response.OWID_WRL.data[j].total_cases)
                console.log("O resultado: "+ armazenar) 

                if(j >= 243){
                    /*NECESSARIO REALIZAR MELHORAMENTOS*/
                    calcularProjecao[0] = response.OWID_WRL.data[243].total_cases;
                    calcularProjecao[1] = response.OWID_WRL.data[244].total_cases;
                    calcularProjecao[2] = response.OWID_WRL.data[245].total_cases;
                    calcularProjecao[3] = response.OWID_WRL.data[246].total_cases;
                    calcularProjecao[4] = response.OWID_WRL.data[247].total_cases;
                    calcularProjecao[5] = response.OWID_WRL.data[248].total_cases;
                    calcularProjecao[6] = response.OWID_WRL.data[249].total_cases;

                    console.log("Valor atribuido ao array CalcularProjecao")

                }else{
                    console.log("Valor invalido")
            
                }

            }

       })
        
});
