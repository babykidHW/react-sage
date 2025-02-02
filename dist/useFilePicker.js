"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFilePicker = void 0;
var React = __importStar(require("react"));
var utils_1 = require("./utils");
var BYTES_PER_MEGABYTE = 1000000;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
var useFilePicker = function (options) {
    if (options === void 0) { options = {}; }
    var minFileSize = options.minFileSize, maxFileSize = options.maxFileSize, minImageWidth = options.minImageWidth, maxImageWidth = options.maxImageWidth, minImageHeight = options.minImageHeight, maxImageHeight = options.maxImageHeight, resizeImage = options.resizeImage, imageQuality = options.imageQuality;
    var fileInputRef = React.useRef(null);
    var _a = React.useState([]), files = _a[0], setFileList = _a[1];
    var _b = React.useState({}), errors = _b[0], setError = _b[1];
    var onChange = function (fileList) { return __awaiter(void 0, void 0, void 0, function () {
        var iterableFileList, minBytes_1, tooSmall_1, maxBytes_1, tooBig_1, dims, dataUrls, images, hasImageWithInvalidDims, resizedImageBlobs, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!fileList || !fileList.length)
                        return [2 /*return*/];
                    // Scrub previous data from state
                    setError(function () { return ({}); });
                    setFileList([]);
                    iterableFileList = Array.from(fileList);
                    if (minFileSize) {
                        minBytes_1 = minFileSize * BYTES_PER_MEGABYTE;
                        tooSmall_1 = iterableFileList.some(function (file) { return file.size < minBytes_1; });
                        setError(function (prevErrors) { return (__assign(__assign({}, prevErrors), { hasInvalidFileSize: tooSmall_1 })); });
                    }
                    if (maxFileSize) {
                        maxBytes_1 = maxFileSize * BYTES_PER_MEGABYTE;
                        tooBig_1 = iterableFileList.some(function (file) { return file.size > maxBytes_1; });
                        setError(function (prevErrors) { return (__assign(__assign({}, prevErrors), { hasInvalidFileSize: tooBig_1 })); });
                    }
                    dims = {
                        minImageWidth: minImageWidth,
                        maxImageWidth: maxImageWidth,
                        minImageHeight: minImageHeight,
                        maxImageHeight: maxImageHeight
                    };
                    if (!Object.values(dims).some(Boolean)) return [3 /*break*/, 8];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, Promise.all(iterableFileList.map(utils_1.loadFile))];
                case 2:
                    dataUrls = _a.sent();
                    return [4 /*yield*/, Promise.all(dataUrls.map(utils_1.loadImage))];
                case 3:
                    images = _a.sent();
                    hasImageWithInvalidDims = images.some(function (image) { return !utils_1.areImageDimsValid(image, dims); });
                    if (!((hasImageWithInvalidDims && resizeImage) || (!hasImageWithInvalidDims && imageQuality))) return [3 /*break*/, 5];
                    return [4 /*yield*/, Promise.all(images.map(function (image, index) {
                            // Either we resize based on a max width/height provided by the user...
                            // Or we use the image itself and just change the quality (without scaling size).
                            var maxSize = Math.max(maxImageWidth || 0, maxImageHeight || 0) || Math.max(image.width, image.height);
                            var imageType = iterableFileList[index].type;
                            return utils_1.resizeImage(image, maxSize, imageType, imageQuality);
                        }))];
                case 4:
                    resizedImageBlobs = _a.sent();
                    iterableFileList = resizedImageBlobs.map(function (blob, index) {
                        var fileName = iterableFileList[index].name;
                        return new File([blob], fileName, {
                            lastModified: Date.now()
                        });
                    });
                    setError(function (prevErrors) { return (__assign(__assign({}, prevErrors), { hasInvalidImage: false })); });
                    return [3 /*break*/, 6];
                case 5:
                    if (hasImageWithInvalidDims) {
                        setError(function (prevErrors) { return (__assign(__assign({}, prevErrors), { hasInvalidImage: true })); });
                    }
                    else {
                        setError(function (prevErrors) { return (__assign(__assign({}, prevErrors), { hasInvalidImage: false })); });
                    }
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    err_1 = _a.sent();
                    setError(function (prevErrors) { return (__assign(__assign({}, prevErrors), { hasInvalidImage: true })); });
                    return [3 /*break*/, 8];
                case 8:
                    setFileList(iterableFileList);
                    if (fileInputRef === null || fileInputRef === void 0 ? void 0 : fileInputRef.current) {
                        fileInputRef.current.value = '';
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        files: files,
        /**
         * A dictionary of errors based on the FileInputProps passed in.
         */
        errors: errors,
        /**
         * A click handler to pass to any element that needs to trigger the
         * native file picker.
         */
        onClick: function () {
            if (fileInputRef === null || fileInputRef === void 0 ? void 0 : fileInputRef.current) {
                fileInputRef.current.click();
            }
        },
        /**
         * A hidden file input element that must be rendered somewhere on the same page
         * as where the hook is used. This hidden file input is used to toggle open the
         * native file picker. However, it remains hidden otherwise in order to avoid the
         * native file picker input UI, which is generally undesirable and not easily
         * customizable. However, you may still pass any native file input props to this
         * hidden one in order to fine-tune your file picking needs.
         */
        HiddenFileInput: function (_a) {
            var multiple = _a.multiple, accept = _a.accept, capture = _a.capture;
            return (React.createElement("input", { type: "file", ref: fileInputRef, multiple: multiple, accept: accept, capture: capture, style: { display: 'none' }, onChange: function (evt) {
                    var target = evt.target;
                    onChange(target.files);
                } }));
        }
    };
};
exports.useFilePicker = useFilePicker;
