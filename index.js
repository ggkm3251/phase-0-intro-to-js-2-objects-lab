// Write your solution in this file!
const employee = {
    "name": 'Glenn',
    "streetAddress": "Thika"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const engineer= {...employee}
    engineer[key] = value
    return engineer
}
updateEmployeeWithKeyAndValue(employee,"Glenn","software Engineer")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee= {...employee}
    delete newEmployee[key];
    return newEmployee
}
deleteFromEmployeeByKey(employee, key);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key];
    return employee;
}
deleteFromEmployeeByKey(employee, key);