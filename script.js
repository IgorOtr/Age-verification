var verificar = document.getElementById('verificar')

function verify (){

        const age = document.getElementById('idade').value;

        if (age == ''){
            alert('Informe sua idade')
            return;   
        }
    
    if(age >= 18){
        alert('Olá. Você é maior de idade e pode acessar esse site')
        window.location.assign("https://www.youtube.com/");
    } else{
        alert('Desculpe. Você é menor de idade e não pode acessar esse site')
        window.location.assign("https://www.youtubekids.com/?hl=pt "); 
    }
}
  
verificar.addEventListener('click', verify);