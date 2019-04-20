import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AddhotelPage } from '../addhotel/addhotel';
import { AngularFireDatabase } from 'angularfire2/database';
import { user } from '../../app/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  items_tmp =new Array();
  items ;
  items_total:user[]; 
 
  db;
   keys=null;
  constructor(public navCtrl: NavController,public afd : AngularFireDatabase) {
    
    this.getData();
    this.saveData()
  
  }


  saveData(){

    this.db= this.afd.database.ref('resto');
    this.db.on('value',data=>{
      console.log(data.val());
      var restos=data.val();
      this.items_total=data.val(); 
      if(restos)  {
        this.keys=Object.keys(restos);
        for(var i=0;i<this.keys.length;i++){
           var k=this.keys[i];
           this.items_tmp.push(restos[k])
        }
      } 
            
    })


   }

   

   getData(){
     this.afd.list('/resto/').valueChanges().subscribe(
       data=>{
         console.log((data));
         this.items=data;
       }
     )
   }

   removeResto(i){

    this.afd.list('/resto/').remove(this.keys[i]);
    console.log("delete was de susses");
   }




  Addhotel(){
    this.navCtrl.push(AddhotelPage);
  }

}
