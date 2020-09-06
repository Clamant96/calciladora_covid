# CALCULADORA COVID-19
 - Calculadora desenvolvida para estimar a quantidade total de casos de covid, ao logo dos dias. Utilizando com base de calculos, os ultimo sensos realizados, sobre os infectados pelo novo coronavirus

## COMO USAR
 - Para se utilizar essa calculadora, e necessario entrar somente com a quantidade de dias, que queria projetar para saber qual a quantidade total de casos de COVID-19 no mundo

## LOGICA
 - Para a construcao da logica desse sistema, foi realizado o seguinte estudo

    ## COLETA DE DADOS
     - Nesse passo e necessario pegar uma quantidade de dados, e dividir o segundo valor pelo primeiro, assim como o calculo abaixo
        - [x] 27/08 | 24.288.572
        - [x] 28/08 | 24.563.380 / 24.288.572 = 1,011314292169997
        - [x] 29/08 | 24.776.988 / 24.563.380 = 1,008696197347433
        - [x] 30/08 | 25.051.178 / 24.776.988 = 1,011066316858207
        - [x] 31/08 | 25.334.339 / 25.051.178 = 1,011303300786893
        - [x] 01/09 | 25.584.820 / 25.334.339 = 1,009887015406244
        - [x] 02/09 | 25.835.301 / 25.584.820 = 1,009790219356634
        - [x] Total = 6,062057341925408

    ## OBTENDO A MEDIA DE CASOS (curvatura do COVID-19)
     - Agora e necessario, obter a media total dos casos de COVID-19 mundiais. Para isso, some todos os resultados obtidos e divida pela (quantidade - 1)
     - Total Casos: 6,062057341925408 / 6 = 1,010342890320901

    ## CALCULO DE PROJECAO
     - Para se obter a projecao, se tem que pegar o valor da media de casos mundiais elevar esse valor(potencia) a quantidade de dias, que se quer projetar e multiplicar esse valor pelo valor do primeiro dia coletado, nesse caso 24.288.572
        - [x] mediaTotal = 1,010342890320901
        - [x] diasEscolhidos = ? /*nesse caso vamos utilizar 6 dias*/
        - [x] primeiroDiaColetado =  24.288.572
        - [x] projecao
        
        - projecao = (mediaTotal ^ diasEscolhidos) * primeiroDiaColetado
        - projecao = (1,010342890320901 ^ 6) * 24.288.572
        - projecao = 1,0636842736881 * 24.288.572
        - projecao = 25.835.372,07

## DADOS COVID-19
 - Como banco de dados, foi utilizado uma API, disponibilizada gratuitamente, segue link abaixo:
    - [x] (https://covid.ourworldindata.org/data/owid-covid-data.json')

## FERRAMENTA DE CONSULTA
 - Para poder acessar o arquivo .json e realizar a coleta dos dados, foi utilizado a funcao fetch, disponibilizada no JavaScript, segue codigo de coleta abaixo
    
## CODIGO FETCH
 - [x] response = Retorna a requisicao
 - [x] OWID_WRL = Acessa o elemento pricipal do array
 - [x] data[] = Failtra por meio do array data e fornece acesso a navegacao independente
 - [x] total_cases = Filtra um elemento especifico, necesse caso o (total_cases)

    fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
        .then(function (response) {
            console.log(response)
            return response.json()

        })
        .then(function (response){
            console.log(response.OWID_WRL.data[i].total_cases)

        })

## SISTEMA
 - Este projeto foi realizado com o intuito de aprendizado, tanto na utilizacao de APIs e integracao com sistemas, como na utilizacao do fetch
 - Esse codigo sofrera atualizacoes ao longo dos dias, para melhorias e correcoes