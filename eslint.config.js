import config from '@lnu/eslint-config'
import browser from '@lnu/eslint-config/browser'
import prettier from 'eslint-config-prettier'

export default [...config, ...browser, prettier]