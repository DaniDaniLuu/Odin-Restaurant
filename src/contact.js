import { method } from "./methods.js"

export function createContact(){
    const contact = method.createDivId("contact");
    const contactBox = method.createDivClass("blackOpaqueBox");
    contactBox.classList.add("contactBox");
    contact.appendChild(contactBox);
    contactBox.appendChild(method.createDiv("📞 123-456-7890"));
    contactBox.appendChild(method.createDiv("🏠 Hollywood Boulevard 42, Los Angeles, USA"))
    return contact;
}