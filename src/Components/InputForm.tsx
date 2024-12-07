import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { supabase } from "../services/supabaseClient";
import { ConfirmationModal } from "./ConfirmationModal";

export const InputForm = () => {
  const startInput = {
    name: "",
    email: "",
    number: "",
    message: "",
  };
  const [inputValue, setInputValue] = useState(startInput);
  const [showModal, setShowModal] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.log("error!");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          return;
        }
      );

    const { name, email, number, message } = inputValue;
    try {
      const { data, error } = await supabase
        .from("FormSubmissions")
        .insert({ name: name, email: email, number: number, message: message })
        .select();
      if (error) throw error;
      console.log("Data lagrad:", data);
      setShowModal(true);
      setInputValue(startInput);
    } catch (error) {
      console.error("Något gick fel", error);
    }
  };

  return (
    <>
      <div className="p-5 sm:p-5 mx-auto max-w-7xl flex flex-col lg:flex-row gap-10">
        <div className="flex-[1] border-l-2 border-lightgray pl-9 pt-10 order-1 lg:order-2">
          <p className="font-semibold font-fjalla text-lx mb-3 text-2xl">
            Kontakta oss direkt
          </p>
          <p className="font-bold">Telefonnummer: 070-1234567</p>
        </div>

        <div className="flex-[2] order-2 lg:order-1">
          <div className="font-sans text-3xl p-4 font-medium">
            Kontakta oss/offertförfrågan
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="p-5 sm:p-10 mx-auto max-w-lg"
          >
            <div className="space-y-12">
              <p className="mt-3 text-sm/2 text-gray-600">
                Fyll i formuläret här nedan så kontaktar vi dig så fort vi kan.
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Namn:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    value={inputValue.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md shadow-md ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Telefonnummer:
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="number"
                    value={inputValue.number}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md shadow-md ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  E-post:
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    value={inputValue.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md shadow-md ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md p-2"
                  />
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
                    required
                    className="block w-full rounded-md shadow-md ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md p-2 min-h-40"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center rounded-md bg-blue px-5 py-2 text-sm font-sans shadow-sm hover:bg-darkblue"
                >
                  Skicka
                </button>
              </div>
            </div>
          </form>
          <ConfirmationModal
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </div>
    </>
  );
};
