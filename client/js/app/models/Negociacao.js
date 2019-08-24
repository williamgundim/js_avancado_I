
class Negociacao{

    constructor(date, quant, valor) {

        this._data = new Date(date.getTime());
        this._quantidade = quant;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this.valor;
    }

    get data(){
        //cria uma copia para garantir a imutabilidade    
        return new Date(this._data.getTime());
    }

    get quantidade(){

        return this._quantidade;

    }

    get valor(){

        return this._valor;
    }
}
