const columns = [
  {
    title: 'Explore',
    links: ['The Scent', 'Notes', 'Craft', 'Ritual'],
  },
  {
    title: 'Maison',
    links: ['Our Story', 'The Atelier', 'Sustainability', 'Press'],
  },
  {
    title: 'Care',
    links: ['Shipping', 'Returns', 'Contact', 'FAQ'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo display">MIRAGE</span>
          <p className="footer__tagline">
            Maison Sable — perfumers since 1974, Grasse, France.
          </p>
          <form
            className="footer__signup"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              required
            />
            <button type="submit">Join</button>
          </form>
        </div>

        <div className="footer__cols">
          {columns.map((c) => (
            <div key={c.title} className="footer__col">
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#top">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Maison Sable. All rights reserved.</span>
        <div className="footer__legal">
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
