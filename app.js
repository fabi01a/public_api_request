async function getEmployees() {
    const response = await fetch(
        'https://randomuser.me/api/?results=12'

    )
    const data = await response.json();
    console.log(data)
}

getEmployees();