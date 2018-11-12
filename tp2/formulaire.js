function validation ()
{



if (document.getElementById("Nom").value==""||document.getElementById("Nom").value.length<5) {



    document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    
} else {     document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Nom").value;

}

{if ( document.getElementById("Prenom").value==""||document.getElementById("Prenom").value.length<5) 

    document.getElementById("error").innerHTML = "La saisie du Prenom est obligatoire";


    else {     document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Prenom").value;


    }
        if (document.getElementById("date").value==""||document.getElementById("date").value.length<5) {
        document.getElementById("error").innerHTML = "La saisie de la date est obligatoire";

        
    } else {     document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#date").value;

}
        if (document.getElementById("Adresse").value==""||document.getElementById("Adresse").value.length<5) {
            document.getElementById("error").innerHTML = "La saisie d'adresse est obligatoire";
            
        } else {     document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Adresse").value;

    }
            if (document.getElementById("email").value==""||document.getElementById("email").value.length<5) {

                document.getElementById("error").innerHTML = "La saisie d'email est obligatoire";
                
            } else{    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#email").value;

        }
        }
    }



