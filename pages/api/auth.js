export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Validasi admin (ganti dengan password hashing jika perlu)
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        return res.status(200).json({ success: true });
      }
  
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  
    res.status(405).json({ message: 'Method not allowed' });
  }
  