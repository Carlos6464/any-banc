
import { Component } from '@angular/core';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { ContaComponent } from "./conta/conta.component";

@Component({
  selector: 'app-banner',
  imports: [BoasVindasComponent, ContaComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
 
}
