const gameForm = document.getElementById('gameForm');
gameForm.addEventListener('submit', ProcessForm);

function ProcessForm() {
    const gameId = document.getElementById("gameForm").elements["gameId"].value;
    const title = document.getElementById("gameForm").elements["title"].value;
    const image = document.getElementById("gameForm").elements["image"].value;
    const description = document.getElementById("gameForm").elements["description"].value;

    if(gameId == "undefined") {
        AddNew(title, image, description);
    }
    else {
        Edit(gameId, title, image, description);
    }   
}

function GetAll() {
    fetch('https://games-world.herokuapp.com/games').then(res => res.json()).then(data => {
        const fragment = document.createDocumentFragment();
    
        for(const game of data) {
    
            const a = document.createElement('a');
            a.href = 'https://games-world.herokuapp.com/games/' + game._id;
            a.innerHTML = game.title;
            
            const description = document.createElement('p');
            description.innerHTML = game.description;
            
            const imageUrl = document.createElement('img');
            imageUrl.src = game.imageUrl;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete game";
    
            const editBtn = document.createElement('button');
            editBtn.textContent = "Edit game";
    
            a.addEventListener('click', (e) => {
                e.preventDefault();
            });

            deleteBtn.addEventListener('click', (e) => {
                Delete(game._id);
                e.preventDefault();
            });

            editBtn.addEventListener('click', (e) => {
                const gameForm = document.getElementById("gameForm");
                gameForm.scrollIntoView();

                FillData(game._id, game.title, game.imageUrl, game.description);
                e.preventDefault();
            });
    
            fragment.append(a);
            fragment.append(description);
            fragment.append(imageUrl);
            fragment.append(deleteBtn);
            fragment.append(editBtn);
    
            // this should also be extracted outside of for loop, only create br once
            fragment.append(document.createElement('br'));
        }
        
        document.body.append(fragment);
        
    });
}

function FillData(gameId, gameTitle, gameImageUrl, gameDescription) {
    document.getElementById("gameForm").elements["gameId"].value = gameId;
    document.getElementById("gameForm").elements["title"].value = gameTitle;
    document.getElementById("gameForm").elements["image"].value = gameImageUrl;
    document.getElementById("gameForm").elements["description"].value = gameDescription;
}


function Delete(gameId) {
    fetch('https://games-world.herokuapp.com/games/' + gameId, {
        method: 'DELETE'
    })
    .then(res =>  {
        res.json();
        RefreshPage();
    });
}

function Edit(gameId, gameTitle, gameImage, gameDescription) { 
    const data = {title: gameTitle, description: gameDescription, imageUrl: gameImage};

    fetch('https://games-world.herokuapp.com/games/' + gameId, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    }).then(res => {
        res.json();
        RefreshPage();
    });
}

function AddNew(gameTitle, gameImage, gameDescription) {

    const data = {title: gameTitle, description: gameDescription, imageUrl: gameImage};

    fetch('https://games-world.herokuapp.com/games', {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
      }).then(response => {
          response.json();
          RefreshPage();
      });
}

function RefreshPage() {
    location.reload();
}



