const obj = {
  employee_1: {
      hourly: 10,
      position: 'retail'
  },
  employee_2: {
      hourly: 20,
      position: 'supervisor'
  },
  employee_3: {
      hourly: 15,
      position: 'retail'
  },
  employee_4: {
      hourly: 12,
      position: 'retail'
  },
  employee_5: {
      hourly: 30,
      position: 'manager'
  },
  employee_6: {
      hourly: 30,
      position: 'supervisor'
  },
};

const employee = function (obj, position) {
  let newArr = [];

  for(let employeeKey in obj) {
    if (obj[employeeKey].position === position) {
      newArr.push(obj[employeeKey])
    }
  }
  return newArr;
    //console.log(obj[employeeKey].position
}   
/*if (position[obj] === 'retail') {
      console.log(hourly, position)
    } else if (position[obj] === 'supervisor') {
      console.log(hourly, position)
    } else if (position[obj] === 'manager') {
      console.log(hourly, position)
    }
  }
  return newArr;
};
*/

console.log(employee(obj, 'supervisor'))

/**
* Write a function that can take in an employees
* object and return an array of employee objects
* for a specific position.
*/

/**
* Write a function that can take in an employees
* object and return an array of employee objects
* that make above a given hourly.
*/