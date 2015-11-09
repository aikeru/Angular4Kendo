import { Component, View, bootstrap, Input } from 'angular2/angular2';
import { KendoComponent } from './KendoComponent.es6';

@Component({
    selector: 'my-app'
})
@View({
    template: `
    <div>
        <kendocomponent [bound]="boundStuff" [role]="'dropdownlist'"></kendocomponent>
    </div>
    <div>
        <div>Currently selected value : {{boundStuff.value}}</div>
        <button (click)="selectBar()">Select Bar</button>
    </div>
    `,
    directives: [KendoComponent]
})
class AppComponent {
    constructor() {
        this._data = [
            { text: 'Foo', value: '1' },
            { text: 'Bar', value: '2' },
            { text: 'Bazz', value: '3' }
        ];

        this.boundStuff = {
            dataTextField: "text",
            dataValueField: "value",
            dataSource: this._data,
            index: 0,
            change: this.onDropDownChange.bind(this),
            value: '1'
        }
    }
    onDropDownChange(e) {
        this.boundStuff.value = e.sender.value();
    }
    selectBar(boundStuff) {
        this.boundStuff = {
          dataTextField: "text",
            dataValueField: "value",
            dataSource: this._data,
            index: 0,
            change: this.onDropDownChange.bind(this),
            value: '2'
        };
    }
}

document.addEventListener('DOMContentLoaded', function() {
  bootstrap(AppComponent);
});

