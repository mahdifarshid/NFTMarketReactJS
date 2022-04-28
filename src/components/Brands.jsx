import { useEffect, useState } from "react";
import './css/Brands.css';

export function Brands() {


    const [brands, setBrands] = useState([]);


    useEffect(() => {
        setBrands([
            "brands/metamask.png",
            "brands/bitgo.png",
            "brands/coinbase.png",
            "brands/exius.png",
            "brands/trustwallet.png"
        ]);

    }, [])


    return (
        <section>
            <div className='row brands-container'>
                <span className="col-1"></span>
                {brands.length > 0 && brands.map(element => {
                    return (
                        <div className="col-2">
                            <img className="brands-img" src={element} alt="" />
                        </div>
                    )
                })}
                <span className="col-1"></span>
            </div>

        </section>
    );
}