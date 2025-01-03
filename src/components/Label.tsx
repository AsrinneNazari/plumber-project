interface ILabelProps {
  labelText: string;
}

const Label = ({ labelText }: ILabelProps) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-900">
        {labelText}
      </label>
    </>
  );
};
export default Label;
