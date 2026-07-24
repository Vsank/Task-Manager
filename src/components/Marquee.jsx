const press = ['VOGUE', 'GQ', 'HARPER’S BAZAAR', 'ELLE', 'ESQUIRE', 'W', 'AD']

export default function Marquee() {
  const row = [...press, ...press]
  return (
    <section className="marquee" aria-label="As featured in">
      <span className="marquee__label eyebrow">As featured in</span>
      <div className="marquee__track">
        <div className="marquee__row">
          {row.map((p, i) => (
            <span className="marquee__item display" key={i} aria-hidden={i >= press.length}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
