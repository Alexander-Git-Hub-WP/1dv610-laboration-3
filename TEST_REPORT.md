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

The tests covered text input, word and sentence counts, character counts, word length analysis, word frequency, empty input, and resetting the application. Additional tests were performed using Swedish characters (å, ä and ö) and words with different capitalization.

## Test Results

**Your test results:**

| Test case | Requirement | Input | Expected outcome | Actual outcome |
| --------- | ----------- | ----- | ---------------- | -------------- |
|     Enter Swedish text      |      R1       |   Enter "Jag gillar blåbär och äpplen." in the text area and click the "Analysera text" button.    |        The text can be entered and analyzed with statistics showing under "Resultat" and Swedish characters (A-Z, Å, Ä, Ö) are handled correctly (counted as letters).          |     ✅ As expected           |
|     Count words      |      R2       |   Enter "Jag gillar programmering." in the text area and click the "Analysera text" button.   |    The application displays 3 words (ord) under "Resultat".              |    ✅ As expected            |
|      Count sentences     |      R3       |   Enter "Hej! Jag heter Alexander. Vad heter du?" in the text area and click the "Analysera text" button.    |       The application displays 3 sentences (meningar) under "Resultat".           |       ✅ As expected          |
|    Count characters       |      R4       |   Enter "Hur är läget?" in the text area and click the "Analysera text" button.    |     The application displays 13 characters (tecken), including the space, under "Resultat".             |       ✅ As expected         |
|     Analyze word lengths      |      R5       |    Enter "Jag är lång, gillar programmering och är glad." in the text area and click the "Analysera text" button.   |       The longest word (längsta ord) is "programmering" and the shortest word (kortaste ord) is "är".           |      ✅ As expected, although "är" is displayed twice, which corresponding to their occurrences in the input and maybe can be seen as unnecessary.            |
|    Calculate word frequency       |      R6       |   Enter "Hej hej HEJ katten!" in the text area and click the "Analysera text" button.   |         The word hej is identified as the most common word (vanligaste ord), regardless of capitalization.         |     ✅ As expected.           |
|      Handle empty input     |      R7       |   Leave the text area empty and click the "Analysera text" button.    |        The application does not crash and displays appropriate results, such as zero counts and no words.          |      ✅ As expected.          |
|     Reset the application      |      R8       |    Enter text in the text area, click the "Analysera text" button, let the application analyze it, and click the "Rensa" button.   |       The text area is cleared and the previous results are removed. The initial result message is displayed again.           |      ✅ As expected.          |
|     Repeted longest and shortest words     |      R5       |    Enter "Jag är lång. Jag är lång. Jag är lång. Jag är lång." in the text area and click the "Analysera text" button.   |       The longest word ("lång") and the shortest word ("är") are displayed four times each, corresponding to their occurrences in the input.           |      ✅ As expected, although "är" and "lång" is displayed four times each, which corresponding to their occurrences in the input and maybe can be seen as unnecessary.           |

## Known Issues in Third-Party Modules

*List any flaws you found in the other student's module that affected your application, how they
show up, and how you handled them (e.g. a workaround, or a link to an issue you filed in the
module's repository). Write "None found" if there weren't any.*

Answer: None found.
