const productsData = [
    // Acne Care Products
    { id: 1, name: "Acne Solution Gel", category: "acne", price: "Rs.450", image: "https://images.qvc.com/is/image/a/84/a414684.001" },
    { id: 2, name: "Anti-Blemish Serum", category: "acne", price: "Rs.550", image: "https://tse3.mm.bing.net/th?id=OIP.EK-b-vH9sJynMwM4VYls5wHaKN&pid=Api&P=0&h=180" },
    { id: 3, name: "Purifying Cleanser", category: "acne", price: "Rs.650", image: "https://tse4.mm.bing.net/th?id=OIP.3UXGJdCvnJzABMG78EVkjQAAAA&pid=Api&P=0&h=180" },
    { id: 4, name: "Spot Treatment", category: "acne", price: "Rs.750", image: "http://dy6g3i6a1660s.cloudfront.net/LD_2d9Y-SsRhGFFB9WsOQAPoA-g/p_550x550-2f/clinique-acne-solutions-spot-healing-gel.jpg" },
    { id: 5, name: "Oil-Free Moisturizer", category: "acne", price: "Rs.450", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-clinique-oil-free-1503952498.jpg?crop=1xw:1xh;center,top&resize=768:*" },
    
    // Pore Cleansing Products
    { id: 6, name: "Deep Pore Mask", category: "pores", price: "Rs.450", image: "https://i.pinimg.com/originals/30/e4/a5/30e4a57f9497d22a9b6ddf065bda79c0.jpg" },
    { id: 7, name: "Charcoal Cleanser", category: "pores", price: "Rs.650", image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/lmi/lmi10130/l/9.jpg" },
    { id: 8, name: "Pore Refining Toner", category: "pores", price: "Rs.750", image: "https://static.chemistwarehouse.com.au/ams/media/pi/71314/2DF_800.jpg" },
    { id: 9, name: "Exfoliating Scrub", category: "pores", price: "Rs.650", image: "https://i5.walmartimages.com/asr/c1e01eab-512e-46cf-81d5-c41872befb60_1.4ab02d5ad307303ffb066835f309fe30.jpeg" },
    { id: 10, name: "Clay Mask", category: "pores", price: "Rs.750", image: "https://tse1.mm.bing.net/th?id=OIP.BfNg0b3L8q-WxhWAwmgbgAHaHa&pid=Api&P=0&h=180" },

   //Hydration
   { id: 11, name: "Hyaloronic Acid Serum", category: "hydration", price: "Rs.850", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1686942155-81pYR5vNvjL.jpg?crop=1xw:1.00xh;center,top&resize=980:*" },
   { id: 12, name: "Vitamin C Face Wash", category: "hydration", price: "Rs.470", image: "https://cosmedplanet.com/wp-content/uploads/2022/04/Screenshot_20220421-183851.jpg" },
   { id: 13, name: "Acne Scar Remover Combo", category: "hydration", price: "Rs.1480", image: "https://post.healthline.com/wp-content/uploads/2022/09/2518143-2497075-Market-Clinical-CLONE-The-15-Best-Products-to-Get-Rid-of-Acne-Scars-According-to-Dermatologists-1200x628-Facebook-1200x628.jpg" },
   { id: 14, name: "Hyalauronic Toner", category: "hydration", price: "Rs.950", image: "https://s3.images-iherb.com/isk/isk73834/v/7.jpg" },
   { id: 15, name: "Rose water", category: "hydration", price: "Rs.550", image: "https://action.com/hostedassets/CMSArticleImages/18/33/3011943_8719238032838-111_01.png" },
   //Collagem Boost
   { id: 16, name: "Collagen Sheet Mask", category: "collagen", price: "Rs.650", image: "https://tse3.mm.bing.net/th?id=OIP.NMrhVmldA7i2ZAcYks8WFAHaHa&pid=Api&P=0&h=180" },
   { id: 17, name: "Collagen Moisturiser", category: "collagen", price: "Rs.750", image: "https://m.media-amazon.com/images/I/518sT2xXILL._SL1024_.jpg" },
   { id: 18, name: "Collagen Serum", category: "collagen", price: "Rs.850", image: "https://i5.walmartimages.com/asr/ff8df93c-5120-43d9-a433-458e23aa42f0_1.af0b3bb902e21d78a63e688cf7ea65f0.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" },
   { id: 19, name: "Collagen Boost Serum", category: "collagen", price: "Rs.550", image: "https://i5.walmartimages.com/asr/69ebece7-69c8-4234-a468-e8cf18d62efe.ae0442e99a4538441b25389a7903f141.png" },
   { id: 20, name: "Collagen Tablets", category: "collagen", price: "Rs.450", image: "https://tse3.mm.bing.net/th?id=OIP.A-VXyjkIDo9796lUUcH3tgHaHa&pid=Api&P=0&h=180" },
   //Sensitive skin
   { id: 21, name: "Vitamin C Serum", category: "sensitive", price: "Rs.450", image: "https://www.garnier.ch/-/media/project/loreal/brand-sites/garnier/emea/ch/new-product/vitamin-c/super-glow-serum/packshot-vit-c-serum.png?rev=9495fe36768248988dd985bade0bb5df" },
   { id: 22, name: "Niacinamide Serum", category: "sensitive", price: "Rs.480", image: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4b79241d/images/hi-res/SKU/SKU_2362/548882_swatch.jpg" },
   { id: 23, name: "Oily Skin Moisturiser", category: "sensitive", price: "Rs.480", image: "https://www.laroche-posay.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-laroche-posay-master-catalog/default/dw288fdc21/product/Toleriane-Double-Repair-Face-Moisturizer-Matte-NEW.R2.jpg?sw=791&sh=791&sm=cut&sfrm=jpg&q=70" },
   { id: 24, name: "Oily Skin Sunscreen", category: "sensitive", price: "Rs.950", image: "https://www.sheknows.com/wp-content/uploads/2018/08/Clinique_Broad_Spectrum_SPF_30_Sunscreen_Oil-Free_Face_Cream.jpeg" },
   { id: 25, name: "Barrier repair Serum", category: "sensitive", price: "Rs.480", image: "https://turiscantik.com/wp-content/uploads/2022/04/1649925259663_copy_908x908.jpeg" },
];
