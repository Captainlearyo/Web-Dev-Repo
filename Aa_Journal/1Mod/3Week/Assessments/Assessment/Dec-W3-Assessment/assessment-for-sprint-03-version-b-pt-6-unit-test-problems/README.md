# Unit Test Problems

## Clone the GitHub Repository

Clone the GitHub repository from the button at the bottom of the page.

If you get a `404` error when accessing that link, then you must contact your
PTM as soon as possible with the following message:

```plaintext
Hello, I cannot access the assessment project link.
My github username is <insert your username here>.
```

## Usage

1. Rename the folder to `firstname-lastname-sprint-3-pt-6-unit-test-problems`. For
   example, if your name is "Jane Doe", then name your folder
   `jane-doe-sprint-3-pt-6-unit-test-problems`
2. `cd` into the folder and `npm install` to install dependencies
3. `npm test` to run all specs
4. Your objective is to implement the functions in `/problems` to pass all specs

You can run a single file to test with `npm test test/<spec file name>`.

```sh
npm test test/01-dynamic-cipher-spec.js
npm test test/02-thunderstorm-spec.js
```

Make sure that you are passing all the specs by running `npm test` before
submitting.

## Submission

When you are ready to submit:

1. Re-run all unit tests and fix any syntax errors that are crashing the tests. If
the unit tests crash, or do not run, you will receive a zero for the coding
portion of the assessment
2. Delete the `node_modules` directory
3. Zip up your folder
4. Upload it