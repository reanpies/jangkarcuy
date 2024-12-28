// pages/api/data.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('Jangkar'); // nama database

    const aboutComponent = await db.collection('components').findOne({ name: 'about' }); // nama komponen
    const menuItems = await db.collection('menu').find({}).toArray();

    res.status(200).json({
      aboutText: aboutComponent?.text || '',
      menus: menuItems,
    });
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Failed to fetch data from MongoDB' });
  }
}
