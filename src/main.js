import "~/styles/helpers/resetNew.scss"
import "~/styles/helpers/animations.scss"
import "~/styles/helpers/moving-objects.scss"
import "~/styles/ui/index.scss"

import { createRoot } from "react-dom/client"

import React from "react"
import App from "./App.jsx"

const root = createRoot(document.getElementById("page-container"))

root.render(<App />)
