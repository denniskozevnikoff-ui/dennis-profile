import fruit from '../assets/fruit.jpg';      
import cut from '../assets/cut.jpg';
import ai2 from '../assets/ai2.jpg';

export default function Projects() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    padding: '40px 0',
    background: 'transparent',
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    width: '800px',
    background: 'transparent',
  };

  const imgStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    flexShrink: 0,
  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '200px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={fruit} style={imgStyle} alt="Diet Plan Website" />
        <div style={textStyle}>
          <h2>Diet Plan Website</h2>
          <div>A web app that helps users create and track personalized diet plans.</div>
        </div>
      </div>

      <div style={cardStyle}>
        <img src={ai2} style={imgStyle} alt="AI Algorithms Research" />
        <div style={textStyle}>
          <h2>AI Algorithms Research</h2>
          <div>Research-based project exploring new neural networks and machine learning techniques.</div>
        </div>
      </div>

      <div style={cardStyle}>
        <img src={cut} style={imgStyle} alt="Cutting Edge Coding Concepts" />
        <div style={textStyle}>
          <h2>Cutting Edge Coding Concepts</h2>
          <div>An educational website showcasing the latest coding concepts and best practices.</div>
        </div>
      </div>
    </div>
  );
}
