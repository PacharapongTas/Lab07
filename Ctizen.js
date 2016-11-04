var Ctizen;
(function (Ctizen) {
    function Crinumber(num) {
        var cnum = num;
        var resultNum = 0;
        for (var cot = 0; cot < num.length - 1; cot++) {
            var result = Number(num[cot]);
            resultNum += result * (13 - cot);
        }
        resultNum = 11 - (resultNum % 11);
        if (resultNum >= 10) {
            return Number(cnum[12]) == (resultNum % 10);
        }
        else {
            return Number(cnum[12]) == resultNum;
        }
    }
    Ctizen.Crinumber = Crinumber;
})(Ctizen || (Ctizen = {}));
/// <reference path="Ctizen.ts" />
console.log("AAA =" + Ctizen.Crinumber("1201541462234"));
