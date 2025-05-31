export class Transacao {
    constructor(
        public readonly tipo: TipoTransacao,
        public readonly valor: number
      ) {}
}

export enum TipoTransacao {
    DEPOSITO = 'deposito',
    SAQUE = 'saque'
  }
