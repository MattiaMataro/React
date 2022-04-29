import React from 'react';
import { User } from "../models/User";

export class UserService {
    constructor() {
        this.user = null;
    }

    login() {
        console.log('login');
        this.user = new User(1, 'myemail@boh.com', 'Logged in user');
    }

    logout() {
        console.log('login');
        this.user = null;
    }
}

export default React.createContext(new UserService());
