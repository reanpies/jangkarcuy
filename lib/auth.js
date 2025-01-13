export function withAuth(handler) {
    return async (req, res) => {
      const token = req.headers.authorization;
  
      if (!token || token !== process.env.ADMIN_TOKEN) {
        return res.status(403).json({ message: 'Forbidden' });
      }
  
      return handler(req, res);
    };
  }
  