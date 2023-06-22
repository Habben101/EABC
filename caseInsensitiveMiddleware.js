export default function caseInsensitiveMiddleware(req, res, next) {
    const lowercasePath = req.url.toLowerCase();
    
    if (lowercasePath !== req.url) {
      res.writeHead(301, {
        Location: lowercasePath,
      });
      res.end();
      return;
    }
  
    next();
  }
  