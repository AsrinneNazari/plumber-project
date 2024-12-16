interface ITitleProps {
  titleText: string;
}

const Title = ({ titleText }: ITitleProps) => {
  return (
    <>
      <div className="font-sans font-semibold text-3xl p-4 font-medium">
        {titleText}
      </div>
    </>
  );
};
export default Title;
