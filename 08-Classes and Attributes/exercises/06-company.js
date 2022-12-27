class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        this.validateParameter(name);
        this.validateParameter(salary);
        this.validateParameter(position);
        this.validateParameter(department);

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = { averageSalary: 0 };
        }

        this.departments[department].averageSalary += salary;
        this.departments[department][name] = {
            salary,
            position,
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let entires = Object.entries(this.departments);

        for (let entry of entires) {
            entry[1].averageSalary /= Object.values(entry[1]).length - 1;
        }

        let sortedByAverage = entires.sort((a, b) => b.averageSalary - a.averageSalary);
        let bestDep = sortedByAverage[0];
        let averageSalary = bestDep[1].averageSalary;
        delete bestDep[1].averageSalary;

        let sortedEmployees = Object.entries(bestDep[1]).sort((a, b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]));

        let employees = [];

        sortedEmployees.forEach(e => employees.push(`${e[0]} ${e[1].salary} ${e[1].position}`));

        return `Best Department is: ${bestDep[0]}\nAverage salary: ${averageSalary.toFixed(2)}\n${employees.join('\n')}`
    }

    validateParameter(param) {
        if (param === '' || param === undefined || param === null) {
            throw new Error('Invalid input!');
        }

        if (typeof param === 'number' && param < 0) {
            throw new Error('Invalid input!');
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
