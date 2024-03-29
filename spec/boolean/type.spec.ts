import {TypeParameters} from '../../dist/boolean/type.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function() {

    it('boolean', function() {

        const value : unknown = true;

        if(TypeParameters(value, 'boolean')) {

            const result : boolean = value;

        } else {

            // @ts-expect-error
            const result : boolean = value;
        }
    });

    it('object', function() {

        const value : unknown = {};

        if(TypeParameters(value, 'object')) {

            const result : object = value;

        } else {

            // @ts-expect-error
            const result : object = value;
        }
    });

    it('string', function() {

        const value : unknown = 'str';

        if(TypeParameters(value, 'string')) {

            const result : string = value;

        } else {

            // @ts-expect-error
            const result : string = value;
        }
    });


    it('number', function() {

        const value : unknown = 1;

        if(TypeParameters(value, 'number')) {

            const result : number = value;

        } else {

            // @ts-expect-error
            const result : number = value;
        }
    });

    it('function', function() {

        const value : unknown = ()=>null;

        if(TypeParameters(value, 'function')) {

            const result : ()=>any = value;

        } else {

            // @ts-expect-error
            const result : ()=>any = value;
        }
    });

});

describe('boolean', function() {

    it(`true`, () => {
        expect(TypeParameters(true, 'boolean')).toBeTrue();
    });

    it(`false`, () => {
        expect(TypeParameters(false, 'boolean')).toBeTrue();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(TypeParameters('str', 'string')).toBeTrue();
    });

    it(`object`, () => {
        expect(TypeParameters(new String('str'), 'string')).toBeFalse();
    });

});


describe('number', function() {

    it(`primitive`, () => {
        expect(TypeParameters(1, 'number')).toBeTrue();
    });

    it(`nan`, () => {
        expect(TypeParameters(NaN, 'number')).toBeTrue();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(TypeParameters({}, 'object')).toBeTrue();
    });

    it(`instance`, () => {
        expect(TypeParameters(new Map(), 'object')).toBeTrue();
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        expect(TypeParameters(function () {}, 'function')).toBeTrue();
    });

    it(`anonymous arrow`, () => {
        expect(TypeParameters(()=>{}, 'function')).toBeTrue();
    });

    it(`named`, () => {
        expect(TypeParameters(isNaN, 'function')).toBeTrue();
    });

});

describe('empty', function() {

    it(`null `, () => {
        expect(TypeParameters(null, 'object')).toBeTrue();
    });

    it(`undefined`, () => {
        expect(TypeParameters(undefined, 'undefined')).toBeTrue();
    });

});
