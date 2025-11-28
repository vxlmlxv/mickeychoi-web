import {
  Column,
  Row,
  Heading,
  Text,
  RevealFx,
  Meta,
  Schema,
  Flex,
} from "@once-ui-system/core";
import { baseURL, person, abimjj } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: abimjj.title,
    description: abimjj.description,
    baseURL: baseURL,
    path: abimjj.path,
    image: `/api/og/generate?title=${encodeURIComponent(abimjj.title)}`,
  });
}

export default function ABIMJJPage() {
  return (
    <Column maxWidth="xl" gap="xl" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={abimjj.title}
        description={abimjj.description}
        path={abimjj.path}
        image={`/api/og/generate?title=${encodeURIComponent(abimjj.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${abimjj.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <RevealFx translateY="4">
        <Column fillWidth horizontal="center" gap="m" paddingBottom="l">
          <Heading variant="display-strong-xl" align="center">
            국제주짓수지도자협회
          </Heading>
        </Column>
      </RevealFx>

      {/* ABIMJJ Logo */}
      <RevealFx translateY="8" delay={0.2}>
        <Column
          fillWidth
          horizontal="center"
          radius="l"
          style={{ overflow: "hidden" }}
        >
          <Image
            src="/resources/abimjj_로고.jpg"
            alt="ABIMJJ Logo"
            width={1200}
            height={800}
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Column>
      </RevealFx>

      {/* Red Belt Masters Image */}
      <RevealFx translateY="8" delay={0.3}>
        <Column
          fillWidth
          horizontal="center"
          radius="l"
          style={{ overflow: "hidden" }}
        >
          <Image
            src="/resources/레드벨트3명.jpg"
            alt="Red Belt Masters"
            width={1200}
            height={800}
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Column>
      </RevealFx>

      {/* Red Belt Close-up */}
      <RevealFx translateY="8" delay={0.4}>
        <Column
          fillWidth
          horizontal="center"
          radius="l"
          style={{ overflow: "hidden" }}
        >
          <Image
            src="/resources/레드벨트클로즈업.jpg"
            alt="Red Belt Close-up"
            width={1200}
            height={800}
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Column>
      </RevealFx>

      {/* Description Text */}
      <RevealFx translateY="8" delay={0.5}>
        <Column fillWidth horizontal="center" paddingY="l">
          <Text
            variant="heading-default-xl"
            onBackground="neutral-strong"
            align="center"
            style={{ lineHeight: "1.8" }}
          >
            브라질 국제주짓수지도자협회 레드벨트 10단 3인이 인증하는 한국회장 미키최
          </Text>
        </Column>
      </RevealFx>

      {/* Vertical Video */}
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth horizontal="center" gap="m">
          <Flex
            fillWidth
            horizontal="center"
            radius="l"
            style={{ overflow: "hidden", maxWidth: "470px" }}
          >
            <iframe
              width="470"
              height="836"
              src="https://www.youtube.com/embed/_vf-EDh6uh0"
              title="미키최 주짓수도복코리아 무료주짓수 별내주짓수 갈매주짓수 베림보로파이트 스노우골드요가매트"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ border: "none", width: "100%", height: "auto", aspectRatio: "470/836" }}
            />
          </Flex>
        </Column>
      </RevealFx>

      {/* Horizontal Video */}
      <RevealFx translateY="16" delay={0.7}>
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
              src="https://www.youtube.com/embed/D-RpJwj-3KQ"
              title="ABIMJJ Reconhecimento e Graduação Jiu Jitsu 2022"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ border: "none" }}
            />
          </Flex>
        </Column>
      </RevealFx>
    </Column>
  );
}
