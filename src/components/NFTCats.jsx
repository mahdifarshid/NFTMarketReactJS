
import './css/NFTCats.css';

export function NFTCats(props) {


    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     console.log(props);
    //     setCategories(props.categories);
    // }, [categories])


    return (
        <div className="nftitem-container">
            <h6 style={{ color: "#8E00CC", textAlign: "center" }}>NFT Marketplace</h6>


            <div style={{ width: "100%" }}>
                <div style={{ textAlign: "center" }}>
                    <span className='hotDrops' style={{ color: "white" }}>Hot Drops</span>
                    <img className='fire' src={"fire.png"} alt="" />
                </div>
            </div>



            <div className='row'>
                <div style={{ "margin": "0 auto" }}>

                    {props.categories.length > 0 && props.categories.map(el => {
                        return (
                            <button className='btn btn-categories'>{el}</button>
                        )
                    })}

                </div>
            </div>

        </div>
    );

}