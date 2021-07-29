const db = require('./connection');
const { User, Product, Farm } = require('../models');

db.once('open', async () => {
  await Farm.deleteMany();

  const farms = await Farm.insertMany([
    { name: 'Albion Orchards' },
    { name: 'Davis Family Farm' },
    { name: 'Dixie Orchards' },
    { name: 'Horseshoe Hill Farm' },
    { name: 'Humbervalley Honey' }
  ]);

  console.log('farms seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Apples',
      description:
        'Sweet and juicy apples fresh off our fields.',
      image: 'apples.jpg',
      farm: farms[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Canned Coffee',
      image: 'canned-coffee.jpg',
      farm: farms[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Strawberries',
      farm: farms[1]._id,
      description:
        'Strawberries fresh off our fields.',
      image: 'strawberries.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Sweet Cherries',
      farm: farms[1]._id,
      description:
        'Sweet cherries. Perfect for snacking.',
      image: 'sweet-cherries.jpeg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Tart Cherry Juice',
      farm: farms[1]._id,
      description:
        'Tart cherry juice is sour to taste and provides a higher amount of anthocyanins compared to black cherry juice, which is sweeter in taste and has less anthocyanins. Anthocyanins promote anti-inflammatory processes in the body. Both are great, nutritious options',
      image: 'cherry-juice.png',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Meyer Lemon Tree',
      farm: farms[2]._id,
      description:
        'Grow your own lemons in your garden!',
      image: 'lemon-tree.jpg',
      price: 89.99,
      quantity: 30
    },
    {
      name: 'Ornamental Pineapple Plant',
      farm: farms[2]._id,
      description:
        'Aesthetically pleasing pineapple plant for all your home decor needs.',
      image: 'pineapple-plant.jpg',
      price: 59.99,
      quantity: 30
    },
    {
      name: 'Bath Salts with Lavender EO',
      farm: farms[3]._id,
      description:
        'A mix of Himalayan, Dead Sea and Epson salts with pure essential oils of lavender, Bergamot and Ylang Ylang. The lavender essential oil is distilled on our farm. 300 grams.',
      image: 'bath-salts.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Cheddar & Herb Baguette',
      farm: farms[4]._id,
      description: 'With a nice crunch to the outside crust to a soft moist inside loaf this cheddar and herb baguette is a perfect combo for a garlic spread loaf. Either fresh or crisped up in the oven this loaf is the perfect addition to your dinner ',
      image: 'cheddar-baguette.jpg',
      price: 5.99,
      quantity: 1000
    },
    {
      name: 'Cheddar Jalapeno Pretzels',
      farm: farms[4]._id,
      description:
        'Soft Old Cheddar and Jalapeño Pretzels. Similar to a pizza bun, only with a pretzel dough. Delicious, very soft and fresh. covered in old melted cheddar and jalapeños.',
      image: 'cheddar-jalapeno.jpeg',
      price: 4.99,
      quantity: 1000
    },
    {
      name: 'Cheddar Pretzels',
      farm: farms[4]._id,
      description:
        'Covered in Melted Old Cheddar. Similar to a Cheddar Pizza bun, Great for school and on the go snack. Fresh and soft!',
      image: 'cheddar-pretzels.jpg',
      price: 3.99,
      quantity: 100
    },
    {
      name: 'Fresh Italian Sausages',
      farm: farms[4]._id,
      description:
        'These sausages are excellent on the BBQ or baked in the oven with your favourite potatoes and vegetable. Thick and juicy with so much flavour. They come vacuumed sealed and have never been frozen, fresh ready for the BBQ or ready for freezing.',
      image: 'italian-sausage.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'pamela',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    username: 'drez23',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
