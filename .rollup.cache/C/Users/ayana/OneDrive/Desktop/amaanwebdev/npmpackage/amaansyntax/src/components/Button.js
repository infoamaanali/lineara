import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
const Button = (_a) => {
    var { variant = "primary", className = "" } = _a, props = __rest(_a, ["variant", "className"]);
    const base = "px-4 py-2 rounded";
    const variantClass = variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-gray-200 text-black hover:bg-gray-300";
    return _jsx("button", Object.assign({ className: `${base} ${variantClass} ${className}` }, props));
};
export default Button;
//# sourceMappingURL=Button.js.map