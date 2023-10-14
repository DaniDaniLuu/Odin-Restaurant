const method = {
    createDivId(Id){
        const div = document.createElement('div');
        div.id = Id;
        return div;
    },

    createDivClass(Class, text){
        const div = document.createElement('div');
        div.classList.add(Class);
        div.textContent = text;
        return div;
    },

    createDiv(text){
        const div = document.createElement('div');
        div.textContent = text;
        return div;
    },

    createButton(text){
        const button = document.createElement('button');
        button.id = text;
        button.textContent = text;
        return button;
    },

    createH3(text){
        const h3 = document.createElement("h3");
        h3.textContent = text;
        return h3;
    },

    createH4(text){
        const h4 = document.createElement("h4");
        h4.textContent = text;
        return h4;
    }

}

export { method };
