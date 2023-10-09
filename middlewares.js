 module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/api/products') {
 
      const newProduct = req.body;
    
      products.push(newProduct);
      res.json(newProduct);
    } else {
    
      next();
    }
  };