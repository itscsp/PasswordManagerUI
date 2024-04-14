import Card from "../components/Card";
import Button from "../components/button";
import { Form } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import password from "../data";


const AddPassowrd = () => {
    const prdId = useParams();
    const passwordEditDetails = password.filter((pswd) => pswd.id === prdId.pswdId);


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="flex justify-between items-center gap-4">

                <div>
                    <h2>Edit password</h2>
                    <p className="text-xs">Please edit each field carefully!</p>
                </div>
                <div>
                    <Button isLink='true' to='/password/' className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">View All Password</Button>
                </div>

            </div>
            <Card>
                <Form method="post" action="/add-password">
                    <div className="p-5 pb-2">
                        <label htmlFor="website" className="block text-xs font-bold text-gray-700">Website:</label>
                        <input type="text" value={passwordEditDetails[0].sites} id="website" placeholder="example.com" required name="website" className="bg-slate-100 hover:bg-slate-200 mt-1 p-2 w-full border-b rounded-tl-md rounded-tr-md focus:ring-0 focus:border-b focus:border-gray-500  focus:outline-none focus-visible:border-b focus-visible:border-gray-500" />
                    </div>
                    <div className="p-5 pb-2 pt-2">
                        <label htmlFor="username" className="block text-xs font-bold text-gray-700">Username:</label>
                        <input type="text" id="username" value={passwordEditDetails[0].username}  required name="username" className="bg-slate-100 hover:bg-slate-200 mt-1 p-2 w-full border-b rounded-tl-md rounded-tr-md focus:ring-0 focus:border-b focus:border-gray-500 focus-visible:border-b focus-visible:border-gray-500 focus:outline-none" />
                    </div>
                    <div className="p-5 pb-2 pt-2 relative">
                        <label htmlFor="password" className="block text-xs font-bold text-gray-700">Password:</label>
                        <input type={showPassword ? "text" : "password"}  value={passwordEditDetails[0].password} id="password"  required name="password" className="bg-slate-100 hover:bg-slate-200 mt-1 p-2 w-full border-b rounded-tl-md rounded-tr-md pr-10 focus:ring-0 focus:border-b focus:border-gray-500 focus-visible:border-b focus:outline-none focus-visible:border-gray-500" />
                        <button type="button" id="togglePassword" className="focus:outline-none -ml-8" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="p-5 pb-2 pt-2">
                        <label htmlFor="note" className="block text-xs font-bold text-gray-700">Note:</label>
                        <textarea id="note" defaultValue={passwordEditDetails[0].note}  name="note" className="bg-slate-100 hover:bg-slate-200 mt-1 p-2 w-full border-b rounded-tl-md rounded-tr-md focus:ring-0 focus:border-b focus:border-gray-500 focus-visible:border-b focus-visible:border-gray-500 focus:outline-none resize-none" />
                    </div>
                    <div className="p-5 flex justify-end space-x-2">
                        <Button isLink='true' type="button" to='/password/' className="border hover:bg-gray-100 text-gray py-2 px-4 rounded">Cancel</Button>
                        <Button type="button" className="bg-violet-500 hover:bg-violet-700 text-white  py-2 px-4 rounded">Update</Button>
                    </div>
                </Form>
            </Card>
        </>
    );
}

export default AddPassowrd;