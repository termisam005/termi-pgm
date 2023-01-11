import { useState } from 'react';
import ImgComponent from './ImgComponent';
import ReactTooltip from 'react-tooltip';

const MarkFavorite = () => {

    const [favState, setFavState] = useState(false);
    const toggleFav = () => {
        setFavState(!favState);
    }

    return (
        <p onClick={toggleFav} data-tip data-for="Bookmark" className={favState ? "mark_favorite on" : "mark_favorite"}>
            <ImgComponent class="bticon" src="../resources/images/mark_fav14.png" />
            <ImgComponent class="bticon_on" src="../resources/images/mark_fav14_on.png" />
            <ReactTooltip id="Bookmark" place="top" effect="solid">
                Bookmark
            </ReactTooltip>
        </p>
    )
}

export default MarkFavorite;