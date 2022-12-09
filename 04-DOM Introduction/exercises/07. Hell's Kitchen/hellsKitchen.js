function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);

      let bestRestaurant = document.querySelector('#bestRestaurant p');
      let workersElement = document.querySelector('#workers p');

      let restaurants = {};
      let averageSalary = 0;
      let theBestRestName = '';

      for (let el of input) {
         let [restaurant, workersInfo] = el.split(' - ');
         let workers = workersInfo.split(', ');

         for (let worker of workers) {
            let [name, salary] = worker.split(' ');

            if (!restaurants.hasOwnProperty(restaurant)) {
               restaurants[restaurant] = {};
            }

            restaurants[restaurant][name] = Number(salary);
         }
      }

      let entries = Object.entries(restaurants);

      for (let entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         let totalSalaries = 0;
         let currAverage = 0;

         for (let [worker, salary] of values) {
            totalSalaries += salary;
         }

         currAverage = totalSalaries / values.length;

         if (currAverage > averageSalary) {
            averageSalary = currAverage;
            theBestRestName = key;
         }
      }

      let sorted = Object.entries(restaurants[theBestRestName]).sort((a, b) => b[1] - a[1]);

      let result = '';

      sorted.forEach(el => result += `Name: ${el[0]} With Salary: ${el[1]} `);

      bestRestaurant.textContent = `Name: ${theBestRestName} Average Salary: ${(averageSalary).toFixed(2)} Best Salary: ${(sorted[0][1]).toFixed(2)}`;

      workersElement.textContent = result;
   }
}