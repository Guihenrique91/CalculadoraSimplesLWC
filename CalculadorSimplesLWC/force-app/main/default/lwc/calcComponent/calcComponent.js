import { LightningElement } from 'lwc';

export default class CalcComponent extends LightningElement {
    Result;
    N1;
    N2;

    handleN1(event){
        this.N1 = event.target.value;
    }
    handleN2(event){
        this.N2 = event.target.value;
    }
    
    callAdd(event){
        alert("Calculando");
        this.Result = parseInt(this.N1) + parseInt(this.N2);
    }
    callSub(event){
        alert("Calculando");
        this.Result = parseInt(this.N1) - parseInt(this.N2);
    }
    callMulti(event){
        alert("Calculando");
        this.Result = parseInt(this.N1) * parseInt(this.N2);
    }
    callDiv(event){
        alert("Calculando");
        this.Result = parseInt(this.N1) / parseInt(this.N2);
    }
}