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
      email: ['lopinto@gmail.com',Validators.required],
      asunto: ['Prueba', Validators.required],
      text144: ['primerMesaje', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  sendMessage() {

      const outMessage : PostsI = {
        userId: this.messageForm.value.email,
        title: this.messageForm.value.lastName,
        body: this.messageForm.value.name,
        id: "",
        createdAt: "",
        updatedAt: "",
        to: "",
        token: ""
      }
      console.log(outMessage);

      this.messageService.sendMessage(outMessage);
      this.falselogin();

    }

    falselogin(){
      this.complete= true;
      setTimeout(()=>{
        this.router.navigate(['/bandejaprincipal']);
      },1500
      );
    }
  }
