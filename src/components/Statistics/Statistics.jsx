import css from './Statistics.module.css'
// import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
    
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.stat_list}>{stats.map(stat => (
                <li className={css.item} key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className="label">{stat.label}</span><br/>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}        
            </ul>
        </section>

    )
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Statistics.PropTypes = {
//     // title: PropTypes.string.isRequired,
//     stats: PropTypes.arrayOf(PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             label: PropTypes.string.isRequired,
//             percentage: PropTypes.number.isRequired}
//         ),
//     ),
// };


