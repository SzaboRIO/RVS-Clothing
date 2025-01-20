function BDprodutos(){

    const produtos = [
        { id: 1, nome: "FAUX FUR KNIT SWEATER WITH FASTENINGS", preco: 19.99, descricao: "Round neck, long sleeve sweater. Features a faux fur knit detail and front fastenings. Ribbed trims.",   src: "img/Produtos/1 - Women/1 - Sweaters/1.jpg" },
        { id: 2, nome: "CHUNKY KNIT CARDIGAN WITH PETER PAN COLLAR", preco: 22.99, descricao: "Cardigan with a Peter Pan collar and short sleeves. Front fastening with matching covered buttons.",   src: "img/Produtos/1 - Women/1 - Sweaters/2.jpg" },
        { id: 3, nome: "KNIT WAISTCOAT WITH SCARF DETAIL", preco: 27.99, descricao: "Knit waistcoat with a V-neck, scarf detail and sleeveless design. Ribbed trims. *30% OFF - Price shown includes the discount. 30% OFF* ",   src: "img/Produtos/1 - Women/1 - Sweaters/3.jpg" },
        { id: 4, nome: "KNIT TOP WITH GATHERED SIDES", preco: 9.99, descricao: "Top with an asymmetric neckline, long sleeves and gathered detail on the sides.",   src: "img/Produtos/1 - Women/1 - Sweaters/4.jpg" },
        { id: 5, nome: "METALLIC THREAD SHORT SLEEVE TOP", preco: 12.99, descricao: "Top made from a cotton blend yarn. Featuring a round neckline, short sleeves and metallic thread appliqué detail.",   src: "img/Produtos/1 - Women/1 - Sweaters/5.jpg" },
        { id: 6, nome: "FADED-EFFECT T-SHIRT WITH A V-NECKLINE", preco: 6.99, descricao: "Faded-effect T-shirt made of a cotton blend. Featuring a ribbed V-neckline and very short sleeves. Due to the dyeing and fading process, the colour on each garment is unique and special, therefore it may differ from what is shown in the photo.",   src: "img/Produtos/1 - Women/2 - T-Shirts/6.jpg" },
        { id: 7, nome: "GIRLS PRINT T-SHIRT", preco: 9.99, descricao: "T-shirt with a round neck and short sleeves. Girl print on the front.",   src: "img/Produtos/1 - Women/2 - T-Shirts/7.jpg" },
        { id: 8, nome: "COTTON T-SHIRT WITH BELT", preco: 7.99, descricao: "T-shirt made of 100% cotton yarn. Round neck and short sleeves. Matching fabric belt with metal buckle.",   src: "img/Produtos/1 - Women/2 - T-Shirts/8.jpg" },
        { id: 9, nome: "FADED-EFFECT T-SHIRT WITH PRINT", preco: 4.99, descricao: "Faded T-shirt made of 100% spun cotton. Featuring a round neck, short drop-shoulder sleeves and a contrast print and slogan.",   src: "img/Produtos/1 - Women/2 - T-Shirts/9.jpg" },
        { id: 10, nome: "COTTON TOP", preco: 4.99, descricao: "Sleeveless V-neck top made of 100% spun cotton.  *30% OFF - Price shown includes the discount. 30% OFF* ",   src: "img/Produtos/1 - Women/2 - T-Shirts/10.jpg" },
        { id: 11, nome: "EMBROIDERED CULOTTES", preco: 19.99, descricao: "High-waist trousers with side in-seam pockets. Featuring a cropped and wide-leg design, embroidery and hook, inside button and zip fastening at the front.",   src: "img/Produtos/1 - Women/3 - Pants/11.jpg" },
        { id: 12, nome: "ZW COLLECTION 100% LINEN PALAZZO TROUSERS", preco: 19.99, descricao: "Mid-rise trousers made of 100% spun linen. Featuring an elasticated waistband with adjustable drawstrings. Side in-seam pockets. Wide-leg fit.",   src: "img/Produtos/1 - Women/3 - Pants/12.jpg" },
        { id: 13, nome: "PRINTED STRAIGHT-CUT TROUSERS", preco: 19.99, descricao: "High-waist trousers with an elasticated waistband at the back. Side pockets. Straight-leg design.",   src: "img/Produtos/1 - Women/3 - Pants/13.jpg" },
        { id: 14, nome: "PRINTED TROUSERS WITH TIE", preco: 17.99, descricao: "High-waist trousers made of 23% linen. Featuring a tie belt in the same fabric and invisible side zip fastening.",   src: "img/Produtos/1 - Women/3 - Pants/14.jpg" },
        { id: 15, nome: "100% LINEN STRAIGHT TROUSERS", preco: 19.99, descricao: "High-waist trousers made of 100% linen. Featuring an elasticated waistband at the back. Side pockets. Straight-leg design. *30% OFF - Price shown includes the discount. 30% OFF* ",   src: "img/Produtos/1 - Women/3 - Pants/15.jpg" },
        { id: 16, nome: "SATIN HIGH-HEEL SLINGBACK SHOES", preco: 15.99, descricao: "High-heel slingback shoes in satin-effect fabric. Elastic strap at the back. Pointed toe.",   src: "img/Produtos/1 - Women/4 - Shoes/16.jpg" },
        { id: 17, nome: "VELVET-EFFECT HEELED BOOTS", preco: 29.99, descricao: "Velvet-effect heeled boots. Wide leg. Round toe.",   src: "img/Produtos/1 - Women/4 - Shoes/17.jpg" },
        { id: 18, nome: "ANIMAL PRINT STILETTO ANKLE BOOTS", preco: 15.99, descricao: "Animal print ankle boots. Stiletto heel. Zip fastening. Pointed toe.",   src: "img/Produtos/1 - Women/4 - Shoes/18.jpg" },
        { id: 19, nome: "FAUX PATENT SANDALS WITH STRAP", preco: 19.99, descricao: "Faux patent high-heel sandals. Strap across the front. Buckled ankle strap fastening.  *30% OFF - Price shown includes the discount. 30% OFF* ",   src: "img/Produtos/1 - Women/4 - Shoes/19.jpg" },
        { id: 20, nome: "RUBBERISED SPORTY STRAPPY SANDALS", preco: 15.99, descricao: "Sporty sandals with a rubberised finish. Buckled straps on the front. Chunky sole. Round toe.",   src: "img/Produtos/1 - Women/4 - Shoes/20.jpg" },
        { id: 21, nome: "SILK - COTTON CARDIGAN", preco: 29.99, descricao: "Relaxed fit cardigan made of a lightweight spun silk and cotton blend. Featuring a V-neck and long sleeves. Ribbed trims. Front button fastening.",   src: "img/Produtos/2 - Men/1 - Sweaters/21.jpg" },
        { id: 22, nome: "TEXTURED SWEATER X NANUSHKA", preco: 49.99, descricao: "Relaxed fit sweater made of spun yarn with a wool blend. Featuring a textured finish, a round neck, long sleeve and ribbed trims.",   src: "img/Produtos/2 - Men/1 - Sweaters/22.jpg" },
        { id: 23, nome: "SPRAY PRINT SWEATER", preco: 25.99, descricao: "Relaxed fit sweater. Round neck and long sleeves. All-over spray effect print. Washed effect. Ribbed trims.",   src: "img/Produtos/2 - Men/1 - Sweaters/23.jpg" },
        { id: 24, nome: "TEXTURED COTTON SWEATER", preco: 12.99, descricao: "Relaxed fit sweater made of spun cotton fabric. Featuring a round neck, long sleeves and ribbed trims.  *30% OFF - Price shown includes the discount. 30% OFF* ",   src: "img/Produtos/2 - Men/1 - Sweaters/24.jpg" },
        { id: 25, nome: "CUTWORK TOP", preco: 15.99, descricao: "Knit top made of an open-textured fabric. Round neck, short sleeves and ribbed trims.",   src: "img/Produtos/2 - Men/1 - Sweaters/25.jpg" },
        { id: 26, nome: "BASIC SLIM FIT T-SHIRT", preco: 5.99, descricao: "Slim fit T-shirt. Round neck and short sleeve.",   src: "img/Produtos/2 - Men/2 - T-Shirts/26.jpg" },
        { id: 27, nome: "T-SHIRT WITH CONTRAST PRINT", preco: 9.99, descricao: "Relaxed fit T-shirt featuring a round neck, short sleeves and a contrast front print.",   src: "img/Produtos/2 - Men/2 - T-Shirts/27.jpg" },
        { id: 28, nome: "FADED T-SHIRT WITH SLOGAN", preco: 12.99, descricao: "Relaxed fit T-shirt. Round neck and short sleeves. Faded effect. Matching patch appliqué on the front. The garment is unique thanks to its special washing process. For this reason, it may differ in colour from that of the photo. The garment is unique thanks to its special washing process. For this reason, it may differ in colour from that of the photo.",   src: "img/Produtos/2 - Men/2 - T-Shirts/28.jpg" },
        { id: 29, nome: "KNIT T-SHIRT WITH ABSTRACT PRINT", preco: 9.99, descricao: "Relaxed fit T-shirt made of spun cotton fabric. Featuring a round neck, short sleeves and an all-over spray-effect print.",   src: "img/Produtos/2 - Men/2 - T-Shirts/29.jpg" },
        { id: 30, nome: "FADED EMBROIDERED T-SHIRT", preco: 9.99, descricao: "Relaxed fit faded T-shirt featuring a round neck, short sleeves and matching embroidery on the front. The garment is unique thanks to its special washing process. For this reason, it may differ in colour from that of the photo.  *30% OFF - Price shown includes the discount. 30% OFF* ",   src: "img/Produtos/2 - Men/2 - T-Shirts/30.jpg" },
        { id: 31, nome: "LIMITED EDITION LEATHER BALLOON FIT TROUSERS", preco: 0, descricao: "Balloon fit trousers made of leather. Front pockets and welt back pockets. Zip fly and concealed metal hook fastening.",   src: "img/Produtos/2 - Men/3 - Pants/31.jpg" },
        { id: 32, nome: "TEXTURED SUIT TROUSERS", preco: 19.99, descricao: "Slim fit trousers made of a wool blend. Featuring front pockets, back buttoned jetted pockets and front zip and button fastening.",   src: "img/Produtos/2 - Men/3 - Pants/32.jpg" },
        { id: 33, nome: "ANIMAL PRINT RELAXED FIT TROUSERS", preco: 19.99, descricao: "Relaxed fit trousers made of ripstop fabric, resistant to tears. Front pockets and detail of asymmetric back pockets. Multifunctional strip application on legs. Zip fly and top button fastening.",   src: "img/Produtos/2 - Men/3 - Pants/33.jpg" },
        { id: 34, nome: "LIMITED EDITION PINSTRIPE SKINNY TROUSERS", preco: 25.99, descricao: "Skinny fit trousers in stretch fabric. Elastic waistband. Front pockets with concealed zip fastening. Adjustable zipped hems. Concealed metal hook and zip fly fastening.",   src: "img/Produtos/2 - Men/3 - Pants/34.jpg" },
        { id: 35, nome: "LIMITED EDITION SKINNY FIT TROUSERS", preco: 25.99, descricao: "Slim fit trousers crafted from a wool blend fabric. Waistband with double front pleat detail. High-waist. Side pockets and rear welt pockets. Concealed zip fly and metal hook fastening.  *30% OFF - Price shown includes the discount. 30% OFF* ",   src: "img/Produtos/2 - Men/3 - Pants/35.jpg" },
        { id: 36, nome: "MESH SKATE TRAINERS", preco: 19.99, descricao: "Skate trainers. Upper made of combined pieces and materials. Six-eyelet facing. Chunky sole.",   src: "img/Produtos/2 - Men/4 - Shoes/36.jpg" },
        { id: 37, nome: "HIGH-TOP TRAINERS WITH TOPSTITCHING", preco: 15.99, descricao: "High-top trainers. Upper with topstitching detail and split suede leather heel counter detail. Nine-eyelet facing. Chunky, irregular sole.",   src: "img/Produtos/2 - Men/4 - Shoes/37.jpg" },
        { id: 38, nome: "LEATHER ESPADRILLES", preco: 22.99, descricao: "Espadrilles made of leather with a split leather finish. Back pull tab for slipping on with ease. Jute-covered sole.  *30% OFF - Price shown includes the discount. 30% OFF* ",   src: "img/Produtos/2 - Men/4 - Shoes/38.jpg" },
        { id: 39, nome: "FABRIC HIGH-TOP TRAINERS", preco: 15.99, descricao: "High-top sneakers. Upper made of cotton fabric. Nine-eyelet facing. Chunky sole with an irregular finish.",   src: "img/Produtos/2 - Men/4 - Shoes/39.jpg" },
        { id: 40, nome: "SMART LEATHER SHOES", preco: 39.99, descricao: "Classic derby shoes. Four-eyelet facing. Contrast sole. Round toe.",   src: "img/Produtos/2 - Men/4 - Shoes/40.jpg" }
      ];

    return produtos;

}

function BDcategorias(id){
    let op = Number(id)

    let temp = [1,2]
    //separação de categorias
    switch (op){
        //women
        //sweaters
        case 1:
            temp = [1, 2, 3, 4, 5];
        break;
        // t-shirts
        case 2:
            temp = [6, 7, 8, 9, 10];
        break;
        //pants
        case 3:
            temp = [11, 12, 13, 14, 15];
        break;
        //shoes
        case 4:
            temp = [16, 17, 18, 19, 20];
        break;

        //men
        // sweaters
        case 5:
            temp = [21, 22, 23, 24, 25];
        break;
        // t-shirts
        case 6:
            temp = [26, 27, 28, 29, 30];
        break;
        // pants
        case 7:
            temp = [31, 32, 33, 34, 35];
        break;
        // shoes
        case 8:
            temp = [36, 37, 38, 39, 40];
        break;

        //promos
        case 9:
            temp = [3,10,15,19,24,30,35,38];
        break;

        //top
        case 11:
            temp = [1,8,13,17,22,28,33,36];
        break;

        //new
        case 13:
            temp = [2,9,14,18,23,29,34,37];
        break;

        //todos
        //women
        case 15:
            temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        break;
        //men
        case 16:
            temp = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
        break;

    }

    return temp
}