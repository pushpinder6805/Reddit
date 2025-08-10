import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";

export default class CustomHomepage2Content extends Component {
  @service router;

  get isHomepage() {
    const currentRouteName = this.router?.currentRouteName || "";
    return currentRouteName === `discovery.${defaultHomepage()}`;
  }
}

