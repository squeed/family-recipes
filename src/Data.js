var RenderData = {
    Relations: {
        male: [ "Uncle", "Papa", "Father", "Big", "Opa", "Great-uncle", "Grandpa", "Little"],
        female: ["Auntie", "Great-aunt", "Big", "Nana", "Oma", "Grandma", "Sister", "Little"]
    },

    Names:  {
        male: [
            "Nunzio's", "Gunther's", "Bobby's", "Jimbo's", "Casey's", "Peter's", "Walter's", "Mickey's", "Phil's", "Pablo's", "Skippy's", "Vito's", "Ray's"
        ],
        female: [
            "Fiona's", "Dagmar's", "Molly's", "Alanna's", "Betsy's", "Doris'", "Jacqueline's", "Emmy's", "Eleonor's", "Clementine's", "Yolanda's"
        ]
    },

    Modifiers: [
        "Spicy",
        "Easy",
        "Never-Fail",
        "Old-style",
        "Country",
        "Dutch",
        "Bavarian",
        "Classic",
        "Festive",
        "Holiday",
        "Signature",
        "Heirloom",
        "Neapolitan",
        "Christmas",
        "Italian",
        "Fancy",
        "Famous",
        "Favorite",
        "French",
        "Southern",
        "Vegetarian",
        "Healthy",
        "Vegan",
        "Saturday Night",
        "Old-fashioned",
        "Refrigerator",
        "No-bake"
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
        }
        
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
	    }
	    
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
        },
    ]
};
export default RenderData;
