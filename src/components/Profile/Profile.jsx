import css from './Profile.module.css'
import PropTypes from "prop-types";

export const Profile = ({username, tag, location, avatar, stats}) => {
    // console.log(events);

    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.stats__item}>
                    <span className="label">Followers</span><br/>
                   <strong> <span className="quantity">{stats.followers}</span></strong>
                </li>
                <li className={css.stats__item}>
                    <span className="label">Views</span><br/>
                    <strong><span className="quantity">{stats.views}</span></strong>
                </li>
                <li className={css.stats__item}>
                    <span className="label">Likes</span><br/>
                    <strong><span className="quantity">{stats.likes}</span></strong>
                </li>
            </ul>
        </div>
    )
}


Profile.propTypes = {
    props: PropTypes.exact ( { 
            username: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired, 
            location: PropTypes.string.isRequired, avatar: PropTypes.string.isRequired,
            stats: PropTypes.objectOf({
                followers: PropTypes.number,
                views: PropTypes.number,
                likes: PropTypes.number,
        }),
    } )
    
};