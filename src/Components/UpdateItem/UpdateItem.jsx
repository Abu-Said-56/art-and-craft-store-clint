import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const items = useLoaderData();
    const { _id, email, ItemName, subcategory, description, prossesingTime, CustomizeExample, rating, photoUrl, price } = items;

    const handleUpdateElement = event => {
        event.preventDefault();
        const form = event.target;
        const ItemName = form.ItemName.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const prossesingTime = form.prossesingTime.value;
        const CustomizeExample = form.CustomizeExample.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const photoUrl = form.photoUrl.value;


        const UpdatedCraft = {_id, ItemName, subcategory, description, prossesingTime, CustomizeExample, rating, photoUrl, price }
        console.log(UpdatedCraft);

        fetch(`https://art-craft-server-coral.vercel.app/all-item/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                form.reset();
            })


    }
    return (
        <div>
            <div className="mx-auto text-center bg-[#F4F3F0]">
                <h3 className="text-3xl font-bold text-center">Update Items</h3>
                <form onSubmit={handleUpdateElement} className="card-body">
                    <div className=" mx-auto text-center shadow-sm rounded-md px-5 bg-slate-50 mb-4">
                        {/* form name and quantity row */}
                        <div className="md:flex mb-4 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Art and Craft Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="ItemName" defaultValue={ItemName} placeholder="Item Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Subcategory Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="subcategory" defaultValue={subcategory} placeholder="Subcategory" className="input input-bordered w-full" />
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
                                    <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Customize Example</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="CustomizeExample" defaultValue={CustomizeExample} placeholder="Customize Example" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* form category and details row */}
                        <div className="md:flex mb-4 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Prossesing Time</span>
                                </label>
                                <label className="input-group">
                                    <input type="time" name="prossesingTime" defaultValue={prossesingTime} placeholder="Prossesing Time" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Photo URL and price */}
                        <div className='"flex md:flex mb-6 gap-4'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                                </label>
                            </div>                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photoUrl" placeholder="Photo URL" defaultValue={photoUrl} className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                    <input type="submit" value="Update Item" className="btn btn-ghost bg-[#22acde]" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateItem;