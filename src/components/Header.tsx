"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Fade,
  Flex,
  Line,
  Row,
  ToggleButton,
  Button,
} from "@once-ui-system/core";

import {
  routes,
  display,
  person,
  about,
  blog,
  work,
  gallery,
  mickeychoi,
  legendaryhistory,
  abimjj,
  worldwide,
  sponsoredby,
  kubjj,
  legitimacy,
} from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  const renderNavItems = (isMobile: boolean) => (
    <>
      {routes["/mickeychoi"] && (
        <>
          {!isMobile && (
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
          )}
          <ToggleButton
            href="/mickeychoi"
            label={mickeychoi.label}
            selected={pathname === "/mickeychoi"}
          />
        </>
      )}
      {routes["/legendaryhistory"] && (
        <>
          {!isMobile && (
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
          )}
          <ToggleButton
            href="/legendaryhistory"
            label={legendaryhistory.label}
            selected={pathname === "/legendaryhistory"}
          />
        </>
      )}
      {routes["/ABIMJJ"] && (
        <>
          {!isMobile && (
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
          )}
          <ToggleButton
            href="/ABIMJJ"
            label={abimjj.label}
            selected={pathname === "/ABIMJJ"}
          />
        </>
      )}
      {routes["/KUBJJ"] && (
        <>
          {!isMobile && (
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
          )}
          <ToggleButton
            href="/KUBJJ"
            label={kubjj.label}
            selected={pathname === "/KUBJJ"}
          />
        </>
      )}
      {routes["/legitimacy"] && (
        <>
          {!isMobile && (
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
          )}
          <ToggleButton
            href="/legitimacy"
            label={legitimacy.label}
            selected={pathname === "/legitimacy"}
          />
        </>
      )}
      {routes["/worldwide"] && (
        <>
          {!isMobile && (
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
          )}
          <ToggleButton
            href="/worldwide"
            label={worldwide.label}
            selected={pathname === "/worldwide"}
          />
        </>
      )}
      {routes["/sponsoredby"] && (
        <>
          {!isMobile && (
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
          )}
          <ToggleButton
            href="/sponsoredby"
            label={sponsoredby.label}
            selected={pathname === "/sponsoredby"}
          />
        </>
      )}
      {/* {routes["/gallery"] && (
        <>
          {!isMobile && (
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
          )}
          <ToggleButton
            prefixIcon="gallery"
            href="/gallery"
            label={gallery.label}
            selected={pathname.startsWith("/gallery")}
          />
        </>
      )} */}
      {/* External Links */}
      {!isMobile && (
        <Line background="neutral-alpha-medium" vert maxHeight="24" />
      )}
      <Button
        href="https://naver.me/FhUOaScp"
        target="_blank"
        variant="tertiary"
        size="s"
      >
        미키최무료주짓수(KU)
      </Button>
      {!isMobile && (
        <Line background="neutral-alpha-medium" vert maxHeight="24" />
      )}
      <Button
        href="https://m.place.naver.com/place/887437471/home?entry=pll"
        target="_blank"
        variant="tertiary"
        size="s"
      >
        미키최무료주짓수(별내)
      </Button>
    </>
  );

  return (
    <>
      <Fade
        l={{ hide: true }}
        fillWidth
        position="fixed"
        height="80"
        zIndex={9}
      />
      <Fade
        hide
        l={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        l={{
          position: "fixed",
        }}
      >
        <Row
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        >
          {display.location && <Row l={{ hide: true }}>{person.location}</Row>}
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            style={{ position: "relative" }}
          >
            {/* Mobile Menu Drawer */}
            <Flex
              className={`${styles.mobileMenu} ${
                isMenuOpen ? styles.open : ""
              }`}
              direction="column"
            >
              {renderNavItems(true)}
              {display.themeSwitcher && <ThemeToggle />}
            </Flex>

            <Row
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
            >
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                />
              )}

              {/* Desktop Navigation */}
              <Row l={{ hide: true }} gap="4" vertical="center">
                {renderNavItems(false)}
                {display.themeSwitcher && (
                  <>
                    <Line
                      background="neutral-alpha-medium"
                      vert
                      maxHeight="24"
                    />
                    <ThemeToggle />
                  </>
                )}
              </Row>

              {/* Mobile Menu Trigger */}
              <Row hide l={{ hide: false }}>
                <ToggleButton
                  prefixIcon={isMenuOpen ? "close" : "menu"}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  selected={isMenuOpen}
                />
              </Row>
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex l={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
