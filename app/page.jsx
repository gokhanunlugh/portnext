import { Space_Grotesk } from 'next/font/google';
import Header from '@/app/components/header.jsx';
import Skills from '@/app/components/skills.jsx';
import Projects from '@/app/components/projects.jsx';
import Footer from '@/app/components/footer.jsx';


export default function Home() {

  return (
    <>

      <div className="container">
        
        <Header />


        <img className="back" src="/img/backoval.png" alt="" />
        <img className="leftOvalDesk" src="/img/ovalLeftDesk.png" alt="" />


        <img className="backOval" src="/img/Oval.png" alt="" />

        <div className="context">
          <h2>Merhaba! <br className="mobile" /> Ben <span>Gökhan Ünlü</span>.</h2>

          <p>Front-End Developer olma yolunda azimli ve kararlı biriyim.</p>
          <div className="contact">
            <a href="mailto:gokhanunlu94@gmail.com">BANA ULAŞIN</a>
          </div>
        </div>

        <Skills />
      
        <img className="backOvalRight" src="/img/backovalRight.png" alt="" />
        <img src="/img/rightOvalDesk.png" alt="" className="rightovalDesk" />

        <Projects />

        <Footer />


      </div>

    </>
  );
}
