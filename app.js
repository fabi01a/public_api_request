async function getEmployees() {
    const response = await fetch(
        'https://randomuser.me/api/?results=12'

    )
    const data = await response.json();
    displayEmployees(data.results)
}

function displayEmployees(employees) {
    employees.forEach((employee) => {
        console.log(employee)
    })
}

getEmployees();