import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arrData = []
  myInput

  constructor(public navCtrl: NavController,  public af: AngularFireDatabase ) 
  {
    this.af.list("/myItem/").subscribe((data)=> {
      this.arrData = data;
      console.log(this.arrData);
    });

  }
  btnAddClicked(){

    this.af.list("myItem").push(this.myInput);

  }

}
