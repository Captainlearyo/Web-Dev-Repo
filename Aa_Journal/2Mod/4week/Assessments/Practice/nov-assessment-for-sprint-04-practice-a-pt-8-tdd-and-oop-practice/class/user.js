class User {
    constructor(name, month, day, year){
this.name = name;
this.month = month;
this.day = day;
this.year = year;
 this.birthdate = new Date(year, month -1, day)
    }
newName(username, birthdate) {
getBirthday = () => this.birthdate.toDateString()
}
}

module.exports = User
