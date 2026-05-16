 const NAME = document.getElementById("nombre");
 const ANOS = document.getElementById("numero"); 
 const BTN = document.getElementById("btn");
 const NIVEL_OUTPUT = document.getElementById("nivel");

function result() {
    let name = NAME.value.trim(); 
    let anos = parseInt(ANOS.value); 
    let level = "";
    let color = ""; 
  
    if (!name || isNaN(anos) || anos < 0) {        
        //alert("Por favor, introduzco el nombre correcto y la duracion del servicio");
        NIVEL_OUTPUT.textContent = "Por favor, introduzco el nombre correcto y la duracion del servicio";
        return;
    }   

    if (anos < 2) {
        //alert("Nivel principiales");
        level = "Nivel principiales";
        color = "gray";       
    }
    
    else if (anos >= 2 && anos < 4) {
        //alert("Nivel intermedio");
        level = "Nivel intermedio";
        color = "#30364F";       
    }

    else if (anos >= 4 && anos < 7) {
        //alert("Nivel avanzado");
        level = "Nivel avanzado";
        color = "#547A95";      
    } 

    else if (anos >= 7 && anos < 10) {
        //alert("Nivel experto");
        level = "Nivel experto";
        color = "#2C3947";     
    } 

    else  {
        //alert("Nivel Gurú");
        level = "Nivel Gurú";
        color = "#c0202f";    
    }

        setTimeout(() => {
        NIVEL_OUTPUT.style.display = "block";
        NIVEL_OUTPUT.innerHTML = `
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Anos:</strong> ${anos} anos</li>
            <li style="color: ${color}; font-weight: bold;">Nivel de experiencia: ${level}</li>
        </ul>
    `;

    NAME.value = ""; 
    ANOS.value = ""; 
    
    NAME.focus(); 

        NIVEL_OUTPUT.style.opacity = "1";
    }, 100);    
}
