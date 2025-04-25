import bgImageMobileLight from "./assets/images/bg-mobile-light.jpg";
import bgImageDesktopLight from "./assets/images/bg-desktop-light.jpg";

const lightTheme = {
  colors: {
    buttonBorder: "var(--color-very-light-grayish-blue)",
    buttonGradient: "var(--color-check-background)",
    bodyBgColor: "var(--color-very-light-gray)",
    bodyColor: "var(--color-very-dark-grayish-blue)",
    filterBtn: "var(--color-dark-grayish-blue)",
    filterBtnSelected: "var(--color-bright-blue)",
    headerTitle: "var(--color-very-light-gray)",
    input: "var(--color-very-dark-grayish-blue)",
    inputPlaceholder: "var(--color-dark-grayish-blue)",
    listText: "var(--color-dark-grayish-blue)",
    listBg: "#fff",
    todoBorder: "var(--color-very-light-grayish-blue)",
    todoCrossed: "var(--color-light-grayish-blue)",
  },
  images: {
    headerMobile: bgImageMobileLight,
    headerDesktop: bgImageDesktopLight,
  },
};

export { lightTheme };
