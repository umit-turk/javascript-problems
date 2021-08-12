import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.eu/rest/v2/all"
      );
      setCountries(data);
    } catch {
      console.log("hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  console.log({ countries });
  
  return (
    <div>
      <Loading loading={loading} />
      {countries.map((country) => {
        return <Country key={country.name} country={country} />;
      })}
    </div>
  );
}

export default App;
