import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sushi.jpg";
import dishNigiri from "@/assets/dish-nigiri.jpg";
import dishBurger from "@/assets/dish-burger.jpg";
import dishMaki from "@/assets/dish-maki.jpg";
import dishWarm from "@/assets/dish-warm.jpg";
import { Phone, MapPin, Clock, Star, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NORI — Суші-бар в Івано-Франківську" },
      { name: "description", content: "Преміум суші-бар NORI в Івано-Франківську. Свіжа риба, авторські роли, доставка. Рейтинг 4.9 ⭐ за 582 відгуками." },
      { property: "og:title", content: "NORI — Преміум суші-бар" },
      { property: "og:description", content: "Свіжа риба, авторські роли, безконтактна доставка. вул. Михайла Мулика, 7, Івано-Франківськ." },
      { property: "og:type", content: "restaurant" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const dishes = [
  { name: "Філадельфія Преміум", jp: "フィラデルフィア", desc: "Лосось, крем-сир, авокадо, огірок, ікра тобіко.", price: "320 ₴", img: dishMaki },
  { name: "Суші-Бургер з Креветкою", jp: "海老バーガー", desc: "Рисовий бан, тигрова креветка, соус унагі, мікс-салат.", price: "280 ₴", img: dishBurger },
  { name: "Нігірі Лосось", jp: "サーモン握り", desc: "Норвезький лосось холодного посолу на пресованому рисі.", price: "95 ₴", img: dishNigiri },
  { name: "Теплі Роли в Темпурі", jp: "天ぷら巻き", desc: "Хрустка темпура, лосось, авокадо, спайсі-соус.", price: "260 ₴", img: dishWarm },
];

const reviews = [
  { name: "Valeria Nardet", text: "Неймовірний насичений смак! Роли такі, якими вони мають бути. Замовляли сети теплих ролів та лососеву насолоду — досконало.", when: "2 місяці тому" },
  { name: "Julia Korytan", text: "Дуже смачні роли. Рис і свіжий лосось, крем-сир, креветка, огірок і авокадо, зверху ікра. Якісно і смачно.", when: "3 місяці тому" },
  { name: "Leyla Jonova", text: "Неймовірно смачні та великі суші. Дуже приємний персонал — дозволили пересидіти з домашнім улюбленцем. Дякуємо.", when: "3 місяці тому" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-widest">NORI</span>
            <span className="font-jp text-xs text-muted-foreground">海苔</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#menu" className="hover:text-foreground transition">Меню</a>
            <a href="#about" className="hover:text-foreground transition">Про нас</a>
            <a href="#reviews" className="hover:text-foreground transition">Відгуки</a>
            <a href="#contact" className="hover:text-foreground transition">Контакти</a>
          </nav>
          <a
            href="tel:+380994911100"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]"
          >
            <Phone className="w-3.5 h-3.5" />
            Замовити
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Преміум суші"
            width={1600}
            height={1200}
            className="w-full h-full object-cover animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          <div className="absolute inset-0 bg-grain opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl animate-float-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-jp text-accent text-sm tracking-widest">寿司 · 海苔</span>
              <span className="h-px w-12 bg-accent/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Івано-Франківськ</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance">
              Коли хочеться <em className="text-gradient-ember not-italic">чогось особливого</em> — обирай суші.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Свіжа норвезька риба, авторські роли та теплі сети, що зникають з тарілки швидше, ніж встигаєш сфотографувати.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]"
              >
                Подивитись меню
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="https://norisushi.com.ua"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:bg-secondary transition"
              >
                Замовити доставку
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-display text-2xl">4.9</span>
                <span className="text-muted-foreground">/ 582 відгуки</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
          Прокрутіть
        </div>
      </section>

      {/* STRIP */}
      <section className="border-y border-border/50 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { k: "582+", v: "Відгуків" },
            { k: "4.9★", v: "Рейтинг Google" },
            { k: "30 хв", v: "Середня доставка" },
            { k: "100%", v: "Свіжа риба щодня" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl md:text-4xl text-gradient-ember">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-32 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="font-jp text-accent text-sm tracking-widest">お品書き</span>
              <h2 className="mt-3 font-display text-5xl md:text-6xl">Хіти меню</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Кожен рол — це 30 хвилин роботи шефа. Жодних компромісів з рибою, рисом і соусами.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dishes.map((d, i) => (
              <article
                key={d.name}
                className="group relative bg-card border border-border/60 rounded-sm overflow-hidden hover:border-primary/60 transition-all duration-500"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="font-jp text-xs text-accent tracking-widest mb-2">{d.jp}</div>
                  <h3 className="font-display text-2xl leading-tight">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-border/60">
                    <span className="font-display text-xl text-gradient-ember">{d.price}</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition">
                      Замовити →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://norisushi.com.ua"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition"
            >
              Повне меню на norisushi.com.ua
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-secondary/30 border-y border-border/50 relative overflow-hidden">
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 font-jp text-[24rem] text-primary/5 leading-none select-none">
          海苔
        </div>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center relative">
          <div>
            <span className="font-jp text-accent text-sm tracking-widest">物語 · Історія</span>
            <h2 className="mt-3 font-display text-5xl md:text-6xl leading-tight text-balance">
              Філософія смаку, <em className="text-gradient-ember not-italic">загорнута в норі.</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              NORI — це не просто суші-бар. Це місце, де японські техніки зустрічаються з українською душею. Ми обираємо рибу щоранку, варимо рис за традиційним рецептом і робимо роли руками — повільно, по одному, як належить.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              582 відгуки. 4.9 зірок. Тисячі повторних замовлень. Це не маркетинг — це повага гостей.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={dishNigiri} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover rounded-sm" />
            <img src={dishWarm} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover rounded-sm mt-12" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-jp text-accent text-sm tracking-widest">声 · Голоси гостей</span>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">Це просто смакота 🤤</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="bg-card border border-border/60 rounded-sm p-8 flex flex-col hover:border-accent/60 transition"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug flex-1">«{r.text}»</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border/60 flex items-center justify-between text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-muted-foreground text-xs">{r.when}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="font-jp text-accent text-sm tracking-widest">ご来店 · Завітайте</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1] text-balance">
            Голодний? <em className="text-gradient-ember not-italic">Ми вже катаємо рол.</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Замовляйте з доставкою або заходьте на келих сливового вина і свіжу нігірі.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+380994911100"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]"
            >
              <Phone className="w-4 h-4" />
              099 491 1100
            </a>
            <a
              href="https://norisushi.com.ua"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-sm font-medium hover:bg-secondary transition"
            >
              Замовити онлайн
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card/60 backdrop-blur border border-border/60 rounded-sm p-6">
              <MapPin className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-display text-xl">Адреса</h3>
              <p className="mt-2 text-sm text-muted-foreground">вул. Михайла Мулика, 7<br />Івано-Франківськ</p>
            </div>
            <div className="bg-card/60 backdrop-blur border border-border/60 rounded-sm p-6">
              <Clock className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-display text-xl">Графік</h3>
              <p className="mt-2 text-sm text-muted-foreground">Щодня<br />до 22:00</p>
            </div>
            <div className="bg-card/60 backdrop-blur border border-border/60 rounded-sm p-6">
              <Phone className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-display text-xl">Замовлення</h3>
              <p className="mt-2 text-sm text-muted-foreground">099 491 1100<br />norisushi.com.ua</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl text-foreground tracking-widest">NORI</span>
            <span className="font-jp text-xs">海苔</span>
          </div>
          <p>© {new Date().getFullYear()} Суші-бар NORI. Зроблено з любов'ю в Івано-Франківську.</p>
        </div>
      </footer>
    </div>
  );
}
