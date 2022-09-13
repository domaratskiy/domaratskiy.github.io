import {legacy_createStore as createStore} from "redux";
import { rootReducers } from "./../redusers/rootRedusers";

let store = createStore(rootReducers);

window.store = store;

export default store;

