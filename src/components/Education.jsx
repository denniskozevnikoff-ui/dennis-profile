export default function Education() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 0',
    background: 'transparent',
    color: 'white',
  };

  const cardStyle = {
    width: '800px',
    background: 'transparent',
    textAlign: 'center',
    lineHeight: '1.8',
  };

  const listStyle = {
    textAlign: 'left',
    margin: '20px auto 0',
    width: '60%',
  };

  const infoStyle = {
    fontSize: '16px',
    marginTop: '10px',
    color: '#ccc',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Centennial College</h2>
        <h3>Artificial Intelligence Diploma Program</h3>
        <div style={infoStyle}>
          <div><strong>Duration:</strong> 2024 – Current</div>
          <div><strong>GPA:</strong> 4.2</div>
        </div>

        <div style={listStyle}>
          <h4>Courses:</h4>
          <ul>
            <li>Machine Learning Fundamentals</li>
            <li>Neural Networks and Deep Learning</li>
            <li>Data Science and Big Data Analytics</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision and Image Recognition</li>
            <li>AI Ethics and Responsible Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
