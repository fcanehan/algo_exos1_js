//Exercice 1 :
//Initialisez une variable booléenne a faux. Ecrivez les conditions pour afficher les messages
//« la variable est vrai » & « la variable est fausse » selon l’état de la variable.

// et avec 

//Exercice 2 :
//Faites-en sorte que soit affiché chacun des messages 10 fois.

var bool=false;

for (a=0;a<20;a++){
    if(a>9){
        bool=true
    }
    if (bool==true)
    {
     console.log("la variable est "+ bool);
        
    
    }else{
     console.log("la variable est "+bool)   
    }
    
}

//Exercice 3 :
//Pour chaque valeur entre 0 et 100, affichez « fizz » lorsque la valeur est un multiple de 3,
//« buzz » lorsque la valeur est un multiple de 5 et « fizzbuzz » lorsque la valeur est un,
//multiple de 15.

for (i=0;i<100;i++)
{
    if((i%3===0) && (i%5!==0)){
        console.log(i+"fizz");
    }else if((i%5===0) && (i%3!==0)){
        console.log(i+"buzz");
    }else if(i%15===0){
        console.log(i+"fizzbuzz");
    }
}

//exo fonction
//
//Exercice 1 :
//Ecrire une fonction addition qui retourne le résultat de l’addition des deux arguments. Tester
//la fonction en additionnant les valeurs n et n+1 de la suite des nombres entiers jusqu’a 100.

function addition(arg1,arg2){
    return arg1 + arg2;
}
for (i=0;i<100;i++) 
{
    console.log(addition(i,(i+1)));
}

//Ecrire une fonction fizzBuzz qui retourne le mot a afficher selon la valeur de l’argument.
//Utilisez l’algo de l’exercice 3 des conditions pour tester

for (var i=0;i<=100;i++)
{
    var retour="";
    if(i%3===0){            // alors fizz
        retour += "fizz";
    }
    if(i%5===0){
        retour += "buzz";     //alors buzz
       
    }    
}

// generation de la suite des nombres entiers de 1 jusqu'a 100

for(var i =1; i<=100;i++){

	// recuperatipon du resultat de la fonction 

	var value = fizzBuzz(i);	

	// affichage du resultat

	console.log("pour i=" + i + " : " + value);

}



/*

	La fonction fizzBuzz retourne une chaine selon la valeur passée en argument

	si multiple de 3 alors retourne fizz

	si multiple de 5 alors retourne buzz

	si multiple de 5 et de 3 alors retourne fizzbuzz

	retourne empty si aucun des autres cas

*/



function fizzBuzz(nombre){

	var retour = "";

	// si multiple de 3 

	if(nombre%3 === 0){

		//alors fizz

		retour = retour + "fizz";

	}

	// si multiple de 5

	if(nombre%5 === 0){

		//alors buzz

		retour = retour + "buzz";

	}

	return retour;

}