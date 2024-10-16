import React from 'react';
import SidebarImageComponent from './SidebarImageComponent';
import gaming_prod_1 from "../../../Assets/images/gaming_prod_1.png"
import gaming_prod_2 from "../../../Assets/images/gaming_prod_2.png"
import gaming_prod_3 from "../../../Assets/images/gaming_prod_3.png"
import gaming_prod_4 from "../../../Assets/images/gaming_prod_4.png"

const SidebarGaming: React.FC = () => {

  return (
    <div className="w-full py-4 pl-12">

      {/* <div className="font-bold mb-4 text-black text-left mt-12"></div> */}
      <div className="flex flex-col space-y-2 text-left p-4 gap-2">
        <SidebarImageComponent to='product' image={gaming_prod_1} />
        <SidebarImageComponent to='product' image={gaming_prod_2} />
        <SidebarImageComponent to='product' image={gaming_prod_3} />
        <SidebarImageComponent to='product' image={gaming_prod_4} />
      </div>

    </div>

  );
};

export default SidebarGaming;
