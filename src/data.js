const salesData = [
  {
    name: "Jan",
    sale: 12_000,
  },
  {
    name: "Feb",
    sale: 34_000,
  },
  {
    name: "Mar",
    sale: 89_000,
  },
  {
    name: "Apr",
    sale: 112_000,
  },
  {
    name: "May",
    sale: 15_000,
  },
  {
    name: "Jun",
    sale: 32_000,
  },
  {
    name: "Jul",
    sale: 21_000,
  },
  {
    name: "Aug",
    sale: 55500,
  },
  {
    name: "Sep",
    sale: 31_000,
  },
  {
    name: "Oct",
    sale: 77300,
  },
  {
    name: "Nov",
    sale: 120_000,
  },
  {
    name: "Des",
    sale: 200_000,
  },
];

const newMembers = [
  {
    id: 1,
    name: "mohammad noohi",
    title: "web developer",
    img: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    name: "amir ali",
    title: "UI Designer",
    img: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    id: 3,
    name: "Zahra",
    title: "SEO",
    img: "https://mui.com/static/images/avatar/3.jpg",
  },
  {
    id: 4,
    name: "Maryam",
    title: "Manager",
    img: "https://mui.com/static/images/avatar/4.jpg",
  },
  {
    id: 5,
    name: "Sajad",
    title: "CEO",
    img: "https://mui.com/static/images/avatar/5.jpg",
  },
];

const transactions = [
  {
    id: 1,
    img: "https://mui.com/static/images/avatar/1.jpg",
    customer: "mohammad",
    date: "2 May 2022",
    amount: "199.95",
    status: "approved",
  },
  {
    id: 2,
    img: "https://mui.com/static/images/avatar/2.jpg",
    customer: "maral",
    date: "3 May 2022",
    amount: "200",
    status: "decline",
  },
  {
    id: 3,
    img: "https://mui.com/static/images/avatar/3.jpg",
    customer: "hoesin",
    date: "4 May 2022",
    amount: "320.30",
    status: "pending",
  },
  {
    id: 4,
    img: "https://mui.com/static/images/avatar/4.jpg",
    customer: "reza",
    date: "5 May 2022",
    amount: "120.22",
    status: "decline",
  },
  {
    id: 5,
    img: "https://mui.com/static/images/avatar/5.jpg",
    customer: "ali",
    date: "6 May 2022",
    amount: "145.50",
    status: "decline",
  },
  {
    id: 6,
    img: "https://mui.com/static/images/avatar/6.jpg",
    customer: "adrian",
    date: "7 May 2022",
    amount: "50.25",
    status: "approved",
  },
  {
    id: 7,
    img: "https://mui.com/static/images/avatar/7.jpg",
    customer: "michael",
    date: "8 May 2022",
    amount: "1000",
    status: "approved",
  },
  {
    id: 8,
    img: "https://mui.com/static/images/avatar/2.jpg",
    customer: "arash",
    date: "9 May 2022",
    amount: "323",
    status: "pending",
  },
  {
    id: 9,
    img: "https://mui.com/static/images/avatar/1.jpg",
    customer: "danial",
    date: "10 May 2022",
    amount: "400",
    status: "pending",
  },
];

const userRows = [
  {
    id: 1,
    username: "mohammad",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    status: "active",
    transaction: "129.45",
    email: "noohi.m98@gmail.com",
  },
  {
    id: 2,
    username: "ali",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    status: "active",
    transaction: "129.45",
    email: "noohi.m98@gmail.com",
  },
  {
    id: 3,
    username: "maral",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
    status: "active",
    transaction: "129.45",
    email: "noohi.m98@gmail.com",
  },
  {
    id: 4,
    username: "lilia",
    avatar: "https://mui.com/static/images/avatar/4.jpg",
    status: "active",
    transaction: "129.45",
    email: "noohi.m98@gmail.com",
  },
  {
    id: 5,
    username: "amir hosein",
    avatar: "https://mui.com/static/images/avatar/5.jpg",
    status: "active",
    transaction: "129.45",
    email: "noohi.m98@gmail.com",
  },
  {
    id: 6,
    username: "adrian",
    avatar: "https://mui.com/static/images/avatar/6.jpg",
    status: "active",
    transaction: "129.45",
    email: "noohi.m98@gmail.com",
  },
];

const products = [
  {
    id: 1,
    title: "asus tuf gaming",
    pic: "asus-tuf.jpg",
    price: 890,
  },
  {
    id: 2,
    title: "iphone 16 pro max",
    pic: "iphone-16-pro-max.jpg",
    price: 1300,
  },
  {
    id: 3,
    title: "ipad pro 11 inch",
    pic: "ipad-pro.jpg",
    price: 760,
  },
  {
    id: 4,
    title: "mackbook pro 13 inch",
    pic: "mackbook-pro.jpg",
    price: 1240,
  },
  {
    id: 5,
    title: "airpod max",
    pic: "airpod-max.jpg",
    price: 500,
  },
  {
    id: 6,
    title: "apple watch",
    pic: "applw-watch-6.jpg",
    price: 776,
  },
];

const monthesSale = [
  {
    name: "Jan",
    sales: 4000,
  },
  {
    name: "Feb",
    sales: 3000,
  },
  {
    name: "Mar",
    sales: 5000,
  },
];

/* 

recommended structure for prodcut sales compration :

const productsSaleData = [
  {
    title : 'asus',
    data : {
      name : 'Jan',
      sales : 4000,
    }
  }
]

*/

export { salesData, newMembers, transactions, userRows, products, monthesSale };
