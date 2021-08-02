export default class FormComponent {
    constructor(label, type, validationFunctions, instantiateView=true, dict=null){
        this.label = label;
        this.type = type;
        this.validationFunctions = validationFunctions;

        /** @type {String} */
        this.label = null;
        /** @type {HTMLElement.input} */
        this.input = null;
        this.warningSpan = null;

        this.lastError = null;

        this.value = null;

        if (instantiateView){
            this.instantiateView();
        }
        else{
            if (dict === null){
                throw Error("must have dict!");
            }

            this.label = dict.label;
            this.input = dict.label;
            this.warningSpan = dict.warningSpan;

            this.input.addEventListener("input", this.functionChain);
            
        }
    }

    functionChain = (event) => {
        const value = this.event.target.value;
        for(let i = 0; i < this.validationFunctions.length; i += 1 ){
            const curFunc = this.validationFunctions[i];

            // if curFunc returns truthy
            if (curFunc(value)){
                const warning = curFunc(value);
                this.warningSpan.innerHTML = warning;
                return;
            }
        }
        this.warningSpan.innerHTML = "";
    }

    instantiateView(){
        //TODO implement this!
    }
}