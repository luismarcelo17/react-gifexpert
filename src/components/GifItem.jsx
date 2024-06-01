import propTypes from "prop-types";

export const GifItem = ({ id, title, url }) => {
    // console.log(title, url, id);

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

/* Tarea

1. añadir PropTypes
    a. title obligatorio
    b. url obligatorio
2. Evaluar el spanshot

*/

GifItem.propTypes = {
    id: propTypes.string,
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
};
