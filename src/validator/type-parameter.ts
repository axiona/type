import Validator from "@dikac/t-validator/simple";
import TypeofValidatable, {TypeType as TypeofValidatableType} from "../validatable/type-parameters";
import StringNative from "../string";
import Type from "../type";
import TypeContainer from "../type/type";
import Simple from "@dikac/t-validator/message/function/simple-parameters";
import TypeofString from "../assert/string/type-parameters";
import Message from "@dikac/t-message/message";
import {TypeType} from "./type-parameters";

export type TypeArgument<
    TypeName extends StringNative,
    MessageType = unknown
    > = TypeContainer<TypeName> & Message<Simple<unknown, Type<TypeName>, MessageType, [TypeName]>>

export default function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple<unknown, Type<TypeName>, MessageType, [StringNative]>// (result:Omit<Return<any, any, TypeType<TypeName>>, 'message'>)=>MessageType,
) : TypeType<TypeName, MessageType>;

export default function TypeParameter<
    TypeName extends StringNative
>(
    type : TypeName,
) : TypeType<TypeName, string>;
export default function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple<unknown, Type<TypeName>, MessageType|string, [StringNative]> = TypeofString,
) : TypeType<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable(value, type, message);

    } as Validator<unknown, Type<TypeName>, TypeofValidatableType<unknown, TypeName, MessageType>>
}
