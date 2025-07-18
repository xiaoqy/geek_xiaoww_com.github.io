/* main function */
import initUtils from "./utils.js";
import initTyped from "./plugins/typed.js";
import initModeToggle from "./tools/lightDarkSwitch.js";
import initLazyLoad from "./layouts/lazyload.js";
import initScrollTopBottom from "./tools/scrollTopBottom.js";
import initLocalSearch from "./tools/localSearch.js";
import initCopyCode from "./tools/codeBlock.js";
import initBookmarkNav from "./layouts/bookmarkNav.js";

export const main = {
  themeInfo: {
    theme: `Redefine v${theme.version}`,
    author: "EvanNotFound",
    repository: "https://github.com/EvanNotFound/hexo-theme-redefine",
  },
  localStorageKey: "REDEFINE-THEME-STATUS",
  styleStatus: {
    isExpandPageWidth: false,
    isDark: theme.colors.default_mode && theme.colors.default_mode === "dark",
    fontSizeLevel: 0,
    isOpenPageAside: true,
  },
  printThemeInfo: () => {
    console.log(" ___    ___ ___  ________  ________  ___       __   ___       __      \r\n|\\  \\  /  /|\\  \\|\\   __  \\|\\   __  \\|\\  \\     |\\  \\|\\  \\     |\\  \\    \r\n\\ \\  \\/  / \\ \\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\    \\ \\  \\ \\  \\    \\ \\  \\   \r\n \\ \\    / / \\ \\  \\ \\   __  \\ \\  \\\\\\  \\ \\  \\  __\\ \\  \\ \\  \\  __\\ \\  \\  \r\n  /     \\/   \\ \\  \\ \\  \\ \\  \\ \\  \\\\\\  \\ \\  \\|__\\_\\  \\ \\  \\|__\\_\\  \\ \r\n /  /\\   \\    \\ \\__\\ \\__\\ \\__\\ \\_______\\ \\____________\\ \\____________\\\r\n/__ /\\ __\\    \\|__|\\|__|\\|__|\\|_______|\\|____________|\\|____________|\r\n|__|/ \\|__|                                                          \r\n                                                                     \r\n主页：https://www.xiaoww.com\r\n个人博客：https://blog.xiaoww.com\r\n技术博客：https://geek.xiaoww.com\r\n作者：思远文文"); // console log message
  },
  setStyleStatus: () => {
    localStorage.setItem(
      main.localStorageKey,
      JSON.stringify(main.styleStatus),
    );
  },
  getStyleStatus: () => {
    let temp = localStorage.getItem(main.localStorageKey);
    if (temp) {
      temp = JSON.parse(temp);
      for (let key in main.styleStatus) {
        main.styleStatus[key] = temp[key];
      }
      return temp;
    } else {
      return null;
    }
  },
  refresh: () => {
    initUtils();
    initModeToggle();
    initScrollTopBottom();
    initBookmarkNav();
    
    // if (
    //   theme.home_banner.subtitle.text.length !== 0 &&
    //   location.pathname === config.root
    // ) {
    //   initTyped("subtitle");
    // }

    // 清除旧打字动画
    if (window.typedInstance && typeof window.typedInstance.destroy === "function") {
      window.typedInstance.destroy();
      window.typedInstance = null;
    }

    // 只有在首页并存在 subtitle DOM 时才初始化
    const subtitleEl = document.querySelector(".typed-subtitle");
    if (
      theme.home_banner.subtitle.text.length !== 0 &&
      subtitleEl &&
      location.pathname === config.root
    ) {
      window.typedInstance = initTyped("subtitle");
    }

    

    if (theme.navbar.search.enable === true) {
      initLocalSearch();
    }

    if (theme.articles.code_block.copy === true) {
      initCopyCode();
    }

    if (theme.articles.lazyload === true) {
      initLazyLoad();
    }
  },
};

export function initMain() {
  main.printThemeInfo();
  main.refresh();
}

document.addEventListener("DOMContentLoaded", initMain);

try {
  swup.hooks.on("page:view", () => {
    main.refresh();
  });
} catch (e) {}
