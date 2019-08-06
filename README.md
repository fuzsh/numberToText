# number to text converter
This NodeJs library enables you to create spoken format for numbers that represent an amount in countries currency .

## install
using npm :

```javascript
$ npm i num-to-txt --save
```
## Usage

```javascript
const Amount = require("@farad845/number-to-text"); 
const amount = new Amount(10239876); 
// defualt language set to "EN"
// you can change it by passing as second parameter like this :
const amountWithCountry = new Amount(10239876, "Fa"); 
```

### Grouping Digits
To group digits by three, use
```javascript
// The settings are optional, 
// you can pass it as object
const withDigitGrouping = amount.digitGrouped(); // returns 10,239,876
```
#### options  
<ul>
  <li>
   amount 
  </li>
  <li>
   groupDigitBy || default value set to 3, means divide number three digit, three digit
  </li>
  <li>
   numbersInEnglishCharcters || defult value set to false, it means your number is shown as entered Country if you want to show in english charchers set it to true
  </li>
  <li>
   decimalCount || defult value set to 0, it means if yor number is float it rounds up your number and show that without any decimals, if you want to see number with decimal, set the decimal count
  </li>
  <li>
   comma || defult value set to ",", it means you get numbers like this 12,555
  </li>
</ul>

for Ex :

```javascript
// language = "FA"
const withDigitGrouping = amount.digitGrouped({ comma : "،" }); // returns ۱۰،۲۳۹،۸۷۶
const withDigitGrouping = amount.digitGrouped({ numbersInEnglishCharcters : true }); // returns 10,239,876
```
or 
```javascript
const withDigitGrouping = amount.digitGrouped({ groupDigitBy: 2 }); // returns 10,23,98,76
```

### Convert To Text

To display spoken format, use
```javascript
/*
** language = "FA"
** The settings are optional, 
** you can pass it as object
*/
const textFormat = amount.toText(); // returns ده میلیون و دویست و سی و نه هزار و هشتصد و هفتاد و شش
```

#### options 

<ul>
  <li>
   withDecimals || default value is false, if you want to convert float part to text put it to true 
  </li>
  <li>
   badge 
  </li>
  <li>
   secondBadge || it works if you set withDecimals to true
  </li>
  <li>
   seprator || it works if you set withDecimals to true
  </li>
</ul>

To display spoken format in Rials (IRR), use
```javascript
const tomanFormat = amount.farsiFormatToman({ badge: "ریال" }); // returns ده میلیون و دویست و سی و نه هزار و هشتصد و هفتاد و شش ریال
```

## contribute
#### add your language

1 - create a folder named YOUR-LANGUGE inside the numberToString folder

2 - look at the persian folder, inside the numberToString folder

3 - fill your folder like that 

4 - edit and add your files to index.js inside the numberToString folder

---------------

5 - create a js file named YOUR-LANGUGE inside the functions/util folder

6 - edit and add your files to index.js inside the functions/util folder

---------------

7 - pull request