"use strict";
class Job {
    role;
    salary;
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
    }
    get infoSalary() {
        return this.salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}
class Person {
    Job;
    name;
    constructor(name) {
        this.name = name;
    }
    set appointJob(Job) {
        this.Job = Job;
    }
    getSalary() {
        if (this.Job) {
            return this.Job.infoSalary;
        }
        return 0;
    }
    work() {
        if (this.Job) {
            this.Job.work(this.name);
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
person1.appointJob = job1;
person2.appointJob = job2;
person3.appointJob = job3;
person1.work();
person2.work();
person3.work();
person1.appointJob = job3;
person2.appointJob = job1;
person3.appointJob = job2;
console.log();
person1.work();
person2.work();
person3.work();
