function convert() {
    var Value = document.getElementById("text1").value;
    var Option1 = document.getElementById("select1");
    var Option2 = document.getElementById("select2");
    var ANS = document.getElementById("text2");
    if (Value != '') {
        if (Option1.value == Option2.value) {
            ANS.innerHTML = "You Have Selecter Same Currency In Both Blocks"

        }
        if (Option1.value == "PKR" && Option2.value == "USD") {
            PKR = Value * 0.0060
            ANS.innerHTML = PKR;

        }
        if (Option1.value == "PKR" && Option2.value == "IND") {
            PKR = Value * 0.45
            ANS.innerHTML = PKR;

        }
        if (Option1.value == "PKR" && Option2.value == "BAN") {
            PKR = Value * 0.51
            ANS.innerHTML = PKR;

        }
        if (Option1.value == "USD" && Option2.value == "PKR") {
            USD = Value * 167.38
            ANS.innerHTML = USD;

        }
        if (Option1.value == "USD" && Option2.value == "IND") {
            USD = Value * 74.93
            ANS.innerHTML = USD;

        }
        if (Option1.value == "USD" && Option2.value == "BAN") {
            USD = Value * 84.79
            ANS.innerHTML = USD;

        }
        if (Option1.value == "IND" && Option2.value == "PKR") {
            IND = Value * 2.23
            ANS.innerHTML = IND;

        }
        if (Option1.value == "IND" && Option2.value == "USD") {
            IND = Value * 0.013
            ANS.innerHTML = IND;

        }
        if (Option1.value == "IND" && Option2.value == "BAN") {
            IND = Value * 1.13
            ANS.innerHTML = IND;

        }
        if (Option1.value == "BAN" && Option2.value == "PKR") {
            BAN = Value * 1.97
            ANS.innerHTML = BAN;

        }
        if (Option1.value == "BAN" && Option2.value == "USD") {
            BAN = Value * 0.012
            ANS.innerHTML = BAN;

        }
        if (Option1.value == "BAN" && Option2.value == "IND") {
            BAN = Value * 0.88
            ANS.innerHTML = BAN;

        }



    } else {
        ANS.innerHTML = "Please Enter Some Value In the Text Box"
    }
}

// function getJasonValue() {
//     var myCurrency, i, j, x = "";
//     ANS2 = document.getElementById("demo");
//     myCurrency = {
//         "name": "Currency Converter",
//         "value": [
//             { "Currency": "PKR", "values": ["1 PKR =0.006 USD", "1 PKR =0.45 INR", "1 PKR =0.51 BAN"] },
//             { "Currency": "USD", "values": ["1 USD =167.38 PKR", "1 USD =74.93INR", "1 USD =84.79 BAN"] },
//             { "Currency": "INR", "values": ["1 INR =2.23 PKR", "1 INR =0.013 USD", "1 INR =1.13 BAN"] },
//             { "Currency": "BAN", "values": ["1 BAN =1.97 PKR", "1 BAN =0.012 USD", "1 BAN =0.88 INR"] }

//         ]
//     }
//     for (i in myCurrency.value) {
//         x += "<h2>" + myCurrency.value[i].Currency + "</h2>";
//         for (j in myCurrency.value[i].values) {
//             x += myCurrency.value[i].values[j] + "<br>";
//         }
//     }
//     ANS2.innerHTML = x;
// }