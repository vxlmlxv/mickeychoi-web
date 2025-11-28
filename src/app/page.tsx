import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Flex,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import Image from "next/image";

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

      {/* <Column maxWidth="m" horizontal="center" align="center" gap="m">
          <RevealFx translateY="4" delay={0.2} fillWidth horizontal="center">
            <Heading
              wrap="balance"
              variant="display-strong-l"
              align="center"
            >
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx translateY="8" delay={0.3} fillWidth horizontal="center">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-l"
              align="center"
            >
              {home.subline}
            </Text>
          </RevealFx> */}

      {/* <RevealFx paddingTop="m" delay={0.4} horizontal="center">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="l"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                About Mickey Choi
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column> */}

      {/* TrueCalf Video Section */}
      <RevealFx translateY="16" delay={0.5} fillWidth>
        <Column fillWidth horizontal="center" gap="m">
          <Heading variant="heading-strong-l" align="center">
            트루카프 카프가드 크리에이티브 디렉터
          </Heading>
          <Flex
            fillWidth
            horizontal="center"
            radius="l"
            style={{
              overflow: "hidden",
              aspectRatio: "16/9",
              maxWidth: "1183px",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5Arv_c1DeuQ"
              title="트루카프 카프가드 크리에이티브 디렉터 미키최"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ border: "none" }}
            />
          </Flex>
        </Column>
      </RevealFx>

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

      {/* Free Jiu-Jitsu Video Section */}
      <RevealFx translateY="16" delay={0.7} fillWidth>
        <Column fillWidth horizontal="center" gap="m">
          <Heading variant="heading-strong-l" align="center">
            무료주짓수 별내주짓수
          </Heading>
          <Flex
            fillWidth
            horizontal="center"
            radius="l"
            style={{ overflow: "hidden", maxWidth: "470px" }}
          >
            <iframe
              width="470"
              height="836"
              src="https://www.youtube.com/embed/7GEmQnhg77o"
              title="무료주짓수 별내주짓수 별내동주짓수 베림보로파이트 미키최"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                border: "none",
                width: "100%",
                height: "auto",
                aspectRatio: "470/836",
              }}
            />
          </Flex>
        </Column>
      </RevealFx>
    </Column>
  );
}
