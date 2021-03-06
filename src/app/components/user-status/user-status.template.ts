import { Component } from '../../core';

export class UserStatusTemplate extends Component {
  getTemplate(): string {
    return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="/assets/img/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`.trim();
  }
}
