import * as tslib_1 from "tslib";
import * as React from 'react';
import { FunctionalRadioButton } from './FunctionalRadioButton';
import './styles/radioGroup.css';
var RadioGroup = /** @class */ (function (_super) {
    tslib_1.__extends(RadioGroup, _super);
    function RadioGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            choosedItem: _this.props.value
        };
        return _this;
    }
    RadioGroup.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "radio-button-group" }, React.Children.map(this.props.children, function (child) {
            return React.createElement(FunctionalRadioButton, { children: child.props.children, value: child.props.value, choosed: _this.isChoosed(child.props.value), onClick: function () { return _this.onChange(child.props.value); } });
        })));
    };
    RadioGroup.prototype.onChange = function (value) {
        this.setState({
            choosedItem: value
        });
        this.props.onChanged(value);
    };
    RadioGroup.prototype.isChoosed = function (value) {
        return this.state.choosedItem === value;
    };
    return RadioGroup;
}(React.Component));
export { RadioGroup };
//# sourceMappingURL=radioGroup.js.map