import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { supabase } from "../services/supabaseClient";
import ContactInfo from "./ContactInfo";
import Button from "./Button";
import ConfirmationModal from "./ConfirmationModal";
import Label from "./Label";
import Title from "./Title";

const InputForm = () => {
  const startInput = {
    name: "",
    email: "",
    number: "",
    message: "",
  };
  const [inputValue, setInputValue] = useState(startInput);
  const [showModal, setShowModal] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const onClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } =
      e.target; /* Destructures "name" (the field's name) and "value" (the current value of the field) from the event's target. */
    setInputValue((prev) => ({
      ...prev /*  Copies the previous state (inputValue) to preserve values from other fields. */,
      [name]:
        value /* Updates only the field that matches the "name" attribute with the new value. */,
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
        <ContactInfo />

        <div className="flex-[2] order-2 lg:order-1">
          <Title titleText="Kontakta oss / offertförfrågan" />
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="p-5 sm:p-10 mx-auto max-w-lg"
          >
            <div className="space-y-12">
              <p className="mt-1 text-sm/2 text-gray-600">
                Fyll i formuläret här nedan så kontaktar vi dig så fort vi kan.
              </p>
              <div>
                <Label labelText="Namn:" />
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    required
                    value={inputValue.name}
                    onChange={handleInputChange}
                    className="block w-full rounded-md shadow-md ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md p-2"
                  />
                </div>
              </div>

              <div>
                <Label labelText="Telefonnummer:" />
                <div className="mt-2">
                  <input
                    type="number"
                    name="number"
                    required
                    value={inputValue.number}
                    onChange={handleInputChange}
                    className="block w-full rounded-md shadow-md ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md p-2"
                  />
                </div>
              </div>

              <div>
                <Label labelText="Epost:" />
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    required
                    value={inputValue.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md shadow-md ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md p-2"
                  />
                </div>
              </div>

              <div>
                <Label labelText="Meddelande:" />
                <div className="mt-2">
                  <textarea
                    name="message"
                    required
                    value={inputValue.message}
                    onChange={handleInputChange}
                    className="block w-full rounded-md shadow-md ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md p-2 min-h-40"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <Button buttonText="Skicka" type="submit" />
              </div>
            </div>
          </form>
          <ConfirmationModal show={showModal} onClose={onClose} />
        </div>
      </div>
    </>
  );
};
export default InputForm;
