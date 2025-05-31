import { Component,computed,signal  } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { FormNovaTransacaoComponent } from "./components/form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './models/transacao';
import Swal from 'sweetalert2';
import { ExtratoComponent } from './components/extrato/extrato.component';


@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
  transacoes = signal<Transacao[]>([]);

  // 1. Computado puro para saldo
  saldo = computed(() =>
    this.transacoes().reduce((total, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return total + transacao.valor;
        case TipoTransacao.SAQUE:
          return total - transacao.valor;
        default:
          return total;
      }
    }, 0)
  );


  precessarTransacao(transacao: Transacao) {
    if ((transacao.tipo === TipoTransacao.SAQUE) && this.saldo() < transacao.valor) {
      Swal.fire({
        title: 'Saldo insuficiente!',
        text: 'Você não tem saldo suficiente para concluir esta operação.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    this.transacoes.update((listaAtual) => [transacao,...listaAtual]);
  }
}
