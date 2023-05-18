export default function Heading(props) {
  const { level, children } = props;
  const HeadingTag = level;

  return <HeadingTag>{children}</HeadingTag>;
}
