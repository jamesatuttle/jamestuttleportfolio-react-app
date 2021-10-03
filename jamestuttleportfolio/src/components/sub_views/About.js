import React from 'react'
import newcastleImage from '../../assets/images/newcastle.jpeg';
import zakynthosImage from '../../assets/images/zakynthos.jpg';
import streetArtOneImage from '../../assets/images/street_art_1.jpg';
import streetArtTwoImage from '../../assets/images/street_art_2.jpg';
import streetArtThreeImage from '../../assets/images/street_art_3.jpg';
import streetArtFourImage from '../../assets/images/street_art_4.jpg';
import streetArtFiveImage from '../../assets/images/street_art_5.jpg';
import ChevronRight from '../svgs/ChevronRight';
import ChevronLeft from '../svgs/ChevronLeft';
import Camera from '../svgs/Camera';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: newcastleImage,
      altText: "Picture of Newcastle Sage with a person cleaning the windows on top",
      imageNumber: 0
    };

    this.images = [newcastleImage, zakynthosImage, streetArtOneImage, streetArtTwoImage, streetArtThreeImage, streetArtFourImage, streetArtFiveImage];
    this.altText = [
      "Picture of Newcastle Sage with a person cleaning the windows on top", 
      "Image taken of Zaknythos beach", 
      "Street art taken in Newcastle at the Quayside. It shows four hearts each with one eye, dancing towards a sign saying 'young hearts run free'", 
      "Street art taken in Newcastle by the Cluny pub, it shows cartoon figures on a ship and in the water",
      "Street art taken in Sorrento showing the wording 'Sorrento Art' along with three people: one man in a smart business casual suit, one female wearing a light vest top and one man in a sweater holding a phone",
      "Street art taken in Paris showing three monkeys portraying the 'see no evil, hear no evil, speak no evil' hand movements",
      "Street art taken in Paris showing a robot with stereotypical beret and moustache holding a baguette"
    ];

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious() {
    let i = this.state.imageNumber;

    if (i > 0) {
        i--;
    } else {
      i = this.images.length - 1;
    }

    this.setState({image: this.images[i], imageNumber: i, altText: this.altText[i]});
  }

  handleNext() {
    let i = this.state.imageNumber;

    if (i < this.images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    this.setState({image: this.images[i], imageNumber: i, altText: this.altText[i]});
  }

  render() {
    return (
      <section id='about'>
        <div className='text_container'>
          <div className='text'>
            <h2>About me</h2>
            <p>I came to Newcastle for University and then stayed in the city for work. I’ve had a couple of jobs within tech, starting as an <span className='bigger'>Assistant Software Developer</span> for HRMC, a <span className='bigger'>Website Developer</span> then a <span className='bigger'>Junior Frontend Developer</span> and I currently work as a <span className='bigger'>Platform Support Engineer</span> for Partnerize.</p>
            <p>My passion has always been in Website Design and Development, specifically focusing on the User. How do they use the page? Are their needs being met? Can users who have a disability use the page without issue?</p>
            <p>Outside of work, I love keeping fit with swimming, the gym and rock climbing, experimenting in the kitchen with cooking vegetarian meals, Console and PC gaming, playing Dungeons and Dragons, and travelling to experience the world and finding awesome street art.</p>
            <div class='slideshow_buttons'>
              <div class='title'><Camera /><p>Take a look at some pictures I’ve taken on my travels</p></div>
              <div class='buttons'>
                <div class='button_container'>
                  <button onClick={this.handlePrevious} id='previousPicture'><ChevronLeft /> Previous</button>
                </div>
                <div class='button_container'>
                  <button onClick={this.handleNext} id='nextPicture'>Next <ChevronRight /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img id='about_me_image' src={this.state.image} alt={this.state.altText} />
      </section>
    );
  }
};

export default About
