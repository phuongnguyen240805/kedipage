export async function fetchContentType(
  contentType: string,
  params: Record<string, any> = {}
) {
  const searchParams = new URLSearchParams(params).toString();
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${contentType}?${searchParams}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);

  const data = await res.json();
  return data;
}
