import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-muted mt-20 w-full overflow-hidden">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-furniture-green rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">Furniture</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Exquisite design combined with functionalities. Creating beautiful spaces for modern living.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm text-muted-foreground">📞 576-393-4937</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-furniture-green transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-furniture-green transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-furniture-green transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-furniture-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/shop?category=Chairs" className="text-muted-foreground hover:text-furniture-green transition-colors">Chairs</Link></li>
              <li><Link to="/shop?category=Sofas" className="text-muted-foreground hover:text-furniture-green transition-colors">Sofas</Link></li>
              <li><Link to="/shop?category=Tables" className="text-muted-foreground hover:text-furniture-green transition-colors">Tables</Link></li>
              <li><Link to="/shop?category=Storage" className="text-muted-foreground hover:text-furniture-green transition-colors">Storage</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for updates and special offers.
            </p>
            <div className="flex w-full">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 min-w-0 px-3 py-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-furniture-green focus:border-transparent text-sm"
              />
              <button className="bg-furniture-green text-white px-4 py-2 rounded-r-md hover:bg-furniture-green/90 transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}