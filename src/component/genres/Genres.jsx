import './Genres.css'

const Genres = ({ isShortSidebar }) => {
    return (
        <div className={`${isShortSidebar ? 'genresShortSidenavChange' : 'genres-parent-container'}`}>
            <div>skibidi</div>
        </div>
    )
}

export default Genres