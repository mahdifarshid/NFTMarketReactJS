import './css/Nav.css';

export function Nav() {


    return (

        <nav className='nav-container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='nav-items'>
                        <ul>
                            <li><img className='logo' src='logo.png'></img></li>
                            <li>Drops</li>
                            <li>Market Place</li>
                            <li>Creator</li>
                            <li>Commiunity</li>
                        </ul>
                    </div>
                </div>
                <div className='col-6 '>
                    <div className='nav-search'>
                        <div className='row'>
                            <div className='search-form col-7'>
                                <input className='search' placeholder='Search' type={"text"}></input>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </div>
                            <div className='col-5'>
                                <button class="btn btn-custom-primary">Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </nav>

    )

}