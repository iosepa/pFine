import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  quitApp(){
    this.storage.set('seen-intro', false);
    this.router.navigateByUrl('/intro')
  }


}
