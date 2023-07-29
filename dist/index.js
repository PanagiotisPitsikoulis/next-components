var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $8zHUo$clsx = require("clsx");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Button", () => $d67f68b8df7d1df6$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Card", () => $b922c36250a6f196$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Container", () => $052cd77d16d62ab7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Divider", () => $e0f25fcf16597f1e$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Grid", () => $6e6735cb03252cce$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Label", () => $d1ac4c5e8da72cfd$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Spacer", () => $68217b94a7e4ecfc$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Stack", () => $1764a23a1c6df6da$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Toggle", () => $8dd5be16b148ae07$export$2e2bcd8739ae039);
$parcel$export(module.exports, "TextBox", () => $229b564f054b7a00$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ScrollList", () => $ce63594200d0161b$export$2e2bcd8739ae039);
$parcel$export(module.exports, "List", () => $9e5e06ba5cd39cf2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ButtonGroup", () => $55f8998caafec448$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Navbar", () => $6e832f60bfa53e79$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Sidebar", () => $903c66bc1030d345$export$2e2bcd8739ae039);
$parcel$export(module.exports, "HomePage", () => $130e841ed1309efd$export$2e2bcd8739ae039);



function $d67f68b8df7d1df6$var$Button({ children: children, variant: variant = "primary", className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
        className: className,
        children: [
            variant === "primary" && /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
                className: "rounded-inner transition:all bg-base-200 hover:bg-base-200/70 ease-in-out",
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $d1ac4c5e8da72cfd$export$2e2bcd8739ae039), {
                    borderVisible: true,
                    divider: true,
                    children: children
                })
            }),
            variant === "secondary" && /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
                className: "rounded-inner transition:all bg-base-100 hover:bg-base-100/70 ease-in-out",
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $d1ac4c5e8da72cfd$export$2e2bcd8739ae039), {
                    borderVisible: false,
                    divider: false,
                    children: children
                })
            }),
            variant === "tertiary" && /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
                className: "rounded-inner transition:all bg-base-200 hover:bg-base-100/30 text-muted hover:text-normal ease-in-out",
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $d1ac4c5e8da72cfd$export$2e2bcd8739ae039), {
                    borderVisible: false,
                    divider: false,
                    children: children
                })
            })
        ]
    });
}
var $d67f68b8df7d1df6$export$2e2bcd8739ae039 = $d67f68b8df7d1df6$var$Button;






function $b922c36250a6f196$var$Card({ children: children, size: size, imageVisible: imageVisible = true, borderVisible: borderVisible = true, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                "w-36": size === "sm"
            }, {
                "w-48": size === "md"
            }, "shrink-0"),
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $052cd77d16d62ab7$export$2e2bcd8739ae039), {
                borderVisible: borderVisible,
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                    dir: "y",
                    gap: "item",
                    children: [
                        imageVisible && /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                            className: (0, ($parcel$interopDefault($8zHUo$clsx)))("bg-base-200", "w-full", {
                                "h-36": size === "sm"
                            }, {
                                "h-72": size === "md"
                            }, {
                                "rounded-t-inner": borderVisible
                            }, {
                                "rounded-inner": !borderVisible
                            })
                        }),
                        !imageVisible && /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $68217b94a7e4ecfc$export$2e2bcd8739ae039), {
                            dir: "x",
                            margin: "item"
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                            className: "px-item",
                            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $229b564f054b7a00$export$2e2bcd8739ae039), {
                                prominent: size === "md",
                                children: children
                            })
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $68217b94a7e4ecfc$export$2e2bcd8739ae039), {
                            dir: "x",
                            margin: "item"
                        })
                    ]
                })
            })
        })
    });
}
var $b922c36250a6f196$export$2e2bcd8739ae039 = $b922c36250a6f196$var$Card;





const $052cd77d16d62ab7$var$Container = ({ children: children, padding: padding, borderVisible: borderVisible = true, center: center, className: className })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                border: borderVisible
            }, "rounded-outer rounded-t-[0.46rem]", "border-base-300", {
                "flex justify-center items-center": center
            }),
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                    "px-component py-item": padding === "component"
                }, {
                    "p-page": padding === "page"
                }, {
                    "p-item": padding === "item"
                }),
                children: children
            })
        })
    });
};
var $052cd77d16d62ab7$export$2e2bcd8739ae039 = $052cd77d16d62ab7$var$Container;




