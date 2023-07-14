export class InvalidCharacterError extends Error {
  constructor(character: string) {
    super(`input-mask-react error: Invalid haractere: '${character}'`)
    this.name = 'InvalidCharacterError'
  }
}
