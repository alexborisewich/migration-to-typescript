import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ba946fe01f894581840ea4bd6dcfa0b9', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
