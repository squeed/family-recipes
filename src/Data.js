var RenderData = {
    Relations: {
        male: [ "Uncle", "Baba", "Papa", "Father", "Big", "Great-uncle", "Grandpa", "Little"],
        female: ["Auntie", "Aunt", "Great-aunt", "Grammy", "Big", "Nana", "Grandma", "Mama", "Sister", "Little"]
    },

    Names:  {
        male: [
            "Nunzio's", "Gunther's", "Bobby's", "Jimbo's", "Casey's", "Peter's", "Walter's", "Mickey's", "Phil's", "Pablo's", "Skippy's", "Vito's", "Ray's", "Tony's", "Chippy's", "George's", "Nicky's", "Emerson's", "Red's", "Jimmy's", "Tom's", "Dieter's", "Hans'"
        ],
        female: [
            "Fiona's", "Dagmar's", "Molly's", "Alanna's", "Betsy's", "Doris'", "Jacqueline's", "Emmy's", "Eleanor's", "Clementine's", "Yolanda's", "Anne's", "Gina's", "Dotty's", "Brady's", "Lottie's", "Mitzi's", "Trudy's", "Babette's", "Kitty's", "Rosie's"
        ]
    },

    Modifiers: [
        "Spicy",
        "Easy",
        "Never-Fail",
        "Old-style",
        "Country",
        "Dutch",
        "Swedish",
        "Classic",
        "Festive",
        "Holiday",
        "Signature",
        "Neapolitan",
        "Christmas",
        "Italian",
        "Fancy",
        "Sinful",
        "Famous",
        "Favorite",
        "French",
        "Southern",
        "Vegetarian",
        "One-Pot",
        "Healthy",
        "Vegan",
        "Good Ol'",
        "Saturday Night",
        "Old-fashioned",
        "Refrigerator",
        "No-bake",
        "Irish"
    ],

    MainIngredients: [
        {
            n: "Tomato", 
            i: "15 ripe tomatoes",
            s: "In a blender, puree the tomato and the "
        },{
            n: "Chicken", 
            i: "1 medium-size chicken",
            s: "In a large bowl, toss the chicken with the "
        },{
            n: "Banana", 
            i: "3 ripe bananas",
            s: "Peel the bananas, and mash them together with the "
        },{
            n: "Asparagus", 
            i: "2 lbs green asparagus",
            s: "Cut ends and tips off the asparagus. In a large roasting pan, toss with "
        },{
            n: "Spaghetti", 
            i: "1 box spaghetti",
            s: "Cook spaghetti according to directions on box and drain. In a large bowl, toss warm noodles with "
        },{
            n: "Chocolate", 
            i: "12 oz chocolate",
            s: "In a saucepan, melt chocolate over low heat, and gently stir in "
        },{
            n: "Peanut Butter", 
            i: "1 c peanut butter",
            s: "In a large bowl, stir peanut butter together with "
        },{
            n: "Cabbage", 
            i: "1 medium green cabbage",
            s: "Chop cabbage into thin ribbons, and toss with "
        },{
            n: "Pecan", 
            i: "2 c pecans",
            s: "Toast and chop pecans and let cool. In a large bowl, combine pecans with "
        },{
            n: "Barbeque", 
            i: "2 c barbeque sauce",
            s: "In a large bowl, drizzle barbeque sauce over "
        },{
            n: "Barbeque", 
            i: "2 c barbeque sauce",
            s: "In a large bowl, drizzle barbeque sauce over "
        },{
            n: "Beef", 
            i: "4 lb beef tenderloin",
            s: "In a roasting pan, coat beef tenderloin in "
        },{
            n: "Tequila", 
            i: "16 oz tequila",
            s: "In a large pitcher, mix together tequila and "
        },{
            n: "Venison", 
            i: "3 lb venison chuck roast",
            s: "Place venison in an earthenware bowl, and cover with "
        },{
            n: "Avocado", 
            i: "3 ripe avocados",
            s: "Halve avocados and remove pits and skin. In a small bowl, mash avocado with "
        },{
            n: "Mushroom", 
            i: "16 oz button mushrooms",
            s: "Clean and slice mushrooms, removing stems. In a salad bowl, toss mushrooms with "
        },{
            n: "Green Bean", 
            i: "2 lbs green beans",
            s: "Remove ends from green beans. Toss them in a large bowl together with "
        },{
            n: "Cod", 
            i: "1 skinless cod fillet",
            s: "Place cod on a rimmed baking sheet. Cover with "
        },{
            n: "Jalapeño", 
            i: "8 jalapeño peppers",
            s: "Seed and dice the peppers. Mix with "
        },{
            n: "Strawberry", 
            i: "1 lb strawberries",
            s: "Wash and slice the strawberries, then combine with "
        },{
            n: "Gorgonzola", 
            i: "6 oz gorgonzola",
            s: "Crumble the gorgonzola, and mix with "
        },{
            n: "Macadamia", 
            i: "2 c macadamia nuts",
            s: "Crush the macadamia nuts in a food processor, then mix with "
        },{
            n: "Shrimp", 
            i: "1 lb jumbo shrimp, peeled",
            s: "Toss the shrimp in a large bowl with "
        },{
            n: "Cranberry", 
            i: "8 oz frozen cranberries",
            s: "Thaw the cranberries under warm running water. Mix with "
        },{
            n: "Pineapple", 
            i: "1 can pineapple",
            s: "Drain the pineapple, then combine in a large bowl with "
        },{
            n: "Molasses", 
            i: "1 c molasses",
            s: "Pour the molasses into a large bowl, then mix with "
        },{
            n: "Mexican", 
            i: "1 c mild salsa",
            s: "Mix the salsa with the "
        },{
            n: "Turkey", 
            i: "1 lb ground turkey",
            s: "Brown the turkey over medium heat in a large frying pan. Add the "
        },{
            n: "Whiskey", 
            i: "12 oz bourbon whiskey",
            s: "Pour the whiskey into a large pitcher. Stir in "
        },{
            n: "Lobster", 
            i: "2 1-1/2 lb lobsters",
            s: "Plunge lobsters into boiling water and cook for 2 minutes. Drain and place onto a large baking sheet. Cover cooked lobsters with "
        },{
            n: "Maple", 
            i: "1 c maple syrup",
            s: "In a large bowl, combine maple syrup with "
        },{
            n: "Salmon", 
            i: "2 wild salmon fillets, 6 to 8 ounces each",
            s: "Place the salmon on a rimmed baking sheet, skin down. Cover with "
        },{
            n: "Broccoli", 
            i: "2 medium heads of broccoli (about 1 1/2 lb.)",
            s: "Trim woody ends from broccoli stems. Cut off florets as close to the dark green flowers as possible and break into bite-size pieces. Add to large bowl with "
        },{
            n: "Couscous", 
            i: "3 c couscous",
            s: "Bring 6 c water to a boil. Stir in couscous, cover, and remove from heat. Let the mixture stand for 4 minutes and transfer it to a ceramic or glass bowl, breaking up any lumps with a fork and adding "
        },
        
    ],
    
    SecondaryIngredients: [
	    {
		    n: "flour",
		    i: "2 c all-purpose flour"
	    },{
		    n: "blueberries",
		    i: "12 oz frozen blueberries"
	    },{
		    n: "candied lemon peel",
		    i: "1/2 c candied lemon peel"
	    },{
		    n: "cinnamon",
		    i: "1 tsp cinnamon"
	    },{
		    n: "nutmeg",
		    i: "1 tsp nutmeg"
	    },{
		    n: "cilantro",
		    i: "1 bunch fresh cilantro"
	    },{
		    n: "sesame seeds",
		    i: "2 tbsp sesame seeds"
	    },{
		    n: "lemon juice",
		    i: "1 tbsp lemon juice"
	    },{
		    n: "orange juice",
		    i: "1/2 c orange juice"
	    },{
		    n: "vinegar",
		    i: "1/2 c red wine vinegar"
	    },{
		    n: "mango",
		    i: "1 mango, peeled and chopped"
	    },{
		    n: "eggplant",
		    i: "1 eggplant, diced"
	    },{
		    n: "peppers",
		    i: "3 bell peppers, diced"
	    },{
		    n: "cornflakes",
		    i: "3 c cornflakes"
	    },{
		    n: "broth",
		    i: "2 c chicken broth"
	    },{
		    n: "cream of mushroom soup",
		    i: "1 can cream of mushroom soup"
	    },{
		    n: "cheese",
		    i: "2 c grated cheddar cheese"
	    },{
		    n: "mozzarella",
		    i: "2 c grated mozzarella cheese"
	    },{
		    n: "soy sauce",
		    i: "1/4 c soy sauce"
	    },{
		    n: "tamari",
		    i: "2 tbsp tamari"
	    },{
		    n: "sugar",
		    i: "1 1/4 c white sugar"
	    },{
		    n: "powdered sugar",
		    i: "3/4 c powdered sugar"
	    },{
		    n: "brown sugar",
		    i: "1/2 c brown sugar, firmly packed"
	    },{
		    n: "shallots",
		    i: "4 shallots"
	    },{
		    n: "red onions",
		    i: "1 large red onion, diced"
	    },{
		    n: "onions",
		    i: "1 sweet yellow onion, diced"
	    },{
		    n: "garlic",
		    i: "3 cloves garlic, diced"
	    },{
		    n: "sriracha",
		    i: "1 tbsp sriracha sauce"
	    },{
		    n: "wine",
		    i: "1/4 c dry white wine"
	    },{
		    n: "lime",
		    i: "2 limes, sliced"
	    },{
		    n: "yogurt",
		    i: "1/2 c plain yogurt"
	    },{
		    n: "cottage cheese",
		    i: "2/3 c cottage cheese"
	    },{
		    n: "olive oil",
		    i: "1/3 c olive oil"
	    },{
		    n: "vanilla",
		    i: "1/2 tsp vanilla extract"
	    },{
		    n: "spinach",
		    i: "1 8-oz package of frozen spinach"
	    },{
		    n: "potatoes",
		    i: "2 lbs potatoes"
	    },{
		    n: "rum",
		    i: "1/2 c rum"
	    },{
		    n: "rosemary",
		    i: "2 tsp chopped rosemary"
	    },{
		    n: "basil",
		    i: "3 tsp chopped basil"
	    },{
		    n: "olives",
		    i: "3/4 c chopped kalamata olives"
	    },{
		    n: "chili flakes",
		    i: "1 tsp dried chili flakes"
	    },{
		    n: "cayenne pepper",
		    i: "Pinch of cayenne pepper"
	    },{
		    n: "eggs",
		    i: "4 eggs"
	    },{
		    n: "scallions",
		    i: "2 scallions"
	    },{
		    n: "feta",
		    i: "8 oz feta cheese"
	    },{
		    n: "lentils",
		    i: "12 oz green lentils"
	    },{
		    n: "kidney beans",
		    i: "1 can kidney beans"
	    },{
		    n: "black beans",
		    i: "1 can black beans"
	    },{
		    n: "miso",
		    i: "1/2 c red miso"
	    },{
		    n: "tuna fish",
		    i: "1 can tuna fish"
	    },{
		    n: "capers",
		    i: "3 tsp capers"
	    },{
		    n: "fish sauce",
		    i: "3 tsp fish sauce"
	    },{
		    n: "pickles",
		    i: "4 large kosher dill pickles"
	    },{
		    n: "maraschino cherries",
		    i: "3-4 maraschino cherries"
	    },{
		    n: "fennel seeds",
		    i: "2 tsp fennel seeds"
	    },{
		    n: "honey",
		    i: "2 tbsp honey"
	    },{
		    n: "mustard",
		    i: "3 tbsp mustard"
	    },{
		    n: "watercress",
		    i: "1 bunch watercress, washed and dried"
	    },{
		    n: "pears",
		    i: "2 ripe pears, sliced"
	    },{
		    n: "sun-dried tomatoes",
		    i: "3/4 c sun-dried tomatoes"
	    },{
		    n: "yeast",
		    i: "1 tsp baker's yeast"
	    },{
		    n: "anchovy paste",
		    i: "2 tbsp anchovy paste"
	    },{
		    n: "condensed milk",
		    i: "1/3 cup sweetened condensed milk"
	    },{
		    n: "coconut milk",
		    i: "1/2 c coconut milk"
	    },{
		    n: "coconut",
		    i: "3/4 c sweetened dried coconut"
	    },{
		    n: "raisins",
		    i: "1/4 cup raisins"
	    },{
		    n: "parsley",
		    i: "1 bunch flat-leaf parsley"
	    },{
		    n: "sauerkraut",
		    i: "1 c sauerkraut"
	    },{
		    n: "mint",
		    i: "4 fresh mint leaves"
	    },{
		    n: "cardamom",
		    i: "1 tbsp cardamom"
	    },{
		    n: "milk",
		    i: "2 c milk"
	    },{
		    n: "butter",
		    i: "1 1/4 sticks butter"
	    },{
		    n: "margarine",
		    i: "6 oz margarine"
	    },{
		    n: "buttermilk",
		    i: "1 1/2 c buttermilk"
	    },{
		    n: "heavy cream",
		    i: "1 c heavy cream"
	    },{
		    n: "egg whites",
		    i: "4 egg whites, whipped"
	    },{
		    n: "eggs",
		    i: "2 eggs"
	    },{
		    n: "chickpeas",
		    i: "1 can chickpeas, drained"
	    },{
		    n: "corn",
		    i: "1 can sweet corn, drained"
	    },{
		    n: "chocolate syrup",
		    i: "1 c chocolate syrup"
	    },{
		    n: "chocolate chips",
		    i: "1 c semisweet chocolate chips"
	    },{
		    n: "instant coffee",
		    i: "1 heaping tablespoon instant coffee"
	    },{
		    n: "mayonnaise",
		    i: "1/4 c mayonnaise"
	    },{
		    n: "Worcestershire sauce",
		    i: "Dash of Worcestershire sauce"
	    },{
		    n: "curry powder",
		    i: "1/2 tbsp curry powder"
	    },{
		    n: "cornmeal",
		    i: "1 cup cornmeal"
	    },{
		    n: "oats",
		    i: "1/2 cup rolled oats"
	    },{
		    n: "zucchini",
		    i: "1 large zucchini, diced"
	    },{
		    n: "horseradish",
		    i: "1 tbsp grated horseradish"
	    },{
		    n: "ginger",
		    i: "1 1/2 tbsp grated fresh ginger"
	    },{
		    n: "sour cream",
		    i: "2 tbsp sour cream"
	    },{
		    n: "lard",
		    i: "1/2 c lard"
	    },{
		    n: "water",
		    i: "3 c water"
	    },{
		    n: "half and half",
		    i: "1/3 c half and half"
	    },{
		    n: "celery",
		    i: "1/2 c chopped celery"
	    },{
		    n: "chopped walnuts",
		    i: "1/3 c chopped walnuts"
	    },{
		    n: "macaroni",
		    i: "1 package macaroni noodles"
	    },{
		    n: "slivered almonds",
		    i: "2 tbsp slivered almonds"
	    },{
		    n: "egg yolks",
		    i: "6 egg yolks"
	    },{
		    n: "ketchup",
		    i: "1/4 c ketchup"
	    },{
		    n: "lemon zest",
		    i: "zest of 1 lemon"
	    },{
		    n: "pistachios",
		    i: "1/2 c pistachios, shelled and chopped"
	    },{
		    n: "tomato paste",
		    i: "2 tbsp tomato paste"
	    },{
		    n: "orange liqueur",
		    i: "1/4 c orange liqueur"
	    },{
		    n: "walnuts",
		    i: "1/4 c chopped walnuts"
	    },{
		    n: "white chocolate",
		    i: "1/2 c white chocolate chips"
	    },{
		    n: "ground turkey",
		    i: "1/2 c white chocolate chips"
	    },{
		    n: "figs",
		    i: "1 c chopped figs"
	    },{
		    n: "orange slices",
		    i: "1 orange, sliced"
	    },{
		    n: "orange zest",
		    i: "Zest of 1 orange"
	    },{
		    n: "sweet and sour sauce",
		    i: "1/4 c sweet and sour sauce"
	    },{
		    n: "balsamic vinegar",
		    i: "1/4 c balsamic vinegar"
	    },{
		    n: "ranch dressing",
		    i: "1/2 c ranch dressing"
	    },{
		    n: "artichoke hearts",
		    i: "3 or 4 artichoke hearts, chopped"
	    },{
		    n: "cognac",
		    i: "4 oz cognac"
	    }
	    
    ],
    
    Instructions: [
		"Mix in %s and %s.",
		"Slowly drizzle in the %s and %s.",
        "In a separate bowl, mash %s and %s together with a fork, then fold in.",
		"Stirring constantly to prevent clumps, slowly add in the %s before the %s.",
		//"Over medium heat, add ",
		//"Beat in ",
		"Sauté with %s over high heat. When browned, deglaze with %s.",
        "Chop finely in a food processor for 2-3 minutes, then briefly pulse the %s and %s.",
	    //"Little by little, add the ",
	    //"Stir in ",
	    //"Combine with "
    ],
    
    
    Things: [
        {
            n: "Lasagna",
            firstStep: "Preheat oven to 350°F.",
            lastStep: "In a baking pan, alternate layers of mixture and lasagna noodles. Bake at 350°F for 40 to 50 minutes until lightly browned and bubbling. Cut in squares to serve.",
            extraIngredient: "1 box lasagna noodles"
        },{
            n: "Soufflé",
            firstStep: "Preheat oven to 400 degrees",
            lastStep: "Scrape the batter into a prepared baking dish. The batter should fill the dish about halfway. Bake for 20 minutes or until puffy and golden."
        },{
            n: "Martini",
            lastStep: "Pour mixture into chilled martini glasses, and garnish with an olive."
        },{
            n: "Sundae",
            lastStep: "Put all ingredients into blender, and blend into a smooth sauce. Pour over vanilla ice cream. Serve immediately.",
            extraIngredient: "Vanilla ice cream"
        },{
            n: "Casserole",
            firstStep: "Preheat oven to 350°F.",
            lastStep: "Pour mixture into baking pan, topping with grated cheese if desired. Bake at 350°F for 40 to 50 minutes until lightly browned.",
            extraIngredient: "Grated cheese (optional)"
        },{
            n: "Chutney",
            lastStep: "Simmer mixture 1 to 2 hours over low heat, until dark and syrupy. Serve with meat, cheese, or charcuterie."
        },{
            n: "Soup",
            lastStep: "Put all ingredients into blender, and puree until smooth. Serve warm or cold, with a side of bread."
        },{
            n: "Dumplings",
            lastStep: "Combine mixture with bread crumbs, and form into round balls. Cook dumplings in boiling water until they rise to the top. Serve with sour cream.",
            extraIngredient: "4 c bread crumbs"
        },{
            n: "Punch",
            lastStep: "Pour mixture into punch bowl with sparkling water. Garnish with lemon if desired. Serve immediately.",
			extraIngredient: "1 liter sparkling water"
        },{
            n: "Salad",
            lastStep: "Mix all ingredients together in a salad bowl along with lettuce. Dress with olive oil and vinegar.",
			extraIngredient: "1 head romaine lettuce"
        },{
            n: "Cookies",
            firstStep: "Preheat oven to 350°F.",
            lastStep: "Form mixture into balls, roll in sugar, and place on prepared baking sheet. Bake for 10-12 minutes at 350°F."
        },{
            n: "Parfait",
            lastStep: "In dessert glasses, layer mixture with whipped cream and top with crushed nuts. Chill for 4-6 hours.",
            extraIngredient: "2 c whipped cream"
        },{
            n: "Bruschetta",
            lastStep: "Toast the baguette slices and arrange on a platter. Add the topping, and garnish with basil if desired. Serve immediately.",
            extraIngredient: "1 baguette, thinly sliced"
        },{
            n: "Biscuits",
            firstStep: "Preheat oven to 350°F.",
            lastStep: "Form mixture into balls, roll in sugar, and place on prepared baking sheet. Bake for 10-12 minutes at 350°F."
        },{
            n: "Mousse",
            lastStep: "Beat mixture until light and fluffy. Spoon into dessert dishes. Chill 4-6 hours or until firm."
        },{
            n: "Compote",
            lastStep: "Simmer mixture 1 to 2 hours over low heat. Serve with whipped cream, or over ice cream."
        },{
            n: "Pie",
            firstStep: "Preheat oven to 350°F.",
            lastStep: "Spoon mixture into a prepared pie crust. Bake at 350°F for 40-50 minutes until firm and slightly browned."
        },{
            n: "Cheesecake",
            lastStep: "Add all ingredients to the cream cheese. Pour the filling into the crust, bake the cheesecake in the middle of a preheated 350°F. oven for 50 to 55 minutes, or until the center is just set, and let it cool in the pan on a rack for 5 minutes.",
            extraIngredient: "3 (8-ounce) packages cream cheese, cut into bits and softened"
        },{
            n: "Pancakes",
            lastStep: "Mix all ingredients into a thin batter, adding water as necessary. Spread batter onto a large nonstick skillet. Cook pancake until underside is golden brown, then flip pancake. Continue to cook until lightly browned underneath, about 1 minute. Serve pancakes topped with butter, fruit, and syrup.",
            extraIngredient: "Maple syrup, for serving"
        },{
            n: "Balls",
            lastStep: "Form all ingredients into loose balls. Makes a great snack.",
        },{
            n: "Supreme",
            lastStep: "Carefully stir all ingredients together, then top with whipped cream.",
            extraIngredient: "Whipped cream"
        },{
            n: "Smoothie",
            lastStep: "Blend all ingredients until smooth. Enjoy chilled."
        },{
            n: "Nachos",
            lastStep: "Sprinkle all ingredients over a pile of tortilla chips. Microwave until warm.",
            extraIngredient: "1 bag tortilla chips"
        },{
            n: "Loaf",
            lastStep: "Form mixture into a long, well-packed, approximately 5-inch-wide loaf shape on prepared baking sheet. Bake 60–75 minutes at 350°F. Serve topped with ketchup.",
            extraIngredient: "1/2 c tomato ketchup"
        },{
            n: "Linguine",
            firstStep: "Cook linguine according to directions on package and drain. Mix noodles with ",
            lastStep: "Serve warm, topped with grated parmesan cheese.",
            extraIngredient: "1 box linguine"
        },{
            n: "Vinaigrette",
            lastStep: "Pour into a covered container and shake well. Serve over romaine lettuce.",
            extraIngredient: "3 tbsp white vinegar"
        },{
            n: "Gumbo",
            firstStep: "In a large pot, brown the sausage over medium-high heat. Transfer to a plate when cooked through.",
            lastStep: "Return the sausage to the pan, reduce the heat to a simmer, cover, and cook for 10 minutes. Serve garnished with green onions.",
            extraIngredient: "2 lbs pork sausage"
        },
    ]
};
export default RenderData;
