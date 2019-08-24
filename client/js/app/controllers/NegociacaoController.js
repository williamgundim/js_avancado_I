
class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
        this._nQuant = $("#quantidade");
        this._dData = $("#data");
        this._nValor = $("#valor");
    }

 
    adiciona(event){
        event.preventDefault();

        let data = new Date(
            ...this._dData.value
            .split('-')
            .map((item, indice) => item - indice % 2  )
        );

        let negociacao = new Negociacao(
            data,
            this._nQuant.value,
            this._nValor.value
        )
        
        console.log(negociacao);
    }



}