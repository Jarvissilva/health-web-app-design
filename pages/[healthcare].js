import styles from '../styles/pages/Healthcare.module.css'
import { useState, useEffect } from 'react'
import Rating from '@material-ui/lab/Rating';
import { TiLocation } from 'react-icons/ti'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import { BiTimer, BiArrowBack, BiHeart } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'

import RRating from '../components/Rating'

const Healthcare = () => {
    const [tab, setTab] = useState('OVERVIEW')
    const [shareOn, setShareOn] = useState(false)
    useEffect(async () => {
        try {
            await navigator.share({ title: 'share trial', url: 'https://coderzway.com' })
        } catch (error) {
            alert(error)
        }
    }, [shareOn])

    return (
        <div>
            <div className={`row ${styles.header}`}>
                <div className={`row ${styles.headerIcon}`}>
                    <BiArrowBack size={28} color='var(--primary-color)' />
                </div>
                <div className={`row ${styles.headerIcon}`}>
                    <BiHeart size={28} color='var(--primary-color)' />
                </div>
                <div className={`row ${styles.headerIcon}`}>
                    <RiShareForwardLine size={28} color='var(--primary-color)' onClick={() => setShareOn(true)} />
                </div>
            </div>
            <div className={`row ${styles.featuredImg}`}>
                <img src="/zumba.jpg" />
            </div>
            <div className={`column ${styles.meta}`}>
                <h2>Super velsao health center for children health</h2>
                <div className={`row ${styles.city}`}>
                    <TiLocation color='var(--primary-color)' size={20} className={styles.location} />
                    <p>Margao, Goa</p>
                    <BiTimer color='var(--primary-color)' size={20} className={styles.distance} />
                    <p>2 Km away</p>
                    <div className={`row ${styles.open}`}>
                        <AiFillCheckCircle color='#fff' size={15} />
                        {/* <AiFillCloseCircle color='#fff' size={15} /> */}
                        <p>Open</p>
                    </div>
                </div>
                <div className={`row ${styles.review}`}>
                    <RRating />
                    <p>| 50 Reviews</p>
                </div>
            </div>
            <div className={`row ${styles.tabBar}`}>
                <div className={`row ${styles.tab} ${tab == 'OVERVIEW' ? styles.activeTab : ''}`} onClick={() => setTab('OVERVIEW')}>
                    <p>OVERVIEW</p>
                </div>
                <div className={`row ${styles.tab} ${tab == 'ADDRESS' ? styles.activeTab : ''}`} onClick={() => setTab('ADDRESS')}>
                    <p>ADDRESS</p>
                </div>
                <div className={`row ${styles.tab} ${tab == 'SERVICES' ? styles.activeTab : ''}`} onClick={() => setTab('SERVICES')}>
                    <p>SERVICES</p>
                </div>
                <div className={`row ${styles.tab} ${tab == 'REVIEWS' ? styles.activeTab : ''}`} onClick={() => setTab('REVIEWS')}>
                    <p>REVIEWS</p>
                </div>
            </div>
            <div className={`column ${tab === 'OVERVIEW' ? styles.sec : styles.hide} `}>

            </div>
            <div className={`column ${tab === 'ADDRESS' ? styles.sec : styles.hide} `}>

            </div>
            <div className={`column ${tab === 'SERVICES' ? styles.sec : styles.hide} `}>

            </div>
            <div className={`column ${tab === 'REVIEWS' ? styles.reviewSec : styles.hide} `}>
                <div className={`row ${styles.rHeading}`}>
                    <h2>Rate and Review</h2>
                </div>
                <Rating className={`row ${styles.rating}`} color='var(--rating-color)' name="half-rating" defaultValue={2.5} precision={0.5} />
                <textarea cols="30" rows="10" placeholder='Write your review'></textarea>
                <div className={`row ${styles.createReviewBtn}`}>
                    <button>Create Review</button>
                </div>
            </div>
            {/* <div className={`row ${styles.bottomBtn}`}>
                <a className='row' style={{ color: '#fff' }} href="tel: +91 9172214110">Call Now</a>
            </div> */}
        </div>
    )
}

export default Healthcare
