export default function AccessDenied() {
  return (
    <div style={{ 
      background: 'black', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center' 
    }}>
      <div>
        <h1>Access Denied.</h1>
        <p>Authorization required.</p>
      </div>
    </div>
  );
}
