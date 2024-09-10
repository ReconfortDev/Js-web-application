import '../styles/main.scss';
import { fetchBuildTools } from './utils';
import _ from 'lodash';

fetchBuildTools().then((tools) => {
    const content = document.getElementById('content');
    const list = document.createElement('ul');

    _.forEach(tools, (tool) => {
        const listItem = document.createElement('li');
        listItem.textContent = tool.name;
        list.appendChild(listItem);
    });

    content.appendChild(list);
});
