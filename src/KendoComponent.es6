import { Component, View, Inject, Input, Output } from 'angular2/angular2';
import { ElementRef } from 'angular2/angular2';

@Component({
    selector: 'kendocomponent',
    inputs: ['bound', 'role'],
    bindings: [ ElementRef ]
})
@View({
    template: `<input type="text" />`
})
export class KendoComponent {
    static get parameters() {
        return [[ElementRef]];
    }
    constructor(elementRef) {
        this._element = $(elementRef.nativeElement).find('input')[0];
        console.log('Keeping it on 2');
        //this.bound = {};
        //this.role = '';
        //this.test = 0;
    }
    render() {
        console.log('Rendering!!!', this.role, this._widgetName);
        this._kWidget = jQuery(this._element)[this._widgetName](this.bound);
        for(var key in this._kWidget) {
            //TODO: check prototype stuff
            this._kendoKeys.push(key);
        }
    }
    afterContentInit() {
        console.log('after1');
    }
    afterContentChecked() {
        console.log('afterContentChecked');
    }
    afterViewInit() {
        console.log('afterViewinit');
    }
    afterViewChecked() {
        console.log('afterViewchecked');
    }
    onChanges(changes) {
        console.log('onChanging!!');
        if(!this._widgetName) {
            this.initialize();
        }
        if(changes.bound) {
            outer: for(var propKey in changes.bound) {
                //TODO: yadda
                for(var kendoKeyIndex = 0; kendoKeyIndex < this._kendoKeys.length; kendoKeyIndex++) {
                    var kendoKey = this._kendoKeys[kendoKeyIndex];
                    if(propKey === kendoKey) {
                        if(type(this._kWidget[kendoKey]) === 'Function') {
                            this._kWidget[kendoKey](changes.bound[propKey]);
                        }
                        continue outer;
                    }
                }
            }
        }
        this.render();
    }
    doCheck() {
        console.log('docheck');
    }
    initialize() {
        this._kendoKeys = [];
        if(this.role) {
            for (var widget in kendo.ui) {
                if (widget.toUpperCase() === this.role.toUpperCase()) {
                    this._widgetName = 'kendo' + widget;
                }
            }
        } else {
            console.error('Expected role to be truthy!?');
        }
        if(!this._widgetName) {
            //throw 'Could not find widget for ' + this.role + ' or role not specified.';
            console.error('Could not find widget');
        } else {
            console.log('Rendering as', this._widgetName);
            this.render();
        }
    }
    onInit() {
        this.initialize();
    }
    onCheck() {
        console.log('oncheck');
    }
    onAllChangesDone() {
        console.log('onallchangesdone');
    }
    onChange(changes) {

    }
    onDestroy() {
        var kElement = jQuery(this._element);
        kElement.data(this._widgetName).destroy();
        kElement.empty();
    }
};

