let get_people = () => {
    fetch('/people', {method: 'GET'})
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error));
};
let callback = (data) => {
    console.log(data);
    document.getElementById('root').innerHTML
        = ` <p>First Name: ${data.firstname}</p>
            <p>Last Name: ${data.lastname}</p>
            <p>Age: ${data.age}</p>
            <p>Worked at:</p>
            <ol>
                <li>${data.companies[0]}</li>
                <li>${data.companies[1]}</li>
            </ol>`
};

get_people();
