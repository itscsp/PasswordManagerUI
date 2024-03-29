import { Link } from "react-router-dom";

export default function Button({ children, isLink, ...props }) {
    
    if(isLink){
        return (
            <Link {...props}>{children}</Link>
        )
    }

    
    return (
      <button
        {...props}
      >
        {children}
      </button>
    );
  }