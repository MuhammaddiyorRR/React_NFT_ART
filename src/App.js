import Navbar from "./Components/navbar/Navbar";
import Header from "./Components/header.js/header";
import Sellers from "./Components/sellers/sellers";
import Bids from "./Components/bids/bids";
import Footer from "./Components/footer/footer";
import Center from "./Components/center/center";
import Text from "./Components/center/text";
export default class App extends Navbar {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />

        <Text
          title="Top Sellers"
          description=" The leading top-selling NFT artist in the top 5 list this year.:
             Examining Some of the Most Popular NFT projects ·"
        />
        <Sellers />
        <Text
          title="Hot Bids"
          description=" Non-Fungible Tokens (NFTs) are virtual tokens minted on the blockchain for digital scarcity, security, and authenticity."
        />
        <Bids />
        <Footer />
      </div>
    );
  }
}
