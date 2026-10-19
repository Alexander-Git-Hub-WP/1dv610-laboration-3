# TextCheck

## Vision

TextCheck helps users understand the basic characteristics of a text by presenting useful statistics in a clear and accessible interface.

## Requirements

- **R1** – Text input: The user can enter or paste Swedish text into the application.
- **R2** – Word statistics: The application displays the number of words in the submitted text.
- **R3** – Sentence statistics: The application displays the number of sentences.
- **R4** – Character statistics: The application displays the character count, including whitespace.
- **R5** – Word length analysis: The application displays the longest and shortest words.
- **R6** – Word frequency: The application displays the most common words.
- **R7** – Empty input: The application handles empty input without crashing and displays appropriate results.
- **R8** – Reset: The user can clear the input and start a new analysis.

## Language Support

TextCheck is intended to analyze Swedish text, including the Swedish characters å, ä and ö.

The application should handle Swedish letters correctly when counting words, measuring word lengths and calculating word frequencies. Word frequency comparisons should be case-insensitive, so that words differing only in capitalization are treated as the same word.

## Technologies

The application uses JavaScript as the programming language.

## Installation and Usage

[PLACEHOLDER - Add instructions for downloading, installing and running the application.]

## Project Structure

TextCheck is a standalone application that uses two separate modules:

TextAnalyzer module from Laboratory 2.

[ PLACEHOLDER ]

Both modules remain separate projects and are integrated through their public interfaces.

## Testing

The application is tested against the requirements listed above. Each requirement has at least one corresponding test case documented in TEST_REPORT.md.

## Known Limitations

[ PLACEHOLDER ]