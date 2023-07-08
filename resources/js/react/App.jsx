import React from "react";
import { createRoot } from "react-dom/client";
import "../../fonts/stylesheet.css";
import "../../css/app.css";

import Web from "./Web";

let container = null;
document.addEventListener("DOMContentLoaded", function (event) {
    if (!container) {
        container = document.getElementById("root");
        const root = createRoot(container);
        root.render(<Web />);
    }
});
