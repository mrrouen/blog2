import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rouenhowell G. Reyes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Profile Picture */}
        <img
          src="/profile.jpg"
          alt="Rouenhowell G. Reyes"
          style={{
            width: '144px',
            height: '144px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem'
          }}
        />

        {/* Full Name */}
        <h1 className={styles.title}>
          Rouenhowell G. Reyes
        </h1>

        {/* Bio & Specialization Paragraphs */}
        <div style={{ maxWidth: '650px', textAlign: 'left', margin: '1.5rem 0' }}>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Hello, I'm <strong>Rouenhowell G. Reyes</strong>. In my free time, I enjoy drawing, listening to video game OSTs, and eating chips. My passion for game development goes beyond just the creative aspects. In 5 years, I see myself as an impactful video game developer at a major studio, having shipped at least one critically acclaimed title. I am deeply interested in the intricate fusion of storytelling, visual art, and complex system engineering that goes into modern games, and I am actively studying topics like advanced artificial intelligence, physics engines, and multiplayer network architecture.
          </p>

          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            My long-term goal is to lead a dedicated team on an original, narratively-driven game that pushes technical boundaries and creates unforgettable player experiences. I also spend significant time dissecting the mechanics and game loops of my favorite titles, which informs my own design philosophy. My favorite genres include deep RPGs and tactical shooters, which I hope to contribute to. In addition to development, I'm exploring digital sculpting to better understand 3D asset pipelines. My favorite chips are spicy barbecue.
          </p>
        </div>

        {/* Required Professor Note */}
        <p className={styles.description} style={{ textAlign: 'left', maxWidth: '650px' }}>
          (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">our Next.js tutorial</a>.)
        </p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}