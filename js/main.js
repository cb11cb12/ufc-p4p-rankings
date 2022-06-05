document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const fighterName = document.querySelector('input').value
    try{
        const response = await fetch(`https://ufc-p4p-rankings.herokuapp.com/${fighterName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.ranking
    }catch(error){
        console.log(error)
    }
}