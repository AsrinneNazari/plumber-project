interface IModal {
  show: boolean;
  onClose: () => void;
}

export const ConfirmationModal = ({ show, onClose }: IModal) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <p>Meddelande skickat</p>
        <p>Vi återkommer till dig så fort som möjligt</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Stäng
        </button>
      </div>
    </div>
  );
};
