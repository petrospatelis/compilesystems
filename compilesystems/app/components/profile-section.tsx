import type { Translations } from "../lib/i18n/translations";

type ProfileSectionProps = {
  labels: Translations["profile"];
};

export function ProfileSection({ labels }: ProfileSectionProps) {
  return (
    <div className="profile-section">
      <div className="profile-grid">
        <div>
          <h2 className="section-title">{labels.title}</h2>
          <p className="section-body">{labels.paragraphs[0]}</p>
          <p className="section-body section-body--follow">
            {labels.paragraphs[1]}
          </p>
        </div>
        <dl className="profile-stats">
          {labels.stats.map(({ label, value }) => (
            <div key={label} className="profile-stat">
              <dt className="profile-stat__label">{label}</dt>
              <dd className="profile-stat__value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="profile-process" aria-labelledby="profile-how-we-work">
        <div className="profile-process__intro">
          <h3 id="profile-how-we-work" className="profile-process__title">
            {labels.howWeWork.title}
          </h3>
          <p className="profile-process__subtitle">{labels.howWeWork.subtitle}</p>
        </div>
        <ol className="profile-process__steps">
          {labels.howWeWork.steps.map(({ step, title, description }) => (
            <li key={step} className="profile-step">
              <span className="profile-step__number" aria-hidden>
                {step}
              </span>
              <div className="profile-step__content">
                <h4 className="profile-step__title">{title}</h4>
                <p className="profile-step__description">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="profile-tech" aria-labelledby="profile-tech-stack">
        <h3 id="profile-tech-stack" className="profile-tech__title">
          {labels.techStack.title}
        </h3>
        <ul className="profile-tech__strip">
          {labels.techStack.items.map((item) => (
            <li key={item} className="profile-tech__item">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
