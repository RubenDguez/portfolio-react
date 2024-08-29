const links = [
  {href: 'https://github.com/RubenDguez', className: 'fa-brands fa-github'},
  {href: 'https://www.linkedin.com/in/argenis-dominguez/', className: 'fa-brands fa-linkedin'},
  {href: 'https://x.com/ArgenisDoming18', className: 'fa-brands fa-square-x-twitter'},
  {href: 'https://rubendguez.github.io/rdominguez/', className: 'fa-solid fa-diamond-turn-right'},
]

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        {
          links.map((link) => (
            <a key={link.className} href={link.href} target="_blank"><i className={link.className}></i></a>
          ))
        }
      </div>
      <div>
        <h3>
          &copy; Ruben Dominguez <span>{new Date().getFullYear()}</span>
        </h3>
      </div>
    </div>
  );
}
