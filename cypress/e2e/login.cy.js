import login from '../selectors/login.sel'
import Loginn from '../page_objects/login'

describe('Login', () => {

    const login_access = new Loginn()

    
    context('unsuccessful', () => {
        beforeEach(() => {
            // visit ('/login') -> will visit baseUrl + /login
            // baseUrl is set in config - cypress.json file
            cy.visit('')
        })

        it('can I click on the aceptar continue button?', () => {
            

             login_access.click_on_aceptar_continuar_button()
             cy.wait(1000)
             login_access.click_on_area_client_button()
             cy.origin("https://customers.securitasdirect.es", () => {
                cy.visit("/owa-static/login") 
             })
        
            
        })

    })

   
})

