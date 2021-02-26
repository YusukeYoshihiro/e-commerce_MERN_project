const products = [
  {
    name: 'Bauer Elbow Pads',
    image: '/productImg/bauer_elbow_pads.webp',
    description:'The Bauer NSX Senior Elbow Pads offer great comfort and mobility with a 2-piece tapered fit, independent bicep, and hydrophobic mesh lining so you can stay dry on the ice. ',
    brand: 'Bauer',
    category: 'elbow',
    price: 89.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: 'Bauer Hockey Gloves',
    image: '/productImg/bauer_hockey_gloves.webp',
    description:'Whether they’re passing, shooting or handling the puck, the Bauer Vapor X2.9 Junior Hockey Gloves keep young players’ growing hands flexible and free to move with a two-piece thumb. ',
    brand: 'Bauer',
    category: 'gloves',
    price: 100.09,
    countInStock: 3,
    rating: 3.5,
    numReviews: 5,
  },
  {
    name: 'Bauer Hockey Helmet',
    image: '/productImg/bauer_hockey_helmet.webp',
    description:'Whether they’re passing, shooting or handling the puck, the Bauer Vapor X2.9 Junior Hockey Gloves keep young players’ growing hands flexible and free to move with a two-piece thumb. ',
    brand: 'Bauer',
    category: 'Helmet',
    price: 119.98,
    countInStock: 3,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Bauer Hockey Skates',
    image: '/productImg/bauer_hockey_skates.webp',
    description:'Break into the game with the Bauer NSX Senior Hockey Skates - a great option for those new to the game and recreational players looking to upgrade. The microfiber liner and anaform ankle pads keep you dry and comfortable throughout the game.',
    brand: 'Bauer',
    category: 'Skates',
    price: 109.99,
    countInStock: 4,
    rating: 4.5,
    numReviews: 1,
  },
  {
    name: 'Bauer Hockey Pants',
    image: '/productImg/bauer_hockey_pants.webp',
    description:'The Bauer NSX Senior Hockey Pants are a great option for recreational league players as well as those new to the game. The tapered design was created with stance, fit and stride characteristics in mind for improved mobility no matter what position you play on the ice.',
    brand: 'Bauer',
    category: 'Pants',
    price: 69.99,
    countInStock: 0,
    rating: 2.5,
    numReviews: 3,
  },
  {
    name: 'Bauer Hockey Stick(Vapor)',
    image: '/productImg/bauer_stick.jpeg',
    description:'Get the puck on and off the blade as quick as possible. The Vapor X2.7 is the lightest low kick stick at this price point across the industry. A Max Balance Blade provides reinforced blade edges to reduce weight and improve balance, without sacrificing durability. It also contains QRT TECHNOLOGY within a quick release taper that works with the round shaft, stiff blade to accelerate the puck off the stick. For added visual richness, there’s also a bright color pop across the stick.',
    brand: 'Bauer',
    category: 'Stick Vapor',
    price: 129.99,
    countInStock: 6,
    rating: 3.5,
    numReviews: 2,
  },
  { 
    name: 'CCM Chest Protector ',
    image: '/productImg/ccm_chest_protector.webp',
    description:'Get the puck on and off the blade as quick as possible. The Vapor X2.7 is the lightest low kick stick at this price point across the industry. A Max Balance Blade provides reinforced blade edges to reduce weight and improve balance, without sacrificing durability. It also contains QRT TECHNOLOGY within a quick release taper that works with the round shaft, stiff blade to accelerate the puck off the stick. For added visual richness, there’s also a bright color pop across the stick.',
    brand: 'Bauer',
    category: 'Stick Vapor',
    price: 129.99,
    countInStock: 6,
    rating: 3,
    numReviews: 1,
  },
  {
    name: 'CCM Basic ProtectiveKit ',
    image: '/productImg/ccm_basic_protectivekit.jpg',
    description:'CCM Youth Jetspeed 5-Piece Hockey Package',
    brand: 'CCM',
    category: 'ProtectiveKit',
    price: 129.99,
    countInStock: 6,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'CCM Hockey Skates ',
    image: '/productImg/ccm_skates.jpg',
    description:'Break into the game with the Bauer NSX Senior Hockey Skates - a great option for those new to the game and recreational players looking to upgrade. The microfiber liner and anaform ankle pads keep you dry and comfortable throughout the game.',
    brand: 'CCM',
    category: 'Skates',
    price: 109.99,
    countInStock: 8,
    rating: 4.5,
    numReviews: 5,
  },
  {
    name: 'Bauer Hockey Backpack ',
    image: '/productImg/hockey_backpack.jpeg',
    description:'The Bauer Premium Hockey Wheeled Backpack has a Strong, durable and tear-resistant 3mm "RIPSTOP" Polyester fabric, with 450D Heavy-duty PVC fabric backing. The Backpack features a large "U" shaped front opening that features MULTIFLO, a two layer ventilation system. The Premium Hockey Wheeled Backpack features durable internally constructed handle and inline wheels with a Waterproof bottom. With two large external vented skate pockets positioned for comfort and balance and adjustable backpack straps with top grab handle that is reinforced with rivets this bag has all you need to get to the game or practice in style. Other features are Heavy duty double zippers with nylon pulls, Ventilation grommets at sides allow air to pass through and Two external and one internal accessory pockets. Dimensions: 27" x 18" x 18"',
    brand: 'Bauer',
    category: 'Bag',
    price: 109.99,
    countInStock: 8,
    rating: 3,
    numReviews: 2,
  },
  {
    name: 'Hockey Jersey ',
    image: '/productImg/hockey_jersey.jpeg',
    description:'Practice with a purpose with the CCM Quicklite 6000 Junior Practice Jersey featuring high performance fabric that keeps you dry, cool and comfortable on the ice. The new knitting construction provides optimal colour fastness post embellishment and enhanced snag resiistance.',
    brand: 'CCM',
    category: 'Jersey',
    price: 15.98,
    countInStock: 20,
    rating: 5,
    numReviews: 3,
  },
  {
    name: 'Hockey Jock Short ',
    image: '/productImg/hockey_jock_shorts.jpeg',
    description:'The 361 Shock Doctor Core Loose Hockey Short is the superior choice for those players who prefer a loose hockey short. We took all of the great features from our previous loose hockey short and updated them to make a more advanced short.',
    brand: 'CCM',
    category: 'Jock Short',
    price: 30.98,
    countInStock: 10,
    rating: 4.5,
    numReviews: 4,
  },
  { 
    name: 'Hockey Leg Guard ',
    image: '/productImg/hockey_leg_guard.jpeg',
    description:'The Vapor 2X Shin Guard is for the skilled player. It provides full coverage protection, performance and comfort in a lightweight package. Additionally, the X-LITE SHIELD delivers a deep fit on your leg while the Anchor strap and TUNE FIT strap secure the pad in place. Finally, a HYPERLITE HD calf guard adds even more full protection coverage.',
    brand: 'Bauer',
    category: 'Leg Guard',
    price: 150.29,
    countInStock: 4,
    rating: 4,
    numReviews: 2,
  },
  {
    name: 'Hockey Neck Guard',
    image: '/productImg/hockey_neck_guard.jpeg',
    description:'The Bauer Supreme Senior Goalie Neck Guard combines revolutionary G-FORM and XRD materials to absorb energy and protect you from high force impacts so you can stay in the game.',
    brand: 'Bauer',
    category: 'Neck Guard',
    price: 69.29,
    countInStock: 4,
    rating: 4,
    numReviews: 4,
  },
  {
    name: 'Bauer Hockey Puck',
    image: '/productImg/bauer_puck.jpg',
    description:'Standard ice hockey puck Black',
    brand: 'Bauer',
    category: 'Pucks',
    price: 1.99,
    countInStock: 50,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: 'Bauer Hockey Pucks',
    image: '/productImg/hockey_pucks.jpeg',
    description:'Standard ice hockey puck Black',
    brand: 'Bauer',
    category: 'Pucks',
    price: 1.99,
    countInStock: 50,
    rating: 5,
    numReviews: 2,
  },
  {
    name: 'Hockey Socks',
    image: '/productImg/hockey_socks.jpeg',
    description:'CCM S100 hockey socks are made from 100% polyester knit for durability and feature an elasticized ankle which holds the shin guards properly in place and enhances fit.',
    brand: 'CCM',
    category: 'Socks',
    price: 1.99,
    countInStock: 50,
    rating: 2.5,
    numReviews: 3,
  },
  { 
    name: 'Hockey Whole Kit',
    image: '/productImg/hockey_whole_kit.jpg',
    description:'Valued hockey protective kit with stick and skates packs',
    brand: 'No Brand',
    category: 'Socks',
    price: 750.89,
    countInStock: 3,
    rating: 3.5,
    numReviews: 4,
  },
]

// before add type:"module" in package.jason
//　↓↓↓↓↓↓↓↓↓↓↓↓
// module.exports = products;

// after add type:"module" in package.jason
export default  products;
