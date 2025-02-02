"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
/**
 * ALL CREDIT FOR THIS IMPLEMENTATION GOES TO:
 * https://usehooks-typescript.com/react-hook/use-interval
 */
var React = __importStar(require("react"));
var useInterval = function (callback, delay) {
    var savedCallback = React.useRef();
    // Remember the latest callback.
    React.useEffect(function () {
        savedCallback.current = callback;
    });
    // Set up the interval.
    React.useEffect(function () {
        function tick() {
            if (typeof (savedCallback === null || savedCallback === void 0 ? void 0 : savedCallback.current) !== 'undefined') {
                savedCallback === null || savedCallback === void 0 ? void 0 : savedCallback.current();
            }
        }
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
    }, [delay]);
};
exports.useInterval = useInterval;
