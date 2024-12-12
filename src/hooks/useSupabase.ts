import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export const useSupabase = <T>(baseData: string): [boolean, T | undefined] => {
  const [textContent, setTextContent] = useState<T>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from(baseData).select();

        if (error) {
          console.error("Fel vid hämtning av data:", error);
        } else {
          setTextContent(data as T);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseData]);
  return [loading, textContent];
};
export default useSupabase;
//credit: https://github.com/sebastiantegel/fed23s-js-ext/blob/main/react/4-react-custom-hooks/src/hooks/useFetch.ts
