import { Link } from "react-router-dom";

export default function Button({ children, isLink, ...props }) {
    
    if(isLink){
        return (
            <Link {...props}>{children}</Link>
        )
    }

    
    return (
      <button
        className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
        {...props}
      >
        {children}
      </button>
    );
  }