import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-message-entry',
  templateUrl: './message-entry.component.html',
  styleUrls: ['./message-entry.component.css']
})
export class MessageEntryComponent implements OnInit {

  @Input() message!: ServerMessageModel;
  @Input() thumbsUrl!: string;
  @Input() principal!: UserModel;
  @Input() videoSourceUpdates$!: Observable<VideoSourceUpdateModel>;
  @Output() attachmentRequest: EventEmitter<AttachmentModel> = new EventEmitter();

  richMessage!: RichMessageModel | null;
  isSelfMessage!: boolean;
  isInfo!: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.richMessage = this.message.type === 'richMsg' ? JSON.parse(this.message.payload) as RichMessageModel : null;
    const client = this.message.client;
    this.isSelfMessage = client && client.clientId === this.principal.id;
    this.isInfo = this.message.type === 'info';
  }
}
