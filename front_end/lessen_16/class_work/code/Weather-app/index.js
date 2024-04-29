const button = document.getElementById('refreshButton')
const AmsterdamUrl = "https://wttr.in/Amsterdam"
const AmsterdamParams = 
    {
       params:{
        2: "",
        m: "",
        lang: "de"
       } 
    };
    
     

function fetchData(){
        const queryString = new URLSearchParams(AmsterdamParams.params).toString();
        fetch(`${AmsterdamUrl}?${queryString}`)
        .then((response)=>response.text())
        .then((pageText)=>{
            const result = document.getElementById('content')
            result.innerHTML = pageText;
        })
    }

button.addEventListener('click', fetchData)