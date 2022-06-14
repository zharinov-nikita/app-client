import { DrawerType } from "./drawer.type"
import { FormType } from "./form.type"
import { LinkType } from "./link.type"

export type StateType = {
    links: LinkType[]
    drawer: DrawerType
    form: FormType
}