import { Component } from '../../core';

export class ShowMoreTemplate extends Component {
  getTemplate(): string {
    return `<button class="films-list__show-more">Show more</button>`.trim();
  }
}
