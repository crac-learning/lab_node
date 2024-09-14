import HerBanner from "Assets/images/her-banner.jpg";
import Heading from "Components/Shop/Heading";

function ForHer() {
  return (
    <>
      <div className="container">
        <img src={HerBanner} alt="for-her" className="h-128" />
      </div>
      <div className="collection text-left my-24">
        <Heading text="Women Collection" />
      </div>
    </>
  );
}

export default ForHer;
