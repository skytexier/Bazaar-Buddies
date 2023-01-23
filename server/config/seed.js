const db = require('./connection');

const {User, Product, Category } = require ('../models');

//creates seeds for the assigned categories
db.once('open', async () => {

    await Category.deleteMany();

    const categories = await Category.insertMany([
        {name: 'Antiques' },
        {name: 'Appliances' },
        {name: 'Autoparts' },
        {name: 'Books' },
        {name: 'Clothes' },
        {name: 'Electronics' },
        {name: 'Furniture' },
        {name: 'Other' },
        {name: 'Home Goods' },
        {name: 'Jewelry' },
        {name: 'Motors'},
        {name: 'Sporting' },
        {name: 'Tools' },
    ]);

    console.log('Categories seeded');

    await Product.deleteMany();

    await User.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Celtic Sword and Scabbard',
            description: 'Metalwork-Bronze from 60 BCE',
            image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/470298/945876/main-image',
            price: "9999",
            category: categories[0]._id,
        },
        {
            name: 'Rocket Appartamento',
            description: 'Custom green Rocket Appartamento with golden trim',
            image: 'https://i.redd.it/2s8rb94pyw171.jpg',
            price: "1650",
            category: categories[1]._id,
        },
        {
            name: 'Random Engines',
            description: 'Random engines from various cars and motorcycles',
            image: 'https://www.brandonauto.com/images/Bas%207.jpg',
            price: "0",
            category: categories[2]._id,
        },
        {
            name: 'Do Androids Dream of Electric Sheep - Philip K. Dick',
            description: 'Pre-Owned book',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519481930l/7082.jpg',
            price: "0",
            category: categories[3]._id,
        },
        {
            name: 'Mens Drive Scorpion Jacket',
            description: '100% Authentic Satin Material. Silk polyester Lining.',
            image: 'https://i.ebayimg.com/images/g/AogAAOSwq0RiqHRQ/s-l1600.jpg',
            price: "54",
            category: categories[4]._id,
        },
        {
            name: ' EVGA GeForce RTX 3090',
            description: 'Real boost clock: 1800 MHz; Memory detail: 24576 MB GDDR6X',
            image: 'https://assets-prd.ignimgs.com/2022/10/24/zotacrtx3090-1666638008356.jpg',
            price: "1195",
            category: categories[5]._id,
        },
        {
            name: 'Kammock Portabe Hammock Stand, Gray',
            description: 'Get your hammock time in regardless of the abundance of trees with the Kammok Swiftlet Portable Hammock Stand',
            image: 'https://www.rei.com/media/b20865e3-e077-47d9-82dd-c8ff80621889?size=784x588',
            price: 280,
            category: categories[6]._id,
        },
        {
            name: 'Double Dorje',
            description: 'Tibetan Nepal Ritual Tool Hand Double Vajra/Dorje collectible',
            image: 'https://m.media-amazon.com/images/I/91254gsekYL.jpg',
            price: "147",
            category: categories[7]._id,
        },
        {
            name: 'The Doomba',
            description: 'Home defense roomba',
            image: 'https://i.kym-cdn.com/entries/icons/original/000/011/101/doom.jpg',
            price: "1500",
            category: categories[8]._id,
        },
        {
            name: '18k Gold Heart Necklace',
            description: 'Material: Yellow Gold Filled. Main Color: Gold.',
            image: 'https://i.ebayimg.com/images/g/S0YAAOSw9Wpi8MN5/s-l500.jpg',
            price: "8",
            category: categories[9]._id,
        },
        {
            name: 'Kanedas Bike from Akira',
            description: 'An iconic replica motorcycle with a 1500cc engine',
            image: 'https://s40234.pcdn.co/wp-content/uploads/2022/01/Akira-kaneda-manga-motorcycle-2.jpg',
            price: "25000",
            category: categories[10]._id,
        },
        {
            name: '2021 Giant Pakyak E+ Cargo e-bike',
            description: 'The Pakyak E+ electric cargo bike combines powerful pedaling support with thoughtful functionality that makes it fun to simplify your life and spend more time riding instead of driving',
            image: 'https://cdn.shopify.com/s/files/1/0474/1310/0705/products/Pakyak-E_Color-B_1.jpg?v=1645889581',
            price: 1500,
            category: categories[11]._id,
        },
        {
            name: 'TR Industrial-Grade 4-Piece Electric Demolition Jack Hammer',
            description: '3 Bits - Point, Flat, Scoop Shovel Spade Bit',
            image: 'https://m.media-amazon.com/images/I/614khvIpG+L.jpg',
            price: "279",
            category: categories[12]._id,
        },
    ]);

    console.log('Products seeded')

    await User.create({
        name: 'usertest',
        email: 'test@gmail.com',
        password: 'password',
        posts: products[0]._id
    });

    console.log('Test user seeded')

    process.exit()
})