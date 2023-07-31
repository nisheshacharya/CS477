let db = [

    { id: 1, fname: 'John', lname: 'Smith' },
    { id: 2, fname: 'Lucy', lname: 'Jark' },
    { id: 3, fname: 'Edward', lname: 'Capton' }

];

class Student {
    constructor(id, firstname, lastname) {

        this.id = id;

        this.fname = firstname;

        this.lname = lastname;

    }



    save() {



    }



    edit() {

    }

    static getById(id) {
    }

    static getAll() {
    }

    deleteById(id) {
    }
}