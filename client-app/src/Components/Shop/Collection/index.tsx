import ProductBox from "../ProductBox";
import Heading from "../Heading";

import { IProduct } from "Utils/types";

type Props = {
  collection: IProduct[];
};

function Collection({ collection }: Props) {
  console.log("collection", collection);
  return (
    <>
      <Heading text="Best Sellers" />
      <div className="product_list mt-10 flex gap-4 justify-center">
        {collection.map((product) => (
          <ProductBox product={product} key={product.sku} />
        ))}
      </div>
    </>
  );
}

export default Collection;
