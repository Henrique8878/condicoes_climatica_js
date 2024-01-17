const Api_Key = "dfe522c0a60ec275f6ce86b57d21c08a"

let cidades_globais_40 = [
    'Nova York', 'Londres', 'Tóquio', 'Paris', 'Hong Kong', 'Cingapura', 'Los Angeles', 'Chicago', 'Pequim', 'Xangai',
    'Dubai', 'São Paulo', 'Mumbai', 'Sydney', 'Toronto', 'Berlim', 'Roma', 'Cidade do México', 'Istambul', 'Moscou',
    'Bangkok', 'Cairo', 'Johannesburgo', 'Munique', 'Barcelona', 'Rio de Janeiro', 'Munique', 'Seul', 'Cidade do Cabo',
    'Viena', 'Buenos Aires', 'Nova Deli', 'San Francisco', 'Miami', 'Lisboa', 'Tel Aviv', 'Cidade de Ho Chi Minh', 'Praga', 'Casablanca'
]

const cidades = [
    'New York', 'London', 'Tokyo', 'Paris', 'Hong Kong', 'Singapore', 'Los Angeles', 'Chicago', 'Beijing', 'Shanghai',
    'Dubai', 'São Paulo', 'Mumbai', 'Sydney', 'Toronto', 'Berlin', 'Rome', 'Mexico City', 'Istanbul', 'Moscow',
    'Bangkok', 'Cairo', 'Johannesburg', 'Munich', 'Barcelona', 'Rio de Janeiro', 'Munich', 'Seoul', 'Cape Town',
    'Vienna', 'Buenos Aires', 'New Delhi', 'San Francisco', 'Miami', 'Lisbon', 'Tel Aviv', 'Ho Chi Minh City', 'Prague', 'Casablanca'
  ];
  


let btn_pesquisar = document.getElementById("btn_pesquisar")
let nome_cidade = document.querySelector(".nome_cidade")
let temperatura = document.getElementById("temperatura")
let nome_umidade = document.getElementById("nome_umidade")
let nome_vento = document.getElementById("nome_vento")
let imagem = document.getElementById("imagem")
let icone_clima = document.getElementById("icone_clima")
let nome = document.getElementById("nome")
let body = document.getElementById("bodyy")
let btn_lista = document.getElementById("btn_lista")
let div_lista = document.getElementById("p_lista")
let div_maior_lista = document.getElementById("div_lista")
let btn_acima = document.getElementById("btn_acima")
let div_informacoes = document.getElementById("informacoes")
let i_umidade = document.getElementById("i_umidade")
let i_vento = document.getElementById("i_vento")
let localization = document.getElementById("localization")
let celsius = 0;
let vento = 0;

const nome_inp = prompt("Digite seu nome:");

// Verificar se o usuário clicou em "Cancelar" ou não digitou nada
if (nome_inp === null || nome_inp === "") {
  alert("Você não digitou um nome.");
}



let dados_json = []
btn_pesquisar.setAttribute("disabled","true")

function kelvin_celsius(valor){
    celsius = valor - 273;
}

function m_s_km_h(valor){
    vento = valor *3.6;
    
}

btn_lista.setAttribute("disabled","true")

document.addEventListener("DOMContentLoaded",()=>{
    alert(`Olá ${nome_inp}, meu nome é Henrique! Desenvolvi esse programa, para que seja possível a pesquisa das condições climáticas de algumas cidades, espero que goste.`)
})

async function getApi(){
    
    try {
        for(let i = 0;i<cidades_globais_40.length;i++){
            let URl = `https://api.openweathermap.org/data/2.5/weather?q=${cidades_globais_40[i]}&appid=${Api_Key}`
            let dados_api = await fetch(URl)
            dados_json.push(await dados_api.json())
            
        }

        btn_pesquisar.removeAttribute("disabled")
        btn_lista.removeAttribute("disabled")
    } catch (error) {
        console.error(`Deu Erro: ${error}`)
    }                 
}

getApi()


btn_acima.addEventListener("click",()=>{
    btn_lista.removeAttribute("disabled")
    div_maior_lista.style.visibility = "hidden"
    div_lista.innerHTML = ""
    btn_acima.style.visibility = "hidden"
})

