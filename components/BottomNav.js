import Styles from '../styles/components/BottomNav.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RiHomeSmile2Line, RiHomeSmile2Fill, RiSearchEyeFill, RiHeart2Fill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line, RiUser5Fill, RiHeart2Line } from 'react-icons/ri'

const BottomNav = props => {
    const router = useRouter()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                router.push('/')
                break;
            case 'search':
                router.push('/search')
                break;
            case 'saved':
                router.push('/saved')
                break;
            case 'account':
                router.push('/account')
                break;
            default:
                router.push('/')
                break;
        }
    }, [activeTabs])

    return (
        <div className={`row ${Styles.bottomNav}`}>
            <div className={`row ${Styles.bnTab}`}>
                {activeTabs === 'home' ?
                    <RiHomeSmile2Fill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <RiHomeSmile2Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className={`row ${Styles.bnTab}`}>
                {activeTabs === 'search' ?
                    <RiSearchEyeFill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => setActiveTabs('search')}
                    /> :
                    <BiSearchAlt
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('search')}
                    />}
            </div>
            <div className={`row ${Styles.bnTab}`}>
                {activeTabs === 'saved' ?
                    <RiHeart2Fill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => setActiveTabs('saved')}
                    /> :
                    <RiHeart2Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('saved')}
                    />}
            </div>
            <div className={`row ${Styles.bnTab}`}>
                {activeTabs === 'account' ?
                    <RiUser5Fill
                        size='35'
                        color='var(--primary-color)'
                        onClick={() => setActiveTabs('account')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('account')}
                    />}
            </div>
        </div>
    )
}

export default BottomNav