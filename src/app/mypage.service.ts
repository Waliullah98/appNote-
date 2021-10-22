import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MypageService {
  userData=[];

  constructor() { }
  getData()
  {
    return this.userData;
  }
  createUser(data:any)
  {
    this.userData.push(data)
  }

  getUserById(id:number)
  {
    return this.userData[id];
  }
  // usetruerData(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  updateUser(id:number,data:any)
  {
    this.userData[id]=data;
  }
deleteUser(id:number){
  this.userData.splice(id,1);
}

}
