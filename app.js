const cardGallery = document.querySelector('#gallery');

async function getEmployees() {
    const response = await fetch(
        'https://randomuser.me/api/?results=12'

    )
    const data = await response.json();
    displayEmployees(data.results)
    console.log(data)
}

function displayEmployees(employees) {
    employees.forEach((employee) => {
        const fullName = `${employee.name.first} ${employee.name.last}`;
        const thumbnail = employee.picture.thumbnail;
        const email = employee.email;
        const location = `${employee.location.city}, ${employee.location.state}`;
        
        cardGallery.innerHTML += `
            <div class='card'>
                <div class='card-img-container'>
                    <img class='card-img' src=${thumbnail} alt="profile picture"></img>
                </div>
                <div class='card-info-container'>
                    <h3 id='name' class='card-name cap'>${fullName}</h3>
                    <p class='card-text'>${email}</p>
                    <p class='card-text cap'>${location}></p>
                </div>
            </div>
        `
    })
}

getEmployees();