class Kartya {
    #fajlnev;
    #divElem;
    #imgElem;
    #allapot;
    #blokkolt;
    constructor(fajlnev, szuloElem){
        this.#fajlnev = fajlnev;

        szuloElem.append(`<div class="kartya">
                                <img scr="" alt="kép">
                                </div>`);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img");


        this.#allapot = false;
        this.#setLap();
        this.#divElem.on("click", ()=> {

            this.kattintas();
            this.#kattintasTrigger();
        });
        

       
    }


    #setLap() {
        if (this.#allapot){
            this.#imgElem.attr("src", this.#fajlnev);

        }else {
            this.#imgElem.attr("src", "kepek/hatter.jpg");

        }
    }
    kattintas(){
        this.#allapot = !this.#allapot;
        this.#setLap();

    }
    #kattintasTrigger(){
        let esemeny = new CustomEvent("kartyaKattintas",{
            detail:this,
        });
        window.dispatchEvent(esemeny);
    }
}















export default Kartya;