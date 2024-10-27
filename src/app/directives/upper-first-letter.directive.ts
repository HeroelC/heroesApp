import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperFirstLetter]',
  standalone: true
})
export class UpperFirstLetterDirective {

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.length > 0) {
      input.value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

  constructor() { }

}
