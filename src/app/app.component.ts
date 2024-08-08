import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CounterComponent, MessagesComponent],
 /*  OnPushStrategy le dice a angular que el compnente pra el que se habilitó
    solo cuando cambie por algun evento ocurrido dentro de ese arbol de componentes,
    por lo tanto si un valor de entrada cambia, la detección de cambios se ejecutará en el componente, y en los elementos hijos

changeDetection: ChangeDetectionStrategy.OnPush, */
})
export class AppComponent {
  /*
En modo develop, angular ejecuta la detección de
   cambios dos veces para detectar cambios de valor no deseados,
   despues de  que se ejecutó la detección de cambios
   */
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
