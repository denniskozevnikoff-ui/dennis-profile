import ai from '../assets/ai.jpg';
import be from '../assets/be.jpg';
import fe1 from '../assets/fe1.jpg';

export default function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    padding: '40px 0',
    background: 'transparent', // removes that dark/black background
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',  // vertically center image + text
    gap: '40px',
    width: '800px',        // fixed width so it doesn't stretch weird
    background: 'transparent'
  };

  const imgStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    flexShrink: 0
  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '200px',        // <- same as image height for perfect alignment
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={be} style={imgStyle} alt="Backend Dev" />
        <div style={textStyle}>
          <h2>Backend Dev</h2>
          <div>SQL, MySQL, NoSQL, Database management</div>
        </div>
      </div>

      <div style={cardStyle}>
        <img src={fe1} style={imgStyle} alt="Frontend Dev" />
        <div style={textStyle}>
          <h2>Frontend Dev</h2>
          <div>React, jQuery, Bootstrap / CSS</div>
        </div>
      </div>

      <div style={cardStyle}>
        <img src={ai} style={imgStyle} alt="AI Dev" />
        <div style={textStyle}>
          <h2>AI Dev</h2>
          <div>Machine Learning, Neural Networks, Algorithms</div>
        </div>
      </div>
    </div>
  );
}
