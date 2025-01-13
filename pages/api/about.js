import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  console.log("API /api/about called");
  if (req.method === 'GET') {
    try {
      // Query dokumen about berdasarkan name
      const aboutDoc = await prisma.component.findFirst({
        where: { name: 'about' },
      });

      console.log('About document:', aboutDoc);

      if (!aboutDoc) {
        console.error("No about document found.");
        return res.status(404).json({ error: 'No about data found' });
      }

      // Ekstrak teks dari dokumen
      const aboutText = aboutDoc.data?.text || "";
      console.log('About text:', aboutText);

      res.status(200).json({ text: aboutText });
    } catch (error) {
      console.error('Error in /api/about:', error.message);
      console.error('Error stack:', error.stack);
      res.status(500).json({ error: 'Failed to fetch about data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
