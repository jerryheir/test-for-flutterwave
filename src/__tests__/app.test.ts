import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });
const request = require('supertest');
import app from "../app";

describe('App test', ()=>{
    it('has a module', ()=>{
        expect(app).toBeDefined();
    })
    let server: any;
    beforeAll(()=>{
        server = app.listen(5000);
    })
    afterAll((done)=>{
        server.close(done);
    });
    describe('validation test', ()=>{
        it('can get validation', async ()=>{
            await request(server).get(`/`).expect(200);
        }, 1000)
        it('post validation rule', async ()=>{
            await request(server).post(`/validate-rule`)
            .send({
                "rule": {
                  "field": "missions.count",
                  "condition": "gte",
                  "condition_value": 30
                },
                "data": {
                  "name": "James Holden",
                  "crew": "Rocinante",
                  "age": 34,
                  "position": "Captain",
                  "missions": {
                    "count": 45,
                    "successful": 44,
                    "failed": 1
                  }
                }
            })
            .set('Accept', 'application/json')
            .expect(200);
        })
    })
    describe('404 test', ()=>{
        it('wrong endpoint', async ()=>{
            await request(server).post(`/fail`).expect(404);
        })
        it('wrong url', async ()=>{
            await request(server).post(`/fail`).expect(404);
        })
    })
})