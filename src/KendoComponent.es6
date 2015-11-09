import { Component, View, Inject, Input, Output } from 'angular2/angular2';
import { ElementRef } from 'angular2/angular2';

//a2 lifecycle https://github.com/angular/angular/blob/master/modules/angular2/lifecycle_hooks.ts
export class KendoComponent {
    static get parameters() {
        return [[ElementRef]];
    }
    constructor(elementRef, widgetName) {
        //this._element = $(elementRef.nativeElement).children()[0];
        this._element = elementRef.nativeElement;
        this.widgetName = widgetName; //should be overridden by inheritors
        if(!widgetName) {
            console.error('widgetName is required for KendoComponent');
        }
    }
    render() {
        this._kWidget = jQuery(this._element)[this.widgetName](this.bound);
        this._kendoKeys = [];
        for(var key in this._kWidget) {
            this._kendoKeys.push(key);
        }
    }
    onChanges(changes) {
        if(!this._kendoKeys || !this._kendoKeys.length) {
            this.render();
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
    onInit() {
        this.render();
    }
    onDestroy() {
        var kElement = jQuery(this._element);
        kElement.data(this.widgetName).destroy();
        kElement.empty();
    }
};

function createCommonKendoComponent(selector, widgetName) {
    @Component({
        selector: selector,
        inputs: ['bound', 'role'],
        bindings: [ElementRef]
    })
    @View({ template: '<ng-content></ng-content>' })
    class CommonComponent extends KendoComponent {
        constructor(elementRef) {
            super(elementRef, widgetName);
        }
    }
    return CommonComponent;
}

export var KendoDropDownList = createCommonKendoComponent('[data-role=dropdownlist]', 'kendoDropDownList');
export var KendoDatePicker = createCommonKendoComponent('[data-role=datepicker]', 'kendoDatePicker');
export var KendoAutoComplete = createCommonKendoComponent('[data-role=autocomplete]', 'kendoAutoComplete');
export var KendoButton = createCommonKendoComponent('[data-role=button]', 'kendoButton');
export var KendoColorPalette = createCommonKendoComponent('[data-role=colorpalette]', 'kendoColorPalette');
export var KendoColorPicker = createCommonKendoComponent('[data-role=colorpicker]', 'kendoColorPicker');
export var KendoDateTimePicker = createCommonKendoComponent('[data-role=datetimepicker]', 'kendoDateTimePicker');
export var KendoEditor = createCommonKendoComponent('[data-role=editor]', 'kendoEditor');
export var KendoMaskedTextBox = createCommonKendoComponent('[data-role=maskedtextbox]', 'kendoMaskedTextBox');
export var KendoMultiSelect = createCommonKendoComponent('[data-role=multiselect]', 'kendoMultiSelect');
export var KendoNumericTextBox = createCommonKendoComponent('[data-role=numerictextbox]', 'kendoNumericTextBox');
export var KendoSlider = createCommonKendoComponent('[data-role=slider]', 'kendoSlider');
export var KendoTimePicker = createCommonKendoComponent('[data-role=timepicker]', 'kendoTimePicker');
export var KendoUpload = createCommonKendoComponent('[data-role=upload]', 'kendoUpload');
export var KendoMobileSwitch = createCommonKendoComponent('[data-role=mobileswitch]', 'kendoMobileSwitch');
export var KendoMobileButtonGroup = createCommonKendoComponent('[data-role=mobilebuttongroup]', 'kendoMobileButtonGroup');
export var KendoMenu = createCommonKendoComponent('[data-role=menu]', 'kendoMenu');
export var KendoPanelBar = createCommonKendoComponent('[data-role=panelbar]', 'kendoPanelBar');
export var KendoTabStrip = createCommonKendoComponent('[data-role=tabstrip]', 'kendoTabStrip');
export var KendoToolBar = createCommonKendoComponent('[data-role=toolbar]', 'kendoToolBar');
export var KendoTreeView = createCommonKendoComponent('[data-role=treeview]', 'kendoTreeView');
export var KendoCalendar = createCommonKendoComponent('[data-role=calendar]', 'kendoCalendar');
export var KendoGantt = createCommonKendoComponent('[data-role=gantt]', 'kendoGantt');
export var KendoScheduler = createCommonKendoComponent('[data-role=scheduler]', 'kendoScheduler');
export var KendoGrid = createCommonKendoComponent('[data-role=grid]', 'kendoGrid');
export var KendoListView = createCommonKendoComponent('[data-role=listview]', 'kendoListView');
export var KendoPager = createCommonKendoComponent('[data-role=pager]', 'kendoPager');
export var KendoPivotGrid = createCommonKendoComponent('[data-role=pivotgrid]', 'kendoPivotGrid');
export var KendoPivotConfigurator = createCommonKendoComponent('[data-role=pivotconfigurator]', 'kendoPivotConfigurator');
export var KendoTreeList = createCommonKendoComponent('[data-role=treelist]', 'kendoTreeList');
export var KendoNotification = createCommonKendoComponent('[data-role=notification]', 'kendoNotification');
export var KendoResponsivePanel = createCommonKendoComponent('[data-role=responsivepanel]', 'kendoResponsivePanel');
export var KendoSplitter = createCommonKendoComponent('[data-role=splitter]', 'kendoSplitter');
export var KendoToolTip = createCommonKendoComponent('[data-role=tooltip]', 'kendoToolTip');
export var KendoWindow = createCommonKendoComponent('[data-role=window]', 'kendoWindow');
export var KendoDraggable = createCommonKendoComponent('[data-role=draggable]', 'kendoDraggable');
export var KendoDropTarget = createCommonKendoComponent('[data-role=droptarget]', 'kendoDropTarget');
export var KendoProgressBar = createCommonKendoComponent('[data-role=progressbar]', 'kendoProgressBar');
export var KendoSortable = createCommonKendoComponent('[data-role=sortable]', 'kendoSortable');
export var KendoChart = createCommonKendoComponent('[data-role=chart]', 'kendoChart');
export var KendoBarCode = createCommonKendoComponent('[data-role=barcode]', 'kendoBarCode');
export var KendoQRCode = createCommonKendoComponent('[data-role=qrcode]', 'kendoQRCode');
export var KendoLinearGuage = createCommonKendoComponent('[data-role=linearguage]', 'kendoLinearGuage');
export var KendoRadialGuage = createCommonKendoComponent('[data-role=radialguage]', 'kendoRadialGuage');
export var KendoDiagram = createCommonKendoComponent('[data-role=diagram]', 'kendoDiagram');
export var KendoMap = createCommonKendoComponent('[data-role=map]', 'kendoMap');
export var KendoFlatColorPicker = createCommonKendoComponent('[data-role=flatcolorpicker]', 'kendoFlatColorPicker');
