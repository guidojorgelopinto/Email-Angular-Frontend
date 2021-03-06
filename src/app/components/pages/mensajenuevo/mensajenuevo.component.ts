import { Component } from "@angular/core";
import { FormGroup, NgForm, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { MessageService } from '../../../service/message.service';
import { PostsI } from "@app/models/posts.interface";

@Component({
  selector: 'app-mensajenuevo',
  templateUrl: './mensajenuevo.component.html',
  styleUrls: ['./mensajenuevo.component.scss']
})

export class MensajenuevoComponent {
  messageForm: FormGroup;
  complete= false;


  constructor
  (private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.messageForm = this.fb.group ({
      email: ['guido@gmail.com', [Validators.required]],
      asunto: ['Prueba', Validators.required],
      text144: ['Primer Mensaje', Validators.required],
    });
  }

  ngOnInit(){
  }

  redireccion() {
    this.router.navigate(["/bandejaprincipal"])
  }

  sendMessage() {

      const outMessage : PostsI = {
        to: this.messageForm.value.email,
        title: this.messageForm.value.asunto,
        body: this.messageForm.value.text144,
        id: "",
        createdAt: "",
        updatedAt: "",
        userId:"",
        token: "",
      }
      console.log(outMessage);

      this.messageService.sendMessage(outMessage)
      .subscribe((pepe) => alert('Envío: ' + pepe.mensaje),
      (pepe) => alert('Envío: ' + pepe.mensaje));
    }

    falselogin(){
      this.complete= true;
      setTimeout(()=>{
        this.router.navigate(['/bandejaprincipal']);
      },1600
      );
    }
}
