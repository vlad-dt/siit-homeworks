class GameListView {
    constructor(){ 
        const model = new GameModel();
        this.games = model.getAll();
    }

    async createGameList() {
        const fragment = document.createDocumentFragment();

        for(const game of await this.games) {
            const gameHtml = this.createGameHtml(game);
            fragment.append(gameHtml);
        }

        document.querySelector('.js-game-list').append(fragment);
    }

    createGameHtml(game) {
        const p = document.createElement('p');
        const a = document.createElement('a');
        a.innerHTML = game.title;
        a.href = 'gameDetails.html?gameId=' + game._id;

        p.append(a);

        return p;
    }
}

const view = new GameListView();

view.createGameList();