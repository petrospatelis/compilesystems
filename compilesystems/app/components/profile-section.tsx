import type { Translations } from "../lib/i18n/translations";
import { ProcessStepIcon } from "./process-step-icons";
import { ProfileStatIcon } from "./profile-stat-icons";

type ProfileSectionProps = {
  labels: Translations["profile"];
};

export function ProfileSection({ labels }: ProfileSectionProps) {
  return (
    <div className="profile-section">
      <section className="profile-intro" aria-labelledby="profile-title">
        <div className="profile-intro__panel">
          <div className="profile-intro__content">
            <header className="profile-intro__header">
              <p className="profile-intro__eyebrow">{labels.eyebrow}</p>
              <h2 id="profile-title" className="profile-intro__title">
                {labels.title}
              </h2>
            </header>

            <div className="profile-intro__copy">
              <p className="profile-intro__paragraph">{labels.paragraphs[0]}</p>
              <p className="profile-intro__paragraph">{labels.paragraphs[1]}</p>
            </div>
          </div>

          <div className="profile-stats">
            {labels.stats.map(({ label, value }, index) => (
              <div key={label} className="profile-stat">
                <span className="profile-stat__label">
                  <span className="profile-stat__icon-wrap" aria-hidden>
                    <ProfileStatIcon index={index} />
                  </span>
                  {label}
                </span>
                <span className="profile-stat__value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-process" aria-labelledby="profile-how-we-work">
        <div className="profile-process__panel">
          <div className="profile-process__glow" aria-hidden />

          <header className="profile-process__intro">
            <p className="profile-process__eyebrow">{labels.howWeWork.eyebrow}</p>
            <h3 id="profile-how-we-work" className="profile-process__title">
              {labels.howWeWork.title}
            </h3>
            <p className="profile-process__subtitle">
              {labels.howWeWork.subtitle}
            </p>
          </header>

          <ol className="profile-process__track">
            {labels.howWeWork.steps.map(({ step, title, description }) => (
              <li key={step} className="profile-step">
                <div className="profile-step__marker">
                  <ProcessStepIcon step={step} className="profile-step__icon" />
                  <span className="profile-step__index" aria-hidden>
                    {step}
                  </span>
                </div>
                <div className="profile-step__body">
                  <h4 className="profile-step__title">{title}</h4>
                  <p className="profile-step__description">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="profile-tech" aria-labelledby="profile-tech-stack">
        <div className="profile-tech__panel">
          <header className="profile-tech__header">
            <p className="profile-tech__eyebrow">{labels.techStack.eyebrow}</p>
            <h3 id="profile-tech-stack" className="profile-tech__title">
              {labels.techStack.title}
            </h3>
            <p className="profile-tech__subtitle">{labels.techStack.subtitle}</p>
          </header>

          <ul className="profile-tech__strip">
            {labels.techStack.items.map((item) => (
              <li key={item} className="profile-tech__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
