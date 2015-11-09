webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(541);


/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _angular2Angular2 = __webpack_require__(16);
	
	var KendoComponent = (function () {
	    _createClass(KendoComponent, null, [{
	        key: 'parameters',
	        get: function get() {
	            return [[_angular2Angular2.ElementRef]];
	        }
	    }]);
	
	    function KendoComponent(elementRef) {
	        _classCallCheck(this, _KendoComponent);
	
	        this._element = $(elementRef.nativeElement).find('input')[0];
	        console.log('Keeping it on 2');
	        //this.bound = {};
	        //this.role = '';
	        //this.test = 0;
	    }
	
	    _createClass(KendoComponent, [{
	        key: 'render',
	        value: function render() {
	            console.log('Rendering!!!', this.role, this._widgetName);
	            this._kWidget = jQuery(this._element)[this._widgetName](this.bound);
	            for (var key in this._kWidget) {
	                //TODO: check prototype stuff
	                this._kendoKeys.push(key);
	            }
	        }
	    }, {
	        key: 'afterContentInit',
	        value: function afterContentInit() {
	            console.log('after1');
	        }
	    }, {
	        key: 'afterContentChecked',
	        value: function afterContentChecked() {
	            console.log('afterContentChecked');
	        }
	    }, {
	        key: 'afterViewInit',
	        value: function afterViewInit() {
	            console.log('afterViewinit');
	        }
	    }, {
	        key: 'afterViewChecked',
	        value: function afterViewChecked() {
	            console.log('afterViewchecked');
	        }
	    }, {
	        key: 'onChanges',
	        value: function onChanges(changes) {
	            console.log('onChanging!!');
	            if (!this._widgetName) {
	                this.initialize();
	            }
	            if (changes.bound) {
	                outer: for (var propKey in changes.bound) {
	                    //TODO: yadda
	                    for (var kendoKeyIndex = 0; kendoKeyIndex < this._kendoKeys.length; kendoKeyIndex++) {
	                        var kendoKey = this._kendoKeys[kendoKeyIndex];
	                        if (propKey === kendoKey) {
	                            if (type(this._kWidget[kendoKey]) === 'Function') {
	                                this._kWidget[kendoKey](changes.bound[propKey]);
	                            }
	                            continue outer;
	                        }
	                    }
	                }
	            }
	            this.render();
	        }
	    }, {
	        key: 'doCheck',
	        value: function doCheck() {
	            console.log('docheck');
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize() {
	            this._kendoKeys = [];
	            if (this.role) {
	                for (var widget in kendo.ui) {
	                    if (widget.toUpperCase() === this.role.toUpperCase()) {
	                        this._widgetName = 'kendo' + widget;
	                    }
	                }
	            } else {
	                console.error('Expected role to be truthy!?');
	            }
	            if (!this._widgetName) {
	                //throw 'Could not find widget for ' + this.role + ' or role not specified.';
	                console.error('Could not find widget');
	            } else {
	                console.log('Rendering as', this._widgetName);
	                this.render();
	            }
	        }
	    }, {
	        key: 'onInit',
	        value: function onInit() {
	            this.initialize();
	        }
	    }, {
	        key: 'onCheck',
	        value: function onCheck() {
	            console.log('oncheck');
	        }
	    }, {
	        key: 'onAllChangesDone',
	        value: function onAllChangesDone() {
	            console.log('onallchangesdone');
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(changes) {}
	    }, {
	        key: 'onDestroy',
	        value: function onDestroy() {
	            var kElement = jQuery(this._element);
	            kElement.data(this._widgetName).destroy();
	            kElement.empty();
	        }
	    }]);
	
	    var _KendoComponent = KendoComponent;
	    KendoComponent = (0, _angular2Angular2.View)({
	        template: '<input type="text" />'
	    })(KendoComponent) || KendoComponent;
	    KendoComponent = (0, _angular2Angular2.Component)({
	        selector: 'kendocomponent',
	        inputs: ['bound', 'role'],
	        bindings: [_angular2Angular2.ElementRef]
	    })(KendoComponent) || KendoComponent;
	    return KendoComponent;
	})();
	
	exports.KendoComponent = KendoComponent;
	;

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _angular2Angular2 = __webpack_require__(16);
	
	var _KendoComponentEs6 = __webpack_require__(540);
	
	var AppComponent = (function () {
	    function AppComponent() {
	        _classCallCheck(this, _AppComponent);
	
	        this.options = [{ text: 'Foo', value: '1' }, { text: 'Bar', value: '2' }, { text: 'Bazz', value: '3' }];
	        this.selectedValue = '1';
	        this.onDropDownChange = this.onDropDownChange.bind(this);
	    }
	
	    _createClass(AppComponent, [{
	        key: 'onDropDownChange',
	        value: function onDropDownChange(e) {
	            this.selectedValue = e.sender.value();
	        }
	    }, {
	        key: 'selectBar',
	        value: function selectBar(boundStuff) {
	            this.selectedValue = '2';
	        }
	    }]);
	
	    var _AppComponent = AppComponent;
	    AppComponent = (0, _angular2Angular2.View)({
	        template: '\n    <div>\n        <kendocomponent [bound]="{dataSource: options,\n            dataTextField: \'text\',\n            dataValueField: \'value\',\n            index: 0,\n            change: onDropDownChange,\n            value: selectedValue }"\n         [role]="\'dropdownlist\'"></kendocomponent>\n    </div>\n    <div>\n        <div>Currently selected value : {{selectedValue}}</div>\n        <button (click)="selectBar()">Select Bar</button>\n    </div>\n    ',
	        directives: [_KendoComponentEs6.KendoComponent]
	    })(AppComponent) || AppComponent;
	    AppComponent = (0, _angular2Angular2.Component)({
	        selector: 'my-app'
	    })(AppComponent) || AppComponent;
	    return AppComponent;
	})();
	
	document.addEventListener('DOMContentLoaded', function () {
	    (0, _angular2Angular2.bootstrap)(AppComponent);
	});

/***/ }

});
//# sourceMappingURL=app.js.map