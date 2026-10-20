# Test Report

<!--
    Commit this file to the root of your application's GitHub repository, alongside its code.
    Every requirement listed in your README.md needs at least one test case below. Giving each
    requirement a short ID in the README (e.g. R1, R2) makes the "Requirement" column easy to fill
    in and to check.
-->

## Summary

*Briefly describe how you tested your application – manually through its interface, automatically,
or both – clearly enough that someone else could carry out the same tests. What was hardest to
test, and why?*

**Answer:** The application was tested manually through its user interface in a web browser. Each requirement listed in README.md was checked by entering different text inputs, clicking the analysis and reset buttons, and comparing the displayed results with the expected outcomes.

The tests covered text input, word and sentence counts, character counts, word length analysis, word frequency, empty input, input validation and resetting the application. Additional tests were performed using Swedish characters (å, ä and ö), words with different capitalization, and text at the 500-character limit.

The most challenging part was verifying boundary cases and ensuring that the application handled invalid input correctly. In particular, testing the maximum allowed text length required checking inputs of exactly 500 and 501 characters. The tests also revealed that repeated occurrences of the longest and shortest words are displayed multiple times. This is the intended behavior of the current TextAnalyzer, thus no issue, although displaying only unique words could make the results clearer.

## Test Results

**Your test results:**

| Test case | Requirement | Input | Expected outcome | Actual outcome |
| --------- | ----------- | ----- | ---------------- | -------------- |
|     Enter Swedish text      |      R1       |   Enter "Jag gillar blåbär och äpplen." in the text area and click the "Analysera text" button.    |        The text can be entered and analyzed with statistics showing under "Resultat" and Swedish characters (A-Z, Å, Ä, Ö) are handled correctly (counted as letters).          |     ✅ As expected           |
|     Maximum allowed text length      |      R1       |   Enter exactly 500 characters and click the "Analysera text" button.    |        The text passes the length validation and is analyzed.          |     ✅ As expected           |
|     Text exceeds maximum length      |      R1       |   Enter exactly 501 characters and click the "Analysera text" button.    |        A validation error message indicating the 500-character limit is displayed "Texten får innehålla högst 500 tecken.", and the text is not analyzed.          |     ✅ As expected           |
|     Count words      |      R2       |   Enter "Jag gillar programmering." in the text area and click the "Analysera text" button.   |    The application displays 3 words (ord) under "Resultat".              |    ✅ As expected            |
|      Count sentences     |      R3       |   Enter "Hej! Jag heter Alexander. Vad heter du?" in the text area and click the "Analysera text" button.    |       The application displays 3 sentences (meningar) under "Resultat".           |       ✅ As expected          |
|    Count characters       |      R4       |   Enter "Hur är läget?" in the text area and click the "Analysera text" button.    |     The application displays 13 characters (tecken), including the space, under "Resultat".             |       ✅ As expected         |
|     Analyze word lengths      |      R5       |    Enter "Jag är lång, gillar programmering och är glad." in the text area and click the "Analysera text" button.   |       The longest word (längsta ord) is "programmering" and the shortest word (kortaste ord) is "är".           |      ✅ As expected, although "är" is displayed twice, which corresponding to their occurrences in the input and maybe can be seen as unnecessary.            |
|     Repeted longest and shortest words     |      R5       |    Enter "Jag är lång. Jag är lång. Jag är lång. Jag är lång." in the text area and click the "Analysera text" button.   |       The longest word ("lång") and the shortest word ("är") are displayed four times each, corresponding to their occurrences in the input.           |      ✅ As expected, although "är" and "lång" is displayed four times each, which corresponding to their occurrences in the input and maybe can be seen as unnecessary.           |
|    Calculate word frequency       |      R6       |   Enter "Hej hej HEJ katten!" in the text area and click the "Analysera text" button.   |         The word hej is identified as the most common word (vanligaste ord), regardless of capitalization.         |     ✅ As expected.           |
|      Handle empty input     |      R7       |   Leave the text area empty and click the "Analysera text" button.    |        A clear validation message is displayed "Skriv in en text innan du analyserar.", and the application does not crash.          |      ✅ As expected.          |
|     Reset the application      |      R8       |    Enter text in the text area, click the "Analysera text" button, let the application analyze it, and click the "Rensa" button.   |       The text area is cleared and the previous results are removed. The initial result message is displayed again.           |      ✅ As expected.          |
|     Reset the application after validation error     |      R8       |    Leave the text area empty or enter 501 or more characters in the text area, click the "Analysera text" button, and click the "Rensa" button.   |       The text area is cleared and the previous error message is removed. The initial result message is displayed again.           |      ✅ As expected.          |

## Known Issues in Third-Party Modules

*List any flaws you found in the other student's module that affected your application, how they
show up, and how you handled them (e.g. a workaround, or a link to an issue you filed in the
module's repository). Write "None found" if there weren't any.*

Answer: None found.
