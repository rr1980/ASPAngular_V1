import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    public currentCount = 0;

    constructor() {
        console.log("DataService started...");
    }
}

//export enum Role {
//    User,

//    Admin,

//    Guest
//}

//export interface IEntity {
//    Id: number;
//}

//export class User implements IEntity {
//    public Name: string;
//    public Roles: Role[];
//    public Id: number;
//    constructor(name: string, roles: Role[]) {
//        this.Name = name;
//        this.Roles = roles;
//    }
//    public HasRole(role: Role): boolean {
//        this.Roles.forEach(function (r) {
//            if (r == role) {
//                return true;
//            }
//        });
//        return false;
//    }
//}