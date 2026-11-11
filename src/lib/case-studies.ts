export interface CaseStudy {
  slug: string;
  title: string;
  thumbnail: string;
  banner: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "carlos-philip",
    title: "Carlos Philip",
    thumbnail: "/case studies/carlos.png",
    banner: "/case studies/carlos-banner.png",
  },
  {
    slug: "atrangi",
    title: "Atrangi",
    thumbnail: "/case studies/atrangi.png",
    banner: "/case studies/atrangi-banner.png",
  },
  {
    slug: "thatgal",
    title: "ThatGal",
    thumbnail: "/case studies/ThatGal.png",
    banner: "/case studies/thatgal-banner.png",
  },
  {
    slug: "living-spaces",
    title: "Living Spaces",
    thumbnail: "/case studies/living spaces.png",
    banner: "/case studies/living-spaces-banner.png",
  },
];

