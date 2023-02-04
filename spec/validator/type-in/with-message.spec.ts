import {TypeInParameters} from '../../../dist/validator/type-in';
import TypeofString from '../../../dist/assert/string/type-in';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('string', ()=>{

    let validator = TypeInParameters<['string', 'number']>( ['string', 'number'], TypeofString.Parameters);

    it('valid', ()=>{

        let validatable = validator('ab');

        expect(validatable.message).toBe('is in type of string, number.');
        expect(validatable.valid).toBe(true);
        expect(validatable.types).toEqual(['string', 'number']);
        expect(validatable.value).toBe('ab');
    });

    it('invalid', ()=>{

        let validatable = validator({});

        expect(validatable.message).toBe('must in type of string, number, actual type object.');
        expect(validatable.valid).toBe(false);
        expect(validatable.types).toEqual(['string', 'number']);
        expect(validatable.value).toEqual({});
    });
});

describe('object', ()=>{

    let validator = TypeInParameters<['string', 'number']>(['string', 'number'], TypeofString.Parameters);

    it('valid', ()=>{

        let validatable = validator({});

        expect(validatable.message).toBe('must in type of string, number, actual type object.');
        expect(validatable.valid).toBe(false);
        expect(validatable.types).toEqual(['string', 'number']);
        expect(validatable.value).toEqual({});
    });

    it('invalid', ()=>{

        let validatable = validator(1);

        expect(validatable.message).toBe('is in type of string, number.');
        expect(validatable.valid).toBe(true);
        expect(validatable.types).toEqual(['string', 'number']);
        expect(validatable.value).toBe(1);
    });
});
