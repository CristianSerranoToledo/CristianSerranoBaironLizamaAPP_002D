import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  selectedRole: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  register() {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      this.presentAlert('Campos incompletos', 'Por favor, completa todos los campos.');
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.presentAlert('Contraseñas no coinciden', 'Las contraseñas deben coincidir.');
      return;
    }
    this.router.navigate(['/login']);
    const userData = {
      username: this.username,
      password: this.password,
      role: this.selectedRole

    };
    localStorage.setItem('userData', JSON.stringify(userData));
    this.router.navigate(['/login']);
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
