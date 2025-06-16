import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { buttonVariants } from "./Button.variants";
export const Button = (_a) => {
    var { variant, styleType, // <-- add this
    className, children } = _a, props = __rest(_a, ["variant", "styleType", "className", "children"]);
    return (_jsx("button", Object.assign({ className: clsx(buttonVariants({ variant, styleType }), className) }, props, { children: children })));
};
//# sourceMappingURL=Button.js.map