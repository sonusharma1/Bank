import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
      successClass!:string;

      onSubmit(){
        this.successClass='success_msg';

        window.setTimeout(()=>{
          window.location.reload();
        },2000);
      }
}