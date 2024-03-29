import { Link } from "react-router-dom";
import Button from "../components/button";
import Card from "../components/Card";
import PasswordListItem from "../components/PasswordListItem";
import password from "../data";

const PasswordList = () => {
    const data = password
    return (
        <>
            <div className="flex justify-between items-center gap-4">

                <div>
                    <h2>Passwords</h2>
                    <p className="text-sm">Create, save, and manage your passwords so you can easily sign in to sites and apps.</p>
                </div>
                <div>
                    <Button isLink='true' to='/password/add' className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">Add</Button>
                </div>

            </div>
            <Card>
                <ul> 
                    {data.map((item, index) => (
                        <PasswordListItem data={item} key={index} />
                    ))}
                </ul>
            </Card>
        </>
    );
}

export default PasswordList;