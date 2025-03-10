 function validatePassword(){
    const password=document.querySelector("#pword").value; //selecting value of password
    const decision=document.querySelector("#decision"); //selectin p tag

    //creating and testing regExp for password
    const minLength= 10;
    const lowerCase =/[a-z]/.test(password);
    const upperCase=/[A-Z]/.test(password);
    const number=/[0-9]/.test(password);
    const specialSymbol=/[!@#$%^&*<>,.}?/-~({]/.test(password);

    if(password.length < minLength){
        decision.style.color="red";
        decision.textContent="password should have length greater than 10";
    }else if(!lowerCase){
        decision.style.color="red";
        decision.textContent="password should have at least one lowerCase character";

    }else if(!upperCase){
        decision.style.color="red";
        decision.textContent="password should have at least one upperCase character";

    }else if(!number){
        decision.style.color="red";
        decision.textContent="password should have at least one digit";

    }else if(!specialSymbol){
        decision.style.color="red";
        decision.textContent="password should have at least one special symbol";

    }else{
        decision.style.color="green";
        decision.textContent="PASSWORD VERIFIED ,you have very strong password !";

    }

    console.log(password);  //for debugging 
 }


