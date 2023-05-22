import {Porfolio} from "./Portfolio";

class Person {
    public name: string;
    public last_name: string;
    public date_birth: Date;
    public age: number;
    public id: string;

    constructor(
        name_param: string,
        last_name_param: string,
        date_birth_param: Date,
        id_param: string,
    )   {
        this.name = name_param;
        this.last_name = last_name_param;
        this.date_birth = date_birth_param;
        this.age = this.getAge_years();
        this.id = id_param;
        }

    //Get Age in Number -> Integer
    //How to do?
    //Calculate the years getting date_birth
    private getAge_years (): number{
        var today = new Date();
        var age_param = today.getFullYear() - this.date_birth.getFullYear();
        var months_param = today.getMonth() - this.date_birth.getMonth();

        if (months_param < 0 || (months_param === 0 && today.getDate() < this.date_birth.getDate())) {
            age_param--;
        }

        return age_param;
    }

}

//----------------------------------------------------------------------

export class Photographer extends Person{

    public _portfolio: Array<Porfolio>;

    constructor(
        name_param: string,
        last_name_param: string,
        date_birth_param: Date,
        id_param: string,
    ) {
        super(name_param, last_name_param, date_birth_param, id_param);
        //Atributos propios de un photographer
        this._portfolio=[];
    }


    public portfolio(): Array<Porfolio> {
        return this._portfolio;
    }


    public Setportfolio(value: Array<Porfolio>) {
        this._portfolio = value;
    }

    public newPortfolio(category: string) {
        this._portfolio.unshift(new Porfolio(category));
    }


}
