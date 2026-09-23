import type React from "react";
import SplitHeading from "./SplitHeading";
import ProductMedia from "./ProductMedia";
import { ModuleItem } from "./types";

type Props = {
  eyebrow: string;
  title: string;
  modules: ModuleItem[];
};

function OrbitDecoration() {
  return (
    <div aria-hidden="true" className="e-vong">
      <div className="e-vanh" style={{ "--in": 0, "--t": "64s", border: "1.5px dashed rgba(255,255,255,.22)" } as React.CSSProperties}>
        {[12, 104, 196, 288].map((angle, i) => <i key={angle} style={{ "--a": `${angle}deg` } as React.CSSProperties}><b>{["↗", "✦", "◎", "↻"][i]}</b></i>)}
      </div>
      <div className="e-vanh dao" style={{ "--in": "13%", "--t": "48s", border: "2px solid rgba(254,205,31,.32)" } as React.CSSProperties}>
        {[56, 170, 290].map((angle, i) => <i key={angle} style={{ "--a": `${angle}deg` } as React.CSSProperties}><b>{["✉", "#", "⌁"][i]}</b></i>)}
      </div>
    </div>
  );
}

export default function ModuleBookSection({ eyebrow, title, modules }: Props) {
  return (
    <section className="e-so e-mat-tim" id="bo-san-pham">
      <div className="e-so-in">
        <div className="e-wrap">
          <div className="e-so-grid">
            <div className="e-sach-vung">
              <OrbitDecoration />
              <div className="e-sach" id="e-sach">
                <div aria-hidden="true" className="e-sach-gay" />
                <div aria-hidden="true" className="e-sach-nen" />
                {modules.map((module, index) => (
                  <div className="e-trang" key={module.name} style={{ zIndex: modules.length - index }}>
                    <div className="e-trang-mat">
                      <div className="e-trang-so">{String(index + 1).padStart(2, "0")}</div>
                      <h3 className="e-trang-ten">{module.name}</h3>
                      <p className="e-trang-mo">{module.short}</p>
                      <div className="e-trang-tay">{module.tag}</div>
                      {module.image ? (
                        <div className="e-trang-hinh ko-book-image">
                          <ProductMedia {...module.image} />
                        </div>
                      ) : null}
                    </div>
                    <div aria-hidden="true" className="e-trang-sau" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="e-eyebrow" data-fade="">{eyebrow}</p>
              <SplitHeading ariaLabel={title} lines={[title]} style={{ margin: "14px 0 10px", fontSize: "clamp(25px,2.9vw,38px)" }} />
              <div className="e-noi" id="e-noi">
                {modules.map((module, index) => (
                  <article className={`e-noi-item${index === 0 ? " on" : ""}`} key={module.name}>
                    <h3>{module.name}</h3>
                    <p className="e-lead">{module.description}</p>
                    <ul className="e-noi-ds">
                      {module.bullets.map((bullet) => <li key={bullet}><span>{bullet}</span></li>)}
                    </ul>
                    <a className="e-btn e-btn--phan" href="#giao-dien">Xem giao diện tham chiếu</a>
                  </article>
                ))}
              </div>
              <div className="e-so-dieu">
                <div aria-hidden="true" className="e-so-dots" id="e-dots">{modules.map((m, i) => <i className={i === 0 ? "on" : ""} key={m.name} />)}</div>
                <div className="e-so-dem"><span id="e-dem">01</span> / {String(modules.length).padStart(2, "0")}</div>
                <div className="e-so-goi">cuộn để lật trang</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
