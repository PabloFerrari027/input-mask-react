export class InvalidCharacterError extends Error {
  constructor(character: string) {
    super(`input-mask-react error: Invalid charactere: '${character}'`)
    this.name = 'InvalidCharacterError'
  }
}
