import homeSel from '../selectors/home.sel'
import home from '../selectors/home.sel'


describe('Home page', () => {
    it('contains correct elements when logged out', () => {
        cy.visit('')

        cy.get(homeSel.ACEPTAR_CONTINUAR_BUTTON_ELEM).click()
        cy.on("window:confirm", (t) => {
            expect(t).to.equal('ACEPTAR Y CONTINUAR')
        })
        
    })

   
})
