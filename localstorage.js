function sendData(){
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    let Address = document.getElementById("address").value;
    let City = document.getElementById("city").value;
    let Zip = document.getElementById("zip").value;


    localStorage.setItem("email",Email);
    localStorage.setItem("password",Password);
    localStorage.setItem("address",Address);
    localStorage.setItem("city",City);
    localStorage.setItem("zip",Zip);

}