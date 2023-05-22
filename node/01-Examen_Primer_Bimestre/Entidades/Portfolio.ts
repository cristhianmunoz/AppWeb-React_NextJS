export class Porfolio {
    public category: string;
    public images: Array<String>;


    constructor(
        categoria: string,
    ) {
        this.category=categoria;
        this.images = [];
    }


    public array_Images(): Array<String> {
        return this.images;
    }


    public setArray_Images(value: Array<String>) {
        this.images = value;
    }

    public array_newImage(newImage: string) {
        this.images.unshift(newImage);
    }
}