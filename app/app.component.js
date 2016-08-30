"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Member = (function () {
    function Member() {
    }
    return Member;
}());
exports.Member = Member;
var MEMBERS = [
    { id: 1, name: '최범균', email: 'madvirus', username: 'madvirus' },
    { id: 2, name: '아라한사', email: 'arahansa@naver.com', username: 'arahansa' },
    { id: 3, name: '김재린', email: 'sleepbaer669@gmail.com', username: '잠자는곰' },
    { id: 4, name: '이흥현', email: 'hung', username: '흥반장' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.members = MEMBERS;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <table class=\"table table-hover\">\n      <thead>\n      <tr>\n          <th></th>\n          <th>NAME</th>\n          <th>EMAIL</th>\n          <th>USERNAME</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let member of members\">\n          <td>{{member.id}}</td>\n          <td>{{member.name}}</td>\n          <td>{{member.email}}</td>\n          <td>{{member.username}}</td>\n      </tr>\n    </tbody>          \n  </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map