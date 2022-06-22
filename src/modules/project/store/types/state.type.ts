import { DrawerType } from "./drawer.type"
import { FormType } from "./form.type"
import { OfferType } from "./offer.type"

export type StateType = {
    offers: OfferType[]
    drawer: DrawerType
    form: FormType
}