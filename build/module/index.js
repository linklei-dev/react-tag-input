var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from "react";
import { Tag } from "./components/Tag";
import { classSelectors } from "./utils/selectors";
var ReactTagInput = (function (_super) {
    __extends(ReactTagInput, _super);
    function ReactTagInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { input: "" };
        _this.inputRef = React.createRef();
        _this.onInputChange = function (e) {
            _this.setState({ input: e.target.value });
        };
        _this.onInputBlur = function (e) {
            if (_this.props.onBlur) {
                _this.props.onBlur(e);
            }
            else {
                _this.validAddTag();
            }
        };
        _this.onInputKeyDown = function (e) {
            var input = _this.state.input;
            var _a = _this.props, validator = _a.validator, removeOnBackspace = _a.removeOnBackspace, useAnotherCharEnter = _a.useAnotherCharEnter;
            if (e.keyCode === 13 || ((!!useAnotherCharEnter) && e.key === useAnotherCharEnter)) {
                e.preventDefault();
                _this.validAddTag();
            }
            else if (removeOnBackspace && (e.keyCode === 8 || e.keyCode === 46)) {
                if (input !== "") {
                    return;
                }
                _this.removeTag(_this.props.tags.length - 1);
            }
        };
        _this.validAddTag = function () {
            var input = _this.state.input;
            var _a = _this.props, validator = _a.validator, clearInputOnInvalid = _a.clearInputOnInvalid;
            if (input === "") {
                return;
            }
            var valid = validator !== undefined ? validator(input) : true;
            if (!valid) {
                if (clearInputOnInvalid) {
                    _this.setState({ input: '' });
                }
                return;
            }
            _this.addTag(input);
        };
        _this.addTag = function (value) {
            var tags = __spreadArrays(_this.props.tags);
            if (!tags.includes(value)) {
                if (_this.props.useAnotherCharEnter) {
                    var list = value.split(_this.props.useAnotherCharEnter);
                    list.forEach(function (item) {
                        tags.push(item);
                        _this.props.onChange(tags);
                    });
                }
                else {
                    tags.push(value);
                    _this.props.onChange(tags);
                }
            }
            _this.setState({ input: "" });
        };
        _this.removeTag = function (i) {
            var tags = __spreadArrays(_this.props.tags);
            tags.splice(i, 1);
            _this.props.onChange(tags);
        };
        _this.updateTag = function (i, value) {
            var tags = __spreadArrays(_this.props.tags);
            var numOccurencesOfValue = tags.reduce(function (prev, currentValue, index) { return prev + (currentValue === value && index !== i ? 1 : 0); }, 0);
            if (numOccurencesOfValue > 0) {
                tags.splice(i, 1);
            }
            else {
                tags[i] = value;
            }
            _this.props.onChange(tags);
        };
        return _this;
    }
    ReactTagInput.prototype.render = function () {
        var _this = this;
        var input = this.state.input;
        var _a = this.props, tags = _a.tags, placeholder = _a.placeholder, maxTags = _a.maxTags, editable = _a.editable, readOnly = _a.readOnly, validator = _a.validator, removeOnBackspace = _a.removeOnBackspace;
        var maxTagsReached = maxTags !== undefined ? tags.length >= maxTags : false;
        var isEditable = readOnly ? false : (editable || false);
        var showInput = !readOnly && !maxTagsReached;
        return (React.createElement("div", __assign({ className: classSelectors.wrapper }, this.props.containerProps),
            tags.map(function (tag, i) { return (React.createElement(Tag, { key: i, value: tag, index: i, editable: isEditable, readOnly: readOnly || false, inputRef: _this.inputRef, update: _this.updateTag, remove: _this.removeTag, validator: validator, removeOnBackspace: removeOnBackspace })); }),
            showInput &&
                React.createElement("input", __assign({ ref: this.inputRef, value: input, className: classSelectors.input, placeholder: placeholder || "Type and press enter", onChange: this.onInputChange, onKeyDown: this.onInputKeyDown, onBlur: this.onInputBlur }, this.props.inputProps))));
    };
    return ReactTagInput;
}(React.Component));
export default ReactTagInput;
//# sourceMappingURL=index.js.map