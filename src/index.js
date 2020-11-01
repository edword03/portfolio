import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'dom-node-polyfills';

import Portfolio from './script/main.js';

const getPortfolio = new Portfolio('.header', '.scroll-down__a', '.popup-menu', '.works-cards');
getPortfolio.events();


import './assets/style/style.scss';
// import './assets/style/style.css';

import './assets/pug/index.pug';
console.log('all');
