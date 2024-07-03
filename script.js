function displayBiodata() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var occupation = document.getElementById("occupation").value;

    document.getElementById("display-name").textContent = "Name: " + name;
    document.getElementById("display-age").textContent = "Age: " + age;
    document.getElementById("display-city").textContent = "City: " + city;
    document.getElementById("display-address").textContent = "Address: " + address;
    document.getElementById("display-occupation").textContent = "Occupation: " + occupation;
}
