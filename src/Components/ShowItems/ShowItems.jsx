import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowItems = ({ items, removes, setRemove }) => {
    const { _id, ItemName, subcategory, description, prossesingTime, CustomizeExample, rating, photoUrl, price } = items;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-craft-server-coral.vercel.app/all-item/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been Deleted.",
                                icon: "success"
                            });
                            const remaining = removes.filter(items => items._id !== _id)
                            setRemove(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-compact w-96 mx-auto shadow-lg border border-b-green-600 border-y-2 bg-cyan-50">
            <figure>
                <img className="w-full h-80"
                    src={photoUrl} />
            </figure>
            <div className="card-body">
                <div className="card-body flex justify-between">
                    <div className="text-starts">
                        {/* <h2 className="text-xl font-semibold"><span className="text-lg font-semibold">Name : </span> {}</h2> */}
                        <p className="text-lg"><span className="text-lg font-semibold">Item Name : </span>{ItemName}</p>
                        <p className="text-lg"><span className="text-lg font-semibold">Subcatagory Name : </span> {subcategory}</p>
                        <p className="text-lg"><span className="text-lg font-semibold">Short Description : </span>{description}</p>
                        <p className="text-lg"><span className="text-lg font-semibold">Price : </span>{price} Taka</p>
                        <p className="text-lg"><span className="text-lg font-semibold">Processing Time : </span>{prossesingTime}</p>
                        <p className="text-lg"><span className="text-lg font-semibold">Customization : </span>{CustomizeExample}</p>
                        <p className="text-lg"><span className="text-lg font-semibold">Rating : </span>{rating}</p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/updateitem/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-secondary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ShowItems;