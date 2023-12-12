import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input() public placeholder: string = "";
  @ViewChild("txtSearchInput") public tagInput!: ElementRef<HTMLInputElement>;
  @Output() public onValue: EventEmitter<string> = new EventEmitter<string>();



  searchTxt() {
    const newTag = this.tagInput.nativeElement.value;
    this.onValue.emit(newTag);
  }
}
