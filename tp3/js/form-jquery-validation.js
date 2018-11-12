$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur




    // Y mettre le code jQuery pour valider tous les champs du formulaire
    $("#valider").on("click", function (event) {
        event.preventDefault();
        var $nom = $("#Nom").val();
        var $prenom = $("#Prenom").val();
        var $date = $("#Date").val();
        var $adresse = $("#Adresse").val();
        var $mail = $("#Mail").val();


        if ($nom.length < 5 || $prenom.length < 5 || $date.length < 9 || $adresse.length < 5 || $mail.length < 5) {
            $(".modal-title").text("Nom equired");
            $("#myModal").modal("show");
        }
       

        else { 
        $('.modal-title').text(" Bienvenue " + $("#Prenom").val());
        $('#myModal').modal("show");
        $('.modal-body').text(" vous etes née le  " + $("#Date").val()  +  "et vous habitez à " + $("#Adresse").val());
        $('.image').html('<img src="https://maps.googleapis.com/maps/api/staticmap?markers=paris&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"></img>');
        
        $('#myModal').modal("show");
        }



    });

});



