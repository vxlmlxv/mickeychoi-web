import { Column, Flex, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, kubjj } from "@/resources";
import KUBJJView from "@/components/kubjj/KUBJJView";

export async function generateMetadata() {
  return Meta.generate({
    title: kubjj.title,
    description: kubjj.description,
    baseURL: baseURL,
    path: kubjj.path,
    image: `/api/og/generate?title=${encodeURIComponent(kubjj.title)}`,
  });
}

export default function KUBJJPage() {
  return (
    <Flex maxWidth="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={kubjj.title}
        description={kubjj.description}
        path={kubjj.path}
        image={`/api/og/generate?title=${encodeURIComponent(kubjj.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${kubjj.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="xl" paddingY="l">
        <KUBJJView />
      </Column>
    </Flex>
  );
}
