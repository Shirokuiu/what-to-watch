import { Component } from '../../core';

export class HeaderTemplate extends Component {
  getTemplate(): string {
    return `<header class="header">
    <h1 class="header__logo logo">Cinemaddict</h1>

    <!-- MainSearchController -->

    <!-- UserStatusController -->
  </header>`.trim();
  }
}
