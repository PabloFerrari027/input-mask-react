import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from 'react'
import { InvalidCharacterError } from '../errors/invalid-character-error'

type Character =
  | '!'
  | '@'
  | '#'
  | '$'
  | '%'
  | '^'
  | '&'
  | '*'
  | '('
  | ')'
  | '_'
  | '+'
  | '{'
  | '}'
  | '['
  | ']'
  | '|'
  | ':'
  | ';'
  | '<'
  | '>'
  | '?'
  | '~'
  | '.'
  | ','
  | '/'
  | '-'
  | '='
  | ' '

const validCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '{',
  '}',
  '[',
  ']',
  '|',
  ':',
  ';',
  '<',
  '>',
  '?',
  '~',
  '.',
  ',',
  '/',
  '-',
  '=',
  ' ',
]

interface Mask {
  index: number
  character: Character
}

interface IMask {
  value: string
  masks: Mask[]
}

interface IInputMask extends InputHTMLAttributes<HTMLInputElement> {
  masks: Mask[]
  maxLength: number
  cb?: (value: ChangeEvent<HTMLInputElement>) => void
}

function isCharacterValid(character: string): boolean {
  if (validCharacters.includes(character)) return true

  return false
}

function handleMask({ masks, value }: IMask) {
  const onlyNumbers = value.replace(/[^0-9]/g, '')

  const slicedString = onlyNumbers.split('')

  masks.forEach((mask) => {
    if (!isCharacterValid(mask.character)) {
      throw new InvalidCharacterError(mask.character)
    }

    if (slicedString.length > mask.index) {
      slicedString.splice(mask.index, 0, mask.character)
    }
  })

  const data = slicedString.join('')

  return data
}

export const InputMask = forwardRef<HTMLInputElement, IInputMask>((props, ref) => {
  const { masks, cb, ...rest } = props
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valueWithMask = handleMask({
      value: event.target.value,
      masks,
    })

    setValue(valueWithMask)
    cb && cb(event)
  }

  return <input {...rest} type='text' ref={ref} onChange={handleChange} value={value} />
})

export default InputMask
