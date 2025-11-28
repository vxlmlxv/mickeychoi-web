import {
  Column,
  Heading,
  RevealFx,
  Meta,
  Schema,
  Flex,
  SmartLink,
} from "@once-ui-system/core";
import { baseURL, person, worldwide } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: worldwide.title,
    description: worldwide.description,
    baseURL: baseURL,
    path: worldwide.path,
    image: `/api/og/generate?title=${encodeURIComponent(worldwide.title)}`,
  });
}

export default function WorldwidePage() {
  const videos = [
    {
      id: "RKzEMB-VNqY",
      title: "무료주짓수 별내주짓수 별내동주짓수 베림보로파이트 미키최",
    },
    {
      id: "K3z1sGKq8GQ",
      title: "무료주짓수 별내주짓수 별내동주짓수 베림보로파이트 미키최",
    },
    {
      id: "Co2LECIRFUY",
      title: "무료주짓수 별내주짓수 별내동주짓수 베림보로파이트 미키최",
    },
    {
      id: "2KS0OdkDNEo",
      title: "대한루타리브레협회 회장 미키최/무료주짓수/별내주짓수/별내동주짓수",
    },
  ];

  const blogPosts = [
    {
      url: "https://blog.naver.com/1compression/221120041729",
      image: "/resources/블로그1.png",
      alt: "Blog Post 1",
    },
    {
      url: "https://blog.naver.com/1compression/221175946844",
      image: "/resources/블로그2.png",
      alt: "Blog Post 2",
    },
  ];

  return (
    <Column maxWidth="xl" gap="xl" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={worldwide.title}
        description={worldwide.description}
        path={worldwide.path}
        image={`/api/og/generate?title=${encodeURIComponent(worldwide.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${worldwide.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <RevealFx translateY="4">
        <Column fillWidth horizontal="center" gap="m" paddingBottom="l">
          <Heading variant="display-strong-xl" align="center">
            Worldwide
          </Heading>
        </Column>
      </RevealFx>

      {/* Video Grid */}
      {videos.map((video, index) => (
        <RevealFx key={video.id} translateY="16" delay={0.2 * (index + 1)}>
          <Column fillWidth horizontal="center" gap="m">
            <Flex
              fillWidth
              horizontal="center"
              radius="l"
              style={{ overflow: "hidden", aspectRatio: "16/9", maxWidth: "1183px" }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ border: "none" }}
              />
            </Flex>
          </Column>
        </RevealFx>
      ))}

      {/* Blog Post Links */}
      {blogPosts.map((post, index) => (
        <RevealFx key={post.url} translateY="16" delay={1 + 0.2 * (index + 1)}>
          <Column fillWidth horizontal="center">
            <SmartLink
              href={post.url}
              style={{
                display: "block",
                maxWidth: "1000px",
                width: "100%",
                borderRadius: "var(--radius-l)",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
              className="hover:scale-105"
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={1200}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </SmartLink>
          </Column>
        </RevealFx>
      ))}
    </Column>
  );
}
