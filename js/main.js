AOS.init();
let loader = document.querySelector('.loader');
let projects = document.querySelector('.cards');

document.addEventListener('DOMContentLoaded',()=>
{
    let req = new XMLHttpRequest();
    req.open('GET','/projects.json');
    req.send();
    loader.classList.add('fa','fa-cog','fa-spin','fa-3x','fa-fw');
    req.onreadystatechange =()=>
    { 
       if(req.status == 200 && req.readyState == 4)
       {
          loader.classList.remove('fa','fa-cog','fa-spin','fa-3x','fa-fw');
       }
    };
    req.onload=()=>
    {
       let listOfProject = JSON.parse(req.responseText);
       listOfProject.forEach((project)=>{
           let element = UI.createProject(project);
           UI.showProject(element);
       });
    };
});

class UI
{
    static createProject(data)
    {
        let cardContainer = document.createElement('section');
            cardContainer.className= 'card m-1';
        let cardImage = document.createElement('div');
            cardImage.className = 'card-image';
        let image = document.createElement('img');
            image.src = `/img/projects/${data.image}`;
            image.alt = data.title;
        let cardBody = document.createElement('article');
            cardBody.className = 'card-body';
        let cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = data.title;
        let cardSubtitle = document.createElement('p');
            cardSubtitle.className = 'card-subtitle';
            cardSubtitle.textContent = data.description;

        let buttonContainer = document.createElement('p');
            buttonContainer.className = 'text-center';
        let button = document.createElement('a');
            button.href = data.url;
            button.textContent = 'Muéstrame ';
            button.className = 'btn btn-red text-white btn-rounded';
        let icon = document.createElement('i');
            icon.className = 'fa fa-rocket';
            icon.setAttribute('aria-hidden',true);

        button.appendChild(icon);
        buttonContainer.appendChild(button);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubtitle);
        cardBody.appendChild(buttonContainer);
        cardImage.appendChild(image);
        cardContainer.appendChild(cardImage);
        cardContainer.appendChild(cardBody);

        return cardContainer;
    }

    static showProject(element)
    {   
        projects.appendChild(element);
    }
}