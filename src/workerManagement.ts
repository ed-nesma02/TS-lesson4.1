class Job {
  private _role: string;
  private _salary: number;

  constructor(role: string, salary: number) {
    this._role = role;
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this._role}`);
  }
}

class Person {
  private _Job?: Job;
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  set job(Job: Job) {
    this._Job = Job;
  }

  getSalary(): number {
    if (this._Job) {
      return this._Job.salary;
    }
    return 0;
  }

  work(): void {
    if (this._Job) {
      this._Job.work(this._name);
      return;
    }
    console.log('Нет работы');
  }
}

const person1: Person = new Person('Эдуард');
const person2: Person = new Person('Макс');
const person3: Person = new Person('Артур');

const job1: Job = new Job('Designer', 6000);
const job2: Job = new Job('Programmer', 7000);
const job3: Job = new Job('Artist', 5000);

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
