import BasicStuff from "./BasicStuff.js"

export function validateOnlyText(string){
    const bool = /^[a-zA-Z]+$/.test(string);

    if (!bool){
        return "String can only be text!";
    }
}

export function validateBasicCharacters(string, exemptions=[]){
    if (typeof string !== "string"){
        return "Value has to be string!";
    }

    const utilObj = new BasicStuff();
    const fullArr = utilObj.basicCharacters;

    for(let i = 0; i < string.length; i += 1){
        const curChar = string.charAt(i);

        //if curChar

        if (!fullArr.includes(curChar)){
            return "Can't use char " + curChar + "!";
        }
    }

}

export function validateCustomCharacters(string, characterList=[]){

}

export function validateCharacterLimit(string, characterLimit=5){
    if (string.length > characterLimit){
        return "String must be under length " + characterLimit + "!";
    }
}

/**
 * 
 * @param {String} strValue 
 * @returns 
 */
export function validateIsPositiveInt(strValue){
    if (isNaN(strValue)){
        return "Value must be a positive integer!";
    }
    
    const value = parseInt(strValue);
    const floatValue = parseFloat(strValue);

    if (Math.abs(value-floatValue) > .0001){
        return "Value must be a positive integer, not a float!";
    }

    if(!Number.isInteger(value)){
        return "Value must be a positive integer!";
    }

    if(value < 0){
        return "Value must be positive!";
    }
}

export function validateIsInt(strValue){
    if (isNaN(strValue)){
        return "Value must be a positive integer!";
    }
    
    const value = parseInt(strValue);
    const floatValue = parseFloat(strValue);

    if (Math.abs(value-floatValue) > .0001){
        return "Value must be a positive integer, not a float!";
    }

    if(!Number.isInteger(value)){
        return "Value must be a positive integer!";
    }

}

/**
 * 
 * @param {Number} value
 */

export function validateIsWithinRange(value, min, max){
    if (typeof value !== "number"){
        return "Input value must be a number!";
    }

    if (value < min){
        return `Input needs to be greater or equal to ${min}`;
    }
    if (value > max){
        return `Input needs to be less than or equal to ${max}`;
    }
}


export function validateIsWithinRangeFloat(value, min, max){
    if (typeof value !== "number"){
        return "Input value must be a number!";
    }

    if (value < min){
        return `Input needs to be greater or equal to ${min}`;
    }
    if (value >= max){
        return `Input needs to be less than ${max}`;
    }
}