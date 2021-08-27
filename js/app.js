//global variable
const usersContainer = document.getElementById('users');
const input = document.getElementById('input-user-number');
//get users random user number
const generateUser = () => {
    const inputNumber = input.value;
    // clear input 
    input.value = '';
    usersContainer.textContent = '';
    loadUser(inputNumber);
}
// search by API function
const loadUser = async (key) => {
    const url = `https://randomuser.me/api/?results=${key}`;
    const res = await fetch(url);
    const users = await res.json();
    // call function for showing users
    displayUsers(users.results);
}
// showing data on page
const displayUsers = users => {
    const usersContainer = document.getElementById('users');
    users.map(user => {
        console.log(user);
        const div = document.createElement('div');
        // address variable 
        const { street: { name, number }, city, state, country, postcode } = user?.location;
        div.innerHTML = `
        <div class="col">
            <div class="card border-0">
                <img src="${user.picture.large}"
                    class="w-50 mx-auto pt-2 card-img-top rounded-circle" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Name: ${user.name.first} ${user.name.last}</h5>
                    <p class="card-text">Phone: ${user.phone}</p>
                    <p class="card-text">Email: ${user.email}</p>
                    <p class="card-text">Address: ${name} ${number}, ${city}, ${postcode}, ${state}, ${country}</p>
                    <p class="card-text">Date of Birth: ${user.dob.date.slice(0, 10)}</p>
                    <p class="card-text">Gender: ${user.gender}</p>
                </div>
            </div>
        </div>
        `;
        usersContainer.appendChild(div);
    });
}