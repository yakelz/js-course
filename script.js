const myForm = document.forms.namedItem('my-form');
/** @type { HTMLInputElement } */

if (myForm === null) {
    throw new Error ("Can't find main form");
}

// myForm? - если вернется Null то в text1Input просто будет undefined
const text1Input = myForm?.elements?.namedItem('text1');
/** @type { HTMLInputElement | undefined | null } */
const num1Input = myForm?.elements?.namedItem('num1');

/** @type { HTMLOutputElement | undefined | null } */
const output = document.querySelector('output')

console.log(output.textContent);


let text1 = '';
let num1 = 0;

myForm.addEventListener('submit',
    (event) => {

        //отменить действите по умолчанию (отправка формы)
        event.preventDefault();

        text1 = text1Input.value;
        num1 = num1Input.valueAsNumber;
        
        output.textContent = `text1 = ${text1}, num1 = ${num1}`;
    },
);