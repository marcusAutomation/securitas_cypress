import homeSel from "../selectors/home.sel"

class Loginn {

    click_on_aceptar_continuar_button() {
        cy.get(homeSel.ACEPTAR_CONTINUAR_BUTTON_ELEM).click()
            
        cy.on("window:confirm", (t) => {
            expect(t).to.equal('ACEPTAR Y CONTINUAR')
        })
    }

    click_on_area_client_button() {
        cy.get(homeSel.AREA_CLIENT_BUTTON_ELEM)
            .click({force: true})
        
    }

}

export default Loginn


