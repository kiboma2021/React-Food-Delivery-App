import { Card } from "../components"
import { useTitle } from "../hooks/useTitle"
import Potato from "../assets/potato.jpg"
import FoodMeat from "../assets/FoodMeat.jpg"
import Food_at_WIkimanian_2017_02 from "../assets/Food_at_WIkimanian_2017_02.jpg"
import Ribs from "../assets/Ribs.jpg"
import Awadhi_prawns from "../assets/Awadhi_prawns.jpg"
import GlazedDonut from "../assets/Glazed-Donut.jpg"


export const Home = ({title}) => {
  const fooditems = [
    {
    id: 1, 
    name:'Mashed potatoes',
    description: 'Mashed potato or mashed potatoes (American, Canadian and Australian English), colloquially known as mash (British English),[2] is a dish made by mashing boiled or steamed potatoes, usually with added milk, butter, salt and pepper. It is generally served as a side dish to meat or vegetables. Roughly mashed potatoes are sometimes called smashed potatoes.[citation needed] Dehydrated instant mashed potatoes[3] and frozen mashed potatoes[4] are available. Mashed potatoes are an ingredient in other dishes, such as dumplings and gnocchi.[5][6]',
    price:250, 
    image:Potato
  },
  {
    id: 2, 
    name:'Meat',
    description: 'Meat is animal flesh that is eaten as food.[1] Humans have hunted, farmed, and scavenged other animals for meat since prehistoric times. The establishment of settlements in the Neolithic Revolution allowed the domestication of animals such as chickens, sheep, rabbits, pigs, and cattle. This eventually led to their use in meat production on an industrial scale in slaughterhouses.',
    price:450, 
    image:FoodMeat,
  },
  {
    id: 3, 
    name:'Poutine',
    description: 'Poutine (Quebec French: [put͡sɪn] ⓘ) is a dish of french fries and cheese curds topped with a brown gravy. It emerged in Quebec, in the late 1950s in the Centre-du-Québec region, though its exact origins are uncertain and there are several competing claims regarding its invention. For many years, it was used by some to mock Quebec society.[1] Poutine later became celebrated as a symbol of Québécois culture and the province of Quebec. It has long been associated with Quebec cuisine, and its rise in prominence has led to its growing popularity throughout the rest of Canada.',
    price:140, 
    image:Food_at_WIkimanian_2017_02,
  },
  {
    id: 4, 
    name:'Ribs',
    description: 'Ribs of pork, beef, lamb, and venison are a cut of meat. The term ribs usually refers to the less meaty part of the chops, often cooked as a slab (not cut into separate ribs). Ribs of bison, goat, ostrich, crocodile, alligator, llama, alpaca, beefalo, African buffalo, water buffalo, kangaroo, deer, and other animals are also consumed in various parts of the world.',
    price:680, 
    image:Ribs,
  },
  {
    id: 5, 
    name:'Shrimp and prawn',
    description: 'Shrimp and prawn are types of seafood that are consumed worldwide. Although shrimp and prawns belong to different suborders of Decapoda, they are very similar in appearance and the terms are often used interchangeably in commercial farming and wild fisheries. A distinction is drawn in recent aquaculture literature, which increasingly uses the term "prawn" only for the freshwater forms of palaemonids and "shrimp" for the marine penaeids',
    price:2150, 
    image:Awadhi_prawns,
  },
  {
    id: 6, 
    name:'Doughnut',
    description: 'A doughnut or donut (/ˈdoʊnət/) is a type of food made from leavened fried dough.[1]: 275  It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors. Doughnut is the traditional spelling, while donut is the simplified version; the terms are used interchangeably.',
    price:325, 
    image:GlazedDonut,
  },


  ]

  useTitle({title});

  
  return (
    <div className="flex flex-wrap gap-10 m-10">
      { fooditems && fooditems.map((food)=>(
        <Card key={food.id} food={food} />
      )) }

      
    </div>
  )
}
