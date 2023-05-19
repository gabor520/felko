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
    #ellenorzes(){
        if (this.#kivalasztottKartyaLista.length == 2){
            this.#TriggerBlocked();

        if (
            this.#kivalasztottKartyaLista[0].getFajlnev() ===
            this.#kivalasztottKartyaLista[1].getFajlnev()

        ){
            this.#kivalasztottKartyaLista[0].eltuntet();
            this.#kivalasztottKartyaLista[1].eltuntet();
            this.#kivalasztottKartyaLista.splice(0, 2);
        
        this.#TriggerUnblocked();
        } else {
            setTimeout(()=>{
                this.#kivalasztottKartyaLista[0].kattintas();
                this.#kivalasztottKartyaLista[1].kattintas();

                this.#kivalasztottKartyaLista.splice(0, 2);

                this.#TriggerUnBlocked();

            }, 1000);
        }

       
    }
    
}
eltuntet(){
    this.#divElem.css("visibility", "hidden");
}

#TriggerBlocked(){
    window.dispatchEvent(new Event("gameBlocked"));
    console.log("blokkolt");

}
#TriggerUnBlocked(){
    window.dispatchEvent(new Event("gameUnBlocked"));
    console.log("nem blokkolt");


}
    
}

export default JatekTer;