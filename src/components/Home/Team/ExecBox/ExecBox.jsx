import "./ExecBox.css";

export default function ExecBox({ name, image, link }) {
  return (
    <div className="container">
      <img className="image" src={image} />
      <div className="background" />
      <div className="name">{name}</div>
      <div className="triangle" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="linkedin" src="/linkedin.png" alt="LinkedIn Logo" />
      </a>
    </div>
  );
}
