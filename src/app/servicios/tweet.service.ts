import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario/usuario.module';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  twPost;
  name: String = 'Danny_Protrick';

  constructor(
    public http:HttpClient,
    public router:Router) { }
    
    //muestra los tweet
    cargarTweets (){
      let url = 'http://localhost:3000/tweets/'+this.name;
      //let url = 'https://back-prueba.herokuapp.com/tweets';
      return this.http.get( url );
    }

    //Crea un tweet
    crearTweet(posttweet){
      let url = 'http://localhost:3000/tweets/postear';
      //let url = 'https://back-prueba.herokuapp.com/postear';
      console.log(posttweet)
      return this.http.post(url,
        {
          "posttweet":posttweet
        })
                .pipe(map((resp:any)=>{
                    //console.log('guardo')
                    swal("Published", "Your tweet has been published", "success");   
                  return resp; 
                }));
  
    }
}



