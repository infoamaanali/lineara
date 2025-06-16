import { __rest } from "tslib";
import React from "react";
import clsx from "clsx";
export const Button = (_a) => {
    var { variant = "primary", className } = _a, props = __rest(_a, ["variant", "className"]);
    const base = "px-4 py-2 font-semibold rounded-xl";
    const variantClass = variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-gray-200 text-black hover:bg-gray-300";
    return <button className={clsx(base, variantClass, className)} {...props}/>;
};
//# sourceMappingURL=Button.jsx.map