const Footer = () => {
    return (
        <footer className="bg-linear-to-b from-[#0b0b1a] to-[#050510] text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 text-white text-xl font-semibold">
                            <div className="bg-[#9D7EC5] cursor-pointer py-2 px-3 font-bold rounded"><i className="ri-video-on-line"></i></div>
                            Drameeo
                        </div>

                        <p className="mt-4 text-sm leading-relaxed">
                            Your ultimate destination for unlimited entertainment.
                            Stream thousands of movies and shows.
                        </p>

                        <div className="flex gap-4 mt-6 text-lg">
                            <i className="ri-facebook-fill cursor-pointer hover:text-white"></i>
                            <i className="ri-twitter-x-fill cursor-pointer hover:text-white"></i>
                            <i className="ri-instagram-line cursor-pointer hover:text-white"></i>
                            <i className="ri-youtube-fill cursor-pointer hover:text-white"></i>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Press</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Contact Us</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms of Service</li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Content</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white cursor-pointer">Movies</li>
                            <li className="hover:text-white cursor-pointer">TV Shows</li>
                            <li className="hover:text-white cursor-pointer">Originals</li>
                            <li className="hover:text-white cursor-pointer">Coming Soon</li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Account</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white cursor-pointer">My List</li>
                            <li className="hover:text-white cursor-pointer">Account Settings</li>
                            <li className="hover:text-white cursor-pointer">Redeem Gift Card</li>
                            <li className="hover:text-white cursor-pointer">Buy Gift Card</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
