function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
        })
    })
    .then(resp => resp.json())
    .then(object => {
        document.querySelector('body').innerHTML = object.id
    })
    .catch((error) => {
        document.querySelector('body').innerHTML = error.message
    })
}

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = e.target.userName.value;
    let email = e.target.userEmail.value;
    submitData(name, email)
;})