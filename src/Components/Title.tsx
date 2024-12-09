interface ITitleProps {
  titleText: string;
}

export const Title = ({ titleText }: ITitleProps) => {
  return (
    <>
      <div className="font-sans font-semibold text-3xl p-4 font-medium">
        {titleText}
      </div>
    </>
  );
};
