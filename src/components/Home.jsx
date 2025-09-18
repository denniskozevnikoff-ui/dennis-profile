export default function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 0',   // matches Education
    background: 'transparent',
    color: 'white',
    textAlign: 'center',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto'
  };

  return (
    <div style={containerStyle}>
      <h4>Site content</h4>
      <div>
        Welcome to my profile web page! This site was built with React. 
        Use the menu to navigate through different sections and explore my projects, experience, and skills.
      </div>

      <h4 style={{ marginTop: '20px' }}>Mission Statement</h4>
      <p>
        My mission is to continuously grow as a developer and problem solver, 
        leveraging technology to create impactful solutions that improve lives. 
        I strive to combine creativity, technical expertise, and dedication 
        to deliver meaningful contributions in every project I undertake.
      </p>
    </div>
  );
}
