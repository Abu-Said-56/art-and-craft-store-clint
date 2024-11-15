import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';
const AddItems = () => {
    const { user } = useContext(AuthContext)
    const handleAddElement = event => {
        event.preventDefault();
        const form = event.target;
        const ItemName = form.ItemName.value;
        const subcategory = form.subcategoryName.value;
        const description = form.shortDescription.value;
        const prossesingTime = form.ProcessingTime.value;
        const CustomizeExample = form.CustomizeExample.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photoUrl = form.photoUrl.value;

        const email = user?.email;
        const AddNewCraft = { email, ItemName, subcategory, description,prossesingTime, CustomizeExample, rating, photoUrl, price }
        // console.log(AddNewCraft);

        fetch("https://art-craft-server-coral.vercel.app/all-item", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddNewCraft)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Item Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Added'
                })
                form.reset();             
            })

    }

    return (
        <div>
            <div className="mx-auto text-center bg-[#F4F3F0]">
                <h3 className="text-3xl font-bold text-center">Add Art&Craft Items</h3>
                <form onSubmit={handleAddElement} className="card-body">
                    <div className=" mx-auto text-center shadow-sm rounded-md px-5 bg-slate-50 mb-4">
                        {/* form name and quantity row */}
                        <div className="md:flex mb-4 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="ItemName" placeholder="Item Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Subcategory_Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="subcategoryName" placeholder="Subcategory_Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>

                        {/* form supplier row */}
                        <div className="md:flex mb-4 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>

                        {/* form category and details row */}
                        <div className="md:flex mb-4 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <label className="input-group">
                                    <input type="time" name="ProcessingTime" placeholder="Processing Time" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Customization Exampl</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="CustomizeExample" placeholder="Customization Exampl" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>

                        {/* Price and rating */}
                        <div className="md:flex mb-4 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-block bg-[#22acde]" />
                </form>

            </div>
        </div>
    );
};

export default AddItems;