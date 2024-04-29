const flowersContainerElement = document.getElementById('flowers-container')
async function loadFlowers(){
    const res = await fetch("https://alisherkhamidov.github.io/book-api/flowers.json")
    const flowers = await res.json()
    flowers.forEach((flower)=>{
        const {name, color, description, image, maxHeight}=flower
        const cardElemenet = document.createElement('div');
        cardElemenet.className= "card";
        const nameElement = document.createElement('span');
        nameElement.classList.add("card-el", "title");
        const imgElement = document.createElement('img');
        imgElement.className="card-el";
        nameElement.textContent=name;
        imgElement.src= image;
        cardElemenet.append(nameElement,imgElement);
        flowersContainerElement.append(cardElemenet)
    })
}
loadFlowers()