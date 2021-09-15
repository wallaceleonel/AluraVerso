 
console.log("Bem-vindo " + nome)
if (notaFinal >=6)
console.log("parabens , vc esta aprovado :) ")
else console.log("parabens , vc foi reprovado :(")

// controle climatico Dev_

var variavel =prompt("desenha converter celcius para faraing , se sim digite 1 para Firen se não digite 2 para Kelvin ")

if (variavel == 1 )var conversor=prompt("selecionado modo de conversão faring ,informe a temperatua a ser convertida :")
faring = (1.8*conversor)+32 
console.log("temperatura em faring é de : " + faring)
if(variavel==2)varconversor=prompt("realizando coversão de faring para celcius ") 
else console.log("para de zoa o programa _|_ :)")
celcius= ((conversor-32)/1+8)
console.log("a temperatura em celcius e de :"+celcius)