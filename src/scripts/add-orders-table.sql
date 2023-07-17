CREATE TABLE orders (
                        id UUID PRIMARY KEY,
                        user_id UUID REFERENCES users(id),
                        cart_id UUID REFERENCES carts(id),
                        payment JSON,
                        delivery JSON,
                        comments TEXT,
                        status cart_status,
                        total NUMERIC(10, 2)
);
