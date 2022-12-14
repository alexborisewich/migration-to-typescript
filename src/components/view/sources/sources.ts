import { ISource } from '../../types/types';
import './sources.css';

class Sources {
    draw(data: ISource[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item: Pick<ISource, 'name' | 'id'>): void => {
            const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
