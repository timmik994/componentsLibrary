import * as tslib_1 from "tslib";
import * as React from 'react';
import { RadioGroup } from './components/radioButton/radioGroup';
import { RadioButton } from './components/radioButton/radioButton';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: 'test'
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(RadioGroup, { value: "test", onChanged: function (value) { return _this.setState({ value: value }); } },
                React.createElement(RadioButton, { value: "test" }, "test"),
                React.createElement(RadioButton, { value: "test1" }, "test 1"),
                React.createElement(RadioButton, { value: "test3" }, "test 3"),
                React.createElement(RadioButton, { value: "test4" }, "test 4"),
                React.createElement(RadioButton, { value: "test5" }, "test 5")),
            React.createElement("label", null, this.state.value)));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map