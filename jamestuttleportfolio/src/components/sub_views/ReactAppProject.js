import React from 'react';
import website_version_one from '../../assets/images/website_version_one.png';
import website_version_two from '../../assets/images/website_version_two.png';
import website_version_three from '../../assets/images/website_version_three.png';
import { Link } from 'react-router-dom';

class ReactAppProject extends React.Component {
    render() {
        return (
            <section>
                <div className='breadcrumb-navigation'><Link to='/projects'>Projects</Link><span>This React App</span></div>
                <h1>THIS REACT APP</h1>
                <p>This site was originally built using pure CSS and HTML with a little bit of JavaScript for the hamburger navigation which was previously used.</p>
                <p>Below are a few examples and screenshots of the previous site designs, which I designed on <a className='text' href='https://www.adobe.com/uk/products/xd.html'>Adobe XD</a>, along with a description of why I changed from that design.</p>
                <div className='drawing_and_info_container'>
                    <h2>Version One</h2>
                    <div className='image-with-text'>
                        <div className='container'>
                            <img id='website_version_one' alt="version one of the website" src={website_version_one}/>
                        </div>
                        <div className='text'>
                            <p>This was my first website design and was implemented in my first release of the site.</p>
                            <p>It utilised a <a className='text' href='https://unsplash.com/photos/1_CMoFsPfso'>large yellow background image</a> with a yellow pencil from unsplash, however I quickly realised having a large background image caused the page to render slowly and overall wasn't a great experience for what I wanted to achieve.</p>
                            <p>I did like the linear layout and the coloured background so this helped me create the base of the design for version two.</p>
                        </div>
                    </div>
                </div>
                <div className='drawing_and_info_container'>
                    <h2>Version Two</h2>
                    <div className='image-with-text'>
                        <div className='container'>
                            <img id='website_version_one' alt="version one of the website" src={website_version_two} loading='lazy'/>
                        </div>
                        <div className='text'>
                            <p>Now that I had a handle on what I liked from the first version, I replaced the background image with a block colour to minimise rendering, and made the minimum height of each section of the page the window height to create natural framing when the user scrolled down the page.</p>
                            <p>Making use of some CSS skill to create a slowly pulsing and moving arrow and text animation, it created more of a flow for the user and navigated them down the page.</p>
                            <p>I also replaced the navigation with hamburger navigation to make it more mobile friendly.</p>
                            <p>From here I felt like I could do more with less, less block colour, less scrolling up and down the page. I decided to teach myself React (or should I say <em>reacquaint</em> myself as I'd used React in a previous role) to build a web app.</p>
                        </div>
                    </div>
                </div>
                <div className='drawing_and_info_container'>
                    <h2>Version Three</h2>
                    <div className='image-with-text'>
                        <div className='container'>
                            <img id='website_version_one' alt="version one of the website" src={website_version_three} loading='lazy'/>
                        </div>
                        <div className='text'>
                            <p>My experimenting and re-learning React (after having not used it for 2 years) brought me to the development of the site you're using now.</p>
                            <p>It makes use of atomic design patterns and components, breaking page structures down so they can be re-used elsewhere without having to duplicate code.</p>
                            <p>I also removed the block colour for the background and made use of whitespace with an off-black colour for text, making it easier on the eyes and gives it more of a professional feel.</p>
                            <p>The code for this web app can be found <a className='text' href='https://github.com/jamesatuttle/jamestuttleportfolio-react-app'>here</a>.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
     }
}

export default ReactAppProject;