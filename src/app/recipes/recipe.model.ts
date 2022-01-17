export class Recipe{
    // properties
    public name: string;
    public description: string;
    public imgPath: string;

    // constructor
     constructor(name: string,description: string,imgPath: string){
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        
    }
}