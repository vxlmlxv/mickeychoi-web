"use client";

import { Column, Heading, Text, RevealFx, Flex } from "@once-ui-system/core";
import Image from "next/image";
import styles from "./KUBJJView.module.scss";
import { useEffect, useState } from "react";

export default function KUBJJView() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mediaItems = [
    {
      type: "image",
      src: "/KUBJJ_images/KUBJJ_image1.jpg",
      alt: "KUBJJ Training Session 1",
    },
    {
      type: "image",
      src: "/KUBJJ_images/KUBJJ_image2.jpg",
      alt: "KUBJJ Training Session 2",
    },
    {
      type: "video",
      src: "/KUBJJ_images/KUBJJ_video.mp4",
      poster: "/KUBJJ_images/KUBJJ_image1.jpg",
      alt: "KUBJJ Training Video 1",
    },
    {
      type: "image",
      src: "/KUBJJ_images/KUBJJ_image3.jpg",
      alt: "KUBJJ Training Session 3",
    },
    {
      type: "image",
      src: "/KUBJJ_images/KUBJJ_image4.jpg",
      alt: "KUBJJ Training Session 4",
    },
    {
      type: "video",
      src: "/KUBJJ_images/KUBJJ_video2.mp4",
      poster: "/KUBJJ_images/KUBJJ_image2.jpg",
      alt: "KUBJJ Training Video 2",
    },
    {
      type: "image",
      src: "/KUBJJ_images/KUBJJ_image5.jpg",
      alt: "KUBJJ Training Session 5",
    },
    {
      type: "image",
      src: "/KUBJJ_images/KUBJJ_image6.jpg",
      alt: "KUBJJ Training Session 6",
    },
  ];

  return (
    <Column fillWidth gap="xl">
      {/* Hero Section with Title and Tagline */}
      <RevealFx translateY="4">
        <Column fillWidth horizontal="center" gap="m" className={styles.hero}>
          <Flex horizontal="center" gap="m" wrap>
            <Image
              src="/KUBJJ_images/KU_LOGO.png"
              alt="Korea University Logo"
              width={80}
              height={80}
              className={styles.logo}
            />
            <Heading variant="display-strong-xl" align="center">
              KUBJJ
            </Heading>
            <Image
              src="/KUBJJ_images/KUBJJ_LOGO.png"
              alt="KUBJJ Logo"
              width={80}
              height={80}
              className={styles.logo}
            />
          </Flex>
          <Text
            variant="heading-default-l"
            onBackground="neutral-medium"
            align="center"
            className={styles.tagline}
          >
            지성知性에 무예武藝를 더하다
          </Text>
        </Column>
      </RevealFx>

      {/* Introduction Text */}
      <RevealFx translateY="8" delay={0.1}>
        <Column
          fillWidth
          horizontal="center"
          gap="m"
          paddingX="l"
          className={styles.introSection}
        >
          <Text
            variant="body-default-l"
            onBackground="neutral-strong"
            align="center"
            style={{ lineHeight: "1.8", maxWidth: "800px" }}
          >
            KUBJJ는 고려대학교 120년 역사 최초이자 유일한 주짓수 동아리입니다.
            서울 성북구 안암동 개운사길, 6평의 작은 공간에 퍼즐 매트를 깔고 그
            뜨거운 여정을 시작했습니다.
          </Text>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            align="center"
            style={{ lineHeight: "1.8", maxWidth: "800px" }}
          >
            현재 KUBJJ는 다양한 국적을 가진 300명 이상의 고려대학교 학생들과
            함께 주짓수를 즐기고 있으며, 활동 공간을 참살이길로 확장
            이전했습니다.
          </Text>
        </Column>
      </RevealFx>

      {/* Media Row 1 - Image */}
      <RevealFx translateY="12" delay={0.2}>
        <Column fillWidth horizontal="center" className={styles.mediaRow}>
          <div className={styles.mediaContainer}>
            <Image
              src="/KUBJJ_images/KUBJJ_image1.jpg"
              alt="KUBJJ Training Session 1"
              width={1200}
              height={675}
              className={styles.fullImage}
            />
          </div>
        </Column>
      </RevealFx>

      {/* Story Section */}
      <RevealFx translateY="12" delay={0.3}>
        <Column
          fillWidth
          horizontal="center"
          gap="l"
          paddingX="l"
          className={styles.storySection}
        >
          <Heading
            variant="display-strong-m"
            align="center"
            onBackground="neutral-strong"
          >
            KUBJJ 고려대주짓수의 시작
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-strong"
            align="center"
            style={{ lineHeight: "1.8", maxWidth: "800px" }}
          >
            고려대주짓수는 2024년 5월, 브라질 주짓수 블랙벨트 5단(한국 최고단)의
            미키최 사부님께서 한국에 들어와 고려대학교 학생들을 무료로 지도해
            주시면서 시작되었습니다. 이에 윤지민 회장님의 제안과 노력으로, 더
            많은 고려대학교 학우들이 주짓수를 함께 즐길 수 있는 공식적인
            장으로서 KUBJJ가 탄생하게 되었습니다.
          </Text>
        </Column>
      </RevealFx>

      {/* Media Row 2 - Image */}
      <RevealFx translateY="12" delay={0.4}>
        <Column fillWidth horizontal="center" className={styles.mediaRow}>
          <div className={styles.mediaContainer}>
            <Image
              src="/KUBJJ_images/KUBJJ_image2.jpg"
              alt="KUBJJ Training Session 2"
              width={1200}
              height={675}
              className={styles.fullImage}
            />
          </div>
        </Column>
      </RevealFx>

      {/* Values Section */}
      <RevealFx translateY="12" delay={0.5}>
        <Column
          fillWidth
          horizontal="center"
          gap="l"
          paddingX="l"
          className={styles.valuesSection}
        >
          <Heading
            variant="display-strong-m"
            align="center"
            onBackground="neutral-strong"
          >
            우리의 가치
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-strong"
            align="center"
            style={{ lineHeight: "1.8", maxWidth: "800px" }}
          >
            KUBJJ 고려대주짓수는 100% 고려대학교 20대 학우들로만 구성되어
            있습니다. 우리는 단순한 친목 도모를 넘어, 주짓수를 통해 건강한
            열정을 표출하는 동시에 강인하고 흔들리지 않는 신체와 정신력을
            수련합니다.
          </Text>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            align="center"
            style={{ lineHeight: "1.8", maxWidth: "800px" }}
          >
            고려대학교 학생이라면 누구나 IBJJF 전미 챔피언이자 국내 유일
            블랙벨트 5단이신 미키최 사부님께 무료 지도 및 무료 승급을 받을 수
            있습니다. 초보자도, 여학생도 모두 환영합니다! 물론 주짓수를 진지하게
            수련하고자 하는 열정이 있다면 더욱 환영합니다.
          </Text>
        </Column>
      </RevealFx>

      {/* Media Row 3 - Video */}
      <RevealFx translateY="12" delay={0.6}>
        <Column fillWidth horizontal="center" className={styles.mediaRow}>
          <div className={styles.mediaContainer}>
            <video
              className={styles.fullVideo}
              controls
              preload="metadata"
              poster="/KUBJJ_images/KUBJJ_image1.jpg"
            >
              <source src="/KUBJJ_images/KUBJJ_video.mp4" type="video/mp4" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Column>
      </RevealFx>

      {/* Media Row 4 - Image */}
      <RevealFx translateY="12" delay={0.7}>
        <Column fillWidth horizontal="center" className={styles.mediaRow}>
          <div className={styles.mediaContainer}>
            <Image
              src="/KUBJJ_images/KUBJJ_image3.jpg"
              alt="KUBJJ Training Session 3"
              width={1200}
              height={675}
              className={styles.fullImage}
            />
          </div>
        </Column>
      </RevealFx>

      {/* Growth Section */}
      <RevealFx translateY="12" delay={0.8}>
        <Column
          fillWidth
          horizontal="center"
          gap="l"
          paddingX="l"
          className={styles.growthSection}
        >
          <Heading
            variant="display-strong-m"
            align="center"
            onBackground="neutral-strong"
          >
            동아리의 성장
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-strong"
            align="center"
            style={{ lineHeight: "1.8", maxWidth: "800px" }}
          >
            KUBJJ 고려대주짓수는 대학 동아리로서 유일하게 전용 오피셜 체육관을
            소유하고 있으며, 팀도복을 제작하여 소속감을 높이고 있습니다.
          </Text>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            align="center"
            style={{ lineHeight: "1.8", maxWidth: "800px" }}
          >
            2025년 9월에는 고려대학교 중앙동아리 가등록으로 인정받았으며,
            2027년에 정등록을 목표로 활발히 활동 중입니다.
          </Text>
        </Column>
      </RevealFx>

      {/* Media Row 5 - Image */}
      <RevealFx translateY="12" delay={0.9}>
        <Column fillWidth horizontal="center" className={styles.mediaRow}>
          <div className={styles.mediaContainer}>
            <Image
              src="/KUBJJ_images/KUBJJ_image4.jpg"
              alt="KUBJJ Training Session 4"
              width={1200}
              height={675}
              className={styles.fullImage}
            />
          </div>
        </Column>
      </RevealFx>

      {/* Media Row 6 - Video */}
      <RevealFx translateY="12" delay={1.0}>
        <Column fillWidth horizontal="center" className={styles.mediaRow}>
          <div className={styles.mediaContainer}>
            <video
              className={styles.fullVideo}
              controls
              preload="metadata"
              poster="/KUBJJ_images/KUBJJ_image2.jpg"
            >
              <source src="/KUBJJ_images/KUBJJ_video2.mp4" type="video/mp4" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Column>
      </RevealFx>

      {/* Media Row 7 - Image */}
      <RevealFx translateY="12" delay={1.1}>
        <Column fillWidth horizontal="center" className={styles.mediaRow}>
          <div className={styles.mediaContainer}>
            <Image
              src="/KUBJJ_images/KUBJJ_image5.jpg"
              alt="KUBJJ Training Session 5"
              width={1200}
              height={675}
              className={styles.fullImage}
            />
          </div>
        </Column>
      </RevealFx>

      {/* Media Row 8 - Image */}
      <RevealFx translateY="12" delay={1.2}>
        <Column fillWidth horizontal="center" className={styles.mediaRow}>
          <div className={styles.mediaContainer}>
            <Image
              src="/KUBJJ_images/KUBJJ_image6.jpg"
              alt="KUBJJ Training Session 6"
              width={1200}
              height={675}
              className={styles.fullImage}
            />
          </div>
        </Column>
      </RevealFx>

      {/* Call to Action */}
      <RevealFx translateY="12" delay={1.3}>
        <Column
          fillWidth
          horizontal="center"
          gap="m"
          paddingX="l"
          paddingY="xl"
          className={styles.ctaSection}
        >
          <Image
            src="/resources/미키최그룹_로고.jpg"
            alt="Mickey Choi GR Logo"
            width={120}
            height={120}
            className={styles.ctaLogo}
          />
          <Text
            variant="heading-strong-xl"
            onBackground="brand-strong"
            align="center"
            style={{ lineHeight: "1.6" }}
          >
            소중한 청춘의 20대,
            <br />
            이 특별한 기회를 놓치지 말고
            <br />
            지금 바로 KUBJJ에 합류하세요!
          </Text>
        </Column>
      </RevealFx>
    </Column>
  );
}
