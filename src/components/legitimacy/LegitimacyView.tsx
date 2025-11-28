"use client";

import { Column, Heading, Text, RevealFx, Flex } from "@once-ui-system/core";
import Image from "next/image";
import styles from "./LegitimacyView.module.scss";

export default function LegitimacyView() {
  const content = [
    {
      image: "/legitimacy_images/legitimacy_image1.jpg",
      title: "블랙벨트 계보",
      description: "힐튼레옹 → 미키최",
    },
    {
      image: "/legitimacy_images/legitimacy_image2.jpg",
      title: "블랙벨트 5단",
      description: "대한민국 주짓수의 자부심",
    },
    {
      image: "/legitimacy_images/legitimacy_image3.jpg",
      title: "정통성",
      description: "힐튼레옹 → 타카오타니 → 미키최",
    },
    {
      image: "/legitimacy_images/legitimacy_image4.jpg",
      title: "Global Network",
      description: "세계와 함께하는 미키최 주짓수",
    },
  ];

  return (
    <Column fillWidth gap="xl" horizontal="center">
      <RevealFx translateY="4">
        <Heading variant="display-strong-xl" align="center" marginBottom="l">
          Legitimacy
        </Heading>
      </RevealFx>

      <Column fillWidth gap="32" horizontal="center">
        {content.map((item, index) => (
          <RevealFx key={item.title} translateY="8" delay={index * 0.1}>
            <div className={styles.alternatingRow}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={450}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
              </div>
              <div className={styles.textContainer}>
                <Heading variant="heading-strong-l" marginBottom="8">
                  {item.title}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-medium">
                  {item.description}
                </Text>
              </div>
            </div>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
