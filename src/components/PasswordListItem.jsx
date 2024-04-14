import { MdArrowRight } from "react-icons/md";
import Button from "./button";
import DynamicFavicon from "./Favicon";


export default function PasswordListItem({data}, key) {


    return (
        
            <li key={key} className="passwordItem  hover:bg-gray-100">
                <Button isLink='true' className="flex  items-center" to={`/password/${data.id}`} >
                    <div className="px-5 py-3">
                        <DynamicFavicon website={data.sites} width="16" height="16" />

                    </div>
                    <div className="py-3 w-full flex justify-between items-stretch border-b password-content-wrapper">
                        <p>{data.sites}</p>

                        <div className="px-2">
                            <MdArrowRight size={24} />
                        </div>
                    </div>
                </Button>
            </li>

    )
}
