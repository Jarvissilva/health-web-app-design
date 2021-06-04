import styles from '../styles/pages/Search.module.css'
import { useState } from 'react'

import { RiSearchLine, RiArrowUpDownLine } from 'react-icons/ri'

import BottomNav from '../components/BottomNav'
import Card from '../components/Card'

const Search = () => {
    const [category, setCategory] = useState('All')

    return (
        <div className='screen'>
            <div className={`row ${styles.searchBox}`}>
                <form className={`row`}>
                    <div className={`row ${styles.sbIcon}`}>
                        <RiSearchLine size='25' />
                    </div>
                    <input type='text' placeholder='Search for anything' />
                    <div className={`row ${styles.filterIcon}`}>
                        <RiArrowUpDownLine size={25} color='var(--primary-color)' />
                    </div>
                </form>
            </div>
            <div className={`column ${styles.searchResults}`}>
                {/* <SearchResult /> */}
            </div>
            <div className={`row ${styles.categorySec}`}>
                <CategoryBox name='All' category={category} setCategory={setCategory} />
                <CategoryBox name='Doctors' category={category} setCategory={setCategory} />
                <CategoryBox name='Hospitals' category={category} setCategory={setCategory} />
                <CategoryBox name='Dentists' category={category} setCategory={setCategory} />
                <CategoryBox name='Cardiologist' category={category} setCategory={setCategory} />
                <div className={styles.spacing}></div>
            </div>
            <div className={`column ${styles.cardSec}`}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <BottomNav name='search' />
        </div>
    )
}

const CategoryBox = props => {
    return (
        <div
            onClick={() => props.setCategory(props.name)}
            className={`row ${styles.categoryBox} ${props.category == props.name ? styles.activeCategory : ''}`}
        >
            <p>{props.name}</p>
        </div>
    )
}

export default Search
