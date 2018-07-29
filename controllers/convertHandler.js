/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    result = input.substring(0,input.search(/[a-z]/i));
    
    if(result.match(/^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/)){
      return eval(result);
    }

    if(result === ""){
      return 1;
    }

    return "invalid"; 
  };
  
  this.getUnit = function(input) {
    const units = ["gal","l","mi","km","lbs","kg"];
    var result;
    result = input.toLowerCase().substring(input.search(/[a-z]/i));

    if(!units.includes(result)){
      result = "invalid";
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'litres';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    var result;
    
    switch(initUnit){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = "";
    
    if(initNum == "invalid"){
      result = "invalid number";
    }
    
    if(initUnit == "invalid"){
      if(result != ""){
        result += " and unit";
      }
      else {
        result = "invalid unit";
      }
    }
    
    if(result == ""){
      result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
