import ShoeBanner from "Assets/images/shoe-banner.jpg";
import Heading from "Components/Shop/Heading";

function Footwear() {
  return (
    <>
      <div className="container">
        <img src={ShoeBanner} alt="footwear" className="h-112" />
      </div>
      <div className="collection text-left my-24">
        <Heading text="Shoe Collection" />
      </div>
    </>
  );
}

export default Footwear;
