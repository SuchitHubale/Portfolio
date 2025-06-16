import PropTypes from 'prop-types';

const scrollToSection = (sectionId, offset = window.innerHeight * 0.15) => {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Button = ({ text, className, id, href = '#counter' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (id) {
      scrollToSection(id);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  href: PropTypes.string,
};

export default Button;