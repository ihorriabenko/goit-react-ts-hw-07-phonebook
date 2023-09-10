interface SectionProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  type,
  text,
  children,
}): JSX.Element => {
  const Tag = type;

  return (
    <section>
      <Tag>{text}</Tag>
      {children}
    </section>
  );
};

export default Section;
