export const ABCs = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

export const basicInts = 
[
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

export default class BasicStuff{
    constructor(){

    }


    get basicCharacters(){

        const abcs = [];
        for(let i = 0; i < ABCs.length; i += 1){
            abcs.push(ABCs[i].toLowerCase());
        }
        return abcs.concat(basicInts);
    }

    get ABCS(){
        return ABCs;
    }

    get basicInts(){
        return basicInts;
    }
}