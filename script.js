function CheckPasswordStrength(password) {
        var password_strength = document.getElementById("password_strength");
 
        //TextBox left blank.
        if (password.length == 0) {
            password_strength.innerHTML = "";
            return;
        }
 
        //Regular Expressions.
        var regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.
 
        var passed = 0;
 
        //Validate for each Regular Expression.
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                passed++;
            }
        }
 
        //Validate for length of Password.
        if (passed > 2 && password.length > 8) {
            passed++;
        }
 
        //Display status.
        var color = "";
        var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Salasanasi on heikko!";
                color = "red";
                break;
            case 2:
                strength = "Salasanasi on hyvä!";
                color = "darkorange";
                break;
            case 3:
            case 4:
                strength = "Salasanasi on vahva!";
                color = "green";
                break;
            case 5:
                strength = "Salasanasi on erittäin vahva!";
                color = "darkgreen";
                break;
        }
        password_strength.innerHTML = strength;
        password_strength.style.color = color;
    }

    
    function validateForm() {
        var x=document.forms["myForm"]["id2"].value;
        if (x==null || x=="") {
          alert("Käyttäjä ID on pakollinen!");
          return false;
        }
    var y=document.forms["myForm"]["passwd"].value;
    if (y==null || y=="") {
      alert("Salasana on pakollinen!");
      return false;
    }
    var z=document.forms["myForm"]["nimi"].value;
    if (z==null || z=="") {
      alert("Nimi on pakollinen!");
      return false;
    }
    var u=document.forms["myForm"]["osoite"].value;
    if (u==null || u=="") {
      alert("Osoite on pakollinen!");
      return false;
    }
    var cars= document.getElementById("cars");
    if (cars.value == "fin2") {
        //If the "Please Select" option is selected display error.
        alert("Valitse joku maa!");
        return false;
    }
    var a=document.forms["myForm"]["posti"].value;
    if (a==null || a=="") {
      alert("Postinumero on pakollinen!");
      return false;
    }
    var t=document.forms["myForm"]["email"].value;
    if (t==null || t=="") {
      alert("Osoite on pakollinen!");
      return false;
    }
    if (!$("input[name=gender]:checked").val()) {
        alert('Valitse sukupuolesi!');
        return false;
     }
     if (!$("input[name=kieli]:checked").val()) {
        alert('Valitse kielesi!');
        return false;
     }
}
    
 

