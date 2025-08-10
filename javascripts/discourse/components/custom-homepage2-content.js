import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import getURL from "discourse-common/lib/get-url";
import { getDefaultHomepage } from "discourse/lib/utilities";

export default class CustomHomepageContent extends Component {
  @service router;

  get isHomepage() {
    const { currentRouteName } = this.router;
    return currentRouteName === `discovery.${getDefaultHomepage()}`;
  }
}

