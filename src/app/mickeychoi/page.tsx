import {
  Column,
  Row,
  Heading,
  Text,
  RevealFx,
  Meta,
  Schema,
  Grid,
} from "@once-ui-system/core";
import { baseURL, person, mickeychoi } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: mickeychoi.title,
    description: mickeychoi.description,
    baseURL: baseURL,
    path: mickeychoi.path,
    image: `/api/og/generate?title=${encodeURIComponent(mickeychoi.title)}`,
  });
}

export default function MickeyChoiPage() {
  return (
    <Column maxWidth="xl" gap="xl" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={mickeychoi.title}
        description={mickeychoi.description}
        path={mickeychoi.path}
        image={`/api/og/generate?title=${encodeURIComponent(mickeychoi.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${mickeychoi.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <RevealFx translateY="4">
        <Column fillWidth horizontal="center" gap="m" paddingBottom="l">
          <Heading variant="display-strong-xl" align="center">
            미키최
          </Heading>
        </Column>
      </RevealFx>

      {/* Section 1: Company Introduction */}
      <RevealFx translateY="8" delay={0.2}>
        <Grid
          columns="2"
          s={{ columns: "1" }}
          gap="l"
          fillWidth
          paddingBottom="xl"
        >
          <Column radius="l" style={{ overflow: "hidden" }} vertical="center">
            <Image
              src="/resources/미키최페이지_사진1.jpeg"
              alt="Mickey Choi Group"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Column>
          <Column vertical="center" gap="m" paddingX="m">
            <Text
              variant="body-default-l"
              onBackground="neutral-strong"
              style={{ lineHeight: "1.8" }}
            >
              미키최 그룹은 2001년 3월 16일 미국 유타주에서 창사 이래 글로벌
              프런티어 정신과 정도경영을 바탕으로 좋은 기업집단의 모습을
              가꿔왔다고 자부합니다.
            </Text>
            <Text
              variant="body-default-l"
              onBackground="neutral-strong"
              style={{ lineHeight: "1.8" }}
            >
              그리고 앞으로도 지금까지처럼 외부환경에 흔들리지 않고 꿋꿋하게 제
              갈 길을 가겠습니다.
            </Text>
          </Column>
        </Grid>
      </RevealFx>

      {/* Section 2: Achievements */}
      <RevealFx translateY="8" delay={0.3}>
        <Grid
          columns="2"
          s={{ columns: "1", direction: "column-reverse" }}
          gap="l"
          fillWidth
        >
          <Column vertical="center" gap="m" paddingX="m">
            <Heading variant="heading-strong-l" marginBottom="m">
              세계적인 주짓수 거장 미키최 사부님
            </Heading>
            <Column as="ul" gap="16" paddingLeft="m">
              <Text
                as="li"
                variant="body-default-l"
                onBackground="neutral-strong"
                style={{ lineHeight: "1.8" }}
              >
                국내유일 미국 IBJJF 전미 주짓수 블랙벨트 챔피언
              </Text>
              <Text
                as="li"
                variant="body-default-l"
                onBackground="neutral-strong"
                style={{ lineHeight: "1.8" }}
              >
                국내유일 브라질 주짓수 블랙벨트 5단 한국 최고단
              </Text>
              <Text
                as="li"
                variant="body-default-l"
                onBackground="neutral-strong"
                style={{ lineHeight: "1.8" }}
              >
                브라질 주짓수 레드벨트 10단 힐튼레옹의 직계 블랙벨트
              </Text>
              <Text
                as="li"
                variant="body-default-l"
                onBackground="neutral-strong"
                style={{ lineHeight: "1.8" }}
              >
                일본 타니주짓수코리아 엑셀러레이터 / 헤드마스터
              </Text>
              <Text
                as="li"
                variant="body-default-l"
                onBackground="neutral-strong"
                style={{ lineHeight: "1.8" }}
              >
                ABIMJJ 국제브라질주짓수지도자협회 한국회장
              </Text>
              <Text
                as="li"
                variant="body-default-l"
                onBackground="neutral-strong"
                style={{ lineHeight: "1.8" }}
              >
                KUBJJ 고려대주짓수 창립자 / 헤드마스터
              </Text>
            </Column>
          </Column>
          <Column radius="l" style={{ overflow: "hidden" }} vertical="center">
            <Image
              src="/resources/미키최페이지_사진2.jpg"
              alt="Mickey Choi Achievements"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Column>
        </Grid>
      </RevealFx>
    </Column>
  );
}
