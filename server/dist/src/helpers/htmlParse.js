"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHTML = void 0;
const parseHTML = (htmlString, selector) => {
    const html = $(htmlString);
    return [html(selector), html];
};
exports.parseHTML = parseHTML;
