import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const icon = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="text-center border-t border-slate-300 p-4 text-slate-400">
      <div>Designed and built by Karan</div>
      <Link href="https://github.com/karan5p">
        <a className="text-3xl text-slate-300">{icon}</a>
      </Link>
    </div>
  );
};
export default Footer;
