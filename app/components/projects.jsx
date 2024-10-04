import Link from 'next/link';


export default function Projects(){
  return(
    <div className="projects">
    <div className="projectsTitle">
      <h2>Projelerim</h2>
      <Link href="/projeler">
        Tüm Projeler
      </Link>
    </div>
    <div className="projectsGrid">
      <div className="project">
        <img className="hoverImg" src="/img/advice.png" alt="" />
        <p>Advice Generator</p>
        <p>HTML CSS JS</p>
        <div className="links">
          <div className="projectLinks"><a target="_blank" href="https://gokhan-unlu.com.tr/projeler/advice/index.html">Projeyi Görüntüle</a></div> &ThickSpace; <div className="projectLinks"><a target="_blank"
            href="https://github.com/gokhanunlugh/gokhanunlugh.github.io/tree/main/projeler/advice">Kodu Görüntüle</a></div>
        </div>
      </div>
      <div className="project">
        <img src="/img/date.png" alt="" />
        <p>Yaş Hesaplama</p>
        <p>HTML CSS JS</p>
        <div className="links">
          <div className="projectLinks"><a target="_blank" href="https://gokhan-unlu.com.tr/projeler/date/index.html">Projeyi Görüntüle</a></div> &ThickSpace; <div className="projectLinks"><a target="_blank"
            href="https://github.com/gokhanunlugh/gokhanunlugh.github.io/tree/main/projeler/date">Kodu Görüntüle</a></div>
        </div>
      </div>
      <div className="project">
        <img src="/img/bill_1.jpg" alt="" />
        <p>Tip Hesaplama</p>
        <p>HTML CSS</p>
        <div className="links">
          <div className="projectLinks"><a target="_blank" href="https://gokhan-unlu.com.tr/projeler/bill/index.html">Projeyi Görüntüle</a></div> &ThickSpace; <div className="projectLinks"><a target="_blank"
            href="https://github.com/gokhanunlugh/gokhanunlugh.github.io/tree/main/projeler/bill">Kodu Görüntüle</a></div>
        </div>
      </div>
      <div className="project">
        <img src="/img/tkm1.jpg" alt="" />
        <p>Taş-Kağıt-Makas Oyunu</p>
        <p>HTML CSS JS</p>
        <div className="links">
          <div className="projectLinks"><a target="_blank" href="https://gokhan-unlu.com.tr/projeler/tkm-design/index.html">Projeyi Görüntüle</a></div> &ThickSpace; <div className="projectLinks"><a target="_blank"
            href="https://github.com/gokhanunlugh/gokhanunlugh.github.io/tree/main/projeler/tkm-design">Kodu Görüntüle</a></div>
        </div>
      </div>
      <div className="project">
        <img src="/img/calculator1.jpg" alt="" />
        <p>Hesap Makinesi Tasarım</p>
        <p>HTML CSS</p>
        <div className="links">
          <div className="projectLinks"><a target="_blank" href="https://gokhan-unlu.com.tr/projeler/calculator/index.html">Projeyi Görüntüle</a></div> &ThickSpace; <div className="projectLinks"><a target="_blank"
            href="https://github.com/gokhanunlugh/gokhanunlugh.github.io/tree/main/projeler/calculator">Kodu Görüntüle</a></div>
        </div>
      </div>
      <div className="project">
        <img src="/img/devjobs_1.jpg" alt="" />
        <p>İş İlanı Bloğu</p>
        <p>HTML CSS</p>
        <div className="links">
          <div className="projectLinks"><a target="_blank" href="https://gokhan-unlu.com.tr/projeler/devjobs/index.html">Projeyi Görüntüle</a></div> &ThickSpace; <div className="projectLinks"><a target="_blank"
            href="https://github.com/gokhanunlugh/gokhanunlugh.github.io/tree/main/projeler/devjobs">Kodu Görüntüle</a></div>
        </div>
      </div>
    </div>
  </div>
  )
}