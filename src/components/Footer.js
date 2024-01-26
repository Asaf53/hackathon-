function Footer() {
    return (
        <>
            <footer className="bg-white text-dark pt-3 pb-2 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img style={{ height: '100px', width: '100px' }} src="https://i.pinimg.com/originals/58/0a/73/580a7324842216f1d2654c4acd3ae541.png"></img>
                            <p>© Movies. All rights reserved.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Home</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-dark">Audio Description</a></li>
                                <li><a href="#" className="text-dark">Investor Relations</a></li>
                                <li><a href="#" className="text-dark">Legal Notices</a></li>
                                <li><a href="#" className="text-dark">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Features</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-dark">Help Center</a></li>
                                <li><a href="#" className="text-dark">Jobs</a></li>
                                <li><a href="#" className="text-dark">Cookie Preferences</a></li>
                                <li><a href="#" className="text-dark">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>About</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-dark">Media Center</a></li>
                                <li><a href="#" className="text-dark">Privacy</a></li>
                                <li><a href="#" className="text-dark">Contact Us</a></li>
                                <li><a href="#" className="text-dark">Favourites</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;