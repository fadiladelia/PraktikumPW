const login = document.querySelector('#login');
  login.addEventListener('click', function(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    
    if(username == "adelia" && password == "aku123"){
      alert('Benar')
      document.body.innerHTML="<h1>LOGIN BERASIL</h1>"
    }else{
      alert('Password Salah\nMasukkan\nUsername: adelia\nPassword: aku123')
    }
  })