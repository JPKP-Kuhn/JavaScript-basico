class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.km = 0;
        this.combustivel = 10;
        console.log('Carro criado')
    }

    info(){
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
        console.log("Cor: " + this.cor)
        console.log("Ligado: " + (this.ligado ? "Sim" : "Não"))
        console.log("Km: " + this.km)
        console.log("Combustivel: " + this.combustivel)
    }
    ligar(){
        this.ligado = true
        console.log("Ligando o carro")
    }
    desligar(){
        this.ligado = false
        console.log("Desligando o carro")
    }
}

let c1 = new Carro('Chevrolet', 'Camaro', 'amarelo') // Instanciando um objeto
let c2 = new Carro('vermelho')
c1.cor = 'verde'
c1.info()
c2.info()