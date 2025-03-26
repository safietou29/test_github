function envoyerDonnees() {
    if((document.formulaire.login.value == "") && (document.formulaire.password.value == "")) {
        alert("Vous devez remplir tous les champs");
    }
    else {
        if(document.formulaire.login.value == "")  {
            alert("Veuillez saisir votre login");
        }
        else {
            if(document.formulaire.MotDePasse.value == "") {
                alert("Veuillez saisir votre mot de passe");
            }
            else {
                alert("Merci d'avoir rempli tous les champs");
            }
    }
}
}  

function sommeQuestionA()
{
 var nombre1=parseInt(document.formulaire.nombre1.value);
 var nombre2=parseInt(document.formulaire.nombre2.value);
    var somme=nombre1+nombre2;   
    alert("la somme de " +nombre1+ " et de " +nombre2+ " est égale à : " +somme);
}