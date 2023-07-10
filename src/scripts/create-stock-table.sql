CREATE TABLE stock (
                       product_id UUID REFERENCES products(id),
                       count DECIMAL(10, 2)
);
