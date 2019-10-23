import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 import { TweetService } from '../../servicios/tweet.service';
 import { ActivatedRoute } from '@angular/router';

 declare var swal:any;

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styles: []
})
export class TweetComponent implements OnInit {
  
  posttweet: String = '';
  tweet=[];
  cargando: boolean = true;

  constructor( private rutaActiva: ActivatedRoute, public _tweetServices:TweetService ) { }

  ngOnInit() {
    this.cargarTweet();

  }
  
  //lista los tweet
  cargarTweet(){
    this.cargando =true;

    this._tweetServices.cargarTweets()
        .subscribe( (resp:any) =>{
          this.cargando=false;
          //console.log(resp)
           this.tweet= resp;
        });
  }

  //postea los tweet
  posteTweet(){

    if (!this.posttweet){
      swal("Important", "You must write the tweet", "warning");
      return;
    }

    this._tweetServices.crearTweet( this.posttweet ).subscribe(response => {
      this.cargarTweet();
      this.posttweet='';
    });
    
         
   }


}



