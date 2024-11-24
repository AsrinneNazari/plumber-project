import { FormEvent, useState } from "react";

export const InputForm = () => {
  const startState = {
    name: "",
    number: "",
    email: "",
    message: "",
  };
  const [inputValue, setInputValue] = useState(startState);

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
    setInputValue(startState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Namn:
        <input
          type="text"
          name="name"
          value={inputValue.name}
          onChange={handleInputChange}
        />
      </label>
      <label>Telefonnummer:</label>
      <input
        type="number"
        name="number"
        value={inputValue.number}
        onChange={handleInputChange}
      />
      <label>E-post:</label>
      <input
        type="email"
        name="email"
        value={inputValue.email}
        onChange={handleInputChange}
      />
      <label>Meddelande:</label>
      <textarea
        name="message"
        value={inputValue.message}
        onChange={handleInputChange}
      ></textarea>
      <button>Skicka</button>
    </form>
  );
};
