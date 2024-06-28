export interface Recipe {
    id: number;
    title: string;
    image: string;
  }
  export interface DetailedRecipe extends Recipe {
    instructions: string;
    ingredients: string[];
  }