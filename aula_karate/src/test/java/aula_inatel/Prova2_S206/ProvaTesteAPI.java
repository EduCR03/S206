package aula_inatel.Prova2_S206;

import com.intuit.karate.junit5.Karate;

class ProvaTesteAPI{

    @Karate.Test
    Karate testeKarate(){
        return Karate.run("prova").relativeTo(getClass());
    }
}