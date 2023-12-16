import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStatus]',
  standalone: true
})
export class StatusDirective implements OnInit {

  @Input() status!: string;
  constructor(
    private element: ElementRef,
    
  ) {
    

   

  }

ngOnInit(): void {
    
  if(this.status=='active'){
    this.element.nativeElement.style.color = "green"
  }else {
    this.element.nativeElement.style.color = "red"
  }

  this.element.nativeElement.style.backgroundColor="#ccc";
  this.element.nativeElement.style.border="1px solid #ccc";
  this.element.nativeElement.style.padding="5px";



}




}
