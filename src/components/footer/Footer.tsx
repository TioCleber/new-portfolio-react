import "../../styles/components/footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <section className="copy">© Cleber - {year}</section>
    </footer>
  );
};

export default Footer;
