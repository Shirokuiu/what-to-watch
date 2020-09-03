import { Component } from '../../core';

export class FooterStatisticTemplate extends Component {
  getTemplate(): string {
    return `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`.trim();
  }
}