function $e0f25fcf16597f1e$var$Divider({ dir: dir = "x", margin: margin = "none", size: size = "md", className: className }) {
    const dividerSmallY = (0, ($parcel$interopDefault($8zHUo$clsx)))("w-px h-sm");
    const dividerMediumY = (0, ($parcel$interopDefault($8zHUo$clsx)))("w-px h-md");
    const dividerLargeY = (0, ($parcel$interopDefault($8zHUo$clsx)))("w-px h-lg");
    const dividerFullY = (0, ($parcel$interopDefault($8zHUo$clsx)))("w-px h-full");
    const dividerSmallX = (0, ($parcel$interopDefault($8zHUo$clsx)))("w-sm h-px");
    const dividerMediumX = (0, ($parcel$interopDefault($8zHUo$clsx)))("w-md h-px");
    const dividerLargeX = (0, ($parcel$interopDefault($8zHUo$clsx)))("w-lg h-px");
    const dividerFullX = (0, ($parcel$interopDefault($8zHUo$clsx)))("w-full h-px");
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                [dividerSmallY]: size === "sm" && dir === "y"
            }, {
                [dividerMediumY]: size === "md" && dir === "y"
            }, {
                [dividerLargeY]: size === "lg" && dir === "y"
            }, {
                [dividerFullY]: size === "full" && dir === "y"
            }, {
                [dividerSmallX]: size === "sm" && dir === "x"
            }, {
                [dividerMediumX]: size === "md" && dir === "x"
            }, {
                [dividerLargeX]: size === "lg" && dir === "x"
            }, {
                [dividerFullX]: size === "full" && dir === "x"
            }, {
                [`mx-${margin}`]: dir === "y"
            }, {
                [`my-${margin}`]: dir === "x"
            }, "bg-base-300", "rounded-full")
        })
    });
}
var $e0f25fcf16597f1e$export$2e2bcd8739ae039 = $e0f25fcf16597f1e$var$Divider;





function $6e6735cb03252cce$var$Grid({ children: children, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $8zHUo$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                className: className
            }),
            children: children
        })
    });
}
var $6e6735cb03252cce$export$2e2bcd8739ae039 = $6e6735cb03252cce$var$Grid;






function $d1ac4c5e8da72cfd$var$Label({ children: children, divider: divider, borderVisible: borderVisible, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))("text-md select-none group"),
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $052cd77d16d62ab7$export$2e2bcd8739ae039), {
                padding: "component",
                borderVisible: borderVisible,
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                    gap: "item",
                    dir: "x",
                    center: true,
                    children: [
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                            className: (0, ($parcel$interopDefault($8zHUo$clsx)))("text-normal", {}),
                            children: children[0]
                        }),
                        divider && /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $e0f25fcf16597f1e$export$2e2bcd8739ae039), {
                            margin: "item",
                            size: "sm",
                            dir: "y"
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                            children: children[1]
                        })
                    ]
                })
            })
        })
    });
}
var $d1ac4c5e8da72cfd$export$2e2bcd8739ae039 = $d1ac4c5e8da72cfd$var$Label;




function $68217b94a7e4ecfc$var$Spacer({ dir: dir = "x", margin: margin = "none", className: className }) {
    const marginNone = (0, ($parcel$interopDefault($8zHUo$clsx)))("m-0");
    const marginItemX = (0, ($parcel$interopDefault($8zHUo$clsx)))("mx-item");
    const marginComponentX = (0, ($parcel$interopDefault($8zHUo$clsx)))("mx-component");
    const marginPageX = (0, ($parcel$interopDefault($8zHUo$clsx)))("mx-page");
    const marginItemY = (0, ($parcel$interopDefault($8zHUo$clsx)))("my-item");
    const marginComponentY = (0, ($parcel$interopDefault($8zHUo$clsx)))("my-component");
    const marginPageY = (0, ($parcel$interopDefault($8zHUo$clsx)))("my-page");
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                "w-px h-px": dir === "x"
            }, {
                "w-px h-px": dir === "y"
            }, {
                [marginNone]: margin === "none"
            }, {
                [marginItemX]: margin === "item" && dir === "x"
            }, {
                [marginComponentX]: margin === "component" && dir === "x"
            }, {
                [marginPageX]: margin === "page" && dir === "x"
            }, {
                [marginItemY]: margin === "item" && dir === "y"
            }, {
                [marginComponentY]: margin === "component" && dir === "y"
            }, {
                [marginPageY]: margin === "page" && dir === "y"
            }, {
                className: className
            })
        })
    });
}
var $68217b94a7e4ecfc$export$2e2bcd8739ae039 = $68217b94a7e4ecfc$var$Spacer;





