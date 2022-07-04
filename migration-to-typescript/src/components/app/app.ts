import AppController from '../controller/controller';
import { INews } from '../types/types';
import { ISources } from '../types/types';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: INews): void => this.view.drawNews(data))
        );
        this.controller.getSources((data: ISources): void => this.view.drawSources(data));
    }
}

export default App;
