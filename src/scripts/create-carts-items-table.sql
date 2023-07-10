CREATE TABLE cart_items (
                            id SERIAL PRIMARY KEY,
                            cart_id UUID REFERENCES carts(id),
                            product_id UUID,
                            count INTEGER
);
