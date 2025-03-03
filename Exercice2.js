/* Nous voulons savoir si les chauffeurs sont autorisés à conduire suivant leur âge. L’âge légal en France est maintenant de 17 ans.

Déclare une fonction qui prend en paramètre un prénom et un âge.
Dans cette fonction, nous allons afficher dans la console si le chauffeur est autorisé à conduire ou pas en comparant 
son âge à l’âge légal.
Appeler la fonction avec les chauffeurs suivant :
Mathieu 22 ans
Léa 15 ans
Jean 17 ans*/


function driverAge (prenom, age) {
    if(age == 17) {
        console.log(prenom + " " + "Est autorisé à conduire")
    } else if (age < 17) {
        console.log(prenom + " " + "Est pas autorisé à conduire")
    } else {
        console.log(prenom + " " + "Est autorisé à conduire")
    }

}

driverAge('Mathieu', 22)
driverAge('Léa', 15)
driverAge('Jean',17)