function $1764a23a1c6df6da$var$Stack({ children: children, dir: dir = "x", gap: gap = "component", center: center = false, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))("flex", {
                "items-center": center
            }, {
                "justify-between": gap === "full"
            }, {
                "flex-row": dir === "x"
            }, {
                "flex-col": dir === "y"
            }, {
                "gap-page": gap === "page"
            }, {
                "gap-component": gap === "component"
            }, {
                "gap-item": gap === "item"
            }, {
                "gap-0": gap === "none"
            }),
            children: children
        })
    });
}
var $1764a23a1c6df6da$export$2e2bcd8739ae039 = $1764a23a1c6df6da$var$Stack;






function $8dd5be16b148ae07$var$Toggle({ children: children, activeChild: activeChild, borderVisible: borderVisible, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $052cd77d16d62ab7$export$2e2bcd8739ae039), {
            borderVisible: borderVisible,
            center: true,
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                    "p-item text-muted text-center": true
                }),
                children: [
                    activeChild === 0 && children[0],
                    activeChild === 1 && children[1]
                ]
            })
        })
    });
}
var $8dd5be16b148ae07$export$2e2bcd8739ae039 = $8dd5be16b148ae07$var$Toggle;





function $229b564f054b7a00$var$TextBox({ children: children, prominent: prominent = false, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                    className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                        "text-lg text-focus leading-none": prominent
                    }, {
                        "text-sm text-normal leading-none": !prominent
                    }),
                    children: children[0]
                }),
                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                    className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                        "text-sm text-muted leading-6": prominent
                    }, {
                        "text-xs text-muted leading-4": !prominent
                    }),
                    children: children[1]
                })
            ]
        })
    });
}
var $229b564f054b7a00$export$2e2bcd8739ae039 = $229b564f054b7a00$var$TextBox;






function $ce63594200d0161b$var$ScrollList({ children: children, size: size, title: title, description: description, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
            dir: "y",
            gap: "component",
            children: [
                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $229b564f054b7a00$export$2e2bcd8739ae039), {
                    prominent: size === "md",
                    children: [
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("h1", {
                            children: title
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $e0f25fcf16597f1e$export$2e2bcd8739ae039), {
                    dir: "x",
                    size: "full"
                }),
                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                    className: (0, ($parcel$interopDefault($8zHUo$clsx)))("flex flex-row gap-5 overflow-x-auto scrollbar-custom", "w-full", "pb-3"),
                    children: children
                })
            ]
        })
    });
}
var $ce63594200d0161b$export$2e2bcd8739ae039 = $ce63594200d0161b$var$ScrollList;






function $55f8998caafec448$var$ButtonGroup({ children: children, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                "bg-base-200 p-1.5 rounded-outer w-fit text-sm": true
            }),
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                dir: "x",
                gap: "item",
                children: children
            })
        })
    });
}
var $55f8998caafec448$export$2e2bcd8739ae039 = $55f8998caafec448$var$ButtonGroup;





function $9e5e06ba5cd39cf2$var$List({ children: children, title: title, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("h1", {
                className: "text-lg text-normal pl-1 pb-5",
                children: title
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                dir: "y",
                children: children
            })
        ]
    });
}
var $9e5e06ba5cd39cf2$export$2e2bcd8739ae039 = $9e5e06ba5cd39cf2$var$List;







