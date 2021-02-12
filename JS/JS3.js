function pl() {
	var a = document.getElementById('5pl');
	var b = document.getElementById('5v');
	var c = document.getElementById('5f');
	var d = document.getElementById('5img');

	a.className = "Sec5-Textpl";
	b.className = "none";
	c.className = "none";
	d.className = "none";
}

function v() {
	var a = document.getElementById('5pl');
	var b = document.getElementById('5v');
	var c = document.getElementById('5f');
	var d = document.getElementById('5img');

	a.className = "none";
	b.className = "Sec5-Textv";
	c.className = "none";
	d.className = "none";
}

function f() {
	var a = document.getElementById('5pl');
	var b = document.getElementById('5v');
	var c = document.getElementById('5f');
	var d = document.getElementById('5img');

	a.className = "none";
	b.className = "none";
	c.className = "Sec5-Textf";
	d.className = "none";
}

function img() {
	var a = document.getElementById('5pl');
	var b = document.getElementById('5v');
	var c = document.getElementById('5f');
	var d = document.getElementById('5img');

	a.className = "none";
	b.className = "none";
	c.className = "none";
	d.className = "Sec5-Img";
}

function sumarango() {
	var a = document.getElementById('65');
	var b = document.getElementById('66');
	var c = document.getElementById('6img1');
	var d = document.getElementById('6img2');

	a.innerHTML = "=SUMA(C17:D18)";
    c.className = "Sec6-Img1";
    a.className = "Sec6-Text5";
}

function sumaseleccion() {
	var a = document.getElementById('65');
	var b = document.getElementById('66');
	var c = document.getElementById('6img1');
	var d = document.getElementById('6img2');

	a.innerHTML = "=SUMA(C17;D18...)";
    c.className = "Sec6-Img3";
    a.className = "Sec6-Text5";
}

function promediorango() {
	var a = document.getElementById('65');
	var b = document.getElementById('66');
	var c = document.getElementById('6img1');
	var d = document.getElementById('6img2');

	b.innerHTML = "=PROMEDIO(C17:D18)";
    d.className = "Sec6-Img2";
    b.className = "Sec6-Text6";
}

function promedioseleccion() {
	var a = document.getElementById('65');
	var b = document.getElementById('66');
	var c = document.getElementById('6img1');
	var d = document.getElementById('6img2');

	b.innerHTML = "=PROMEDIO(C17;D18)...";
    d.className = "Sec6-Img4";
    b.className = "Sec6-Text6";
}

function nadaseis() {
	var a = document.getElementById('65');
	var b = document.getElementById('66');
	var c = document.getElementById('6img1');
	var d = document.getElementById('6img2');

	a.className = "none";
	b.className = "none";
	c.className = "none";
	d.className = "none";
}

function contarseleccion() {
	var c = document.getElementById('7img1');

	c.className = "Sec7-img1";
}

function contarrango() {
	var d = document.getElementById('7img2');

	d.className = "Sec7-img2";
}

function fueraseleccion() {
	var c = document.getElementById('7img1');

	c.className = "none";
}

function fuerarango() {
	var d = document.getElementById('7img2');

	d.className = "none";
}

con1 = 0;
con2 = 0;
con3 = 0;
con4 = 0;
conv = 0;

function valorbuscado() {
	var a = document.getElementById('82');
	var b = document.getElementById('83');
    
    if (con1==0) {
    	conv = conv+1;
    	con1 = 1;
    }
     a.className = "none";
     b.className = "Sec8-Text2";
}

function salirvb() {
	var a = document.getElementById('82');
	var b = document.getElementById('83');
    
     a.className = "Sec8-Text2";
     b.className = "none";

     if (conv>=4) {
     	a.innerHTML = "Esta función busca un valor que está en la matriz, tomando como referencia uno que está en la misma fila.";
     	if (conv==4) {
     	var f = document.getElementById('87');
     	f.className = "Sec8-Img1";}
     }
}

function rango() {
	var a = document.getElementById('82');
	var c = document.getElementById('84');
    
    if (con2==0) {
    	conv = conv+1;
    	con2 = 1;
    }
     a.className = "none";
     c.className = "Sec8-Text2";
}

function salirrango() {
	var a = document.getElementById('82');
	var c = document.getElementById('84');
    
     a.className = "Sec8-Text2";
     c.className = "none";

     if (conv>=4) {
     	a.innerHTML = "Esta función busca un valor que está en la matriz, tomando como referencia uno que está en la misma fila.";
     	if (conv==4) {
     	var f = document.getElementById('87');
     	f.className = "Sec8-Img1";}
     }
}

function valorcoluma() {
	var a = document.getElementById('82');
	var d = document.getElementById('85');
    
    if (con3==0) {
    	conv = conv+1;
    	con3 = 1;
    }
     a.className = "none";
     d.className = "Sec8-Text2";
}

function salircolumna() {
	var a = document.getElementById('82');
	var d = document.getElementById('85');
    
     a.className = "Sec8-Text2";
     d.className = "none";

     if (conv>=4) {
     	a.innerHTML = "Esta función busca un valor que está en la matriz, tomando como referencia uno que está en la misma fila.";
     	if (conv==4) {
     	var f = document.getElementById('87');
     	f.className = "Sec8-Img1";}
     }
}

function valorcoincidencia() {
	var a = document.getElementById('82');
	var e = document.getElementById('86');
    
    if (con4==0) {
    	conv = conv+1;
    	con4 = 1;
    }
     a.className = "none";
     e.className = "Sec8-Text2";
}

function salircoin() {
	var a = document.getElementById('82');
	var e = document.getElementById('86');
    
     a.className = "Sec8-Text2";
     e.className = "none";

     if (conv>=4) {
     	a.innerHTML = "Esta función busca un valor que está en la matriz, tomando como referencia uno que está en la misma fila.";
     	if (conv==4) {
     	var f = document.getElementById('87');
     	f.className = "Sec8-Img1";}
     }
}

function indiceentrar() {
	var a = document.getElementById('93');
	var b = document.getElementById('94');
	var c = document.getElementById('95');

	a.innerHTML = "=INDICE(Matriz;Número de Fila;Número de Columna)";
	a.className = "Sec9-Text3";
	 b.className = "Sec9-Text4";
	 b.innerHTML = "Busca y trae resultados en columnas o en filas. Primero se debe de poner un rango, que debe ser una columna o fila y después se indica el número de la casilla, el cual incrementa de izquierda a derecha, si es una fila, y de arriba hacia abajo si es una columna. Se pueden utilizar ambas coordenadas.";
	 c.className = "Sec9-Img1";
}

function coincidirentrar() {
	var a = document.getElementById('93');
	var b = document.getElementById('94');
	var c = document.getElementById('95');

	a.innerHTML = "=COINCIDIR(Valor buscado;Matriz;Coincidencia";
	a.className = "Sec9-Text3";
	 b.className = "Sec9-Text4";
	 b.innerHTML = "Su puede decir que es un medidor. El valor buscado es un dato en la matriz, la matriz debe ser una columna o una fila y la coincidencia es el nivel en que el dato, si es numérico, es aproximado al dato, 0, si es exacto, 1, si es menor que él y -1 si es mayor que él.";
	 c.className = "Sec9-Img2";
}

function salirnueve() {
	var a = document.getElementById('93');
	var b = document.getElementById('94');
	var c = document.getElementById('95');

	a.className = "none";
	b.className = "none";
	c.className = "none";
}