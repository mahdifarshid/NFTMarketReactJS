
import './css/Subscribe.css';

export function Subscribe() {


    return (
        <div className="subscribe-container">
            <h4 className='subscribe-title'>Never Miss a Drop!</h4>
            <p className='subscribe-description'>subscribe to our super-exclusive drop list and be the first to know about upcoming drops.</p>

            <div className='nav-search subscribe-field-container'>
                <div className='row'>
                    <div className='search-form col-7'>
                        <input className='search subscribe-field' placeholder='Enter your email address' type={"text"}></input>
                    </div>
                    <div className='col-5'>
                        <button class="btn btn-custom-primary btn-subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );

}