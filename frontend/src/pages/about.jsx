// import data from '../data/teams';
import '../styles/about.css';
import { MobileHeader } from '../components/mobileHeader';
import { Header } from '../components/header';
import { useState, useEffect } from 'react';
import Footer from '../components/footer';

export function About({mobile, handleMobile}){

    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/admin/teams');
        const teams = await response.json();
        setData(teams);
      }
  
      fetchData();
    }, []);

    return (
      <> 
        <Header mobile={mobile} handleMobile={handleMobile} />
        {mobile && <MobileHeader  mobile={mobile} handleMobile={handleMobile} />}
      
       <div className="about-us"  >
            <h2 data-aos="zoom-in" >Wayazon Gadgets</h2>
            <p data-aos="zoom-out" >With its headquarters located in Jigawa State, Wayazon Gadgets is a trailblazing e-commerce firm that specializes in the easy purchase and sale of phones and accessories. Our endeavor, which is centered on giving tech aficionados a convenient platform, seeks to revolutionize the local market by presenting a wide selection of high-quality products.

    Dependability and efficiency are given top priority by Wayazon Gadgets, which is dedicated to meeting customer needs. For both buyers and sellers, our platform guarantees a quick, easy, and transparent transaction procedure while facilitating safe transactions. Our goal is to use technology to develop a dynamic online marketplace that meets changing consumer demands.

    By embracing innovation, Wayazon Gadgets hopes to establish itself as a reliable resource for tech aficionados and build a community that values state-of-the-art gadgets and accessories. Wayazon Gadgets, a standard company with a worldwide outlook, is poised to improve e-commerce landscape by lowering the cost of high-quality electronic products for everyone.</p>
        
            <div className="our-team">
       
        <div className="team-members">
        <h4 data-aos="zoom-out" >Meet Our Team</h4>
          {data.map((member) => (
            <div key={member.name} className="team-member">
              <div className="member-image">
                <img src={member.image_link} alt={member.name}  data-aos="zoom-out" />
              </div>
              <div className="member-info">
                <h3 data-aos="zoom-in" >{member.name}</h3>
                <h5  data-aos="fade-right" >{member.title}</h5>
                <p  data-aos="fade-left" >{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
        <Footer />
      </>

       
    )
}