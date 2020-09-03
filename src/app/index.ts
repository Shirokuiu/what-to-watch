import { FooterController, HeaderController, MainController } from './components';

const $rootContainer: HTMLElement = document.body as HTMLElement;

const headerController = new HeaderController($rootContainer);
const mainController = new MainController($rootContainer);
const footerController = new FooterController($rootContainer);

headerController.init();
mainController.init();
footerController.init();
