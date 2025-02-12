import { defineField, defineType } from 'sanity';

export const shippingAddress = defineType({
    name: 'shippingAddress',
    title: 'Shipping Address',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string'
        }),
        defineField({
            name: 'line1',
            title: 'Address Line 1',
            type: 'string',
        }),
        defineField({
            name: 'line2',
            title: 'Address Line 2',
            type: 'string',
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
        }),
        defineField({
            name: 'state',
            title: 'State',
            type: 'string',
        }),
        defineField({
            name: 'postalCode',
            title: 'Postal Code',
            type: 'string',
        }),
        defineField({
            name: 'country',
            title: 'Country',
            type: 'string',
        }),
    ]
});

export const orderItem = defineType({
    name: 'orderItem',
    title: 'Order Item',
    type: 'object',
    fields: [
        defineField({
            name: 'product',
            title: 'Product',
            type: 'reference',
            to: [{ type: 'product' }]
        }),
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
    ]
});

export const order = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string'
        }),
        defineField({
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
        }),
        defineField({
            name: 'customerId',
            title: 'Customer ID',
            type: 'string',
        }),
        defineField({
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
        }),
        defineField({
            name: 'customerEmail',
            title: 'Customer Email',
            type: 'string',
        }),
        defineField({
            name: 'stripeCustomerId',
            title: 'Stripe Customer ID',
            type: 'string',
        }),
        defineField({
            name: 'stripeCheckoutSessionId',
            title: 'Stripe Checkout Session ID',
            type: 'string',
        }),
        defineField({
            name: 'stripePaymentIntentId',
            title: 'Stripe Payment Intent ID',
            type: 'string',
        }),
        defineField({
            name: 'totalPrice',
            title: 'Total Price (USD)',
            type: 'number',
        }),
        defineField({
            name: 'shippingAddress',
            title: 'Shipping Address',
            type: 'shippingAddress',
        }),
        defineField({
            name: 'orderItems',
            title: 'Order Items',
            type: 'array',
            of: [{ type: 'orderItem' }]
        }),
        defineField({
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Processing', value: 'PROCESSING' },
                    { title: 'Shipped', value: 'SHIPPED' },
                    { title: 'Delivered', value: 'DELIVERED' },
                    { title: 'Cancelled', value: 'CANCELLED' },
                ]
            }
        })
    ]
})