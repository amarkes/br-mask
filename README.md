# brmasker-ionic

[![GitHub issues](https://img.shields.io/github/issues/amarkes/br-masker-ionic-3.svg)](https://github.com/amarkes/br-masker-ionic-3/issues)
[![GitHub stars](https://img.shields.io/github/stars/amarkes/br-masker-ionic-3.svg)](https://github.com/amarkes/br-masker-ionic-3/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amarkes/br-masker-ionic-3.svg)](https://github.com/amarkes/br-masker-ionic-3/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/amarkes/br-masker-ionic-3/master/LICENSE)
[![Build Status](https://travis-ci.org/amarkes/brmasker-ionic.svg?branch=master)](https://travis-ci.org/amarkes/br-masker-ionic-3)


return custom mask in input for ionic 3

# Required
- node v8.2.1 or up
- npm 5.3.0 or up
- ionic 3.9.2

# install

```sh
npm install brmasker-ionic-3 --save
```

# Usage

```javascript
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  imports: [
    BrMaskerModule
  ],
})

```

### Only Example

[VSCODE](https://stackblitz.com/edit/ionic-9f4ave?file=pages%2Fhome%2Fhome.html)

### HTML

### correct usage

```html
<ion-item>
	<ion-input type="text" name="cpf" placeholder="CPF" [brmasker]="{mask:'000.000.000-00', len:14}"></ion-input>
</ion-item>
```

### usage in input

```html
<input type="text" name="cpf" placeholder="CPF" [brmasker]="{mask:'000.000.000-00', len:14}" value="">
```


# Features


```js
import { BrMaskerIonic3, BrMaskModel } from 'brmasker-ionic-3';

...

constructor(public brMaskerIonic3: BrMaskerIonic3) {}

...

protected createForm(): FormGroup {
  return new FormGroup({
    phone: new FormControl(this.createPhone())
  });
}

private createPhone(): string {
  const config: BrMaskModel = new BrMaskModel();
  config.phone = true;
  return this.brMaskerIonic3.writeCreateValue('99999999999', config);
}
```

# Inputs

* brmasker: BrMaskModel

```js
	BrMaskModel = {
	 mask: string;
	 len: number;
	 money: boolean;
         decimal: number;
	 phone: boolean;
	 person: boolean;
	 percent:boolean;
	 type: 'alfa' | 'num' | 'all';
	 decimal: number = 2;
  	 decimalCaracter: string = `,`;
	thousand: string;
	userCaracters = false;
	}
```


| Name | type | info |
| ------ | ------ | ------ |
| mask | string | Optional |
| len | string | Optional |
| money | boolean | Optional |
| decimal| number | Optional for 'money', default '2' |
| phone | boolean | Optional |
| person | boolean | Optional |
| percent | boolean | Optional |
| type | string | Optional default 'all' |
| decimalCaracter | string | Optional default ','  |
| decimal | number | Optional default '2' |
| thousand | string | Optional |
| userCaracters | boolean | Optional default `false` |


### Example use of alphanumeric characters


```html
<ion-item>
	<ion-input type="text" name="cpf" placeholder="CPF/CNPJ" [brmasker]="{mask:'00/00/0000', len:10, type:'alfa'}"></ion-input>
</ion-item>
```

### Example use of number characters

```html
<ion-item>
	<ion-input type="text" name="cpf" placeholder="CPF/CNPJ" [brmasker]="{mask:'00/00/0000', len:10, type:'num'}"></ion-input>
</ion-item>
```

```html
<ion-item>
	<ion-input type="text" name="cpf" placeholder="CPF/CNPJ" [brmasker]="{mask:'00/00/0000', len:10, type:'all'}"></ion-input>
</ion-item>
```


### Example use of all characters

```html
<ion-input type="text" placeholder="Use special character" [brmasker]="{mask:'00-00', len:5, userCaracters: true}"></ion-input>
```

### Example for CPF/CNPJ `999.999.999-99` / `99.999.999/9999-99`



```html
<ion-item>
	<ion-input type="text" name="cpf" placeholder="CPF/CNPJ" [brmasker]="{person: true}"></ion-input>
</ion-item>
```

### usage in input

```html
<input type="text" name="cpf" placeholder="CPF/CNPJ" [brmasker]="{person: true}" value="">
```

### Example for Real `999,99`



```html
<ion-item>
	<ion-input type="text" name="money" placeholder="(R$) Real" [brmasker]="{money: true}"></ion-input>
</ion-item>
```

### Example for Money
```html
<ion-item>
	<ion-input type="text" formControlName="money" name="money" placeholder="Money" [brmasker]="{money: true, thousand: ',',  decimalCaracter: '.', decimal: '3'}"></ion-input> 
</ion-item>
```


### usage in input

```html
<input type="text" name="money" placeholder="(R$) Real" [brmasker]="{money: true}" value="">
```

### Example for Real `99,999` With Decimal



```html
<ion-item>
	<ion-input type="text" name="money" placeholder="(R$) Real" [brmasker]="{money: true, decimal: 3}"></ion-input>
</ion-item>
```

### usage in input

```html
<input type="text" name="money" placeholder="(R$) Real" [brmasker]="{money: true, decimal: 3}" value="">
```

### Example for Percent `1%` / `100%`
```html
<input type="text" name="percent" placeholder="% Percent" [brmasker]="{percent: true}" value="">
```

### Example for Phone `(99) 9999-9999` / `(99) 99999-9999`



```html
<ion-item>
	<ion-input type="text" name="phone" placeholder="Phone" [brmasker]="{phone: true}"></ion-input>
</ion-item>
```

### usage in input

```html
<input type="text" name="phone" placeholder="Phone" [brmasker]="{phone: true}" value="">
```



# Characters

`- . / ( ) , * + @ # $ & % :`



### data
```html
[brmasker]="{mask:'00/00/0000', len:10}"
```
### cep
```html
[brmasker]="{mask:'00.000-000', len:10}"
```

### custom cpf
```html
[brmasker]="{mask:'000.000.000-00', len:14}"
```

### custom cnpj
```html
[brmasker]="{mask:'00.000.000/0000-00', len:18}"
```

### custom telefone
```html
[brmasker]="{mask:'(00) 0000-0000', len:14}"
```

### custom whatsapp
```html
[brmasker]="{mask:'(00) 00000-0000', len:15}"
```



# Build for developer

### Only use if you change the component

### Build

```sh
npm run build
```

### Publish

```sh
npm publish
```

# Changelog

### v1.3.1

- fix tag

### v1.3.0

- adding special character shape

### v1.2.0

- Remove DevDependencies for fix bugs

### v1.1.0

- New mask for money, add thousand

### v1.0.11

- Refactored moneyMask so it includes a leading 0 for when we have only

### v1.0.10

- Create a writeCreateValue for initial value
- Change name model from `BrModel` to `BrMaskModel`

### v1.0.9

- Add decimal in money mask

### v1.0.8

- Fix mask type caracter

### v1.0.7

- Fix mask  caracter `:`


### v1.0.6

- Fix mask pool

### v1.0.5

- Replace percent symbol

### v1.0.4

- percent mask #pull #23
- fix(events): ionic has changed event names #pull #22


### v1.0.3

- Updating devdependencies


### v1.0.2

- fix number in phone and person

### v1.0.1

- fix compiler project for npm

### v1.0.0

- Suport reactive form
