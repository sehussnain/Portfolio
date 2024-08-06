const viewAllUsers = () => {
    let dom = ``;
    let users = localStorage.getItem("users")
    users = users ? JSON.parse(users) : [];
    users.forEach((user, index) => {
        dom += `<div class="card m-0">
                <div class="card-body">
                    <h5 class="card-title" id="name">${user.name}</h5>
                    <p class="card-text" id="email"><span style="font-weight: bold;">Email: </span>${user.email}</p>
                    <p class="card-text" id="subject"><span style="font-weight: bold;">Subject: </span>${user.subject}</p>
                    <p class="card-text" id="description"><span style="font-weight: bold;">Description: </span>${user.description}</p>
                    </div>
                    <div class="mr-3 mb-3" style="align-self:flex-end;">
                        <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
                    </div>
            </div>`
            
    });
    dom = dom ? dom : "No users exists";
    document.querySelector("#users").innerHTML = dom;
}

const deleteUser = (index) => {
    let users = localStorage.getItem("users");
    users = users ? JSON.parse(users) : [];
    users = users.filter((user, _index) => _index !== index)
    localStorage.setItem("users", JSON.stringify(users));
    viewAllUsers();
}


viewAllUsers();
