var dias;
var valorResultado = 0;
var contador = 1;
var potencia = 1;
var armazenar = 0;

//CONTADOR DE DIVISOR DO ARRAY .json
let cont = 0;

//CONTADORES DE ATRIBUICAO AO ARRAY 'calcularProjetcao'
let valorCalcular = 0;
let valorRequisicao = 243;

//COLETA DE DADOS
var calcularProjecao = [];

function funcaoProjecao() {
    console.log("Valores atribuidos ao array")
    for(let i = 0; i < calcularProjecao.length; i++){
        console.log("Array calcularProjecao, posicao "+ i +" = "+ calcularProjecao[i]);

    }

    if(dias <= 0){
        console.log("Opcao e invalida, digite um numero mais que 0!");
        document.getElementById('diasEscolhidos').innerHTML = `${dias} e uma opcao e invalida!`;
    
    }else{
        document.getElementById('diasEscolhidos').innerHTML = `${dias} dia(s)`;

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
        valorResultado = valorResultado / (calcularProjecao.length - 1);
        console.log("O valor da curva de crescimento e: "+ valorResultado);

        //LOGICA DE POTENCIA (UTILIZANDO OS DIAS COMO PARAMETRO DE QUANTIDADE PARA A POTENCIA)
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
    try {
        fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
        .then(function (response) {
            console.log(response)
            return response.json()

        })
        .then(function (response){
            for(var i = 0; i < response.OWID_WRL.data.length; i++){ 
                
                console.log("Posicao "+ i)
                console.log(response.OWID_WRL.data[i].total_cases)

                
                armazenar = armazenar + (response.OWID_WRL.data[(cont+1)].total_cases / response.OWID_WRL.data[i].total_cases)
                console.log("O resultado: "+ armazenar) 

                //AMARMAZENAR VALORES COLETADOS DENTRO DO ARRAY 'calcularProjecao'
                if(i >= 243){
                    
                    calcularProjecao[valorCalcular] = response.OWID_WRL.data[valorRequisicao].total_cases;
                    
                    valorCalcular++;
                    valorRequisicao++;

                    console.log("Valor atribuido ao array CalcularProjecao")

                }else{
                    console.log("Valor invalido")
            
                }

            }

       })
            
    } catch (error) {
        console.log("Nao foi localizada a requisicao no servidor, tente novamente"+ error);
        
    }
        
});
