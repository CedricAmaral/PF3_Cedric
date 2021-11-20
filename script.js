function juros () {
 var resultado = document.getElementById('resultado');
 var entrada   = parseFloat(document.getElementById("entrada").value);
 var juros = parseFloat(document.getElementById("juros").value);
 var parcelas = parseFloat(document.getElementById("parcelas").value);
 var calc='';

calc = entrada * ((((1 + (juros/100))** parcelas) - 1) / (juros/100));
 
resultado.textContent = `Olá, se você aplicar ${entrada} reais por mês, à taxa de ${juros/100}% ao mês, durante ${parcelas} meses, acumulará uma poupança de ${calc.toFixed(2)} reais`;
}
