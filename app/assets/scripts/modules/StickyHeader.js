import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    this.headerTriggerElement = $(".large-hero__title");
    this.siteHeader = $(".site-header");
    this.createHeaderWaypoint(this.headerTriggerElement[0]);
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint(waypoint) {
    let self = this;
    new Waypoint({
      element: waypoint,
      handler: function() {
        self.siteHeader.toggleClass("site-header--dark");
      },
      offset: "0%"
    });
  }

  createPageSectionWaypoints() {
    let headerLinks = this.headerLinks;
    this.pageSections.each(function() {
      let currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            let matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            headerLinks.removeClass("current-section");
            $(matchingHeaderLink).toggleClass("current-section");
          }
        },
        offset: "20%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            let matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            headerLinks.removeClass("current-section");
            $(matchingHeaderLink).toggleClass("current-section");
          }
        },
        offset: "-45%"
      });
    });
  }
}

export default StickyHeader;
