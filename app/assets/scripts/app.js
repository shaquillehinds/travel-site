import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

new RevealOnScroll(".feature-item", "80%");
new RevealOnScroll(".testimonial", "60%");
new MobileMenu();
new StickyHeader();
new Modal();
