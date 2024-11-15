import { useLoaderData } from "react-router-dom";
import ShowItems from "../ShowItems/ShowItems";
import { useState } from "react";

const AllItems = () => {
    const allItems = useLoaderData();
    const [removes, setRemove] = useState(allItems);

    return (
        <div className="bg-base-200 pb-5">
            <h2 className="text-center text-4xl font-semibold py-4 mt-4">All Art&Craft Items</h2>
            <div className="grid gap-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mx-auto text-start">
            
            {
                removes.map((items, idx) => <ShowItems
                key={idx} 
                items={items}
                removes={removes}
                setRemove={setRemove}
                ></ShowItems>)
            }
        </div>
        </div>
    );
};
export default AllItems;