btn_lista.addEventListener("click",()=>{

    for(let i = 0;i<cidades.length;i++){
       div_lista.innerHTML += ` ${cidades[i]} | `
       btn_lista.setAttribute("disabled","true")
       div_maior_lista.style.visibility = "visible"
       btn_acima.style.visibility = "visible"
    }
    
})

btn_pesquisar.addEventListener("click",(e)=>{
    e.preventDefault()
    
    let inp_pesquisar = document.querySelector("#inp_pesquisar").value
    
   for(let i = 0;i<dados_json.length;i++){
        console.log(dados_json[i].name)
        if((dados_json[i].name).toLowerCase()==inp_pesquisar.toLowerCase()){

            i_umidade.setAttribute("class","fa-solid fa-droplet")
            i_vento.setAttribute("class","fa-solid fa-wind")
            localization.setAttribute("class","fa-solid fa-location-dot")
            

            //mudar bandeira do país
            if((dados_json[i].name).toLowerCase()== "new york" || (dados_json[i].name).toLowerCase() == "miami" || (dados_json[i].name).toLowerCase() == "los angeles" || (dados_json[i].name).toLowerCase() == "chicago" || (dados_json[i].name).toLowerCase()== "san francisco"){
                imagem.src = "eua.png"
                }else if((dados_json[i].name).toLowerCase()== "casablanca"){
                    imagem.src = "marrocos.png"
                    body.style.backgroundImage = "url(fundo_casablanca.jpg)"

                }else if((dados_json[i].name).toLowerCase()== "london"){
                    imagem.src = "reino unido.png"
                    body.style.backgroundImage = "url(fundo_londres.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "toronto"){
                    imagem.src = "canada.png"
                    body.style.backgroundImage = "url(fundo_toronto.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "rome"){
                    imagem.src = "italia.png"
                    body.style.backgroundImage = "url(fundo_roma.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "são paulo"){
                    imagem.src = "Brazil.png"
                    body.style.backgroundImage = "url(fundo_sao_paulo.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "rio de janeiro"){
                    imagem.src = "Brazil.png"
                    body.style.backgroundImage = "url(fundo_rio_janeiro.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "moscow"){
                    imagem.src = "russia.png"
                    body.style.backgroundImage = "url(fundo_moscow.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "barcelona"){
                    imagem.src = "espanha.png"
                    body.style.backgroundImage = "url(fundo_barcelona.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "buenos aires"){
                    imagem.src = "argentina.png"
                    body.style.backgroundImage = "url(fundo_buenos_aires.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "hong kong" || (dados_json[i].name).toLowerCase()== "beijing" || (dados_json[i].name).toLowerCase()== "shanghai"){
                    imagem.src = "china.png"
                }else if((dados_json[i].name).toLowerCase()== "singapore"){
                    imagem.src = "cingapura.png"
                    body.style.backgroundImage = "url(fundo_cingapura.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "dubai"){
                    imagem.src = "emirados arabes.png"
                    body.style.backgroundImage = "url(fundo_dubai.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "mumbai" || (dados_json[i].name).toLowerCase()== "new delhi"){
                    imagem.src = "india.png"
                }else if((dados_json[i].name).toLowerCase()== "sydney"){
                    imagem.src = "australia.png"
                    body.style.backgroundImage = "url(fundo_sydney.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "berlin" || (dados_json[i].name).toLowerCase()== "munich"){
                    imagem.src = "alemanha.png"
                }else if((dados_json[i].name).toLowerCase()== "mexico city"){
                    imagem.src = "mexico.png"
                    body.style.backgroundImage = "url(fundo_mexico.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "istanbul"){
                    imagem.src = "turquia.png"
                    body.style.backgroundImage = "url(fundo_instanbul.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "bangkok"){
                    imagem.src = "tailandia.png"
                    body.style.backgroundImage = "url(fundo_bangkok.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "cairo"){
                    imagem.src = "egito.png"
                    body.style.backgroundImage = "url(fundo_cairo.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "johannesburg" || (dados_json[i].name).toLowerCase()== "cape town"){
                    imagem.src = "africa do sul.png"
                }else if((dados_json[i].name).toLowerCase()== "seoul"){
                    imagem.src = "coreia do sul.png"
                    body.style.backgroundImage = "url(fundo_seoul.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "vienna"){
                    imagem.src = "austria.png"
                    body.style.backgroundImage = "url(fundo_vienna.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "lisbon"){
                    imagem.src = "portugal.png"
                    body.style.backgroundImage = "url(fundo_lisboa.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "tel aviv"){
                    imagem.src = "israel.png"
                    body.style.backgroundImage = "url(fundo_tel_aviv.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "ho chi minh city"){
                    imagem.src = "vietnã.png"
                    body.style.backgroundImage = "url(fundo_vietna.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "prague"){
                    imagem.src = "republica tcheca.png"
                    body.style.backgroundImage = "url(fundo_prague.jpg)"
            
                }else if((dados_json[i].name).toLowerCase()== "tokyo"){
                    imagem.src = "japao.png"
                    body.style.backgroundImage = "url(fundo_tokyo.jpg)"
                }else if((dados_json[i].name).toLowerCase()== "paris"){
                    imagem.src = "franca.png"
                    body.style.backgroundImage = "url(fundo_paris.jpg)"
                }

            //mudando o fundo
            if((dados_json[i].name).toLowerCase()=="new york"){
                 body.style.backgroundImage = "url(fundo_new_york.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="miami"){
                 body.style.backgroundImage = "url(fundo_miami.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="los angeles"){
                 body.style.backgroundImage = "url(fundo_los_angeles.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="chicago"){
                 body.style.backgroundImage = "url(fundo_chicago.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="san francisco"){
                 body.style.backgroundImage = "url(fundo_san_francisco.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="hong kong"){
                 body.style.backgroundImage = "url(fundo_hong_kong.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="shanghai"){
                 body.style.backgroundImage = "url(fundo_shangai.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="beijing"){
                 body.style.backgroundImage = "url(fundo_beijing.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="mumbai"){
                 body.style.backgroundImage = "url(fundo_mumbai.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="new delhi"){
                 body.style.backgroundImage = "url(fundo_new_delhi.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="munich"){
                body.style.backgroundImage = "url(fundo_munich.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="berlin"){
                body.style.backgroundImage = "url(fundo_berlin.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="johannesburg"){
                body.style.backgroundImage = "url(fundo_johannesburg.jpg)"
            }else if((dados_json[i].name).toLowerCase()=="cape town"){
                body.style.backgroundImage = "url(fundo_cape_town.jpg)"
                }               
            
            //mudar icone do clima
                if((dados_json[i].weather[0].main).toLowerCase() == "clear"){
                    icone_clima.removeAttribute("class")
                    icone_clima.setAttribute("class","fa-solid fa-sun-plant-wilt")
                    nome.innerHTML = "Céu limpo"
                }else if((dados_json[i].weather[0].main).toLowerCase() == "clouds"){
                    icone_clima.removeAttribute("class")
                    icone_clima.setAttribute("class","fa-solid fa-cloud-showers-water")
                    nome.innerHTML = "Nublado"
                }else if((dados_json[i].weather[0].main).toLowerCase() == "haze"){
                    icone_clima.removeAttribute("class")
                    icone_clima.setAttribute("class","fa-solid fa-smog")
                    nome.innerHTML = "Neblina"
                 }else if((dados_json[i].weather[0].main).toLowerCase() == "fog"){
                    icone_clima.removeAttribute("class")
                    icone_clima.setAttribute("class","fa-solid fa-smog")
                    nome.innerHTML = "Nevoeiro"
                 }else if((dados_json[i].weather[0].main).toLowerCase() == "mist"){
                    icone_clima.removeAttribute("class")
                    icone_clima.setAttribute("class","fa-solid fa-smog")
                    nome.innerHTML = "Nevoeiro"
                }else if((dados_json[i].weather[0].main).toLowerCase() == "rain"){
                    icone_clima.removeAttribute("class")
                    icone_clima.setAttribute("class","fa-solid fa-cloud-rain")
                    nome.innerHTML = "Chuva"
                }

            nome_cidade.innerHTML = dados_json[i].name
           kelvin_celsius(dados_json[i].main.temp)
           temperatura.innerHTML = `${celsius.toFixed(0)} °C`
           nome_umidade.innerHTML = `${dados_json[i].main.humidity}%`
           m_s_km_h(dados_json[i].wind.speed)
           nome_vento.innerHTML = `${(vento).toFixed(1)} Km/h`

        }

        
    }
    
    
})






