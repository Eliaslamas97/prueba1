//Dado un mes como un número entero de 1 a 12, devuelve a qué trimestre del año pertenece como un número entero.

function prueba1(mes){
 if(mes <= 3) return 'Pertenece al primer trimestre del año'
 if(mes > 3 && mes <= 6) return 'Pertenece al segundo trimestre del año'
 if(mes > 6 && mes <= 9) return 'Pertenece al tercer trimestre del año'
 if(mes > 9 && mes <= 12) return 'Pertenece al cuarto trimestre del año'
}

prueba1(2);
prueba1(5);
prueba1(7);
prueba1(10);