// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    let exChange = {};
    const h = 50;
    const q = 25;
    const d = 10;
    const n = 5;
    const p = 1;

    if ( currency <= 0 ) {
        return exChange;
    } else if (currency > 10000) {
        return exChange = {"error": "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        if(currency >= 50) {
            exChange["H"] = Math.floor(currency / h);
            currency-= Math.floor(currency / h) * 50;
        }

        if(currency >= 25) {
            exChange["Q"] = Math.floor(currency / q);
            currency-= Math.floor(currency / q) * 25;
        }

        if(currency >= 10) {
            exChange["D"] = Math.floor(currency / d);
            currency-= Math.floor(currency / d) * 10;
        }

        if(currency >= 5) {
            exChange["N"] = Math.floor(currency / n);
            currency-= Math.floor(currency / n) * 5;
        }

        if(currency >= 1) {
            exChange["P"] = Math.floor(currency / p);
            currency-= Math.floor(currency / p) * 1;
        }

     return exChange;   
    }
}
