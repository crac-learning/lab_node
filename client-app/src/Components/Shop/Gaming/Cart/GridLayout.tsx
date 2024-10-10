import React from "react";

interface GridLayoutProps {
    columns: number;
    rows: number;
    items: number[]
}

const GridLayout : React.FC<GridLayoutProps> = ({columns, rows, items}) => {
        return (
            <div
            className="grid gap-4"
            style={{
                gridTemplateColumns : `repeat(${columns}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
            }}
            >
                {items.map((item, index)=> (
                    <div key={index} className="bg-[#9077D2] text-white text-center p-4 rounded-md">
                        Item {item}
                    </div>
                ))}
            </div>
        )
}



export default GridLayout;