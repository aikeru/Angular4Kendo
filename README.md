# Angular 4 Kendo

A series of Angular 4 Components enabling the use of Kendo UI with Angular 4. Last updated with Angular 4.0.1, written in ES6+.

### Why Angular 4 Kendo?

Because if you're going Angular, and one of your requirements is to use Kendo UI Widgets, the lack of integration between Kendo UI and Angular 4 shouldn't be a barrier to picking Angular 4.

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
* The Angular 4 selectors use ```data-role```, just like Kendo MVVM does, ie: ```data-role="dropdownlist"```
* The Angular 4 components use 'bound', since 'bind' is not valid, ie: ```[bound]="{ value: someValue }"```

### How to build this?

This project uses webpack. With webpack's cli installed, simply execute ```webpack``` in the root of the project.

### License

The MIT License (MIT)

Copyright (c) 2017 Michael K Snead

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
