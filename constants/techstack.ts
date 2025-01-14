export type TechStack = {
  name: string;
  imgSrc?: string;
  type: "front" | "back";
};

export const frontTechStack: Array<TechStack> = [
  { name: "Angular", imgSrc: "/techstack/front/angular.svg", type: "front" },
  {
    name: "Bootstrap",
    imgSrc: "/techstack/front/bootstrap.svg",
    type: "front",
  },
  {
    name: "Javascript",
    imgSrc: "/techstack/front/javascript.svg",
    type: "front",
  },
  { name: "Jest", imgSrc: "/techstack/front/jest.svg", type: "front" },
  { name: "jQuery", imgSrc: "/techstack/front/jquery.svg", type: "front" },
  { name: "Next.js", imgSrc: "/techstack/front/nextdotjs.svg", type: "front" },
  { name: "Nuxt", imgSrc: "/techstack/front/nuxt.svg", type: "front" },
  { name: "React", imgSrc: "/techstack/front/react.svg", type: "front" },
  {
    name: "React Hook Form",
    imgSrc: "/techstack/front/reacthookform.svg",
    type: "front",
  },
  {
    name: "React Query",
    imgSrc: "/techstack/front/reactquery.svg",
    type: "front",
  },
  { name: "Recoil", imgSrc: "/techstack/front/recoil.svg", type: "front" },
  { name: "Redux", imgSrc: "/techstack/front/redux.svg", type: "front" },
  {
    name: "Redux Saga",
    imgSrc: "/techstack/front/reduxsaga.svg",
    type: "front",
  },
  { name: "Remix", imgSrc: "/techstack/front/remix.svg", type: "front" },
  { name: "Sass", imgSrc: "/techstack/front/sass.svg", type: "front" },
  { name: "Svelte", imgSrc: "/techstack/front/svelte.svg", type: "front" },
  {
    name: "Tailwind CSS",
    imgSrc: "/techstack/front/tailwindcss.svg",
    type: "front",
  },
  {
    name: "TypeScript",
    imgSrc: "/techstack/front/typescript.svg",
    type: "front",
  },
  { name: "Vite", imgSrc: "/techstack/front/vite.svg", type: "front" },
  { name: "Vitest", imgSrc: "/techstack/front/vitest.svg", type: "front" },
  { name: "Vue.js", imgSrc: "/techstack/front/vuedotjs.svg", type: "front" },
  { name: "Zustand", type: "front" },
  { name: "Jotai", type: "front" },
];

export const backTechStack: Array<TechStack> = [
  { name: "Django", imgSrc: "/techstack/back/django.svg", type: "back" },
  { name: "Flask", imgSrc: "/techstack/back/flask.svg", type: "back" },
  { name: "Go", imgSrc: "/techstack/back/go.svg", type: "back" },
  { name: "MariaDB", imgSrc: "/techstack/back/mariadb.svg", type: "back" },
  { name: "MongoDB", imgSrc: "/techstack/back/mongodb.svg", type: "back" },
  { name: "MySQL", imgSrc: "/techstack/back/mysql.svg", type: "back" },
  { name: "NestJS", imgSrc: "/techstack/back/nestjs.svg", type: "back" },
  { name: "Node.js", imgSrc: "/techstack/back/nodedotjs.svg", type: "back" },
  { name: "PHP", imgSrc: "/techstack/back/php.svg", type: "back" },
  {
    name: "PostgreSQL",
    imgSrc: "/techstack/back/postgresql.svg",
    type: "back",
  },
  { name: "Python", imgSrc: "/techstack/back/python.svg", type: "back" },
  { name: "Redis", imgSrc: "/techstack/back/redis.svg", type: "back" },
  { name: "Ruby", imgSrc: "/techstack/back/ruby.svg", type: "back" },
  {
    name: "Ruby on Rails",
    imgSrc: "/techstack/back/rubyonrails.svg",
    type: "back",
  },
  {
    name: "Spring Boot",
    imgSrc: "/techstack/back/springboot.svg",
    type: "back",
  },
  { name: "SQLite", imgSrc: "/techstack/back/sqlite.svg", type: "back" },
];
