import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  //Se asegura que este componente no se revalue innesesariamente.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  private zone = inject(NgZone);

  ngOnInit(): void {
    setTimeout(() => {
      this.count.set(0);
    }, 4000);


    //Con el codigo runOutsideAngular se deja del modo watch mode de zonejs, lo que evita la detección de cambios, por lo que no se activará
    //Avoiding zone pollution
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Timer expired');
      }, 6000);
    });
  }

  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
