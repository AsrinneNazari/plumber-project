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
      <div className="p-5 sm:p-10 mx-auto max-w-lg">
        <div className="font-sans text-2xl p-4 font-medium">Din rörmokare i närheten!</div>
        {textContent.length > 0 ? (
          textContent.map((item, index) => (
            <p className="font-sans text-base/7" key={index}>
              {item.content}
            </p>
          ))
        ) : (
          <p>Laddar... :(</p>
        )}
      </div>
    </>
  );
};
