'use strict';
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import  'regexp-polyfill';
import browser from 'cross-browser-polyfill';
browser()
import calc from './modules/calc';
import calcСheck from './modules/calcСheck';
import countTimer from './modules/countTimer';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleFaсe from './modules/toggleFaсe';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import toggleStr from './modules/toggleStr';


countTimer('30 november 2020');

//меню
toggleMenu();

//popup
togglePopUp();

// стрелка скролл
toggleStr();

//табы
tabs();

//слайдер
slider();

//меняет лица при наводке
toggleFaсe();

//калькуляторблокировка
calcСheck();

//калькулятор
calc(100);

// send-ajax-form
sendForm();