import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/Product/Product";

import { ProductType } from "./Interface/types";

function App() {
  const [data, setData] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data: ProductType = await (await fetch("./data.json")).json();
        setData(data);
      } catch (error) {
        // console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Navigation />
      <Product data={data} />
    </>
  );
}

export default App;
