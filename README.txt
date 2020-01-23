******README*******

KEY FEATURES:
-Standard and Scientific calculator

ABOUT:

The calculator is comprised of two "button-groups" one for the standard buttons and one for the scientific buttons. The scientific buttons are hidden by default. And can be displayed by clicking the arrow tab on the button or side of the calculator depending if you are viewing the calculator on mobile or desktop. When you press a button, the value that is displayed on the button will be added to the "Active display" or the bottom display. When you press "=" the evaluated equation will be shown in the "active display".

HOW IT WORKS:
Each button has it's own object associated with it that is initialized using the class 'Button' found in button.model.ts. These objects are initialized using arrays found in button-values.ts. These objects contain two properties:

DisplayValue: The value that is displayed in the UI on it's respective button.
OutputValue: The value that is passed for the calculation when the button is pressed.

When a button is pressed on the UI, The button object of the respective button's object is passed to the calculatorService. The calculatorService emits that button using a subject which the "display" component is subscribed to. Depending on the Button.buttonOuput value, the value is either added to the existing string in the "activeDisplay", or method is executed (such as calculate or clear). To calculate the string in "activeDisplay", eval() is used. Although using eval() is usually considered bad practice, here it doesn't present any security threat since this is soley a client side app.

Thanks for using my app!







