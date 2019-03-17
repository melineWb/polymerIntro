import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from './pm-component.js';

class PmJumbotron extends PmComponent {
  static get template() {
    return html `
      ${super.template}
      <style>
        .bg-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 0;
        }

        .jumbotron {
          background-color: transparent !important;
          position: relative;
        }

      </style>

      <section class="position-relative overflow-hidden">
        <img src="/images/bg.jpg" alt="" class="bg-image">
        <div class="jumbotron jumbotron-fluid z-index-20">
          <div class="container">
            <h1 class="display-4 text-white">{{title}}</h1>
            <p class="lead font-weight-normal text-white">{{description}}</p>
          </div>
        </div>
      </section>
    `;
  }
  static get properties() {
    return {
      title: {
        type: String,
        value: 'Polymer Demo'
      },

      description: {
        type: String,
        value: 'This is a modified jumbotron that occupies the entire horizontal space of its parent.'
      },
    }
  }
}

customElements.define('pm-jumbotron', PmJumbotron);
