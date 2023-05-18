import Kartya from "./Kartya.js";
class JatekTer {
    #kartyaLista = [];
    #kivalasztottKartyaLista =[];
    constructor(kartyalista){
        this.#kartyaLista = kartyalista;
        this.#init();

        $(window).on("kartyaKattintas",(event)=>{
            this.#kivalasztottKartyaLista.push(event.detail);
            console.log(this.#kivalasztottKartyaLista);
            this.#ellenorzes();
        });

    }

    
    #init(){
        this.#kivalasztottKartyaLista = [];
        this.#kever();
        const szuloElem = $("article");
        szuloElem.empty();

        for (let index = 0; index < this.#kartyaLista.length; index++) {
            const kartya = new Kartya(this.#kartyaLista[index], szuloElem);
            
        }
    }

    #kever(){
        this.#kartyaLista.sort(function(){
            return 0.5 - Math.random();
        });
    }
    
}

export default JatekTer;