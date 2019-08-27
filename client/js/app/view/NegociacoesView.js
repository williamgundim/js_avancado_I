class NegociacoesView extends View{

    constructor(div){

        super(div);

    }
    
    template(model){

        return `
        
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
            
                <tbody>                
                    
                    ${model.map( n => {
                        
                        return  `
                                <tr>
                                    <td> ${n.data} </td>
                                    <td> ${n.quantidade} </td>
                                    <td> ${n.valor} </td>
                                    <td> ${n.volume} </td>
                                </tr>    
                               `
                    }).join('')}

                </tbody>
            
                <tfoot>
                    <td colspan="3"></td>
                    <td> ${ model.reduce((total, n)=>total += n.volume, 0.0 )  } </td>
                </tfoot>

            </table>
        `        

    }

 
}

/*
função reduce, processa e percorre todo o array e no final retorna um unico resultado. 
*/