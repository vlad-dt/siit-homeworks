class GameDetailsView {
    constructor() {
        const model = new GameModel();

        const queryParams = location.search.split('&');
        const gameId = queryParams
            .find(param => param.includes('gameId='))
            .split('=')[1];

        this.game = model.findById(gameId);
    }

    async displayGame() {
        const article = document.querySelector('.js-game-details');
        article.append(await this.createHtml());
    }

    async createHtml() {
        const game = await this.game;

        const body = document.createElement('section');

        const title = document.createElement('h2');
        title.innerHTML = game.title;

        const imageUrl = document.createElement('img');
        imageUrl.src = game.imageUrl;

        const description = document.createElement('p');
        description.innerHTML = game.description;

        body.append(title);
        body.append(imageUrl);
        body.append(description);

        return body;
    }
}

const view = new GameDetailsView();
view.displayGame();