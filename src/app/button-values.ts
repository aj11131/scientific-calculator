import { Button } from './button.model';

const standardButtonDisplayValues = [
  'CE', '(', ')', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '='
];

const standardButtonsOutputValues = [
  'CE', '(', ')', ' % ', ' / ', '7', '8', '9', ' * ', '4', '5', '6', ' - ', '1', '2', '3', ' + ', '.', '0', '='
];

const standardClassValues = [
  'operator', 'operator', 'operator', 'operator', 'operator', 'digit', 'digit',
  'digit', 'operator', 'digit', 'digit', 'digit', 'operator', 'digit', 'digit', 'digit', 'operator', 'digit', 'digit', 'utility'
];

const scientificButtonDisplayValues = [
  'sqrt', 'sin', 'cos', 'tan', 'ln', 'log', 'e^x', 'x^2', 'x^y', 'abs', 'π', 'e'
];

const scientificButtonOutputValues = [
  'sqrt(', 'sin(', 'cos(', 'tan(', 'ln(', 'log(', 'e^', '^2', '^', 'abs(', 'π', 'e'
];

const scientificClassValues = [
  'utility', 'utility', 'utility', 'utility', 'utility', 'utility', 'utility',
  'utility', 'utility', 'utility', 'utility', 'utility'
];

export const standardButtons: Button[] = [];
export const scientificButtons: Button[] = [];

for (let i = 0; i < standardButtonDisplayValues.length; i++) {
  standardButtons.push(new Button(standardButtonDisplayValues[i], standardButtonsOutputValues[i], standardClassValues[i]));
}
for (let i = 0; i < scientificButtonDisplayValues.length; i++) {
  scientificButtons.push(new Button(scientificButtonDisplayValues[i], scientificButtonOutputValues[i], scientificClassValues[i]));
}
