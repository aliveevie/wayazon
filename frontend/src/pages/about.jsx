import data from '../data/teams'
import '../styles/about.css'
import dahiru from '../images/teams/dahiru.png'

export function About(){

    return (
        <div className="about-us" >
            <h2>Wayazone</h2>
            <p>Wayazone: Jigawa State's E-Commerce

            With its headquarters located in Jigawa State, Wayazone is a trailblazing e-commerce firm that specializes in the easy purchase and sale of phones and accessories. Our endeavor, which is centered on giving tech aficionados a convenient platform, seeks to revolutionize the local market by presenting a wide selection of high-quality products.

            Dependability and efficiency are given top priority by Wayazone, which is dedicated to meeting customer needs. For both buyers and sellers, our platform guarantees a quick, easy, and transparent transaction procedure while facilitating safe transactions. Our goal is to use technology to develop a dynamic online marketplace that meets changing consumer demands.

            By embracing innovation, Wayazone hopes to establish itself as a reliable resource for tech aficionados and build a community that values state-of-the-art gadgets and accessories. Wayazone, a local company with a worldwide outlook, is poised to improve e-commerce landscape by lowering the cost of high-quality electronic products for everyone.</p>
        
            <div className="our-team">
       
        <div className="team-members">
        <h3>Meet Our Team</h3>
          {data.map((member) => (
            <div key={member.name} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    )
}