import { Component, View, bootstrap, Input } from 'angular2/angular2';
import { KendoComponent } from './KendoComponent.es6';

@Component({
    selector: 'my-app'
})
@View({
    template: `
    <div>
        <kendocomponent [bound]="{dataSource: options,
            dataTextField: 'text',
            dataValueField: 'value',
            index: 0,
            change: onDropDownChange,
            value: selectedValue }"
         [role]="'dropdownlist'"></kendocomponent>
    </div>
    <div>
        <div>Currently selected value : {{selectedValue}}</div>
        <button (click)="selectBar()">Select Bar</button>
    </div>
    `,
    directives: [KendoComponent]
})
class AppComponent {
    constructor() {
        this.options = [
            { text: 'Foo', value: '1' },
            { text: 'Bar', value: '2' },
            { text: 'Bazz', value: '3' }
        ];
        this.selectedValue = '1';
        this.onDropDownChange = this.onDropDownChange.bind(this);
    }
    onDropDownChange(e) {
        this.selectedValue = e.sender.value();
    }
    selectBar(boundStuff) {
        this.selectedValue = '2';
    }
}

document.addEventListener('DOMContentLoaded', function() {
  bootstrap(AppComponent);
});

