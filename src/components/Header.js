import img from "../img/nav.svg";

export default function Header() {
    return (
        <div className="header">
            <a className="logo" href="#">Outta Box</a>
            <a className="nav" href="#">
                <img src={img}></img>
            </a>
        </div>
    );
  }
  