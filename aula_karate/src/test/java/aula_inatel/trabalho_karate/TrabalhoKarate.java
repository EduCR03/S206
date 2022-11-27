package aula_inatel.trabalho_karate;

import com.intuit.karate.junit5.Karate;

class TrabalhoKarate{

    @Karate.Test
    Karate testeKarate(){
        return Karate.run("trabalhoTeste").relativeTo(getClass());
    }
}