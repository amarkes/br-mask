# brmasker-ionic

[![GitHub issues](https://img.shields.io/github/issues/amarkes/br-mask.svg)](https://github.com/amarkes/br-mask/issues)
[![GitHub stars](https://img.shields.io/github/stars/amarkes/br-mask.svg)](https://github.com/amarkes/br-mask/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amarkes/br-mask.svg)](https://github.com/amarkes/br-mask/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/amarkes/br-mask/master/LICENSE)
[![Build Status](https://travis-ci.org/amarkes/br-mask.svg?branch=master)](https://travis-ci.org/amarkes/br-mask)


return custom mask in input for ionic 4

# Required
- Node: 10.7.0
- npm 6.4.0
- ionic 4.1.2
- Angular CLI: 6.1.2

# install

```sh
npm install br-mask --save -E
```

# Usage

```javascript
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    BrMaskerModule
  ],
})

```

### HTML

```html
 <form [formGroup]="form">
    <ion-item>
      <ion-input required type="text" formControlName="mask"  placeholder="First Name" [brmasker]="{mask:'00-00', len:5, userCaracters: true}"></ion-input>
    </ion-item>
  </form>

```

### Other Examples

```html
<ion-item>
    <ion-input type="text" formControlName="mask"  placeholder="Mask" [brmasker]="{mask: '00:00', type:'num'}"></ion-input>
</ion-item>

<ion-item>
    <ion-input type="text" formControlName="mask"  placeholder="Mask" [brmasker]="{userCaracters: true}"></ion-input>
</ion-item>

```

### Example for CPF/CNPJ 999.999.999-99 / 99.999.999/9999-99

```html
<ion-item>
	<ion-input type="text" name="cpf" formControlName="mask" placeholder="CPF/CNPJ" [brmasker]="{person: true}"></ion-input>
</ion-item>
```

### Example for Real 999,99

```html
<ion-item>
	<ion-input type="text" name="money" formControlName="mask" placeholder="(R$) Real" [brmasker]="{money: true}"></ion-input>
</ion-item>
```

### Example for Money

```html
<ion-item>
	<ion-input type="text" formControlName="mask" name="money" placeholder="Money" [brmasker]="{money: true, thousand: ',',  decimalCaracter: '.', decimal: '3'}"></ion-input> 
</ion-item>
```

### Example for Real 99,999 With Decimal

```html
<ion-item>
	<ion-input type="text" name="money" formControlName="mask" placeholder="(R$) Real" [brmasker]="{money: true, decimal: 3}"></ion-input>
</ion-item>
```

### Example for Real 99,999 With Decimal

```html
<ion-item>
	<ion-input type="text" name="percent" formControlName="mask" placeholder="% Percent" [brmasker]="{percent: true}" value=""></ion-input>
</ion-item>
```

### Example for Phone (99) 9999-9999 / (99) 99999-9999

```html
<ion-item>
	<ion-input type="text" name="phone" formControlName="mask" placeholder="Phone" [brmasker]="{phone: true}"></ion-input>
</ion-item>
```

### Example for Phone not ddd 9999-9999 / 99999-9999

```html
<ion-item>
	<ion-input type="text" name="phone" formControlName="mask" placeholder="Phone" [brmasker]="{phoneNotDDD: true}"></ion-input>
</ion-item>
```

### Example for number thousand

```html
<ion-item>
	<ion-input type="text" formControlName="phone" [value]="form.get('phone').value" name="phone" placeholder="Phone" [brmasker]="{numberAndTousand: true, thousand: ','}"></ion-input>
</ion-item>
```

# Features
```js
import { BrMaskDirective, BrMaskModel } from 'br-mask';

...

constructor(public brMask: BrMaskDirective) {}

...

protected createForm(): FormGroup {
  return new FormGroup({
    phone: new FormControl(this.createPhone())
  });
}

private createPhone(): string {
  const config: BrMaskModel = new BrMaskModel();
  config.phone = true;
  return this.brMask.writeCreateValue('99999999999', config);
}
```

# Inputs

* brmasker: BrMaskModel

```ts
	BrMaskModel = {
		form: AbstractControl;
		mask: string;
		len: number;
		money: boolean;
		phone: boolean;
		phoneNotDDD: boolean;
		person: boolean;
		percent:boolean;
		type: 'alfa' | 'num' | 'all';
		decimal: number = 2;
		decimalCaracter: string = `,`;
		thousand: string;
		userCaracters = false;
		numberAndTousand: false,
		moneyInitHasInt: true
	}
```


| Name | type | info |
| ------ | ------ | ------ |
| form | FormControl | Obsolete |
| mask | string | Optional |
| len | string | Optional |
| money | boolean | Optional |
| phone | boolean | Optional |
| phoneNotDDD | boolean | Optional |
| person | boolean | Optional |
| percent | boolean | Optional |
| type | string | Optional default 'all' |
| decimalCaracter | string | Optional default ','  |
| decimal | number | Optional default '2' |
| thousand | string | Optional |
| userCaracters | boolean | Optional default `false` |
| numberAndTousand | boolean | Optional default `false` |
| moneyInitHasInt | boolean | Optional default `true` |


`moneyInitHasInt is when you need to use cents in value` 



# Characters

`- . / ( ) , * + @ # $ & % :`



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

### 0.0.8

- change phone mask for accept 11 digits

### 0.0.7

- removing the need to declare the form

### 0.0.6

- remove console log

### 0.0.5

- add prop moneyInitHasInt

# Changelog

### 0.0.4

- add phoneNotDDD

### 0.0.3

- fix numberAndTousand

### v0.0.2

- add number thousand

### v0.0.1

- Inicial project
