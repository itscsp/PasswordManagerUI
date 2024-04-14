import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom"; 
import password from "../data";
import DynamicFavicon from "../components/Favicon";
import { BsArrowLeftCircle } from "react-icons/bs";
import Card from "../components/Card";
import Button from "../components/button";
import { FaCopy } from "react-icons/fa";
import { VscCopy, VscEye, VscEyeClosed } from "react-icons/vsc";

const PasswordDetailPage = () => {
    const prdId = useParams();
    const navigate = useNavigate();
    const passwordDetails = password.filter((pswd) => pswd.id === prdId.pswdId);
    const inputUserNameRef = useRef(null);
    const inputPasswordRef = useRef(null);

    const [showFullContent, setShowFullContent] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowMore = () => {
        setShowFullContent(!showFullContent);
    };

    // Function to copy the username to the clipboard
    const copytoClipbord = (ref, item) => {
        ref.current.select();
        document.execCommand('copy');
        // Optionally, you can provide some visual feedback to the user that the username has been copied
        // For example, by displaying a tooltip or a message
        alert(`${item} copied to clipboard`);
    };

    // Function to handle the delete operation
    const handleDelete = () => {
        // Perform the delete operation here
        // For example, you can update state to trigger a re-render, or make an API call to delete data
        console.log('Delete button clicked!');
    }

    // Timeout ID
    let timeoutId;

    // Function to start the timer
    const startTimer = () => {
        timeoutId = setTimeout(() => {
            // Redirect the user after 1 minute of inactivity
            setRedirect(true);
        }, 300000); // 1 minute in milliseconds
    };

    const handleActivity = () => {
        // Reset the timer when there's user activity
        clearTimeout(timeoutId);
        startTimer();
    };

    useEffect(() => {
        // Start the timer when the component mounts
        startTimer();

        // Event listener for user activity
        window.addEventListener('mousemove', handleActivity);

        // Clear timeout and remove event listener when the component unmounts or changes
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('mousemove', handleActivity);
        };
    }, []);

    useEffect(() => {
        if (redirect) {
            // Redirect to the password list page
            navigate('/password');
        }
    }, [redirect]);

    return (
        <>
            {passwordDetails.map((item) => (
                <div key={item.id}>
                    <div className="flex items-center justify-start gap-3">
                        <div className="flex items-center gap-2">
                            <Link to="/password">
                                <BsArrowLeftCircle size={32} className="hover:text-blue-900" />
                            </Link>
                            <DynamicFavicon website={item.sites} width="24" height="24" />
                        </div>
                        <h1 className="text-xl">{item.sites.replace(/^https?:\/\//, "")}</h1>
                    </div>
                    <Card>
                        <div className="p-3">
                            <div className="grid grid-cols-2 gap-4 mb-3">
                                <div>
                                    <label className="text-sm" htmlFor="usernameInput">Username</label>
                                    <div className="flex items-center
                                    bg-slate-100 hover:bg-slate-200 mt-1  w-full border-b rounded-md focus:ring-0 focus:border-b focus:border-gray-500  focus:outline-none focus-visible:border-b focus-visible:border-gray-500
                                    ">
                                        <input
                                            id="usernameInput"
                                            name="username"
                                            type="text"
                                            value={item.username}
                                            readOnly
                                            ref={inputUserNameRef}
                                            className="p-2 bg-transparent hover:border-0 active:border-0 focus:border-0 focus:outline-none focus:border-transparent w-full"
                                        />

                                        <button className="p-2 m-1 rounded-full hover:bg-slate-400" onClick={() => copytoClipbord(inputPasswordRef, `Password`)}>
                                            <VscCopy />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <label className="text-sm" >sites</label>

                                        <Link to={item.sites} className="py-2 underline block text-sm">{item.sites}</Link>

                                    </div>

                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm" htmlFor="PasswordInput">Password</label>
                                    <div className="flex items-center
                                    bg-slate-100 hover:bg-slate-200 mt-1  w-full border-b rounded-md focus:ring-0 focus:border-b focus:border-gray-500  focus:outline-none focus-visible:border-b focus-visible:border-gray-500
                                    ">
                                        <input
                                            id="PasswordInput"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            readOnly
                                            ref={inputPasswordRef}
                                            value={item.password}
                                            className="p-2 bg-transparent hover:border-0 active:border-0 focus:border-0 focus:outline-none focus:border-transparent w-full"
                                        />
                                        <button className="p-2 rounded-full hover:bg-slate-400" onClick={togglePasswordVisibility}>
                                            {showPassword ? <VscEyeClosed /> : <VscEye />}
                                        </button>
                                        <button className="p-2 m-1 rounded-full hover:bg-slate-400" onClick={() => copytoClipbord(inputPasswordRef, `Password`)}> <VscCopy /></button>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm" htmlFor="noteInput">Note</label>
                                    <div className="bg-slate-100 hover:bg-slate-200 mt-1  w-full border-b rounded-md focus:ring-0 focus:border-b focus:border-gray-500  focus:outline-none focus-visible:border-b focus-visible:border-gray-500
                                    ">
                                        <p className="p-2 inline-block text-sm">{showFullContent ? item.note : item.note.length > 40 ? `${item.note.slice(0, 40)}...` : item.note}</p>
                                        {item.note.length > 50 && (
                                            <button className="pl-2 pb-2 text-sm text-blue-600 " onClick={toggleShowMore}>
                                                {showFullContent ? "Show less" : "Show more"}
                                            </button>
                                        )}



                                    </div>
                                </div>

                            </div>
                        </div >
                        <div className="p-3 mt-3 border-t-2 flex gap-3 ">
                            <Button isLink={true} to={`/password/${item.id}/edit`} className="bg-violet-500 hover:bg-violet-700 text-white  py-2 px-4 rounded inline-block">Edit</Button>
                            <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded inline-block">Delete</Button>
                        </div>
                    </Card >
                </div >
            ))}
        </>
    );
}

export default PasswordDetailPage;
