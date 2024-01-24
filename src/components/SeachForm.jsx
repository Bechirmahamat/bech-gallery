import React from "react";
import { GlobalData } from "../context";

const SeachForm = () => {
    const { setSearchItem } = GlobalData();
    const clickEvent = (e) => {
        if (e.target.classList.contains("form-part-active")) {
            document
                .querySelector(".form-part")
                .classList.remove("form-part-active");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchItem(e.target[0].value);
    };

    return (
        <section className="form-part" onClick={(e) => clickEvent(e)}>
            <div className="container ">
                <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        className="form-input"
                        name="search-input"
                        placeholder="Example: cat"
                        autoFocus={"autofocus"}
                    />
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SeachForm;
