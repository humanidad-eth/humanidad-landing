export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        HUMANIDAD.IO
      </h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
        Este no es un sitio web. Es una semilla.
        <br />
        Un espacio digital para que la humanidad se escuche a sí misma.
      </p>
      <div style={{
        border: '1px solid white',
        borderRadius: '1rem',
        padding: '1.5rem',
        maxWidth: '700px',
        fontSize: '0.9rem',
        color: 'white'
      }}>
        <p><strong>MANIFIESTO FUNDACIONAL</strong></p>
        <p>
          HUMANIDAD.IO no es una empresa. No es una red social. No es una marca.
          Es un club virtual anónimo y descentralizado, fundado con un propósito claro:
          crear un espacio donde la humanidad pueda escucharse a sí misma.
        </p>
        <p style={{ marginTop: '1rem' }}>
          En un mundo dividido por nombres, banderas, ideologías y sistemas,
          nace HUMANIDAD como un lugar donde todas las voces valen lo mismo.
        </p>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          Este sitio está en construcción.<br />
          Si resuena contigo, vuelve.
        </p>
      </div>
    </div>
  );
}
