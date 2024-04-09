# Multi Step Form - Level 1

Below, you'll find the instructions for getting started with your task. Please read them carefully to avoid unexpected issues. Best of luck!

## Time estimate

Between 30 minutes to 1.5 hours, plus the time to set up the codebase.

## Mandatory steps before you get started

1. Set up your codebase according to [either of the outlined options](https://help.alvalabs.io/en/articles/9028914-how-to-set-up-the-codebase-for-your-coding-test) for your coding test.
2. Learn [how to get help](https://help.alvalabs.io/en/articles/9028899-how-to-ask-for-help-with-coding-tests) if you run into an issue with your coding test.

## The task

<!--TASK_INSTRUCTIONS_START-->
Your task is to build a ticket-ordering frontend app that:

1. Collects user input.
1. Preserves the state between steps.
1. Displays the collected information in the last step.
1. Makes the provided E2E tests pass.

Please agree with your hiring team regarding the tech stack choice.

Here's the mockup with hints:

<img width="750" alt="Mockup with hints" src="https://user-images.githubusercontent.com/1162212/138476002-0be62ddc-3ff5-4450-a7e1-52c47500660f.png">

Feel free to tweak the UI, but please ensure that the following HTML is in place.

### Navigation elements

Each screen of the application contains navigation links. There should be a link to every step of the wizard form. Each step of the form should also contain the "Submit" and "Back" buttons.

We use `data-testid` attributes to identify those elements, so make sure you provide them.

### The form steps

The inputs on the form steps should have the following `data-testid` attributes:

#### Step 1

```html
<form ...>
<input data-testid="firstName" ... />
<input data-testid="lastName" ... />
<input data-testid="age" ... />
<button data-testid="submit" />
</form>
```

#### Step 2

```html
<form ...>
<input data-testid="phone" ... />
<input data-testid="email" ... />
<button data-testid="submit" />
<button data-testid="back" />
</form>
```

#### Step 3

```html
<form ...>
<input data-testid="seat" ... />
<input data-testid="food" ... />
<input data-testid="allergies" ... />
<button data-testid="submit" />
<button data-testid="back" />
</form>
```

#### Result

On the results page, we expect to see the values collected by the form.
Each element containing the value should have a `data-testid` field with the corresponding `field name`:

```html
<div data-testid="<field name>">value</div>
<button data-testid="back" />
```

> Here, we use `div` as an example element. In your application, it can be a `tr`, `span`, or any other element.

### Solution expectations

- Do your best to make the [provided E2E tests](cypress/e2e/test.cy.js) pass. Check out [this tutorial](https://help.alvalabs.io/en/articles/9028831-how-to-work-with-cypress) to learn how to execute these tests and analyze the results.

<!--TASK_INSTRUCTIONS_END-->
## When you are done

[Create a new Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) from the branch where you've committed your solution code to the default branch of this repository. **Please do not merge the created Pull Request**.

---

Authored by [Alva Labs](https://www.alvalabs.io/).
