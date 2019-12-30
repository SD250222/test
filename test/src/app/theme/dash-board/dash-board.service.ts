import { Injectable ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import {Http, Headers} from '@angular/http';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class dashboardService {

    

    constructor(private http:HttpClient) { }

    // getGraph(id):Observable<billingHome>{
    //   return this.http.get<billingHome>(this._root.root_url+'/api/Payment/GetSubscriptionCount/1000/'+id);
    // }

    getClimate(){
        return this.http.get('https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D')
    }
    
    
}