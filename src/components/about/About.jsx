import "./About.css";
import dev from "../../Images/developer.gif";
import award from "../../Images/award.png";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import linkedIn from "../../Images/linkedIn.png";
import leetcode from "../../Images/leetcode.png";
import twitter from "../../Images/twitter.png";
import gfg from "../../Images/gfg.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card for">
          <img src={dev} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-title">About Me:</div>
        <p className="a-sub">
          <ul id="skills" type="🥇">
            <span>Skills:</span>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT (ES)</li>
            <li>REACT</li>
            <li>NODE</li>
            <li>PHP</li>
          </ul>
          <div className="links">
            <div>
              <img src={linkedIn} alt="" title="LinkedIn Id" />
              <a
                href="https://www.linkedin.com/in/sahil-pillania-297a84213/"
                target="_blank"
              >
                Visit LinkedIn
              </a>
            </div>
            <div>
              <img src={twitter} alt="" title="Twitter Id" />
              <a href="https://twitter.com/SaHiLPiLLaNiA48" target="_blank">
                Visit Twitter
              </a>
            </div>
            <div>
              <img src={leetcode} alt="" title="LeetCode Id" />
              <a href="https://leetcode.com/Sahil_Pillania/" target="_blank">
                Visit Leetcode
              </a>
            </div>
            <div>
              <img
                src={gfg}
                alt=""
                title="geeksForGeeks Id"
                style={{ borderRadius: "5px" }}
              />
              <a
                href="https://auth.geeksforgeeks.org/user/sahil_pillania"
                target="_blank"
              >
                Visit geeksForGeeks
              </a>
            </div>
          </div>
        </p>
        <p className="a-desc"></p>
        <div className="a-award">
          <img src={award} alt=" " className="a-award-img" />
          <div className="a-award-texts">
            <div className="a-award-title"> Software developer</div>
            <div className="a-award-desc">
              To pursue a challenging career by being associated with a reputed
              company and to keep pace with the latest technologies while being
              dedicated in the growth of the organization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
