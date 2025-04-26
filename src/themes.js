import bgImageMobileLight from "./assets/images/bg-mobile-light.jpg";
import bgImageDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgImageMobileDark from "./assets/images/bg-mobile-dark.jpg";
import bgImageDesktopDark from "./assets/images/bg-desktop-dark.jpg";

const lightTheme = {
  colors: {
    buttonBorder: "var(--color-very-light-grayish-blue)",
    buttonGradient: "var(--color-check-background)",
    buttonBgHover: "linear-gradient(#fff, #fff)",
    bodyBgColor: "var(--color-very-light-gray)",
    bodyColor: "var(--color-very-dark-grayish-blue)",
    filterBtn: "var(--color-dark-grayish-blue)",
    filterBtnHover: "var(--color-very-dark-grayish-blue)",
    filterBtnSelected: "var(--color-bright-blue)",
    headerTitle: "var(--color-very-light-gray)",
    input: "var(--color-very-dark-grayish-blue)",
    inputBg: "#fff",
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

const darkTheme = {
  colors: {
    buttonBorder: "var(--color-very-dark-grayish-blue-deep)",
    buttonGradient: "var(--color-check-background)",
    buttonBgHover:
      "linear-gradient(var(--color-very-dark-desaturated-blue), var(--color-very-dark-desaturated-blue))",
    bodyBgColor: "var(--color-very-dark-blue)",
    bodyColor: "var(--color-light-grayish-blue-dark)",
    filterBtn: "var(--color-very-dark-grayish-blue-dark)",
    filterBtnHover: "var(--color-light-grayish-blue-hover)",
    filterBtnSelected: "var(--color-bright-blue)",
    headerTitle: "var(--color-very-light-gray)",
    input: "var(--color-dark-grayish-blue)",
    inputBg: "var(--color-very-dark-desaturated-blue)",
    inputPlaceholder: "var(--color-dark-grayish-blue)",
    listText: "var(--color-dark-grayish-blue)",
    listBg: "var(--color-very-dark-desaturated-blue)",
    todoBorder: "var(--color-very-dark-grayish-blue-deep)",
    todoCrossed: "var(--color-very-dark-grayish-blue-dark)",
  },
  images: {
    headerMobile: bgImageMobileDark,
    headerDesktop: bgImageDesktopDark,
  },
};

export { lightTheme, darkTheme };
