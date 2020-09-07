/**
 * @function toCurrency
 * @augments String/Number
 * @param {string} gLocal - String ~ Local param to NumberFormat
 * @param {object} _config - Object ~ Config, option param to NumberFormat
 * @param {boolean} gMiles - Any ~ Set the thousands separator with '.'
 * @returns {string}
 * @version 1.0.0
 * @description Set a global currency to all of your amounts (Includes a local currency config  for other units)
 * @example currency('en-US', {style: 'currency', currency:'USD'}); "12".toCurrency();
 */

 module.exports = function(gLocal, gConfig, gMiles){
   const options = {};

   // Verify if local is a valid string
   if(gLocal){
     if(typeof gLocal !== "string"){
       throw new Error('You must need to provide a valid locale string');
     }
   }

   // Replace default options
   if(typeof gConfig === "object"){
     for(let a in gConfig){
       options[a] = gConfig[a];
     }
   }

   function __toCurrency(sAlter, sLocal){

     // No mutate options
     const _Options = {...options};

     // Prevent string values
     const value = +this;
     if(isNaN(value)){
       return 'Invalid integer';
     }

     if(sAlter){
       // Replace the alternative options
       for(let a in sAlter){
         _Options[a] = sAlter[a];
       }
     }
     const label = new Intl.NumberFormat((gLocal || sLocal || 'en-US'), _Options).format(value);

     if(gMiles){
       const sLabel = label.split('.');
       sLabel[0] = sLabel[0].replace(/,/gi, '.')
       return sLabel.join(',')
     }

     return label;
   }

   // Include in prototype
   Number.prototype.toCurrency = __toCurrency;
   String.prototype.toCurrency = __toCurrency;
 }
