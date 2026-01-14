export default function ComponentItem({
  params,
}: {
  params: { slug: string };
}) {
  return <div>Component Item: {params.slug}</div>;
}
