import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="132" cy="142" r="115" />
            <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
            <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />

        </ContentLoader>
    )
}

export default PizzaLoader