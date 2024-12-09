import { Button } from "./Button";

interface IModalProps {
  show: boolean;
  onClose: () => void;
}

export const ConfirmationModal = ({ show, onClose }: IModalProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-9 rounded shadow-lg">
        <p>Meddelande skickat</p>
        <p>Vi återkommer till dig så fort som möjligt</p>
        <Button click={onClose} buttonText="Stäng" />
      </div>
    </div>
  );
};
