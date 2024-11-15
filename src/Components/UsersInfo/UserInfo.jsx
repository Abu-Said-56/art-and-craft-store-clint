import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UserInfo = () => {
    const lodededUser = useLoaderData();
    const [userinfo, setUserinfo] = useState(lodededUser);

    const handledelete = id => {
        // make sure user is confirmed to delete
        fetch(`https://art-craft-server-coral.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    Swal.fire({
                        title: "Deleted!",
                        text: "User Info has been Deleted.",
                        icon: "success"
                    });
                    // console.log('Deleted Successfuly');
                    // remove the user from UI
                    const remainingUser = userinfo.filter(user => user._id !== id);
                    setUserinfo(remainingUser);
                }
            })
    }
    return (
        <div>
            <h3>User Info Length {lodededUser.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userinfo.map(user => <tr key={user._id}>

                                <td>{user?.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <div>
                                    <img src={user?.photo} />
                                </div>
                                <td>
                                    <button
                                        onClick={() => handledelete(user._id)}
                                        className="btn btn-sm btn-accent"
                                    >Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserInfo;