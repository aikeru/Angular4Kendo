# Angular 2 Kendo

A series of Angular 2 Components enabling the use of Kendo UI with Angular 2. Last updated with Angular alpha.45, written in ES6.

### Why Angular 2 Kendo?

Because if you're going Angular, and one of your requirements is to use Kendo UI Widgets, the lack of integration between Kendo UI and Angular 2 shouldn't be a barrier to picking Angular 2.

### How to use this?

* Include the ```KendoComponent.es6``` file in your project.
* Import the widgets you want
```javascript
import { KendoDropDownList, KendoDatePicker, KendoButton } from './KendoComponent.es6';
```
* Include them in your view component's directives (in the View decorator)
```javascript
directives: [KendoDropDownList, KendoDatePicker, KendoButton]
```
* Reference the component in your view
```javascript
<input data-role="datepicker" [bound]="{ value: dateValue, change: onDatePickerChange }" />
```
<br/>
* The Angular 2 selectors use ```data-role```, just like Kendo MVVM does, ie: ```data-role="dropdownlist"```
* The Angular 2 components use 'bound', since 'bind' is not valid, ie: ```[bound]="{ value: someValue }"```

### How to build this?

This project uses webpack. With webpack's cli installed, simply execute ```webpack``` in the root of the project.