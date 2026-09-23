type Props = { items: string[] };

export default function Marquee({ items }: Props) {
  const duplicated = [...items, ...items];
  return (
    <div aria-hidden="true" className="e-bang-chay">
      <ul>{duplicated.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul>
    </div>
  );
}
