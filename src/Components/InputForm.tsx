import { FormEvent, useState } from "react";

export const InputForm = () => {
  const startInput = {
    name: "",
    number: "",
    email: "",
    message: "",
  };
  const [inputValue, setInputValue] = useState(startInput);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue(startInput);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 sm:p-10 mx-auto max-w-lg">
      <div className="space-y-12">
        <h2 className="text-base/7 font-semibold text-gray-900">
          Kontakta oss
        </h2>
        <p className="mt-1 text-sm/6 text-gray-600">
          Fyll i formuläret här nedan så kontaktar vi dig så fort vi kan.
        </p>
        <div className="border-b border-gray-900/10 pb-12 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Namn:
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  value={inputValue.name}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900">
              Telefonnummer:
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="number"
                  name="number"
                  value={inputValue.number}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900">
              E-post:
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="email"
                  name="email"
                  value={inputValue.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900">
              Meddelande:
            </label>
            <div className="mt-2">
              <textarea
                name="message"
                value={inputValue.message}
                onChange={handleInputChange}
                className="block w-full sm:max-w-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              ></textarea>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:ring-2 focus:ring-indigo-600"
            >
              Skicka
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
