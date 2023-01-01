import style from "../Styles/portfolio.module.css"
import img from "../Images/kamal.jpg"
import scribble from "../Images/scribble.png"
import eLink from "../Images/link-external-regular-60.png"
import github from "../Images/github-logo-60.png"
import dmws from "../Images/dmws.PNG"
import html from "../Images/html.png"
import css from "../Images/css.png"
import js from "../Images/js.png"
import react from "../Images/react.png"
import java from "../Images/java.png"
import sql from "../Images/sql.png"
import kamalPortfolio from "../Images/kamalPortfolio.PNG"
const Portfolio=()=>{
    return(
        <div>
             {/* === NAV BAR === */}
            <section id={style.nav}>
                <div id={style.logo}>
                    <h3>Kamal</h3>
                </div>
                <div id={style.menus}>
                        {/* === HAMBURGER(DISABLE FOR LARGE VIEW) === */}
                        <input type="checkbox"/>
                        <div id={style.line1}></div>
                        <div id={style.line2}></div>
                        <div id={style.line3}></div>                       
                        <ul id={style.subMenu}>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="https://drive.google.com/file/d/1H7ljsTHyUOtja4UU5sAYjrHKOOiXg-qe/view?usp=sharing" download id={style.resumeButton} target="_blank">Resume</a></li>
                        </ul>    
                </div>
            </section>

            {/* === FIRST BLOCK === */}
            <div id={style.firstBlock}>
                <p>Hi, my name is </p>
                <h2>Kamal K Chakma</h2>
                <a href="mailto:mr.kamalchakma@gmail.com"><button>Hire Me </button></a>
            </div>

            {/* === IMAGE === */}
            <img src={img} alt="kamal" id={style.myPic}/>
            <div id={style.backgroundBorder}></div>
           
            {/* === ABOUT === */}
            <div id={style.about}>
                <h2>About Me</h2><br></br>
                <p>Hello, My name is Kamal Kanti Chakma and I  am very interested in web development frontend as well as backend.Currently i'm learning backend technologies and actively looking for an opportunity to help an organization to reach its goal by using my skills.</p>
                <h5>Here are some technologies that i know : </h5><br></br><br></br>
                <div id={style.skillSet}>
                 <img src={react} alt="react"/>&nbsp;&nbsp;&nbsp;
                 <img src={js} alt="javascript"/>&nbsp;&nbsp;&nbsp;
                 <img src={html} alt="html"/>&nbsp;&nbsp;&nbsp;
                 <img src={css} alt="css"/>&nbsp;&nbsp;&nbsp;
                 <img src={java} alt="java"/>&nbsp;&nbsp;&nbsp;
                 <img src={sql} alt="sql"/>&nbsp;&nbsp;&nbsp;
                </div>
            </div>

             {/* === SCRIBBLE IMAGE === */}
             <img src={scribble} id={style.scribble}/>

             {/* === PROJECTS === */}            
            <div id={style.project}>
               <h2>Projects</h2>
                   {/* === PROJECT 1 === */}
               <div id={style.projectContainer}>
                   <h3 id={style.projectOneTitle}>Dhamma Metta Welfare Society</h3>
                   <a href="http://dmwsociety.org/" target="_blank" >
                     <div className={style.projectBox} >
                       <img src={dmws} alt="dhamma metta welfare society"/>                    
                     </div>
                   </a>
                   <a href="http://dmwsociety.org/" id={style.eLink1}><img src={eLink} target="_blank"/></a>
                
                   {/* === PROJECT 2 === */}
                
                   <h3 id={style.projectTwoTitle}>Personal Portfolio</h3>
                   <a href="https://kamalchakma1.github.io/kamalchakma/" target="_blank">
                      <div className={style.projectBox}>
                        <img src={kamalPortfolio} alt="kamal portfolio"/>
                      </div>
                   </a>
                   <a href="https://kamalchakma1.github.io/me/" target="_blank"><img src={eLink} id={style.eLink2}/></a>&nbsp;&nbsp;&nbsp;
                   <a href="https://github.com/kamalchakma1/kamalchakma" target="_blank"><img src={github} id={style.github1}/></a>
                </div>
            </div>

                {/* ===GET IN TOUCH=== */}
            <div id={style.getInTouch}>
                <h2>Get In Touch</h2>
                <a href="mailto:mr.kamalchakma@gmail.com"><h3>Say Hello</h3></a>
            </div>
               {/* ===FOOTER=== */}
             <div id={style.footer}>
                 <a href="https://in.linkedin.com/in/kamalkantichakma" target="_blank"><i class="fa-brands fa-linkedin fa-lg" ></i> </a>&nbsp;&nbsp;&nbsp;&nbsp;
                 <a href="https://github.com/kamalchakma1" target="_blank"><i class="fa-brands fa-github fa-lg" ></i> </a>&nbsp;&nbsp;&nbsp;&nbsp;
                 <a href="https://t.me/kamalchakma" target="_blank"><i class="fa-brands fa-telegram fa-lg" ></i> </a>
                 <p>Builed By Kamal</p>
            </div>
        </div>
    )
}
export default Portfolio