export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
  SERVICES: number 
  CUSTOMERS: number
  PROJECTS: number
  USDRATE: number
}

export type Link = {
  href: string
  label: string
}

export type Locale = {
  lang: string;
  langTag: string[];
}

export type REVIEW = {
  name: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image?: string;
  show: boolean;
}


export const LOCALE: Locale = {
  lang: "fa", // html lang code. Set this empty and default will be "en"
  langTag: ["fa-IR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
}

export const SITE: Site = {
  TITLE: 'کافی نت دی',
  DESCRIPTION:
    'کافی نتی روستایی با دسترسی جهانی.',
  EMAIL: 'daynetcafe24@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 5,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://daynetcafe.ir',
  SERVICES: 13, 
  CUSTOMERS: 335, 
  PROJECTS: 436, 
  USDRATE: 850000
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'وبلاگ' },
  { href: '/services', label: 'خدمات' },
  { href: '/tags', label: 'تگ ها' },
  // { href: '/shop', label: 'فروشگاه' },
]

export const FOOTER_LINKS: Link[] = [
  {href: "/about", label: "درباره ما"},
  {href: "/blog", label: "وبلاگ"},
  {href: "/services", label: "خدمات"},
  // {href: "/shop", label: "فروشگاه"},
  {href: "/tags", label: "تگ ها"},
]


export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/zachshirow/daynetcafe.ir', label: 'GitHub' },
  { href: 'https://instagram.com/daynetcafe', label: 'Instagram' },
  { href: 'daynetcafe24@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
