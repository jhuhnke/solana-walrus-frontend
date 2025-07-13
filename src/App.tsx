import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="nav">
        <a href="https://www.npmjs.com/package/solana-walrus">Documentation</a>
        <a href="https://github.com/jhuhnke/solana-walrus">GitHub</a>
        <a href="https://x.com/web3_analyst">Contact</a>
      </nav>

      <main className='main'>
        <div className="text-section">
          <h1>Solana Walrus Javascript SDK</h1>
          <p>
            The Solana Walrus SDK is a powerful toolkit designed to simplify the development of decentralized applications on the Solana blockchain. It provides developers with essential tools and libraries to interact with Walrus decentralized storage, uploading and managing files directly from the Solana blockchain.
          </p>
          <a href="https://www.npmjs.com/package/solana-walrus">
            <button className="cta-button">Get Started</button>
          </a>
        </div>

        <div className="image-section">
          <img src="/walrus.png" className="app-logo" alt="logo" />
        </div>  
      </main>

      <footer className='footer'>
        Built by <a href="https://x.com/web3_analyst" target="_blank" rel="nooperner noreferrer">@web3_analyst</a>
      </footer>
    </div>
  );
}

export default App;
