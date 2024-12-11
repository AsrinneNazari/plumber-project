import { Button } from "./Button";

interface IModalProps {
  show: boolean;
  onClose: () => void;
}

export const ConfirmationModal = ({ show, onClose }: IModalProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-9 rounded shadow-lg">
        <p>Meddelande skickat</p>
        <p className="">Vi återkommer till dig så fort som möjligt!</p>
      <div className="mt-3">
        <Button click={onClose} buttonText="Stäng"/>
        </div>  
      </div>
    </div>
  );
};
