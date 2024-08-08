import { ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  private messageService = inject(MessagesService)



  //Al ser declarado sin parentesis, solamente se obtiene el almacenamiento del signal, en la propiedad
  // messages, para despues ir al html y leer los mensajes del servicio.
  messages =  this.messageService.allMessages;
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
