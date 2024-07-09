import React from 'react';
import './Categories.css';
import Quckacs from './Quck-acs';

const CategoriesPage = () => {
  const categories = [
    { id: 1, name: 'Traditional Wear', image: 'traditional-wear.jpg', description: 'Elegant sarees, kurtas, and ethnic ensembles' },
    { id: 2, name: 'Western Clothing', image: 'western-clothing.jpg', description: 'Trendy dresses, tops, jeans, and more' },
    { id: 3, name: 'Electronics', image: 'electronics.jpg', description: 'Latest gadgets, smartphones, and appliances' },
    { id: 4, name: 'Home Decor', image: 'home-decor.jpg', description: 'Stylish furnishings and decorative items' },
    { id: 5, name: 'Beauty & Personal Care', image: 'beauty.jpg', description: 'Cosmetics, skincare, and grooming products' },
    { id: 6, name: 'Footwear', image: 'footwear.jpg', description: 'Shoes, sandals, and traditional footwear' },
    { id: 7, name: 'Jewelry', image: 'jewelry.jpg', description: 'Exquisite gold, silver, and fashion jewelry' },
    { id: 8, name: 'Books & Stationery', image: 'books.jpg', description: 'Wide range of books and office supplies' },
    { id: 9, name: 'Sports & Fitness', image: 'sports.jpg', description: 'Sports equipment and fitness gear' },
    { id: 10, name: 'Kids & Baby', image: 'kids.jpg', description: 'Clothing, toys, and essentials for children' },
  ];

  return (
    <div className="krishna-mall categories-page">


      <main className="categories-content">
        <h2>Shop by Category</h2>
        
        <section className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
          ))}
        </section>

        <section className="featured-brands">
          <h3>Featured Brands</h3>
          <div className="brand-logos">
            {/* Add brand logos here */}
            <img src="brand1-logo.png" alt="Brand 1" />
            <img src="brand2-logo.png" alt="Brand 2" />
            <img src="brand3-logo.png" alt="Brand 3" />
            <img src="brand4-logo.png" alt="Brand 4" />
          </div>
        </section>
      </main>

      <footer className="mall-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Quckacs/>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2024 Krishna Shopping Mall. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CategoriesPage;