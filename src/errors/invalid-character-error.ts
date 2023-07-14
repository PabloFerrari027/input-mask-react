export class InvalidCharacterError extends Error {
  constructor(character: string) {
    super(`input-mask-react error: Charactere inválido: '${character}'`)
    this.name = 'InvalidCharacterError'
  }
}
