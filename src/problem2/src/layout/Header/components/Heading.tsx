
const Heading = (props: any) => {
    const { item } = props;
  return (
    <span>
      <item.icon />
      &nbsp;&nbsp;{item.title}
    </span>
  );
};

export default Heading;
