import { Component, input } from '@angular/core';
import { Transacao, TipoTransacao } from '../../../models/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {
  transacao = input.required<Transacao>()

  tipoTransacaoEnum = TipoTransacao
}
