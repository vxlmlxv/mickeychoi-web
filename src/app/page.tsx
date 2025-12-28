import {
  RevealFx,
  Column,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import Image from "next/image";
import AnimatedHero from "@/components/AnimatedHero";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="xl" gap="xl" paddingY="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Animated Hero Text Section */}
      <AnimatedHero />

      {/* Hero Section with Main Image */}
      <Column fillWidth horizontal="center" gap="l">
        <RevealFx translateY="4" fillWidth>
          <Column
            fillWidth
            horizontal="center"
            align="center"
            radius="l"
            style={{ overflow: "hidden" }}
          >
            <Image
              src="/main1.jpg"
              alt="Mickey Choi - BERIMBORO FIGHT"
              width={1920}
              height={1080}
              priority
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Column>
        </RevealFx>
      </Column>

      {/* Orem Times Featured Image */}
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Column
          fillWidth
          horizontal="center"
          radius="l"
          style={{ overflow: "hidden", maxWidth: "1200px" }}
        >
          <Image
            src="/resources/oremtimes.jpg"
            alt="Orem Times Feature"
            width={1200}
            height={800}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Column>
      </RevealFx>
    </Column>
  );
}
