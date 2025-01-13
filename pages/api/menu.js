import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  console.log("API /api/menu called");
  if (req.method === 'GET') {
    try {

      console.log('Fetching menu data from MongoDB...');

      const menuDoc = await prisma.menu.findFirst({
        where: { name: 'menu' },
      });

      console.log('Menu document:', menuDoc);

      if (!menuDoc || !menuDoc.items) {
        console.error('No valid menu document found');
        return res.status(404).json({ error: 'No menu data found' });
      }
      
      const menuItems = Array.isArray(menuDoc?.items) ? menuDoc.items : [];
      res.status(200).json(menuItems);

    } catch (error) {
      console.error('Error in /api/menu:', error.message); // Log error message
      console.error('Error stack:', error.stack); // Log stack trace
      res.status(500).json({ error: 'Failed to fetch menu items' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
