interface IModal {
  show: boolean;
  onClose: () => void;
}

export const ConfirmationModal = ({ show, onClose }: IModal) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-9 rounded shadow-lg">
        <p>Meddelande skickat</p>
        <p>Vi återkommer till dig så fort som möjligt</p>
        <button
          className="w-full sm:w-auto mt-5 inline-flex justify-center rounded-md bg-blue px-5 py-2 text-sm font-sans shadow-sm hover:bg-darkblue"
          onClick={onClose}
        >
          Stäng
        </button>
      </div>
    </div>
  );
};
