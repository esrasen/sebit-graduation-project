import { Category } from "./category.model";

export interface Post{
            "id": number,
            "category_id": number,
            "title": string,
            "description": string,
            "date": string,
            "author": string,
            "category": Category
        
}