export default function AboutMe() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 0',
    background: 'transparent',
    color: 'white',
    textAlign: 'center',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const headingStyle = {
    fontSize: '1.5rem', // adjusted to match Education
    marginBottom: '20px'
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#ccc'
  };

  const linkStyle = {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#1e90ff',
    textDecoration: 'underline',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyle}
      >
        View Resume
      </a>
      <p style={textStyle}>
        I'm currently a college student at Centennial College, pursuing a program in Artificial Intelligence. 
        With over 5 years of coding experience, I’ve developed strong skills in both backend and frontend development, 
        as well as Java programming and algorithm design. 
      </p>
      <p style={textStyle}>
        Beyond coding, I enjoy exploring history books and hitting the gym hard in my free time. 
        I’m passionate about learning, problem-solving, and building impactful tech solutions.
      </p>
    </div>
  );
}
