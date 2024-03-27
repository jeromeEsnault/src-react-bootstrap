import React, { useState, useEffect } from "react";
function Joke() {

    const [data, setdata] = useState("UNDEFINY");

    useEffect(() => {
        fetch("https://dummyjson.com/products", {
            method: "GET",

        })
            .then((response) => response.json())
            .then((data) => {

                setdata(data.products)
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div>
            <h2>products of the day:</h2>

            {data && <p>{data}</p>}
        </div>
    );
}
export default Joke;