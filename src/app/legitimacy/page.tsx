import { Column, Flex, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, legitimacy } from "@/resources";
import LegitimacyView from "@/components/legitimacy/LegitimacyView";

export async function generateMetadata() {
  return Meta.generate({
    title: legitimacy.title,
    description: legitimacy.description,
    baseURL: baseURL,
    path: legitimacy.path,
    image: `/api/og/generate?title=${encodeURIComponent(legitimacy.title)}`,
  });
}

export default function LegitimacyPage() {
  return (
    <Flex maxWidth="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={legitimacy.title}
        description={legitimacy.description}
        path={legitimacy.path}
        image={`/api/og/generate?title=${encodeURIComponent(legitimacy.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${legitimacy.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="xl" paddingY="l">
        <LegitimacyView />
      </Column>
    </Flex>
  );
}
