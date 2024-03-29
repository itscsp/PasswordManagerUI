import Card from "../components/Card";
import Button from "../components/button";
import { Form } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";

const AddPassowrd = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="flex justify-between items-center gap-4">

                <div>
                    <h2>Add new password</h2>
                    <p className="text-xs">Please fill each field carefully!</p>
                </div>
                <div>
                    <Button isLink='true' to='/password/' className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">View All Password</Button>
                </div>

            </div>
            <Card>
                <Form method="post" action="/add-password">
                    <div className="p-5 pb-2">
                        <label htmlFor="website" className="block text-xs font-bold text-black-600">Website:</label>
                        <input type="text" id="website" placeholder="example.com" required name="website" className="mt-1 p-2 w-full border-b rounded-tl-md rounded-tr-md focus:ring-0 focus:border-b focus:border-gray-500 focus-visible:border-b focus-visible:border-gray-500" />
                    </div>
                    <div className="p-5 pb-2 pt-2">
                        <label htmlFor="username" className="block text-xs font-bold text-black-600">Username:</label>
                        <input type="text" id="username"  required name="username" className="mt-1 p-2 w-full border-b rounded-tl-md rounded-tr-md focus:ring-0 focus:border-b focus:border-gray-500 focus-visible:border-b focus-visible:border-gray-500" />
                    </div>
                    <div className="p-5 pb-2 pt-2 relative">
                        <label htmlFor="password" className="block text-xs font-bold text-black-600">Password:</label>
                        <input type={showPassword ? "text" : "password"} id="password"  required name="password" className="mt-1 p-2 w-full border-b rounded-tl-md rounded-tr-md pr-10 focus:ring-0 focus:border-b focus:border-gray-500 focus-visible:border-b focus-visible:border-gray-500" />
                        <button type="button" id="togglePassword" className="focus:outline-none -ml-8" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="p-5 pb-2 pt-2">
                        <label htmlFor="note" className="block text-xs font-bold text-black-600">Note:</label>
                        <textarea id="note"  name="note" className="mt-1 p-2 w-full border-b rounded-tl-md rounded-tr-md focus:ring-0 focus:border-b focus:border-gray-500 focus-visible:border-b focus-visible:border-gray-500"></textarea>
                    </div>
                    <div className="p-5 flex justify-end space-x-2">
                        <Button isLink='true' type="button" to='/password/' className="border hover:bg-gray-100 text-gray py-2 px-4 rounded">Cancel</Button>
                        <Button type="button" className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">Save</Button>
                    </div>
                </Form>
            </Card>
        </>
    );
}

export default AddPassowrd;