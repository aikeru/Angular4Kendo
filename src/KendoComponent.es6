import { Component, View, Inject, Input, Output } from 'angular2/angular2';
import { ElementRef } from 'angular2/angular2';

//a2 lifecycle https://github.com/angular/angular/blob/master/modules/angular2/lifecycle_hooks.ts

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
    }
    render() {
        this._kWidget = jQuery(this._element)[this._widgetName](this.bound);
        this._kendoKeys = [];
        for(var key in this._kWidget) {
            this._kendoKeys.push(key);
        }
    }
    onChanges(changes) {
        if(!this._widgetName) {
            this.initialize();
        }
        if(changes.bound) {
            outer: for(var propKey in changes.bound) {
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
    initialize() {
        this._kendoKeys = [];
        if(this.role) {
            for (var widget in kendo.ui) {
                if (widget.toUpperCase() === this.role.toUpperCase()) {
                    this._widgetName = 'kendo' + widget;
                }
            }
        } else {
            console.error('role is required for KendoComponent');
        }
        if(!this._widgetName) {
            console.error('Could not find widget for ' + this.role + ' or role not specified.');
        } else {
            this.render();
        }
    }
    onInit() {
        this.initialize();
    }
    onDestroy() {
        var kElement = jQuery(this._element);
        kElement.data(this._widgetName).destroy();
        kElement.empty();
    }
};

