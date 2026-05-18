import {
FaTelegramPlane,
FaRobot,
FaUserAlt
} from "react-icons/fa";

export default function App() {

  return (

    <div>

      <div className="navbar">

        <div className="logo">
          MD Developer YT
        </div>

        <div className="menu">
          <p>Home</p>
          <p>Channels</p>
          <p>Bots</p>
          <p>Developer</p>
          <p>Features</p>
          <p>Stats</p>
        </div>

      </div>

      <div className="hero">

        <div className="hero-text">

          <h1>
            Explore. Connect.
            <br />
            Automate.
            <span> Innovate.</span>
          </h1>

          <p>
            Powerful Telegram Channels,
            Smart Bots and Advanced Solutions.
          </p>

          <div className="hero-buttons">

            <a href="#" className="btn">
              Explore Channels
            </a>

            <a href="#" className="btn btn2">
              View Bots
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" />

        </div>

      </div>

      <div className="stats">

        <div className="stat-box">
          <h1>15+</h1>
          <p>Channels</p>
        </div>

        <div className="stat-box">
          <h1>10+</h1>
          <p>Bots</p>
        </div>

        <div className="stat-box">
          <h1>5+</h1>
          <p>Projects</p>
        </div>

        <div className="stat-box">
          <h1>1000+</h1>
          <p>Users</p>
        </div>

      </div>

      <h1 className="section-title">
        <FaTelegramPlane /> Telegram Channels
      </h1>

      <div className="cards">

        <div className="card">

          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968804.png" />

          <h2>Anime Updates AU</h2>

          <p>
            Join Updates
          </p>

          <a
            href="https://t.me/Anime_UpdatesAU"
            target="_blank"
            className="open-btn"
          >
            Join Channel
          </a>

        </div>

        <div className="card">

          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />

          <h2>Anime World</h2>

          <p>
            Open The New World Of Animes
          </p>

          <a
            href="https://t.me/amime_in_hindi"
            target="_blank"
            className="open-btn"
          >
            Join Channel
          </a>

        </div>

      </div>

      <h1 className="section-title">
        <FaRobot /> Telegram Bots
      </h1>

      <div className="cards">

        <div className="card">

          <img src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" />

          <h2>Rename Bot</h2>

          <p>
            Rename Files and Videos
          </p>

          <a
            href="https://t.me/Jinwoo_Rename_bot"
            target="_blank"
            className="open-btn"
          >
            Open Bot
          </a>

        </div>

        <div className="card">

          <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" />

          <h2>Bots Server</h2>

          <p>
            Daily News on Telegram
          </p>

          <a
            href="https://t.me/BotsServerDead"
            target="_blank"
            className="open-btn"
          >
            Open Bot
          </a>

        </div>

      </div>

      <h1 className="section-title">
        <FaUserAlt /> Developer
      </h1>

      <div className="developer">

        <div className="dev-box">

          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />

          <div className="dev-content">

            <h1>
              Hi, I'm <span>MD Developer YT</span>
            </h1>

            <p>
              Full Stack Developer &
              Telegram Bot Developer.
            </p>

            <div className="skills">

              <div className="skill">React</div>
              <div className="skill">Node.js</div>
              <div className="skill">MongoDB</div>
              <div className="skill">Python</div>
              <div className="skill">Docker</div>

            </div>

          </div>

        </div>

      </div>

      <div className="footer">
        © 2026 MD Developer YT ( Mohammed )
      </div>

    </div>

  )
}
