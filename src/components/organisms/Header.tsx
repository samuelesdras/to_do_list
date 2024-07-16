type headerProps = {
  title: string;
};

export default function Header({ title }: headerProps) {
  return (
    <header className="p-10 text-3xl">
      <h1>{title}</h1>
    </header>
  );
}
