
class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
        this._nQuant = $("#quantidade");
        this._dData = $("#data");
        this._nValor = $("#valor");
        this._ViewNegociacao = new NegociacoesView($("#negociacoesView"));
       
        //Atualiza o model.
        this._listaNegociacoes = new ListaNegociacoes();

        //Atualiza a view.
        this._ViewNegociacao.update(this._listaNegociacoes.negociacoes);
    }
  
    adiciona(event){
        event.preventDefault();

        let negociacao = this.__criaNegociacao();
        
        this._listaNegociacoes.addneg(negociacao);

        //Atualiza a view.
        this._ViewNegociacao.update(this._listaNegociacoes.negociacoes);

        this._freeFormulario();

    } 


    __criaNegociacao(){
        return new Negociacao(DateHelper.StringToDate(this._dData.value),
                                this._nQuant.value,
                                this._nValor.value
        )

    }


    _freeFormulario(){
        this._dData.value = '';
        this._nQuant.value = 1;
        this._nValor.value = 0;
    }


}