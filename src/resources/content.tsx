import type {
  About,
  Blog,
  Gallery,
  Home,
  KUBJJ,
  Legitimacy,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mickey",
  lastName: "Choi",
  name: `Mickey Choi`,
  role: "국내유일 미국 IBJJF 전미 주짓수 블랙벨트 챔피언",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Seoul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Korean"], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/berimbolo_fight",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@linebreakorea",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/linebreak1",
  },
  {
    name: "Store",
    icon: "store",
    link: "https://m.smartstore.naver.com/truecalf",
  },
];

const home: Home = {
  path: "/",
  image: "public/main1.jpg",
  label: "Home",
  title: "미키최",
  description:
    "안암주짓수, 미키최주짓수, 고려대주짓수, 글로벌 스포츠기업, 트루카프, 베림보로파이트, 주짓수도복코리아, 별내주짓수, 무료주짓수, 대한루타리브레협회, 미키최",
  headline: <>BERIMBORO FIGHT</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    // <>
    //   I'm Selene, a design engineer at{" "}
    //   <Logo
    //     dark
    //     icon="/trademarks/wordmark-dark.svg"
    //     style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
    //   />
    //   , where I craft intuitive
    //   <br /> user experiences. After hours, I build my own projects.
    // </>
    <>미키최의 웹사이트입니다.</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: [
      <>국내유일 미국 IBJJF 전미 주짓수 블랙벨트 챔피언</>,
      <> 국내유일 브라질 주짓수 블랙벨트 5단 한국 최고단</>,
      <> 브라질 주짓수 레드벨트 10단 힐튼레옹의 직계 블랙벨트</>,
      <>일본 타니주짓수코리아 엑셀러레이터 / 헤드마스터</>,
      <>ABIMJJ 국제 브라질 주짓수 지도자 협회 한국회장</>,
    ],
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Legendary History and achievement gallery
  images: [
    {
      src: "/images/gallery/Legendary_History페이지_사진1.jpg",
      alt: "Legendary History - Mickey Choi",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Legendary_History페이지_사진3.jpg",
      alt: "Legendary History - Competition",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/미키최페이지_사진2.jpg",
      alt: "Mickey Choi - Champion",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/대표님사진.jpg",
      alt: "Mickey Choi - Profile",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/oremtimes.jpg",
      alt: "Orem Times Feature",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/레드벨트3명.jpg",
      alt: "Red Belt Masters",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Legendary_History페이지_사진2.jpg",
      alt: "Legendary History - Achievement",
      orientation: "vertical",
    },
  ],
};

const mickeychoi: Work = {
  path: "/mickeychoi",
  label: "미키최",
  title: `미키최 – ${person.name}`,
  description: `${person.name}에 대해 알아보세요`,
};

const legendaryhistory: Work = {
  path: "/legendaryhistory",
  label: "Legendary History",
  title: `Legendary History – ${person.name}`,
  description: "미키최의 전설적인 역사",
};

const abimjj: Work = {
  path: "/ABIMJJ",
  label: "국제주짓수지도자협회",
  title: `국제주짓수지도자협회 – ${person.name}`,
  description: "ABIMJJ 국제 브라질 주짓수 지도자 협회",
};

const worldwide: Work = {
  path: "/worldwide",
  label: "Worldwide",
  title: `Worldwide – ${person.name}`,
  description: "글로벌 네트워크와 파트너십",
};

const sponsoredby: Work = {
  path: "/sponsoredby",
  label: "Sponsored by",
  title: `Sponsored by – ${person.name}`,
  description: "후원사 및 파트너",
};

const kubjj: KUBJJ = {
  path: "/KUBJJ",
  label: "KUBJJ",
  title: `KUBJJ – ${person.name}`,
  description: "고려대학교 주짓수 동아리",
};

const legitimacy: Legitimacy = {
  path: "/legitimacy",
  label: "Legitimacy",
  title: `Legitimacy – ${person.name}`,
  description: "블랙벨트 계보 및 정통성",
};

export {
  person,
  social,
  home,
  about,
  blog,
  work,
  gallery,
  mickeychoi,
  legendaryhistory,
  abimjj,
  worldwide,
  sponsoredby,
  kubjj,
  legitimacy,
};
