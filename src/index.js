import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div
    const myIocn = new Image();
    myIocn.src = Icon;
    element.appendChild(myIocn);

    return element;
}
document.body.appendChild(component());