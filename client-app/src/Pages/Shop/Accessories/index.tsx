import AccessoriesBanner from "Assets/images/accessories-banner.jpg";
import Heading from "Components/Shop/Heading";

function Accessories() {
  return (
    <>
      <div className="container">
        <img src={AccessoriesBanner} alt="footwear" className="h-128" />
      </div>
      <div className="collection text-left my-24">
        <Heading text="Accessories" />
      </div>
    </>
  );
}

export default Accessories;
