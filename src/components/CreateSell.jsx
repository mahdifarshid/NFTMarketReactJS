import { useEffect, useState } from "react";
import './css/CreateSell.css';

export function CreateSell(props) {

    return (
        <div className="create-sell-container">
            <h6 style={{ color: "#8E00CC", textAlign: "center" }}>How to be a creator</h6>


            <div style={{ width: "100%" }}>
                <div style={{ textAlign: "center" }}>
                    <span className='hotDrops' style={{ color: "white" }}>Create and sell your NFTs</span>
                    <img className='creatorTitleImg' src={"creatorTitleImg.png"} alt="" />
                </div>

                <div className="main-creator">

                    <div className="row">

                        {props.CreatorItems.length > 0 && props.CreatorItems.map(el => {
                            return (
                                <div className=" col-4 ">
                                    <div className="creator-item">
                                        <div className="creator-item-image-container">
                                            <img className="creator-item-image" src={el.image} alt="" />
                                        </div>
                                        <p className="creator-item-title">{el.title}</p>
                                        <p className="creator-item-desc">{el.description}</p>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    );

}