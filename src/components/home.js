import Navbar from './navbar';
import Carousel from './carousel';
import Searchbar from './search';
import Text from './text';
import Footer from './footer';
import '../styles/home.css';
import { useState } from 'react';
import Products from './Products';

const Home = () =>{
    const [cond,setCond] = useState(true);
    const [query,setQuery] =useState();
    const handleChange = (val) =>{
        if (val.length>0){
            setCond(false)
            setQuery(val)
        }else{
            setCond(true)
        }
    }
    console.log(query)
    return(
        <div className="App">
            <Navbar />
            {cond?<Carousel/>:<></>}
            <div className="foot flex flex-col items-center">
                {cond?<Text/>:<></>}
                <Searchbar handleChange={handleChange}/>
                {!cond?<Products query={query} cond={cond}/>:<></>}
            </div>
            {cond?<Footer/>:<></>}
            
        </div>
    );
}

export default Home