import { Link } from "react-router-dom";

export default function Card({ children, ...props }) {

    return (
        <div className="card-wrapper shadow mt-6 rounded-xl overflow-hidden"
            {...props}
        >
            {children}
        </div>
    );
}