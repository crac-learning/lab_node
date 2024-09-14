import Arrow from "Assets/icons/arrow-right.svg";
import { Anchor } from "Components/DrawerComp/types";

type Props = {
  openDrawer: (anchor: Anchor, flag: boolean) => void;
};

function ToggleButton({ openDrawer }: Props) {
  return (
    <button
      className="bg-primary-main rounded-t-none flex items-center gap-2 text-[#D3F0DA] focus:outline-0 border-0 py-4"
      onClick={() => openDrawer("left", true)}
    >
      <div>Open Documentation</div>
      <div>
        <img src={Arrow} alt="" className="rotate-90 w-3" />
      </div>
    </button>
  );
}

export default ToggleButton;
