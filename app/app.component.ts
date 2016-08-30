import { Component } from '@angular/core';

export class Member{
	id: number;
	name: string;
  email: string;
  username: string;
}

const MEMBERS: Member[] = [
  { id: 1, name: '최범균', email: 'madvirus', username: 'madvirus'}
  ,{ id: 2, name: '아라한사', email: 'arahansa@naver.com', username: 'arahansa'}
  ,{ id: 3, name: '김재린', email: 'sleepbaer669@gmail.com', username: '잠자는곰'}
  ,{ id: 4, name: '이흥현', email: 'hung', username: '흥반장'}
];

@Component({
  selector: 'my-app',
  template:`
  <table class="table table-hover">
      <thead>
      <tr>
          <th></th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>USERNAME</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let member of members">
          <td>{{member.id}}</td>
          <td>{{member.name}}</td>
          <td>{{member.email}}</td>
          <td>{{member.username}}</td>
      </tr>
    </tbody>          
  </table>
  `
})

export class AppComponent { 
	members = MEMBERS;
}
