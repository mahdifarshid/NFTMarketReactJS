import './css/NFTItems.css';

export function NFTItems(props) {




    return (
        <div className='nft-container'>

            <div className='row'>
                {props.NFTs.length > 0 && props.NFTs.map(el => {
                    return (
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <div className='nft-item'>
                                <div className='img-nft' style={{ backgroundImage: 'url(' + el.image + ')' }} alt="" />
                                <div className='row'>
                                    <div className='col-10'>
                                        <p className='text-white text-left nft-title'>{el.title}</p>
                                        <p className='nft-username text-left'>{el.username}</p>
                                        <b className='nft-price text-left'>{el.price} {el.unit}</b>
                                    </div>
                                    <div className='col-2'>
                                        <img className='nft-3dots' src="3dots.png" alt="" />
                                        <img className='nft-etherium' src="etherium.png" alt="" />
                                    </div>
                                </div>

                                <div className='nft-btn-collect-container'>
                                    <button className='btn nft-btn-collect'>Collect Now</button>
                                </div>


                            </div>

                        </div>
                    )
                })}

            </div>
        </div>
    );

}
