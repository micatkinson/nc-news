import { useState } from "react"

export default function ShowButton({ title, children }){
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    return( 
        <>    
        <button
        className="commentsButton"
        onClick={toggleOpen}
        variant="secondary"
      >
        {isOpen ? "Hide" : "Show"} {title}
      </button>
      {isOpen ? children : null}
    </>
  );
}

    
