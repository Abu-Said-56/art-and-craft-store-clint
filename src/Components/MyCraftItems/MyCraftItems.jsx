import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ShowItems from "../ShowItems/ShowItems";

const MyCraftItems = () => {
    const allItems = useLoaderData();
    const {user} = useContext(AuthContext)
    const userItem =  allItems.filter(item => item?.email === user?.email)
    const [removes, setRemove] = useState(userItem);
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-4 py-4">My Art&Craft Items</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"> 
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

export default MyCraftItems;