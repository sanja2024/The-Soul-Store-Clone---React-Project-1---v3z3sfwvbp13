import React, { useState } from "react";



const UserContext= React.createContext();

function UserProvider({children}) {

    const [projectId, setProjectId]= useState("f104bi07c490");

    const [isAuthenticated, setIsAuthenticated]= useState(false);

    const [itemsInCart, setItemsInCart]= useState([]);
    const [whishlistItems, setWhishlistItems]= useState([]);

    const [totalPrice, setTotalPrice]= useState(0);

    const [user, set_user]= useState(null);
    const [token, set_token]= useState(null);

    const [username, setUserName]= useState(user?.name);
    

    function save_user_and_token(user, token) {
        set_user(user);
        set_token(token);
    }

    function saveUser(user) {
        set_user(user);
    }

    return(
        <UserContext.Provider value={{isAuthenticated, setIsAuthenticated, itemsInCart, setItemsInCart,
            whishlistItems, setWhishlistItems, projectId, username, setUserName, 
            save_user_and_token, saveUser, 
            user, set_user, token, set_token, totalPrice, setTotalPrice}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}