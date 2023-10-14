import { method } from "./methods.js"

export function createHome(){
    const home = method.createDivId("home");
    const box = method.createDivClass("blackOpaqueBox")
    home.appendChild(box);
    box.appendChild(method.createDivClass("homeText", "Amazing Delicious Food!"));
    box.appendChild(method.createButton("Order Now"));
    return home;
}
