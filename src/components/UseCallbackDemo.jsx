import React, { useState, useCallback } from 'react';

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [products] = useState(["iPhone 15", "MacBook Pro", "AirPods Max"]);

  // 🎯 useCallback caches this function definition!
  const addToWishlist = useCallback((productName) => {
    setWishlist((prev) => [...prev, productName]);
  }, []); // 👈 Empty array means create this function exactly ONCE on mount

  return (
    <div style={{ padding: '20px' }}>
      <h2>useCallback Performance Demo</h2>
      <p>Wishlist Count: {wishlist.length}</p>

      {/* Independent State: Clicking this will NOT trigger child re-renders! */}
      <button onClick={() => setCount(count + 1)}>
        Rerender Parent (Count: {count})
      </button>

      <div style={{ marginTop: '20px' }}>
        <h3>Available Products:</h3>
        {products.map((prod, index) => (
          <ProductItem 
            key={index} 
            name={prod} 
            onAddToWishlist={addToWishlist} 
          />
        ))}
      </div>
    </div>
  );
};

export default UseCallbackDemo;



// React.memo prevents unnecessary re-renders IF props don't change
export const ProductItem = React.memo(({ name, onAddToWishlist }) => {
  console.log(`🔴 Rendered ProductItem: ${name}`);
  return (
    <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
      <span>{name}</span>
      <button onClick={() => onAddToWishlist(name)}>Add to Wishlist</button>
    </div>
  );
});

