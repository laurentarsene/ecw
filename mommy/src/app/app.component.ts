import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title="mommy"
  constructor(private router: Router) {
  }
  goToAboutUs() {
    this.router.navigate(['/', 'aboutUs']);
  }
}