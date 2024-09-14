type Props = {
  text: string;
};

function Heading({ text }: Props) {
  return <h1 className="text-brand-primary">{text}</h1>;
}

export default Heading;
