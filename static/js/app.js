var get_people = function () {
    fetch('/people', { method: 'GET' })
        .then(function (response) { return response.json(); })
        .then(function (data) { return callback(data); })
        .catch(function (error) { return console.log(error); });
};
var callback = function (data) {
    console.log(data);
    document.getElementById('root').innerHTML
        = " <p>First Name: " + data.firstname + "</p>\n            <p>Last Name: " + data.lastname + "</p>\n            <p>Age: " + data.age + "</p>\n            <p>Worked at:</p>\n            <ol>\n                <li>" + data.companies[0] + "</li>\n                <li>" + data.companies[1] + "</li>\n            </ol>";
};
get_people();
