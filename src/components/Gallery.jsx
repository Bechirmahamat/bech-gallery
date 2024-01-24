import React from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GlobalData } from "../context";
const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
    const { searchItem } = GlobalData();
    const result = useQuery({
        queryKey: ["image", searchItem],
        queryFn: async () => {
            const result = await axios(`${url}&query=${searchItem}`);
            return result.data;
        },
    });

    if (result.isLoading) {
        return <div className="loading"></div>;
    }
    if (result.data.length < 1) {
        return (
            <div className="loading">
                <strong>{searchItem}</strong>
                {}Not found
            </div>
        );
    }
    if (result.isError) {
        return (
            <div className="center">
                There is Error Or something Went Wrong please try again later
            </div>
        );
    }
    return (
        <div className="img-container">
            {result.data.results.map((item) => {
                const img = item?.urls?.regular;
                return (
                    <article key={item.id}>
                        <img src={img} alt="" />
                    </article>
                );
            })}
        </div>
    );
};

export default Gallery;
