
import axios from "axios";
import { filterCartData } from "./filterFunctions";



export function openTheModal(e, setModal) {
    if(e.stopPropogation) {
        e.stopPropogation();
    }
    
    setModal((old) => !old);
}

export function closeTheModal(e, setModal) {
    setModal(false);
}


export function myRandom(num) {
    return Math.floor(Math.random() * (num - 1) + 1);
}



export async function fetch_data(url, projectId) {
    try {
        const data= await axios.get(url, {headers:{"projectId":projectId}});
       
        return data.data.data;
    } catch(error) {
        console.log(error);
    }
}

export async function fetchAuthorizedData(url, authToken, projectId, filterFunction, setData, setPrice) {
    var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);
        myHeaders.append("projectID", projectId);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        const response= await fetch(url, requestOptions);
        const data= await response.json();


        const modifiedData= filterFunction(data.data);

        setData(modifiedData);   
        setPrice && setPrice(data?.data?.totalPrice)
}

export function findProduct(list, productId) {
    const isPresent= list.some(item => item.productId === productId);

    return isPresent;
}


// wishlist

export async function manageWhishlist(whishlistItems, setWhishlistItems, product, token, projectId) {
    const isPresent= whishlistItems.some(item => item.productId === product.productId);


    const baseUrl= "https://academics.newtonschool.co/api/v1/ecommerce/wishlist/"

    if(isPresent) {

        try{
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append("projectID", `${projectId}`);

            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
            };

            const response= await fetch(baseUrl + `${product.productId}`, requestOptions);

            if(response.ok) {
                const data= whishlistItems.filter(item => item.productId !== product.productId);
                setWhishlistItems(data);
            }
            
        } catch(error) {
            console.log("error in deleting item from wishlist: ", error);
        }
    } else {
        try{
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("projectID", `${projectId}`);

            var raw = JSON.stringify({
                "productId": `${product.productId}`
            });

            var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            const response= await fetch(baseUrl, requestOptions);

            if(response.ok) {
                const data= [...whishlistItems, {
                    productId: product.productId,
                    displayImage: product.displayImage,
                    productName: product.name,
                    price: product.price,
                    ratings: product.ratings,
                }];
                setWhishlistItems(data);
            }
        } catch(error) {
            console.log("error in deleting item from wishlist: ", error);
        }
    }
}

// add to cart

export async function addInCart(itemsInCart, setItemsInCart, product, setTotalPrice, token, projectId, quantity, size) {

    const baseUrl= "https://academics.newtonschool.co/api/v1/ecommerce/cart/"
    console.log("quantity: ", quantity);
    console.log("size: ", size);


    try{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("projectID", `${projectId}`);

        var raw = JSON.stringify({
            "quantity" : quantity,
            "size": size,
        });

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        console.log

        const response= await fetch(baseUrl + `${product?.productId}`, requestOptions);
        const data= await response.json();

        const modifiedData= data.data;

        if(response.ok) {

            const newList= filterCartData(modifiedData);

            setItemsInCart(newList);

            setTotalPrice(data?.data?.totalPrice);

            console.log("added: ", newList);

        } else {
            console.log("error for add operation: ", error);
        }
    } catch(error) {
        console.log("error in adding item in database: ", error);
    }    
}



// remove from cart

export async function removeFromCart(itemsInCart, setItemsInCart, product, setTotalPrice, token, projectId) {

    const baseUrl= "https://academics.newtonschool.co/api/v1/ecommerce/cart/"

    try{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("projectID", `${projectId}`);

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };

        const response= await fetch(baseUrl + `${product.productId}`, requestOptions);
        const data= await response.json();

        const modifiedData= data.data;

        if(response.ok) {
            const newList= filterCartData(modifiedData);

            setItemsInCart(newList);
            setTotalPrice(data?.data?.totalPrice);

            console.log("removed: ", newList);
        } else {
            console.log("error for remove operation: ", response);
        }
    } catch(error) {
        console.log("error in deleting item from database: ", error);
    }
    
}


// update user data

export async function updateUserInfo(url, userInfo, user, saveUser, token, projectId, onClose) {
    try {   
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("projectID", `${projectId}`);

        var raw = JSON.stringify({
        "name": userInfo ? userInfo.firstName + " " + userInfo.lastName : user.name,
        "address": {
            "street": userInfo ? userInfo.street : user.address["street"],
            "city": userInfo ? userInfo.city  : user.address["city"],
            "state": userInfo ? userInfo.state  : user.address["state"],
            "country": userInfo ? userInfo.country  : user.address["country"],
            "zipCode": userInfo ? userInfo.zipCode  : user.address["zipCode"]
        },
        "phone": userInfo ? userInfo.phone  : user.phone
        });

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        const response= await fetch(url, requestOptions);

        if(response.ok) {
            const data= await response.json();

            const {data: userData}= data;

            const userDataString = JSON.stringify(userData.user);
            localStorage.setItem("userInfo", userDataString);

            saveUser(userData);
            onClose && onClose();
        }
        
    } catch(error) {
        console.log("error: ", error);
    }
}