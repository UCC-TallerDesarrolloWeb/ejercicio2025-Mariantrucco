/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */


function convertirunidades(unidad, valor){
    let metro, pie, pulgada, yarda;

    console.log(valor);
    console.log(isNaN(valor));
    if(isNaN(valor)){
        alert("El valor ingresado no es correcto");
        metro="";
        pulgada="";
        pie="";
        yarda="";
    }else{
        if(unidad=="unid_metro"){
        metro=valor;
        pulgada=39.37*metro;
        pie = 3.28*metro;
        yarda= 1.0936*metro;
    }else if(unidad=="unid_pulgada"){
        pulgada=valor;
        pie=0.083333*valor;
        metro=0.0254*valor;
        yarda=0.027778*valor;
    }
    else if(unidad=="unid_pie"){
        pie=valor;
        metro=0.3048*pie;
        pulgada=12*pie;
        yarda=0.3333*pie;
    }else if(unidad="unid_yarda"){
        yarda=valor;
        pulgada=36*yarda;
        metro=0.9144*yarda;
        pie=3*yarda;
    }}

    
    document.getElementById("metro").value = metro;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yarda;
    document.getElementById("pulgada").value = pulgada;

}