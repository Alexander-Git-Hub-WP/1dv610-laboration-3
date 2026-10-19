
import { TextAnalyzer } from '../../modules/text-analyzer/TextAnalyzer.js'

const textInput = document.querySelector('#text-input')
const analyzeButton = document.querySelector('#analyze-button')
const resetButton = document.querySelector('#reset-button')
const result = document.querySelector('#result')

analyzeButton.addEventListener('click', () => {
  const analyzer = new TextAnalyzer(textInput.value)

  result.replaceChildren()

  const statistics = [
    `Ord: ${analyzer.getWordCount()}`,
    `Meningar: ${analyzer.getSentenceCount()}`,
    `Tecken: ${analyzer.getCharacterCount()}`,
    `Tecken utan blanksteg: ${analyzer.getCharacterCountWithoutWhitespace()}`,
    `Bokstäver: ${analyzer.getLetterCount()}`,
    `Siffror: ${analyzer.getNumberCount()}`,
    `Genomsnittlig ordlängd: ${analyzer.getAverageWordLength()}`,
    `Ord per mening: ${analyzer.getAverageWordsPerSentence()}`,
    `Längsta ord: ${analyzer.getLongestWords().join(', ') || 'Inga ord'}`,
    `Kortaste ord: ${analyzer.getShortestWords().join(', ') || 'Inga ord'}`,
    `Vanligaste ord: ${analyzer.getMostCommonWords().join(', ') || 'Inga ord'}`
  ]

  for (const statistic of statistics) {
    const paragraph = document.createElement('p')
    paragraph.textContent = statistic
    result.append(paragraph)
  }
})

resetButton.addEventListener('click', () => {
  textInput.value = ''
  result.replaceChildren()

  const message = document.createElement('p')
  message.textContent = 'Här visas resultatet.'
  result.append(message)
})
