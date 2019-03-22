import Container from "../Container";
import InstagramLogo from "../InstagramLogo";

export default () => (
  <>
    <style jsx>{`
      footer {
        margin-top: 3rem;
      }
      footer a {
        padding: 1em;
      }
    `}</style>
    <footer>
      <Container>
        <a href="https://instagram.com/weinberger_simone/">
          <InstagramLogo />
          Instagram
        </a>
      </Container>
    </footer>
  </>
);
