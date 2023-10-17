"use strict";
class Job {
    _role;
    _salary;
    constructor(role, salary) {
        this._role = role;
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this._role}`);
    }
}
class Person {
    _Job;
    _name;
    constructor(name) {
        this._name = name;
    }
    set job(Job) {
        this._Job = Job;
    }
    getSalary() {
        if (this._Job) {
            return this._Job.salary;
        }
        return 0;
    }
    work() {
        if (this._Job) {
            this._Job.work(this._name);
            return;
        }
        console.log('Нет работы');
    }
}
const person1 = new Person('Эдуард');
const person2 = new Person('Макс');
const person3 = new Person('Артур');
const job1 = new Job('Designer', 6000);
const job2 = new Job('Programmer', 7000);
const job3 = new Job('Artist', 5000);
person1.job = job1;
person2.job = job2;
person3.job = job3;
person1.work();
person2.work();
person3.work();
person1.job = job3;
person2.job = job1;
person3.job = job2;
console.log();
person1.work();
person2.work();
person3.work();
