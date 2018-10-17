import * as tslib_1 from "tslib";
import * as React from 'react';
import './styles/radioButton.css';
var FunctionalRadioButton = /** @class */ (function (_super) {
    tslib_1.__extends(FunctionalRadioButton, _super);
    function FunctionalRadioButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FunctionalRadioButton.prototype.render = function () {
        var _this = this;
        return (React.createElement("button", { className: this.getButtonClass(), disabled: this.props.choosed, onClick: function () { return _this.props.onClick(_this.props.value); } }, this.props.children));
    };
    FunctionalRadioButton.prototype.getButtonClass = function () {
        if (this.props.choosed) {
            return 'button disabled';
        }
        else {
            return 'button';
        }
    };
    return FunctionalRadioButton;
}(React.Component));
export { FunctionalRadioButton };
//# sourceMappingURL=FunctionalRadioButton.js.map