class ListaNegociacoes{

    constructor(){

        this._negociacoes = [];

    }

    addneg(negociacao){    
        
        this._negociacoes.push(negociacao);
    
    }

    get negociacoes(){

        return [].concat(this._negociacoes);

    }
}