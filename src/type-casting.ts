// Type casting is associated with DOM manipulation in typescript. When getting an html element, it has to be specified what type of element
// that is.

const anchor = document.querySelector("a")!;
const form = document.querySelector("form")!

// exclamation mark is added to confirm that we're sure the element is not null.

// it cas also be specified what html element is picked especially when we use classes or id to select elements

const type = document.querySelector('.type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('.details') as HTMLImageElement;
const amount = document.querySelector('#amount') as HTMLHeadingElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.valueAsNumber  //using valuesNumber specifies that the value of tofrom is a number
    );
})