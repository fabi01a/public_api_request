const cardGallery = document.querySelector('#gallery');

async function getEmployees() {
    const response = await fetch(
        'https://randomuser.me/api/?results=12'

    )
    const data = await response.json();
    displayEmployees(data.results)
    console.log(data)
}

cardGallery.addEventListener('click', (event) => {
    if (
        event.target.classList.contains('card-name') || 
        event.target.classList.contains('card-img')
    ) {
        console.log(event.target.parentNode.parentNode.dataset.index);
        // console.log(event.target)
    }
})


function displayEmployees(employees) {
    let employeeHTML = '';

    employees.forEach((employee, index) => {
        const fullName = `${employee.name.first} ${employee.name.last}`;
        const thumbnail = employee.picture.thumbnail;
        const email = employee.email;
        const location = `${employee.location.city}, ${employee.location.state}`;
        
        employeeHTML += `
            <div class='card' data-index='${index}'>
                <div class='card-img-container'>
                    <img class='card-img' src='${thumbnail}' alt="profile picture"></img>
                </div>
                <div class='card-info-container'>
                    <h3 id='name' class='card-name cap'>'${fullName}'</h3>
                    <p class='card-text'>'${email}'</p>
                    <p class='card-text cap'>'${location}'</p>
                </div>
            </div>
        `
    });
    cardGallery.innerHTML = employeeHTML;
}

getEmployees();