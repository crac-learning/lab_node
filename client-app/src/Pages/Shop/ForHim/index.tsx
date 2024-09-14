import HimBanner from "Assets/images/him-banner.jpg";
import Heading from "Components/Shop/Heading";

function ForHim() {
  return (
    <>
      <div className="container">
        <img src={HimBanner} alt="for-him" className="h-128" />
      </div>
      <div className="collection text-left my-24">
        <Heading text="Men Collection" />
        
      </div>
    </>
  );
}

export default ForHim;
