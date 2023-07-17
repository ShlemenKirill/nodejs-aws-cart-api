CREATE TYPE CART_STATUS AS ENUM ('OPEN', 'ORDERED');
CREATE TABLE carts (
                       id UUID PRIMARY KEY,
                       user_id UUID NOT NULL REFERENCES users(id),
                       created_at DATE NOT NULL,
                       updated_at DATE NOT NULL,
                       status CART_STATUS
);
