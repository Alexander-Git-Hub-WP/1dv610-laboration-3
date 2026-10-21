# TextCheck

## Vision

TextCheck helps users understand the basic characteristics of a text by presenting useful statistics in a clear and accessible interface. It is designed primarily for Swedish text (A-Z, Å, Ä and Ö) and provides an easy way to explore word counts, sentence counts, character counts and word frequency.

## Try TextCheck

Live application: https://lab355.netlify.app

## Requirements

- **R1** – Text input: The user can enter or paste Swedish text into the application. The maximum allowed input length is 500 characters.
- **R2** – Word statistics: The application displays the number of words in the submitted text.
- **R3** – Sentence statistics: The application displays the number of sentences.
- **R4** – Character statistics: The application displays the character count, including and excluding whitespace.
- **R5** – Word length analysis: The application displays the longest and shortest words.
- **R6** – Word frequency: The application displays the most common word or words. Words differing only in capitalization are treated as the same word.
- **R7** – Empty input: The application handles empty input without crashing and displays an appropiate validation error message.
- **R8** – Reset: The user can clear the input and start a new analysis.

## Language Support

TextCheck is intended to analyze Swedish text, including the Swedish characters å, ä and ö.

## Technologies

- JavaScript 
- HTML
- CSS
- Netlify for deployment

## Installation and Usage

Open the deployed application using the link in the Try TextCheck section. To run locally, follow thess steps:

1. Clone or download this repository.
2. Open a terminal in the project root.
3. Start a local HTTP server.
4. Open http://localhost:8000 in your browser.
5. Enter text in the text area and click the "Analysera text" button to display the statistics.
6. Click the "Rensa" button to clear the input and reset the results.

## Project Structure

TextCheck is a standalone application that integrates two separate modules:

**TextAnalyzer:** My own text analysis module developed in Laboratory 2, used to calculate statistics such as word counts, word lengths and word frequency.

**Form Validation Module:** Another student's module, used to validate the text input.

The application depends on both modules through their public interfaces. The modules remain independent of the application and can be developed and tested separately.

## Testing

The application has been tested manually through its user interface in a web browser. The test cases cover the requirements listed above, including text statistics, Swedish characters, capitalization, input validation and resetting the application.

See TEST_REPORT.md for the test procedures, expected results and actual outcomes.

## Known Limitations

- Input is limited to 500 characters (Unicode UTF-16).
- Text analysis is primarly intended for Swedish text.
- Repetead occurences of the longest and shortest words will be displayed multiple times, maybe not a limitation but can be good to be aware of.
- Application testing has been performed manually rather than trhough an autamed application test suite (vitest).
- The original source code for both modules is included in separate directories within this repository (their source code has not been modified as part of the integration), thus their code will not be upgraded automatically if a new upgrade of each module is released.