module Ctizen {
    export function Crinumber(num : string){
        var cnum : string = num ;

        var resultNum : number = 0;

        for(var cot : number = 0 ; cot < num.length-1 ; cot ++){
         var result = Number(num[cot]);
                resultNum += result * (13 - cot);
        }
            resultNum = 11 - (resultNum % 11);

            if(resultNum >= 10){
              return Number(cnum[12]) == (resultNum % 10);
            }else{
               return  Number(cnum[12]) == resultNum;
            } 
    
    }
}