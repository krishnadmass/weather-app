// Snackbar.jsx
import React from "react";
import { SnackbarProps } from "./interface";
import "./styles.css";

const Snackbar = ({
    isOpen,
    setIsOpen
}: SnackbarProps) => {

    React.useEffect(() => {
        if(isOpen){
            setTimeout(() => {
                setIsOpen(false)
            }, 3000);
        }
    }, [isOpen])

    return (
        <div className="snackbar__container">
            <div className="snackbar__label">City or Weather not found for this place !</div>
        </div>
    );
};
export default Snackbar;