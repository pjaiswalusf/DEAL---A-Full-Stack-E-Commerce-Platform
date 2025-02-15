import { type SchemaTypeDefinition } from 'sanity'
import { promotionCampaign } from './schemas/promotion-campaign'
import { promotionCode } from './schemas/promotion-codes'
import { product } from './schemas/product'
import { productCategory } from './schemas/product-category'
import { order, orderItem, shippingAddress } from './schemas/order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    promotionCampaign,
    promotionCode,

    product,
    productCategory,

    shippingAddress,
    orderItem,
    order,
  ],
}
