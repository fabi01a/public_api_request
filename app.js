const body = document.querySelector('body');
const cardGallery = document.querySelector('#gallery');
let employeeData;

async function getEmployees() {
    const response = await fetch(
        'https://randomuser.me/api/?results=12'

    );
    const data = await response.json();
    employeeData = data.results;
    displayEmployees(data.results);
}

cardGallery.addEventListener('click', (event) => {
    if (
        event.target.classList.contains('card-name') || 
        event.target.classList.contains('card-img')
    ) {
        const empIndex = event.target.parentNode.parentNode.dataset.index;
        const employee = employeeData[empIndex];
        displayModal(employee);
    }
})

function displayModal(employee) {
    const birthday = new Date(employee.dob.date);
    const month = birthday.getMonth() +1;
    const day = birthday.getDate();
    const year = birthday.getFullYear();
    const formattedBirthday = `${month}/${day}/${year}`;
    
    const modalHTML = `
        <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                        <p class="modal-text">${employee.email}</p>
                        <p class="modal-text cap">${employee.location.city}</p>
                        <hr>
                        <p class="modal-text">${employee.phone}</p>
                        <p class="modal-text">
                            ${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}
                        </p>
                        <p class="modal-text">Birthday: ${formattedBirthday}</p>
                    </div>
                </div>

    `
    body.insertAdjacentHTML('beforeend', modalHTML);
    const closeBtn = document.querySelector('#modal-close-btn');
    const modalContainer = document.querySelector('.modal-container');

    closeBtn.addEventListener('click', ()  => {
        modalContainer.remove();
    });
}

function displayEmployees(employees) {
    let employeeHTML = '';

    employees.forEach((employee, index) => {
        const fullName = `${employee.name.first} ${employee.name.last}`;
        const thumbnail = employee.picture.thumbnail;
        const email = employee.email;
        const location = `${employee.location.city}, ${employee.location.state}`;
        
        employeeHTML += `
            <div class='card' data-index="${index}">
                <div class='card-img-container'>
                    <img class='card-img' src=${thumbnail} alt="profile picture">
                </div>
                <div class='card-info-container'>
                    <h3 id='name' class='card-name cap'>${fullName}</h3>
                    <p class='card-text'>${email}</p>
                    <p class='card-text cap'>${location}</p>
                </div>
            </div>
        `
    });
    cardGallery.innerHTML = employeeHTML;
}


getEmployees();