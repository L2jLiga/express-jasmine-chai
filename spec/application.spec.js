'use strict';

describe('Application tests', () => {
    /** @type {module:http.Server} */
    let app;

    beforeAll(() => {
        app = require('../server');
    });

    afterAll(() => {
        app.close();
    });

    it('should get /', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.equal('{"data":"MAIN PAGE"}');

                done();
            });
    });

    it('should POST /', (done) => {
        const json = {data: 'TEST POST REQUEST'};

        chai.request(app)
            .post('/')
            .send(json)
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.equal(JSON.stringify(json));

                done();
            });
    });

    it('should get error when unknown url', (done) => {
        chai.request(app)
            .get('/something')
            .end((err, res) => {
                chai.expect(res).to.have.status(500);
                chai.expect(res.text).to.equal('{"message":"An error occurred while processing request"}');

                done();
            });
    });
});
