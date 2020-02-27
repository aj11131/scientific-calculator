DEMO: https://scientific-calculator11131.netlify.com/

USAGE: Calculator with standard and scientific interface.

CALCULATIONS: To calculate input, the string that appears in the calculator display is passed to a formatting function that uses regular expressions to replace functions such as sin() with Math.sin(). This formatting function also handles different muliplication scenarios such as multplication using parenthesis and multiplication of a numbers situated by a letter/symbol ie. (2)(3) and 2π. The formatted string is then evaluated. If there are nested calculator functions such as sin(cos()), the formatting function is called recursively and the inner function is evaluated and then the outer function.

BUTTONS: The calculator buttons are displayed using a reusable button component and NgFor. The button objects are initialized using an array of values that hold the button data.

DEG/RAD: How the trigonometric functions are calculated can be toggled between degrees and radians using the switch located near the main display.

# AngularCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