function $130e841ed1309efd$var$HomePage({ children: children, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))("w-full max-sm:w-[40vh] py-component"),
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                dir: "y",
                gap: "component",
                children: [
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                        dir: "x",
                        center: true,
                        gap: "full",
                        children: [
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $55f8998caafec448$export$2e2bcd8739ae039), {
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                                        variant: "secondary",
                                        children: [
                                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                                children: "✌️"
                                            }),
                                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                                children: "Button"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                                        variant: "tertiary",
                                        children: [
                                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                                children: "✌️"
                                            }),
                                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                                children: "Button"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                                        variant: "tertiary",
                                        className: "max-sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                                children: "✌️"
                                            }),
                                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                                children: "Button"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                                variant: "primary",
                                className: "max-sm:hidden",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "\uD83D\uDC49"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        className: "text-muted",
                                        children: "Click me"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $e0f25fcf16597f1e$export$2e2bcd8739ae039), {
                        dir: "x",
                        size: "full"
                    }),
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $ce63594200d0161b$export$2e2bcd8739ae039), {
                        description: "Top picks for you. Updated daily.",
                        size: "md",
                        title: "Listen now",
                        children: [
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "md",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $ce63594200d0161b$export$2e2bcd8739ae039), {
                        title: "Made for you.",
                        size: "sm",
                        description: "Your personal playlists. Updated daily.",
                        children: [
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $b922c36250a6f196$export$2e2bcd8739ae039), {
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "This is a card component"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                        children: "Card description"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
var $130e841ed1309efd$export$2e2bcd8739ae039 = $130e841ed1309efd$var$HomePage;






function $903c66bc1030d345$var$Sidebar({ children: children, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
            className: (0, ($parcel$interopDefault($8zHUo$clsx)))({
                "w-page h-[90vh] border-r-2 border-base-200/50 backdrop-blur-xl px-2": true
            }),
            children: [
                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $68217b94a7e4ecfc$export$2e2bcd8739ae039), {
                    dir: "y",
                    margin: "item"
                }),
                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                    dir: "y",
                    gap: "component",
                    children: [
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $229b564f054b7a00$export$2e2bcd8739ae039), {
                            prominent: true,
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Good morning,"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "This is the sidebar."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $e0f25fcf16597f1e$export$2e2bcd8739ae039), {
                            size: "full",
                            dir: "x",
                            className: "-mx-2"
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $229b564f054b7a00$export$2e2bcd8739ae039), {
                            prominent: true,
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "More options,"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Less important."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $e0f25fcf16597f1e$export$2e2bcd8739ae039), {
                            size: "full",
                            dir: "x",
                            className: "-mx-2"
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $229b564f054b7a00$export$2e2bcd8739ae039), {
                            prominent: true,
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "More options,"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Less important."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                            variant: "primary",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "\uD83D\uDC4B"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                    children: "Item"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
var $903c66bc1030d345$export$2e2bcd8739ae039 = $903c66bc1030d345$var$Sidebar;





function $6e832f60bfa53e79$var$Navbar({ children: children, className: className }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: "fixed top-0 left-0 right-0",
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                className: "w-full bg-base-200/20 border-b-2 border-base-300 backdrop-blur-lg py-2 px-component text-muted",
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                    dir: "x",
                    gap: "full",
                    center: true,
                    children: [
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                            dir: "x",
                            gap: "component",
                            center: true,
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                                    className: "w-14 md:w-96 h-14 bg-base-300 rounded-outer"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                                    variant: "primary",
                                    className: "max-sm:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                            children: "\uD83D\uDC4B"
                                        }),
                                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                            children: "Item"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                                    variant: "primary",
                                    className: "max-sm:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                            children: "\uD83D\uDC4B"
                                        }),
                                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                            children: "Item"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $d67f68b8df7d1df6$export$2e2bcd8739ae039), {
                                    variant: "primary",
                                    className: "max-sm:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                            children: "\uD83D\uDC4B"
                                        }),
                                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("p", {
                                            children: "Item"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $1764a23a1c6df6da$export$2e2bcd8739ae039), {
                            dir: "x",
                            gap: "component",
                            children: [
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                                    className: "rounded-full bg-base-300 h-12 w-80 max-sm:hidden"
                                }),
                                /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                                    className: "bg-base-300 rounded-full w-11 h-11"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
var $6e832f60bfa53e79$export$2e2bcd8739ae039 = $6e832f60bfa53e79$var$Navbar;






//# sourceMappingURL=index.js.map
