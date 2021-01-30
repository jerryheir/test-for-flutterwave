import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });
import Services from "../services/validation.services";

describe('Services test', ()=>{
    it('has a module', async ()=>{
        expect(Services).toBeDefined();
    })

    describe('gets validation details', ()=>{
        it('gets validation', async ()=>{
            const services = Services();
            const actual = await services.getValidation();
            const expected = {
                message: "My Rule-Validation API",
                status: "success",
                data: {
                  name: "Jeremiah Nwaeze",
                  github: "@jerryheir",
                  email: "nwaezejerry@gmail.com",
                  mobile: "+2347062951438",
                  twitter: ""
                }
            };
            expect(actual).toEqual(expected);
        })
    })
})