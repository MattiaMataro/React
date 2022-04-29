export class User {
    constructor(id, email, name) {
        this.email = email;
        this.id = id;
        this.name = name;
    }
}

export function objToUser(obj) {
    return new User(obj.id, obj.email, obj.name);
}