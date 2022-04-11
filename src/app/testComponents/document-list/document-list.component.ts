import { Component, OnInit , OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})

export class DocumentListComponent implements OnInit, OnDestroy {
  documents!: Observable<string[]>;
  currentDoc!: string;
  private _docSub!: Subscription;

  constructor(private documentService: SocketService) { }

  ngOnInit() {
    this.documents = this.documentService.documents;
    this._docSub = this.documentService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
    //this.documentService.logout();
  }

  loadDoc(id: string) {
    this.documentService.getDocument(id);
  }

  newDoc() {
    this.documentService.newDocument();
  }
}
