
import './App.css';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Brands } from './components/Brands';
import { Convas } from './components/Convas';
import { NFTCats } from './components/NFTCats';
import React, { useEffect, useState } from 'react';
import { NFTItems } from './components/NFTItems';
import { Subscribe } from './components/Subscribe';
import { CreateSell } from './components/CreateSell';
import { TopCreator } from './components/TopCreator';


function App() {



  const [categories, setCategory] = useState([]);
  const [nftItems, setNeftItems] = useState([]);

  const [getCreatorItems, setcreatorItem] = useState([]);
  const [getTopCreatorItems, setTopcreatorItem] = useState([]);

  function getWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(width);
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());



  useEffect(() => {


    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }


    setCategory([
      "Music",
      "Sport",
      "Art",
      "Photography",
      "Trending Card",
      "Virtual World",
      "Videos",
      "More"
    ]);

    setNeftItems([
      {
        "image": "nfts/nft1.jpg",
        "title": "Stairs to heaven",
        "username": "@dayatsantoso",
        "price": "4.4",
        "unit": "ETH"
      }, {
        "image": "nfts/nft2.jpg",
        "title": "Balance",
        "username": "@torikhandoko",
        "price": "5",
        "unit": "ETH"
      }, {
        "image": "nfts/nft3.jpg",
        "title": "Inception",
        "username": "@earpon69",
        "price": "0.8",
        "unit": "ETH"
      }, {
        "image": "nfts/nft4.jpg",
        "title": "Night in the city",
        "username": "@muslihat44",
        "price": "1.7",
        "unit": "ETH"
      }, {
        "image": "nfts/nft5.jpg",
        "title": "Mos Espa",
        "username": "@jamori_",
        "price": "1.4",
        "unit": "ETH"
      }, {
        "image": "nfts/nft6.jpg",
        "title": "Infinity",
        "username": "@dayatsantoso",
        "price": "2",
        "unit": "ETH"
      }, {
        "image": "nfts/nft7.jpg",
        "title": "Pixelverse",
        "username": "@muslihat44",
        "price": "2.3",
        "unit": "ETH"
      }, {
        "image": "nfts/nft8.jpg",
        "title": "Space Runner",
        "username": "@torikhandoko",
        "price": "1.1",
        "unit": "ETH"
      },
    ]);



    setcreatorItem([
      {
        "image": "galam.png",
        "title": "Create Artwork",
        "description": "Create your collection. Add social links, profile & banner images, and set a secondary sales fee.",
      },
      {
        "image": "photoPreviewItem.png",
        "title": "Upload",
        "description": "Upload your work, customize your NFTs with properties, stats, and unlockable content.",
      },
      {
        "image": "chakosh.png",
        "title": "Listing",
        "description": "Set up and choose between Auctions, fixed-price listings, and declining-price listings.",
      }
    ]);





    setTopcreatorItem([
      {
        "title": "TorikHandoko",
        "price": "14,821.89",
        "is_online": true,
        "image": "galam.png",
      },
      {
        "title": "DayatS4ns_",
        "price": "24,016.32",
        "is_online": true,
        "image": "photoPreviewItem.png",
      },
      {
        "title": "Kuproy_bmbl",
        "price": "9,124.59",
        "is_online": false,
        "image": "chakosh.png",
      },
      {
        "title": "3arphonexx",
        "price": "6,443.71",
        "is_online": false,
        "image": "chakosh.png",
      },
      {
        "title": "Glukon_",
        "price": "5,783.11",
        "is_online": false,
        "image": "chakosh.png",
      },
      {
        "title": "Provocate69",
        "price": "8,333.20",
        "is_online": true,
        "image": "chakosh.png",
      },
      {
        "title": "Provocate69",
        "price": "8,333.20",
        "is_online": false,
        "image": "chakosh.png",
      }
    ]);


  }, []);



  return (
    <div className="App">

      <Nav></Nav>
      <Header></Header>
      <Convas></Convas>
      <Brands></Brands>
      <NFTCats categories={categories} />
      <NFTItems NFTs={nftItems} />

      <div className='btn-more-container'>
        <div className='btn btn-more'>View More</div>
      </div>

      <Subscribe />
      <CreateSell CreatorItems={getCreatorItems} />





      <div className='btn-more-container'>
        <div className='btn btn-more' style={{ marginTop: '50px', marginRight: "25px", backgroundColor: "#1E50FF", border: "0px" }}>Create Now</div>
        <div className='btn btn-more' style={{ marginTop: '50px' }}>Watch Now</div>
      </div>


      <TopCreator TopCreatorItems={getTopCreatorItems} />

    </div>
  );
}

export default App;
