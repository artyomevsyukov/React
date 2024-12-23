import { configureStore } from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@2.5.0/+esm"
import reducer from "./reduser.js"

export default configureStore({ reducer: reducer })
