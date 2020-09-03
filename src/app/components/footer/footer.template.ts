import { Component } from '../../core';

export class FooterTemplate extends Component {
  getTemplate(): string {
    return `<footer class="footer">
    <section class="footer__logo logo logo--smaller">Cinemaddict</section>

    <!-- FooterStatisticController !-->
  </footer>`.trim();
  }
}
