import { Column, Heading, RevealFx, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, legendaryhistory } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: legendaryhistory.title,
    description: legendaryhistory.description,
    baseURL: baseURL,
    path: legendaryhistory.path,
    image: `/api/og/generate?title=${encodeURIComponent(
      legendaryhistory.title
    )}`,
  });
}

export default function LegendaryHistoryPage() {
  const historyImages = [
    {
      src: "/resources/Legendary_History페이지_사진1.jpg",
      alt: "Legendary History - Early Days",
      width: 1200,
      height: 800,
    },
    {
      src: "/resources/Legendary_History페이지_사진2.jpg",
      alt: "Legendary History - Championship",
      width: 800,
      height: 1200,
    },
    {
      src: "/resources/대표님사진.jpg",
      alt: "Mickey Choi - Portrait",
      width: 1200,
      height: 800,
    },
    {
      src: "/resources/Legendary_History페이지_사진3.jpg",
      alt: "Legendary History - Legacy",
      width: 1200,
      height: 800,
    },
  ];

  return (
    <Column maxWidth="xl" gap="xl" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={legendaryhistory.title}
        description={legendaryhistory.description}
        path={legendaryhistory.path}
        image={`/api/og/generate?title=${encodeURIComponent(
          legendaryhistory.title
        )}`}
        author={{
          name: person.name,
          url: `${baseURL}${legendaryhistory.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <RevealFx translateY="4">
        <Column fillWidth horizontal="center" gap="m" paddingBottom="l">
          <Heading variant="display-strong-xl" align="center">
            Legendary History
          </Heading>
        </Column>
      </RevealFx>

      {/* Gallery List */}
      <Column fillWidth gap="l" horizontal="center">
        {historyImages.map((image, index) => (
          <RevealFx
            key={image.src}
            translateY="8"
            delay={0.1 * (index + 1)}
            fillWidth
          >
            <Column fillWidth horizontal="center">
              <Column
                radius="l"
                style={{
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  maxWidth: "800px",
                  width: "100%",
                }}
                className="hover:scale-105"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Column>
            </Column>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
