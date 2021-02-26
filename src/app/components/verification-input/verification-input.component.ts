import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
const CONSTANTS = {
  EMPTY: '',
};
@Component({
  selector: 'app-verification-input',
  templateUrl: './verification-input.component.html',
  styleUrls: ['./verification-input.component.scss'],
  providers: [CurrencyPipe]
})
export class VerificationInputComponent implements OnInit, AfterViewInit {
  private static BACKSPACE_KEY = 'Backspace';
  private static BACKSPACE_INPUT_TYPE = 'deleteContentBackward';

  @ViewChild('dummyFacade', {static: false}) private dummyFacade: IonInput;

  @Input() amount: string = '';

  @Output() amountEntered = new EventEmitter<number>();

  constructor(private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    if(typeof this.amount === 'number'){
      this.amount = String(this.amount);
    }
    if (this.amount && this.amount.trim() !== '') {
      this.amountEntered.emit(+this.amount);
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    // this handles keyboard input for backspace
    if (event.key === VerificationInputComponent.BACKSPACE_KEY) {
      this.delDigit();
    }
  }

  handleInput(event: CustomEvent) {
    this.clearInput();
    // check if digit
    if (event.detail.data && !isNaN(event.detail.data)) {
      this.addDigit(event.detail.data);
    } else if (event.detail.inputType === VerificationInputComponent.BACKSPACE_INPUT_TYPE) {
      // this handles numpad input for delete/backspace
      this.delDigit();
    }
  }

  private addDigit(key: string) {
    if(this.amount.length < 4){
      this.amount = this.amount + key;
      this.amountEntered.emit(+this.amount);
    }
  }

  private delDigit() {
    this.amount = this.amount.substring(0, this.amount.length - 1);
    this.amountEntered.emit(+this.amount);
  }

  private clearInput() {
    this.dummyFacade.value = CONSTANTS.EMPTY; // ensures work for mobile devices
    // ensures work for browser
    this.dummyFacade.getInputElement().then((native: HTMLInputElement) => {
      native.value = CONSTANTS.EMPTY;
    });
  }

  get formattedAmount(): string {
    const display = this.amount ;
    return display.padEnd(4,'_');
  }

  openInput() {
    this.dummyFacade.setFocus();
  }

}
