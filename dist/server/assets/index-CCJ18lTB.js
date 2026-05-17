import { P as reactExports, H as jsxRuntimeExports } from "./server-IilahGsN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const heroImg = "/assets/hero-sushi-UHgvtwuj.jpg";
const dishNigiri = "/assets/dish-nigiri-hh6vMsoZ.jpg";
const dishBurger = "/assets/dish-burger-DBLKNeyo.jpg";
const dishMaki = "/assets/dish-maki-D-Mmj5xO.jpg";
const dishWarm = "/assets/dish-warm-z1oNcE5U.jpg";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const dishes = [{
  name: "Філадельфія Преміум",
  jp: "フィラデルフィア",
  desc: "Лосось, крем-сир, авокадо, огірок, ікра тобіко.",
  price: "320 ₴",
  img: dishMaki
}, {
  name: "Суші-Бургер з Креветкою",
  jp: "海老バーガー",
  desc: "Рисовий бан, тигрова креветка, соус унагі, мікс-салат.",
  price: "280 ₴",
  img: dishBurger
}, {
  name: "Нігірі Лосось",
  jp: "サーモン握り",
  desc: "Норвезький лосось холодного посолу на пресованому рисі.",
  price: "95 ₴",
  img: dishNigiri
}, {
  name: "Теплі Роли в Темпурі",
  jp: "天ぷら巻き",
  desc: "Хрустка темпура, лосось, авокадо, спайсі-соус.",
  price: "260 ₴",
  img: dishWarm
}];
const reviews = [{
  name: "Valeria Nardet",
  text: "Неймовірний насичений смак! Роли такі, якими вони мають бути. Замовляли сети теплих ролів та лососеву насолоду — досконало.",
  when: "2 місяці тому"
}, {
  name: "Julia Korytan",
  text: "Дуже смачні роли. Рис і свіжий лосось, крем-сир, креветка, огірок і авокадо, зверху ікра. Якісно і смачно.",
  when: "3 місяці тому"
}, {
  name: "Leyla Jonova",
  text: "Неймовірно смачні та великі суші. Дуже приємний персонал — дозволили пересидіти з домашнім улюбленцем. Дякуємо.",
  when: "3 місяці тому"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl tracking-widest", children: "NORI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-jp text-xs text-muted-foreground", children: "海苔" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#menu", className: "hover:text-foreground transition", children: "Меню" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-foreground transition", children: "Про нас" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reviews", className: "hover:text-foreground transition", children: "Відгуки" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-foreground transition", children: "Контакти" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+380994911100", className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
        "Замовити"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-center pt-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Преміум суші", width: 1600, height: 1200, className: "w-full h-full object-cover animate-slow-pan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grain opacity-40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl animate-float-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-jp text-accent text-sm tracking-widest", children: "寿司 · 海苔" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-accent/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Івано-Франківськ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl md:text-8xl leading-[0.95] text-balance", children: [
          "Коли хочеться ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gradient-ember not-italic", children: "чогось особливого" }),
          " — обирай суші."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed", children: "Свіжа норвезька риба, авторські роли та теплі сети, що зникають з тарілки швидше, ніж встигаєш сфотографувати." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#menu", className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]", children: [
            "Подивитись меню",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://norisushi.com.ua", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:bg-secondary transition", children: "Замовити доставку" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex items-center gap-6 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-accent text-accent" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl", children: "4.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/ 582 відгуки" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-pulse", children: "Прокрутіть" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/50 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: [{
      k: "582+",
      v: "Відгуків"
    }, {
      k: "4.9★",
      v: "Рейтинг Google"
    }, {
      k: "30 хв",
      v: "Середня доставка"
    }, {
      k: "100%",
      v: "Свіжа риба щодня"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl text-gradient-ember", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground", children: s.v })
    ] }, s.v)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", className: "py-32 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-jp text-accent text-sm tracking-widest", children: "お品書き" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "Хіти меню" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-muted-foreground", children: "Кожен рол — це 30 хвилин роботи шефа. Жодних компромісів з рибою, рисом і соусами." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: dishes.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative bg-card border border-border/60 rounded-sm overflow-hidden hover:border-primary/60 transition-all duration-500", style: {
        animationDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, width: 900, height: 1100, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-jp text-xs text-accent tracking-widest mb-2", children: d.jp }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl leading-tight", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: d.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between pt-4 border-t border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-gradient-ember", children: d.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition", children: "Замовити →" })
          ] })
        ] })
      ] }, d.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://norisushi.com.ua", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition", children: [
        "Повне меню на norisushi.com.ua",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "py-32 bg-secondary/30 border-y border-border/50 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-40 top-1/2 -translate-y-1/2 font-jp text-[24rem] text-primary/5 leading-none select-none", children: "海苔" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-jp text-accent text-sm tracking-widest", children: "物語 · Історія" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-5xl md:text-6xl leading-tight text-balance", children: [
            "Філософія смаку, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gradient-ember not-italic", children: "загорнута в норі." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "NORI — це не просто суші-бар. Це місце, де японські техніки зустрічаються з українською душею. Ми обираємо рибу щоранку, варимо рис за традиційним рецептом і робимо роли руками — повільно, по одному, як належить." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "582 відгуки. 4.9 зірок. Тисячі повторних замовлень. Це не маркетинг — це повага гостей." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dishNigiri, alt: "", loading: "lazy", className: "w-full aspect-[3/4] object-cover rounded-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dishWarm, alt: "", loading: "lazy", className: "w-full aspect-[3/4] object-cover rounded-sm mt-12" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reviews", className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-jp text-accent text-sm tracking-widest", children: "声 · Голоси гостей" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "Це просто смакота 🤤" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "bg-card border border-border/60 rounded-sm p-8 flex flex-col hover:border-accent/60 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-accent text-accent" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-xl leading-snug flex-1", children: [
          "«",
          r.text,
          "»"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 pt-6 border-t border-border/60 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: r.when })
        ] })
      ] }, r.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-32 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", className: "w-full h-full object-cover opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-jp text-accent text-sm tracking-widest", children: "ご来店 · Завітайте" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl leading-[1] text-balance", children: [
          "Голодний? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gradient-ember not-italic", children: "Ми вже катаємо рол." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-xl mx-auto", children: "Замовляйте з доставкою або заходьте на келих сливового вина і свіжу нігірі." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+380994911100", className: "inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
            "099 491 1100"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://norisushi.com.ua", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-sm font-medium hover:bg-secondary transition", children: "Замовити онлайн" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid md:grid-cols-3 gap-6 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/60 backdrop-blur border border-border/60 rounded-sm p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: "Адреса" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
              "вул. Михайла Мулика, 7",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Івано-Франківськ"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/60 backdrop-blur border border-border/60 rounded-sm p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: "Графік" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
              "Щодня",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "до 22:00"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/60 backdrop-blur border border-border/60 rounded-sm p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-primary mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: "Замовлення" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
              "099 491 1100",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "norisushi.com.ua"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/50 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-foreground tracking-widest", children: "NORI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-jp text-xs", children: "海苔" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Суші-бар NORI. Зроблено з любов'ю в Івано-Франківську."
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
