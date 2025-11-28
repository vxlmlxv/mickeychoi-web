import {
  Column,
  Row,
  Heading,
  RevealFx,
  Meta,
  Schema,
  Grid,
} from "@once-ui-system/core";
import { baseURL, person, sponsoredby } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: sponsoredby.title,
    description: sponsoredby.description,
    baseURL: baseURL,
    path: sponsoredby.path,
    image: `/api/og/generate?title=${encodeURIComponent(sponsoredby.title)}`,
  });
}

export default function SponsoredByPage() {
  const sponsors = [
    {
      src: "/resources/트루카프_로고.png",
      alt: "TrueCalf Logo",
      width: 400,
      height: 200,
    },
    {
      src: "/resources/베림보로파이트_로고.png",
      alt: "Berimboro Fight Logo",
      width: 400,
      height: 200,
    },
    {
      src: "/resources/루타리브레서브미션_로고.png",
      alt: "Luta Livre Submission Logo",
      width: 400,
      height: 200,
    },
  ];

  return (
    <Column maxWidth="xl" gap="xl" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={sponsoredby.title}
        description={sponsoredby.description}
        path={sponsoredby.path}
        image={`/api/og/generate?title=${encodeURIComponent(sponsoredby.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${sponsoredby.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <RevealFx translateY="4">
        <Column fillWidth horizontal="center" gap="m" paddingBottom="l">
          <Heading variant="display-strong-xl" align="center">
            Sponsored by
          </Heading>
        </Column>
      </RevealFx>

      {/* Main Group Logo */}
      <RevealFx translateY="8" delay={0.2}>
        <Column
          fillWidth
          horizontal="center"
          paddingBottom="xl"
          radius="l"
          style={{ overflow: "hidden" }}
        >
          <Image
            src="/resources/미키최그룹_로고.jpg"
            alt="Mickey Choi Group Logo"
            width={1200}
            height={600}
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Column>
      </RevealFx>

      {/* Sponsor Logos Grid */}
      <RevealFx translateY="8" delay={0.3}>
        <Grid
          columns="3"
          m={{ columns: "2" }}
          s={{ columns: "1" }}
          gap="xl"
          fillWidth
        >
          {sponsors.map((sponsor, index) => (
            <Column
              key={index}
              background="neutral-alpha-weak"
              radius="l"
              padding="xl"
              horizontal="center"
              vertical="center"
              style={{
                minHeight: "300px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="hover:scale-105"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={sponsor.width}
                height={sponsor.height}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  maxHeight: "200px",
                }}
              />
            </Column>
          ))}
        </Grid>
      </RevealFx>
    </Column>
  );
}
