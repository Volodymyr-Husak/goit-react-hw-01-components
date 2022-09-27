// import css from './Statistics.module.css'
// import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
    
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">{stats.map(stat => (
                    <li class="item">
                        <span class="label">{stat.label}</span>
                        <span class="percentage">{stat.percentage}</span>
                    </li>
                ))}        
            </ul>
        </section>

    )
}

// Statistics.PropTypes = {
//     title: PropTypes.string, 
//     stats: PropTypes.arrayOf(optionalObjectWithStrictShape : PropTypes . exact ( { 
//     optionalProperty : PropTypes . string , 
//     requiredProperty : PropTypes . number . isRequired 
//   } ) )
// }