import AboutUsStrip from "@/components/About/AboutUsStrip";
import AuthorityMessages from "@/components/About/AuthorityMessages";
import Developing from "@/components/About/Developing";
import MissionValues from "@/components/About/MissionValues";

function About() {
  return (
    <div>
      <AboutUsStrip />
      <MissionValues />
      <Developing />
      <AuthorityMessages />
    </div>
  );
}

export default About;
