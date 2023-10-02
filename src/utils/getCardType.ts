export const getCardType = (number: string) => {
    // visa
    let re = new RegExp("^4");
    if (number.match(re) != null)
        return "VISA";

    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
     re = new RegExp("^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$");
    if (number.match(re) != null)
        return "MASTER_CARD";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        return "discover";


    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
        return "UNION_PAY";

 

    return "credit";
}


export function cc_format(value:string) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];
  
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
  
    return parts.length > 1 ? parts.join(" ") : value;
  }