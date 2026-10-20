import { TextAnalyzer } from '../../modules/text-analyzer/TextAnalyzer.js'
import Field from '../../modules/form-validation/src/Field.js'
import Validation from '../../modules/form-validation/src/Validation.js'
import { RequiredRule, MaxLengthRule } from '../../modules/form-validation/src/Rule.js'

// Get references to DOM elements
const textInput = document.querySelector('#text-input')
const analyzeButton = document.querySelector('#analyze-button')
const resetButton = document.querySelector('#reset-button')
const result = document.querySelector('#result')

// Setup validation for the text field
const validation = new Validation()
const textField = new Field('text-field')

textField.addRule(new RequiredRule('Skriv in en text innan du analyserar.'))
textField.addRule(new MaxLengthRule(500, 'Texten får innehålla högst 500 tecken.'))
validation.addField(textField)

// Listen for click events to analyze text
analyzeButton.addEventListener('click', () => {
  // Clear previous results
  result.replaceChildren()

  const text = textInput.value
  const validationResult = validation.validate({ 'text-field': text })

  // If validation fails, display error messages
  if (!validationResult.success) {
    let errorMessage = ''
    for (let i = 0; i < validationResult.errors.length; i++) {
      errorMessage += validationResult.errors[i].errorMessage + ' '
    }
    
    result.textContent = errorMessage
    return
  }

  // If validation passes, create an instance of TextAnalyzer
  const analyzer = new TextAnalyzer(text)

  // Collect all statistics in an array with clear strings
  const statistics = [
    'Ord: ' + analyzer.getWordCount(),
    'Meningar: ' + analyzer.getSentenceCount(),
    'Tecken: ' + analyzer.getCharacterCount(),
    'Tecken utan blanksteg: ' + analyzer.getCharacterCountWithoutWhitespace(),
    'Bokstäver: ' + analyzer.getLetterCount(),
    'Siffror: ' + analyzer.getNumberCount(),
    'Genomsnittlig ordlängd: ' + analyzer.getAverageWordLength(),
    'Ord per mening: ' + analyzer.getAverageWordsPerSentence(),
    'Längsta ord: ' + (analyzer.getLongestWords().join(', ') || 'Inga ord'),
    'Kortaste ord: ' + (analyzer.getShortestWords().join(', ') || 'Inga ord'),
    'Vanligaste ord: ' + (analyzer.getMostCommonWords().join(', ') || 'Inga ord')
  ]

  // Create a p-element for each statistical row and add to the result div
  for (let i = 0; i < statistics.length; i++) {
    const paragraph = document.createElement('p')
    paragraph.textContent = statistics[i]
    result.append(paragraph)
  }
})

// Reset form and results
resetButton.addEventListener('click', () => {
  textInput.value = ''
  result.replaceChildren()

  const message = document.createElement('p')
  message.textContent = 'Här visas resultatet.'
  result.append(message)
})