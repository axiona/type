import Instance from "./instance";
import StringInstance from "../validatable/string/instance";

export default function InstanceStandard<
    InstanceT extends {new(...a:unknown[]): any}
>(
    instance : InstanceT
) : Instance<InstanceT, string> {

    return <Instance<InstanceT, string>> new Instance(instance, StringInstance)
}