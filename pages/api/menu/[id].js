import prisma from '../../../lib/prisma';
import { withAuth } from '../../../lib/auth';

export default withAuth(async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    await prisma.menuItem.delete({ where: { id } });
    return res.status(200).json({ message: 'Deleted successfully' });
  }

  res.status(405).json({ message: 'Method not allowed' });
});
