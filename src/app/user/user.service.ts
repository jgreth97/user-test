import {Injectable} from '@angular/core';
import{User} from './user.class'
import{Observable} from 'rxjs'
import{HttpClient} from '@angular/common/http'

const baseurl: string = "http://localhost:8080/api/users/";


@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(
    private http:HttpClient){    
    }
    list(): Observable<User[]>{
        return this.http.get(`${baseurl}`) as Observable<User[]>;
    }
    //get all
    get(id:Number): Observable<User>{
        return this.http.get(`${baseurl}${id}`) as Observable<User>;
    }
    change(user:User): Observable<User>{
        return this.http.put(`${baseurl}${user.id}`,user) as Observable<User>;
    }
}   