import React from 'react'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts.jsx'
import CategorySlider from './CategorySlider/CategorySlider.jsx'
import MainSlider from './MainSlider/MainSlider.jsx';
import { Helmet } from 'react-helmet';

export default function Home() {

    // best way to make search

    // const [searchText, setSearchText] = useState('')

    // useEffect(() => {
    //     const timeOut = setTimeout(() => {
    //         fetch(`http://localhost=value=${searchText}`)
    //             .then((response) => {
    //                 response.json()
    //             })
    //             .then((response) => {
    //                 console.log(response);
    //             })
    //     }, 1500);

    //     return () => {
    //         clearTimeout(timeOut)
    //     }
    // }, [searchText])


    return <>
        <Helmet>
            <title>Zeraki</title>
        </Helmet>
        <MainSlider />
        <CategorySlider />
        <FeaturedProducts />
    </>
}
