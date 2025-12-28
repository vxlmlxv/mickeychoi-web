"use client";

import { Column, Heading, Text, RevealFx } from "@once-ui-system/core";
import Image from "next/image";

export default function LegitimacyView() {
  const content = [
    {
      image: "/legitimacy_images/legitimacy_image1.jpg",
      title: "레드벨트 10단 직계 블랙벨트 계보",
      description: "힐튼레옹 → 미키최",
    },
    {
      image: "/legitimacy_images/legitimacy_image2.jpg",
      title: "블랙벨트 5단",
      description: "대한민국 주짓수의 자부심",
    },
    {
      image: "/legitimacy_images/legitimacy_image3.jpg",
      title: "블랙벨트 5단 한국 최고단 계보",
      description: "힐튼레옹 → 타카오타니 → 미키최",
    },
    {
      image: "/legitimacy_images/legitimacy_image4.jpg",
      title: "Global Network",
      description: "세계와 함께하는 미키최 주짓수",
    },
  ];

  return (
    <Column fillWidth gap="xl" horizontal="center" align="center">
      <RevealFx translateY="4">
        <Heading variant="display-strong-xl" align="center" marginBottom="l">
          Legitimacy
        </Heading>
      </RevealFx>

      <Column fillWidth gap="32" horizontal="center">
        {content.map((item, index) => (
          <RevealFx key={item.title} translateY="8" delay={index * 0.1}>
            <Column fillWidth horizontal="center" gap="m" align="center">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={450}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                }}
              />
              <Column horizontal="center" align="center" gap="s">
                <Heading
                  variant="heading-strong-l"
                  align="center"
                  marginBottom="8"
                >
                  {item.title}
                </Heading>
                <Text
                  variant="body-default-l"
                  onBackground="neutral-medium"
                  align="center"
                >
                  {item.description}
                </Text>
              </Column>
            </Column>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
