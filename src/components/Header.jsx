
import './css/Header.css';

export function Header() {

    return (
        <header style={{ padding: "120px 80px", margin: "0 auto" }}>
            <div className='row'>
                <b className='header-text col-5' style={{ textAlign: "right" }}>
                    Discover
                </b>
                <span className=' col-2'>

                    <img className='img-discover' src='discover.png'>
                    </img>
                </span>
                <b className='header-text col-5' style={{ textAlign: "left" }}>
                    Collect
                </b>

                <b className='header-text col-9' style={{ "margin-left": "20px" }}>
                    And Sell Rare
                </b>
                <span className=' col-1'>
                    <img className='img-rare' src='Rere.png' />
                </span>


                <span className='col-1' />

                <span className='col-2'>
                    <img className='img-circle-desc' src='circleDesc.png' />
                </span>
                <span className='col-4'>
                    <p className='text-nft-description'>The largest NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technology</p>
                </span>
                <b className='header-text col-3'>
                    NFTs
                </b>

            </div>
        </header >
    )
}