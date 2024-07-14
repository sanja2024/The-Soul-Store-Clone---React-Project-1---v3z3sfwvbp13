import React, { useState } from "react";



const TagContext= React.createContext(); 

function TagProvider({children}) {

    const optionsInAccountSection= [
        {title: "Orders", route: "orders"},
        {title: "Gift Vouchers", route: "my-gift-voucher"},
        {title: "TSS Points", route: "points"},
        {title: "TSS Money", route: "money"},
        {title: "Saved Cards", route: "my-saved-cards"},
    ]

    const [apparelForMen, setApparelForMen]= useState(
        [
            {category: "TOPWEAR", isRoute: false, route: "/", tagList: [
                {tag: "Hoodies and Sweatshirts", routeName: "/men-hoodies", isNewCollection: false},
                {tag: "Oversized T-shirts", routeName: "/men-tshirts", isNewCollection: true},
                {tag: "Casual Shirts", routeName: "/men-shirts", isNewCollection: false},
                {tag: "All T-shirts", routeName: "/men-tshirts", isNewCollection: false},
                {tag: "Polos", routeName: "/men-shirts", isNewCollection: false},
                {tag: "Oversized Full Sleeve", routeName: "/men-shirts", isNewCollection: false},
                {tag: "Jackets", routeName: "/men-shirts", isNewCollection: false},
                {tag: "Classic Fit T-shirts", routeName: "/men-tshirts", isNewCollection: false},
                {tag: "All Solid T-shirts", routeName: "/men-tshirts", isNewCollection: false},
                {tag: "Printed Shirts", routeName: "/men-shirts", isNewCollection: false},
            ]},
            {category: "BOTTOMWEAR", isRoute: false, route: "/", tagList: [
                {tag: "All Cargos", routeName: "/men-joggers", isNewCollection: false},
                {tag: "Jeans", routeName: "/men-jeans", isNewCollection: false},
                {tag: "Cotton Pants", routeName: "/men-track-pants", isNewCollection: true},
                {tag: "Joggers", routeName: "/men-joggers", isNewCollection: false},
                {tag: "Shorts", routeName: "/men-shorts", isNewCollection: false},
                {tag: "Boxers & Innerwear", routeName: "/men-shorts", isNewCollection: false},
                {tag: "Pajamas", routeName: "/men-shorts", isNewCollection: false},
            ]},
            {category: "SNEAKERS", isRoute: true, route: "/men-footwear", tagList: []},
            {category: "ACCESSORIES", isRoute: false, route: "/", tagList: [
                {tag: "Perfumes", routeName: "/men-shirts", isNewCollection: false},
                {tag: "Backpacks", routeName: "/men-shirts", isNewCollection: false},
                {tag: "Windcheaters & Umbrellas", routeName: "/men-shirts", isNewCollection: false},
                {tag: "Socks", routeName: "/men-shirts", isNewCollection: false},
                {tag: "Caps", routeName: "/men-shirts", isNewCollection: false},
            ]},
            {category: "COLLECTIONS", isRoute: false, route: "/", tagList: [
                {tag: "New Arrivals", routeName: "/men-shirts", isNewCollection: false},
                {tag: "Best Sellers", routeName: "/men-tshirts", isNewCollection: false},
                {tag: "Supima", routeName: "/men-hodies", isNewCollection: false},
                {tag: "Streetwear", routeName: "/men-jeans", isNewCollection: false},
                {tag: "Superheroes", routeName: "/men-track-pants", isNewCollection: false},
                {tag: "Activewear", routeName: "/men-shorts", isNewCollection: false},
                {tag: "Tie-Dye", routeName: "/men-joggers", isNewCollection: false},
                {tag: "Hottest Deals", routeName: "/men-shirts", isNewCollection: false},
            ]},
        ]
    );

    const [apparelForWomen, setApparelForWomen]= useState([
        {category: "TOPWEAR", isRoute: false, route: "/", tagList: [
            {tag: "Shirts", routeName: "/women-shirts", isNewCollection: false},
            {tag: "Tops", routeName: "/women-tshirts", isNewCollection: false},
            {tag: "Oversized T-Shirts", routeName: "/women-tshirts", isNewCollection: false},
            {tag: "Hoodies & Sweatshirts", routeName: "/women-tshirts", isNewCollection: false},
            {tag: "Sweaters", routeName: "/women-tshirts", isNewCollection: false},
            {tag: "Jackets", routeName: "/women-tshirts", isNewCollection: false},
            {tag: "Dresses & Jumpsuits", routeName: "/women-jumpsuits", isNewCollection: false},
            {tag: "Boyfriend T-shirts", routeName: "/women-tshirts", isNewCollection: false},
        ] },
        {category: "BOTTOMWEAR", isRoute: false, route: "/", tagList: [
            {tag: "All Cargos", routeName: "/women-tshirts", isNewCollection: false},
            {tag: "Joggers", routeName: "/women-joggers", isNewCollection: false},
            {tag: "Pants", routeName: "/women-pants", isNewCollection: false},
            {tag: "Jeans", routeName: "/women-jeans", isNewCollection: false},
            {tag: "Shorts", routeName: "/women-jeans", isNewCollection: false},
            {tag: "Innerwear", routeName: "/women-jeans", isNewCollection: true},
            {tag: "Leggings", routeName: "/women-jeans", isNewCollection: false},
            {tag: "Pajamas", routeName: "/women-jeans", isNewCollection: false},
        ] },
        {category: "SHOES & ACCESSORIES", isRoute: false, route: "/", tagList: [
            {tag: "Umbrellas", routeName: "/women-joggers", isNewCollection: false},
            {tag: "Shoes", routeName: "/women-pants", isNewCollection: false},
            {tag: "Backpacks", routeName: "/women-jumpsuits", isNewCollection: false},
            {tag: "Perfumes", routeName: "/women-tshirts", isNewCollection: false},
            {tag: "Caps", routeName: "/women-jeans", isNewCollection: false},
        ] },
    ]);


    const [apparelForKids, setApparelForKids]= useState([
        {category: "BOYS", isRoute: false, route: "/", tagList: [
            {tag: "T-Shirts", routeName: "/", isNewCollection: false},
            {tag: "Oversized T-Shirts", routeName: "/", isNewCollection: false},
            {tag: "Shirts", routeName: "/", isNewCollection: false},
            {tag: "Hoodies & Sweatshirts", routeName: "/", isNewCollection: false},
            {tag: "Jackets", routeName: "/", isNewCollection: false},
            {tag: "Joggers", routeName: "/", isNewCollection: false},
            {tag: "Shorts", routeName: "/", isNewCollection: false},
        ] },
        {category: "GIRLS", isRoute: false, route: "/", tagList: [
            {tag: "T-Shirts", routeName: "/", isNewCollection: false},
            {tag: "Tops", routeName: "/", isNewCollection: false},
            {tag: "Dresses", routeName: "/", isNewCollection: false},
            {tag: "Hoodies & Sweatshirts", routeName: "/", isNewCollection: false},
            {tag: "Jackets", routeName: "/", isNewCollection: false},
            {tag: "Shorts", routeName: "/", isNewCollection: false},
            {tag: "Joggers", routeName: "/", isNewCollection: false},
        ] },
        {category: "VACATION WEAR", isRoute: true, route: "/kids-winterwear", tagList: [] },
    ]);

    const [shopByThemes, setShopByThemes]= useState([
        {theme: "SUPERHEROES", tagList: [
            {tag: "All Superheroes", routeName: "/", isNewCollection: false},
            {tag: "Captain America™", routeName: "/", isNewCollection: false},
            {tag: "X-Men™", routeName: "/", isNewCollection: false},
            {tag: "Marvel™", routeName: "/", isNewCollection: false},
            {tag: "Spider Man™", routeName: "/", isNewCollection: false},
            {tag: "Black Panther™", routeName: "/", isNewCollection: false},
            {tag: "Iron Man™", routeName: "/", isNewCollection: false},
            {tag: "Captain Marvel™", routeName: "/", isNewCollection: false},
            {tag: "Punisher™", routeName: "/", isNewCollection: false},
            {tag: "Doctor Strange", routeName: "/", isNewCollection: false},
            {tag: "DC Comics™", routeName: "/", isNewCollection: false},
            {tag: "Batman™", routeName: "/", isNewCollection: false},
            {tag: "Superman™", routeName: "/", isNewCollection: false},
            {tag: "Wonder Woman™", routeName: "/", isNewCollection: false},
            {tag: "The Flash™", routeName: "/", isNewCollection: false},
            {tag: "Hulk™", routeName: "/", isNewCollection: false},
            {tag: "Thor™", routeName: "/", isNewCollection: false},
            {tag: "Joker™", routeName: "/", isNewCollection: false},
            {tag: "Deadpool™", routeName: "/", isNewCollection: false},
            {tag: "Black Adam", routeName: "/", isNewCollection: false},
        ]},
        {theme: "MOVIES & TV SHOWS", tagList: [
            {tag: "All Movies & TV Shows", routeName: "/", isNewCollection: false},
            {tag: "Naruto", routeName: "/", isNewCollection: false},
            {tag: "Wednesday", routeName: "/", isNewCollection: false},
            {tag: "Harry Potter™", routeName: "/", isNewCollection: false},
            {tag: "Money Heist", routeName: "/", isNewCollection: false},
            {tag: "Stranger Things", routeName: "/", isNewCollection: false},
            {tag: "F.R.I.E.N.D.S™", routeName: "/", isNewCollection: false},
            {tag: "Kung Fu Panda", routeName: "/", isNewCollection: false},
            {tag: "Disney™", routeName: "/", isNewCollection: false},
            {tag: "The Boys", routeName: "/", isNewCollection: true},
            {tag: "Breaking Bad", routeName: "/", isNewCollection: true},
            {tag: "Fantastic Beasts", routeName: "/", isNewCollection: false},
            {tag: "Star Wars", routeName: "/", isNewCollection: false},
            {tag: "The Office", routeName: "/", isNewCollection: false},
            {tag: "Brooklyn Nine-Nine", routeName: "/", isNewCollection: false},
            {tag: "Archie Comics", routeName: "/", isNewCollection: false},
            {tag: "TMNT", routeName: "/", isNewCollection: false},
        ]},
        {theme: "CARTOONS AND COMICS", tagList: [
            {tag: "All Cartoons", routeName: "/", isNewCollection: false},
            {tag: "Pink Panther", routeName: "/", isNewCollection: false},
            {tag: "Popeye", routeName: "/", isNewCollection: false},
            {tag: "Looney Tunes™", routeName: "/", isNewCollection: false},
            {tag: "Minions", routeName: "/", isNewCollection: false},
            {tag: "Peanuts™", routeName: "/", isNewCollection: false},
            {tag: "The Powerpuff Girls™", routeName: "/", isNewCollection: false},
            {tag: "Garfield", routeName: "/", isNewCollection: false},
            {tag: "Tom and Jerry", routeName: "/", isNewCollection: false},
            {tag: "Courage The Cowardly Dog™", routeName: "/", isNewCollection: false},
            {tag: "Scooby Doo™", routeName: "/", isNewCollection: false},
            {tag: "Rick and Morty™", routeName: "/", isNewCollection: false},
            {tag: "Dexter's Laboratory", routeName: "/", isNewCollection: false},
            {tag: "SpongeBob", routeName: "/", isNewCollection: false},
            {tag: "SquarePants™", routeName: "/", isNewCollection: false},
            {tag: "We Bare Bears", routeName: "/", isNewCollection: false},
            {tag: "Johnny Bravo™", routeName: "/", isNewCollection: false},
            {tag: "The Flintstones", routeName: "/", isNewCollection: false},
            {tag: "Sesame Street", routeName: "/", isNewCollection: false},
        ]},
        {theme: "SPORTS", tagList: [
            {tag: "Kolkata Knight Riders", routeName: "/", isNewCollection: false},
            {tag: "Lucknow Super Giants", routeName: "/", isNewCollection: false},
            {tag: "Liverpool FC", routeName: "/", isNewCollection: false},
            {tag: "Arsenal FC", routeName: "/", isNewCollection: false},
            {tag: "Revenant", routeName: "/", isNewCollection: false},
            {tag: "Team Vitality", routeName: "/", isNewCollection: false},
            {tag: "PSG", routeName: "/", isNewCollection: false},
            {tag: "Manchester City", routeName: "/", isNewCollection: false},
        ]},
        {theme: "POPULAR GENRES", tagList: [
            {tag: "Patterns", routeName: "/", isNewCollection: false},
            {tag: "Girl Power", routeName: "/", isNewCollection: false},
            {tag: "Funny", routeName: "/", isNewCollection: false},
            {tag: "Food", routeName: "/", isNewCollection: false},
            {tag: "Animals", routeName: "/", isNewCollection: false},
            {tag: "Quotes", routeName: "/", isNewCollection: false},
        ]},
        {theme: "COLLABORATIONS", tagList: [
            {tag: "Fukrey", routeName: "/", isNewCollection: false},
            {tag: "Singapore Inspired", routeName: "/", isNewCollection: false},
            {tag: "ISRO", routeName: "/", isNewCollection: true},
            {tag: "BGMI", routeName: "/", isNewCollection: false},
        ]},
        {theme: "CELEBRITY CURATIONS", tagList: [
            {tag: "Hardik Pandya", routeName: "/", isNewCollection: false},

        ]},
    ]);


    return (
        <TagContext.Provider value={{apparelForMen, apparelForWomen, apparelForKids, shopByThemes,
            optionsInAccountSection}}>
            {children}
        </TagContext.Provider>
    )
}

export {TagContext, TagProvider};