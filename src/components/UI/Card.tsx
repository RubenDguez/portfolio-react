export default function Card({ title, img, url, description }: { title: string; img: string; url: string; description: string }) {
  return (
    <a href={url} target="_blank">
      <div className="card">
        <div className="card-img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="card-description">
          <h3>{title}</h3>
          <p>{(description.length > 100) ? description.substring(0, 100).concat('...') : description}</p>
        </div>
      </div>
    </a>
  );
}
