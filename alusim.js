// inputs
const A1 = document.getElementById('A1');
const B1 = document.getElementById('B1');
const C = document.getElementById('C');
//outputs
const xor2Output = document.getElementById('xor2');
const and1Output = document.getElementById('and1');
const and2Output = document.getElementById('and2');
const orOutput = document.getElementById('or');

function updateElementsByClass(className, value) {
    document.querySelectorAll(`.${className}`).forEach(element => {
        element.textContent = value;
    });
}

function updateOutputs() {

    const a = A1.checked ? 1 : 0;
    const b = B1.checked ? 1 : 0;
    const c = C.checked ? 1 : 0;

    updateElementsByClass('a1', a);
    updateElementsByClass('b1', b);
    updateElementsByClass('c', c);

    const xor1 = a ^ b;
    const xor2 = xor1 ^ c;
    const and1 = a & b;
    const and2 = xor1 & c;
    const or = and1 | and2;

    updateElementsByClass('xor1', xor1);
    xor2Output.textContent = xor2;
    and1Output.textContent = and1;
    and2Output.textContent = and2;
    orOutput.textContent = or;

}

A1.addEventListener('change', updateOutputs);
B1.addEventListener('change', updateOutputs);
C.addEventListener('change', updateOutputs);

updateOutputs();