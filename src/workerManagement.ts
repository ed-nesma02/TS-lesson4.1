class Job {
  private role: string;
  private salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  }

  get infoSalary(): number {
    return this.salary;
  }

  work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`);
  }
}

class Person {
  private Job?: Job;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  set appointJob(Job: Job) {
    this.Job = Job;
  }

  getSalary(): number {
    if (this.Job) {
      return this.Job.infoSalary;
    }
    return 0;
  }

  work(): void {
    if (this.Job) {
      this.Job.work(this.name);
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
