const menu = [
    { img: '/menu/ayam_panggang.png', title: 'Ayam Panggang', price: 'Rp. 50,000' },
    { img: '/menu/capcay_goreng.png', title: 'Capcay Goreng', price: 'Rp. 40,000' },
    { img: '/menu/fuyunghai.png', title: 'Fuyunghai', price: 'Rp. 45,000' },
    { img: '/menu/nasi_tim.png', title: 'Nasi Tim', price: 'Rp. 30,000' },
  ];
  
export default function handler(req, res) {
  res.status(200).json(menu);
}