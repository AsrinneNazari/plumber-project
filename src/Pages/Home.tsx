import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { ITextContent } from "../models/ITextContent";

export const Home = () => {
  const [textContent, setTextContent] = useState<ITextContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("TextContent").select();

      if (error) {
        console.error("Fel vid hämtning av data:", error);
      } else {
        setTextContent(data as ITextContent[]);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>Info</h2>

      {textContent.length > 0 ? (
        textContent.map((item, index) => <p key={index}>{item.content}</p>)
      ) : (
        <p>Laddar... :(</p>
      )}
    </>
  );
};
